import Link from 'next/link';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import WorkCard from '@/components/WorkCard';
import { getAllWorks } from '@/lib/works';
import { ArrowUpRight } from 'lucide-react';

export const metadata = {
  title: 'Patricia Ávila Sánchez — Periodista & Brand Journalism',
  description:
    'Portfolio de Patricia Ávila Sánchez. Periodista formada en Interviú, especializada en periodismo de marca y storytelling corporativo.',
};

export default function HomePage() {
  const works = getAllWorks();
  const featured = works[0];
  const recent = works.slice(1, 5);

  return (
    <div className="min-h-screen flex flex-col">
      <Nav />

      {/* HERO — newspaper masthead */}
      <header className="container-edit pt-10 pb-12 md:pt-16 md:pb-20 border-b border-ink">
        <div className="flex items-baseline justify-between mb-8">
          <span className="small-caps text-ink/60" data-testid="hero-edition">
            Edición · Madrid · {new Date().toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' })}
          </span>
          <span className="small-caps text-ink/60 hidden md:block">Vol. I — N.º 1</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-10 gap-y-8">
          <div className="lg:col-span-8 fade-up">
            <h1
              className="font-serif font-medium text-[3.25rem] sm:text-7xl md:text-8xl leading-[0.92] tracking-tighter"
              data-testid="hero-title"
            >
              Periodismo
              <br />
              de marca, con
              <br />
              <span className="italic font-light">memoria de</span>
              <br />
              reportera.
            </h1>
          </div>

          <div className="lg:col-span-4 lg:border-l lg:border-ink/15 lg:pl-10 fade-up flex flex-col justify-end">
            <p className="small-caps text-accent mb-4">Sumario</p>
            <p className="font-serif text-2xl md:text-[1.7rem] leading-snug text-ink mb-6">
              Patricia Ávila Sánchez. Aprendí periodismo en <em>Interviú</em> y ahora lo aplico al mundo corporativo.
              Busco historias y luego las cuento.
            </p>
            <Link
              href="/sobre-mi/"
              className="small-caps inline-flex items-center gap-2 self-start border-b border-ink pb-1 hover:text-accent hover:border-accent transition-colors"
              data-testid="hero-about-link"
            >
              Sobre mí <ArrowUpRight size={14} />
            </Link>
          </div>
        </div>
      </header>

      {/* FEATURED LEAD STORY */}
      {featured && (
        <section className="container-edit py-12 md:py-20 border-b border-ink/15">
          <div className="flex items-center justify-between mb-8">
            <p className="small-caps text-accent" data-testid="featured-label">Reportaje destacado</p>
            <Link href="/trabajos/" className="small-caps hover:text-accent" data-testid="featured-all-link">
              Ver todos →
            </Link>
          </div>
          <Link
            href={`/trabajos/${featured.slug}/`}
            className="grid grid-cols-1 lg:grid-cols-12 gap-10 group"
            data-testid="featured-work-link"
          >
            <div className="lg:col-span-7 overflow-hidden">
              {featured.image ? (
                <img
                  src={featured.image}
                  alt={featured.title}
                  className="w-full h-[55vh] object-cover img-grayscale"
                />
              ) : (
                <div className="w-full h-[55vh] bg-paper-soft flex items-center justify-center">
                  <span className="font-serif text-8xl text-ink/15">P.A.</span>
                </div>
              )}
            </div>
            <div className="lg:col-span-5 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-5">
                  <span className="small-caps text-ink/60">{featured.category}</span>
                  <span className="text-ink/30">·</span>
                  <span className="small-caps text-ink/60">{featured.client}</span>
                </div>
                <h2 className="font-serif text-4xl md:text-5xl leading-[1.05] tracking-tight mb-6 group-hover:text-accent transition-colors">
                  {featured.title}
                </h2>
                <p className="text-lg text-ink/80 leading-relaxed">{featured.excerpt}</p>
              </div>
              <div className="mt-8 flex items-center justify-between">
                <span className="small-caps text-ink/60">{featured.dateLabel}</span>
                <span className="small-caps inline-flex items-center gap-2 group-hover:text-accent">
                  Leer pieza <ArrowUpRight size={14} />
                </span>
              </div>
            </div>
          </Link>
        </section>
      )}

      {/* RECENT WORKS — newspaper grid */}
      <section className="container-edit py-12 md:py-20">
        <div className="flex items-end justify-between mb-10 border-b border-ink pb-4">
          <h2 className="font-serif text-3xl md:text-4xl tracking-tight">Trabajos recientes</h2>
          <Link href="/trabajos/" className="small-caps hover:text-accent" data-testid="home-all-works-link">
            Archivo completo →
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {recent.map((w, i) => (
            <WorkCard key={w.slug} work={w} index={i} />
          ))}
        </div>
      </section>

      {/* PULL QUOTE */}
      <section className="bg-ink text-paper py-20 md:py-28">
        <div className="container-edit">
          <p className="small-caps text-accent mb-8" data-testid="quote-label">Manifiesto</p>
          <blockquote className="font-serif text-4xl md:text-6xl leading-[1.05] tracking-tight max-w-5xl">
            “Sirvo para un roto<br />y para un{' '}
            <span className="italic">descosío</span>.”
          </blockquote>
          <p className="small-caps text-paper/60 mt-10">— Mi abuela. Y, por si acaso, también yo.</p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
