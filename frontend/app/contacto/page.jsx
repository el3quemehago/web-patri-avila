import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';
import { Mail, MapPin, Linkedin, AtSign } from 'lucide-react';

export const metadata = {
  title: 'Contacto',
  description:
    'Escríbeme. Cuéntame tu proyecto editorial, tu reportaje, tu memoria, tu duda. Respondo a todos los emails.',
  openGraph: {
    title: 'Contacto · Patricia Ávila Sánchez',
    description:
      'Hablemos sobre tu proyecto editorial o de periodismo de marca.',
  },
};

export default function ContactoPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Nav />

      <header className="container-edit pt-12 pb-10 md:pt-20 md:pb-14 border-b border-ink">
        <p className="small-caps text-accent mb-6">Contacto</p>
        <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[0.92] tracking-tighter">
          Cuéntame tu<br /> historia.
        </h1>
      </header>

      <section className="container-edit py-12 md:py-20 grid grid-cols-1 lg:grid-cols-12 gap-x-12 gap-y-12">
        <aside className="lg:col-span-4 space-y-10">
          <div>
            <p className="small-caps text-ink/50 mb-3">Email</p>
            <a
              href="mailto:hola@patriciaavila.com"
              className="font-serif text-2xl md:text-3xl hover:text-accent inline-flex items-center gap-2 link-underline"
              data-testid="contact-email"
            >
              <Mail size={20} /> hola@patriciaavila.com
            </a>
          </div>
          <div>
            <p className="small-caps text-ink/50 mb-3">LinkedIn</p>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-serif text-2xl md:text-3xl hover:text-accent inline-flex items-center gap-2 link-underline"
              data-testid="contact-linkedin"
            >
              <Linkedin size={20} /> /in/patriciaavila
            </a>
          </div>
          <div>
            <p className="small-caps text-ink/50 mb-3">Twitter / X</p>
            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-serif text-2xl md:text-3xl hover:text-accent inline-flex items-center gap-2 link-underline"
              data-testid="contact-twitter"
            >
              <AtSign size={20} /> @patriciaavila
            </a>
          </div>
          <div>
            <p className="small-caps text-ink/50 mb-3">Base</p>
            <p className="font-serif text-2xl md:text-3xl inline-flex items-center gap-2">
              <MapPin size={20} /> Madrid, España
            </p>
          </div>

          <div className="border-t border-ink/15 pt-8">
            <p className="font-serif text-xl text-ink/70 leading-snug">
              Respondo a todos los emails serios. Si tu propuesta tiene cabeza, plazos y
              presupuesto, prometo contestar en menos de 48 horas laborables.
            </p>
          </div>
        </aside>

        <div className="lg:col-span-8 lg:border-l lg:border-ink/15 lg:pl-12">
          <p className="small-caps text-accent mb-6">Formulario</p>
          <h2 className="font-serif text-3xl md:text-4xl leading-tight tracking-tight mb-10">
            ¿Prefieres dejarme un mensaje aquí mismo?
          </h2>
          <ContactForm />
        </div>
      </section>

      <Footer />
    </div>
  );
}
