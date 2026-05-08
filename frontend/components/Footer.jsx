import Link from 'next/link';
import { Mail, ArrowUpRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-ink text-paper mt-auto" data-testid="main-footer">
      <div className="container-edit py-16 md:py-24">
        <p className="small-caps text-accent mb-6">¿Tienes una historia que contar?</p>
        <h2 className="font-serif text-5xl md:text-7xl lg:text-8xl leading-[0.95] tracking-tight mb-10">
          Hablemos.
        </h2>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <Link
            href="/contacto/"
            className="inline-flex items-center gap-3 border border-paper/40 hover:border-paper hover:bg-paper hover:text-ink transition-colors px-6 py-4 small-caps self-start"
            data-testid="footer-contact-cta"
          >
            <Mail size={16} /> Escríbeme un email
            <ArrowUpRight size={16} />
          </Link>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-x-10 gap-y-3 text-sm text-paper/70">
            <Link href="/sobre-mi/" className="hover:text-accent" data-testid="footer-about">Sobre mí</Link>
            <Link href="/trabajos/" className="hover:text-accent" data-testid="footer-works">Trabajos</Link>
            <Link href="/servicios/" className="hover:text-accent" data-testid="footer-services">Servicios</Link>
            <Link href="/medios/" className="hover:text-accent" data-testid="footer-media">Medios</Link>
            <Link href="/contacto/" className="hover:text-accent" data-testid="footer-contact">Contacto</Link>
          </div>
        </div>
      </div>
      <div className="border-t border-paper/15">
        <div className="container-edit py-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p className="small-caps text-paper/50">© {new Date().getFullYear()} · Patricia Ávila Sánchez</p>
          <p className="small-caps text-paper/50">Hecho con tinta y café · Madrid</p>
        </div>
      </div>
    </footer>
  );
}
