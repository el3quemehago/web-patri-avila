'use client';

import { useState } from 'react';
import { Send, Check, AlertCircle } from 'lucide-react';

const FORMSPREE_ENDPOINT =
  process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT || 'https://formspree.io/f/REPLACE_ME';

export default function ContactForm() {
  const [status, setStatus] = useState('idle'); // idle | submitting | success | error
  const [error, setError] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }
    setStatus('submitting');
    setError('');

    const data = new FormData(form);

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: data,
      });

      if (res.ok) {
        setStatus('success');
        form.reset();
      } else {
        const json = await res.json().catch(() => ({}));
        setError(
          json?.errors?.[0]?.message ||
            'No se pudo enviar el mensaje. Inténtalo de nuevo o escríbeme directamente por email.'
        );
        setStatus('error');
      }
    } catch {
      setError('Error de red. Comprueba tu conexión e inténtalo de nuevo.');
      setStatus('error');
    }
  }

  if (status === 'success') {
    return (
      <div
        className="border border-ink p-10 md:p-14 bg-paper-soft"
        data-testid="contact-success"
      >
        <Check className="text-accent mb-6" size={36} strokeWidth={1.5} />
        <h3 className="font-serif text-4xl md:text-5xl leading-tight tracking-tight mb-4">
          Mensaje enviado.
        </h3>
        <p className="text-ink/70 text-lg leading-relaxed">
          Gracias por escribir. Te contesto en menos de 48 horas laborables. Si es urgente,
          escríbeme también a hola@patriciaavila.com.
        </p>
        <button
          type="button"
          onClick={() => setStatus('idle')}
          className="small-caps mt-8 inline-flex items-center gap-2 border border-ink hover:bg-ink hover:text-paper transition-colors px-5 py-3"
          data-testid="contact-send-another"
        >
          Enviar otro mensaje
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8" data-testid="contact-form">
      <Field label="Tu nombre" name="name" required>
        <input
          type="text"
          name="name"
          required
          autoComplete="name"
          className="contact-input"
          data-testid="contact-input-name"
        />
      </Field>

      <Field label="Tu email" name="email" required>
        <input
          type="email"
          name="email"
          required
          autoComplete="email"
          className="contact-input"
          data-testid="contact-input-email"
        />
      </Field>

      <Field label="Empresa o medio (opcional)" name="company">
        <input
          type="text"
          name="company"
          autoComplete="organization"
          className="contact-input"
          data-testid="contact-input-company"
        />
      </Field>

      <Field label="Tipo de proyecto" name="topic">
        <select
          name="topic"
          defaultValue=""
          className="contact-input bg-transparent"
          data-testid="contact-input-topic"
        >
          <option value="" disabled>Elige una opción…</option>
          <option>Periodismo de marca</option>
          <option>Memoria o libro corporativo</option>
          <option>Reportaje o entrevista</option>
          <option>Estrategia editorial</option>
          <option>Otro</option>
        </select>
      </Field>

      <Field label="Cuéntame el proyecto" name="message" required>
        <textarea
          name="message"
          required
          rows={6}
          className="contact-input resize-y"
          data-testid="contact-input-message"
        />
      </Field>

      {/* Honeypot */}
      <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" className="hidden" />

      {status === 'error' && (
        <div
          className="border border-accent text-accent flex items-start gap-3 p-4"
          data-testid="contact-error"
        >
          <AlertCircle size={18} className="mt-0.5 shrink-0" />
          <p className="text-sm">{error}</p>
        </div>
      )}

      <div className="flex items-center justify-between flex-wrap gap-4 pt-2">
        <p className="small-caps text-ink/50">
          Tu mensaje se envía vía Formspree. Sin tracking ni terceros.
        </p>
        <button
          type="submit"
          disabled={status === 'submitting'}
          className="small-caps inline-flex items-center gap-3 bg-ink text-paper border border-ink hover:bg-accent hover:border-accent transition-colors px-7 py-4 disabled:opacity-60 disabled:cursor-not-allowed"
          data-testid="contact-submit"
        >
          {status === 'submitting' ? 'Enviando…' : 'Enviar mensaje'} <Send size={14} />
        </button>
      </div>

      <style jsx>{`
        :global(.contact-input) {
          width: 100%;
          background: transparent;
          border: 0;
          border-bottom: 1px solid rgba(17, 17, 17, 0.25);
          padding: 0.75rem 0;
          font-family: var(--font-sans);
          font-size: 1.05rem;
          color: #111111;
          outline: none;
          transition: border-color 0.2s ease;
          border-radius: 0;
        }
        :global(.contact-input:focus) {
          border-bottom-color: #c8102e;
        }
        :global(.contact-input::placeholder) {
          color: rgba(17, 17, 17, 0.35);
        }
      `}</style>
    </form>
  );
}

function Field({ label, name, required, children }) {
  return (
    <div>
      <label htmlFor={name} className="small-caps text-ink/60 block mb-2">
        {label} {required && <span className="text-accent">*</span>}
      </label>
      {children}
    </div>
  );
}
