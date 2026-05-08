import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Medios y clientes',
  description:
    'Medios, marcas e instituciones que han confiado en Patricia Ávila Sánchez para sus proyectos editoriales.',
  openGraph: {
    title: 'Medios y clientes · Patricia Ávila Sánchez',
    description:
      'Medios, marcas e instituciones para los que ha trabajado Patricia Ávila Sánchez.',
  },
};

const CLIENTS = [
  'Interviú',
  'El País Semanal',
  'Tiempo',
  'Cambio 16',
  'Yo Dona',
  'BBVA',
  'Telefónica',
  'Iberdrola',
  'Mapfre',
  'Repsol',
  'Banco Santander',
  'Endesa',
  'Fundación La Caixa',
  'Acciona',
  'Inditex',
  'Real Academia Española',
];

const TESTIMONIALS = [
  {
    quote:
      'Patricia es esa rara combinación de reportera de raza y editora de marca. Entiende la noticia y entiende la empresa.',
    author: 'Director de Comunicación · Sector energético',
  },
  {
    quote:
      'No solo escribió la memoria; la convirtió en un libro que se lee. Eso ya casi nadie sabe hacerlo.',
    author: 'Responsable Editorial · Fundación cultural',
  },
];

export default function MediosPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Nav />

      <header className="container-edit pt-12 pb-10 md:pt-20 md:pb-14 border-b border-ink">
        <p className="small-caps text-accent mb-6">Medios &amp; Clientes</p>
        <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl leading-[0.95] tracking-tighter max-w-5xl">
          Han confiado en estas líneas.
        </h1>
        <p className="font-sans text-lg md:text-xl text-ink/70 mt-8 max-w-3xl leading-relaxed">
          Una selección de medios, marcas e instituciones para las que he firmado, editado o
          coordinado contenidos editoriales.
        </p>
      </header>

      {/* Marquee strip */}
      <section className="overflow-hidden border-b border-ink/15 py-10 bg-paper-soft">
        <div className="marquee-track flex items-center gap-12 whitespace-nowrap">
          {[...CLIENTS, ...CLIENTS].map((c, i) => (
            <span
              key={`m-${i}`}
              className="font-serif italic text-3xl md:text-5xl text-ink/70"
            >
              {c} <span className="text-accent not-italic mx-6">✦</span>
            </span>
          ))}
        </div>
      </section>

      {/* Grid newspaper-style */}
      <section className="container-edit py-12 md:py-20">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {CLIENTS.map((c, i) => (
            <div
              key={c}
              className={`px-4 py-10 md:py-14 border-t border-ink/15 ${
                i % 2 !== 0 ? 'border-l md:border-l-0' : ''
              } md:[&:not(:nth-child(3n+1))]:border-l lg:[&:not(:nth-child(4n+1))]:border-l md:[&:nth-child(3n+1)]:border-l-0 lg:[&:nth-child(3n+1)]:border-l lg:[&:nth-child(4n+1)]:border-l-0 border-ink/15 flex items-center justify-center text-center`}
              data-testid={`client-${i}`}
            >
              <span className="font-serif text-xl md:text-2xl tracking-tight">{c}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="container-edit py-12 md:py-20 border-t border-ink">
        <p className="small-caps text-accent mb-10">Lo que dicen</p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {TESTIMONIALS.map((t, i) => (
            <figure key={i} className="" data-testid={`testimonial-${i}`}>
              <blockquote className="font-serif text-3xl md:text-4xl leading-tight tracking-tight">
                <span className="text-accent">“</span>
                {t.quote}
                <span className="text-accent">”</span>
              </blockquote>
              <figcaption className="small-caps text-ink/60 mt-6 border-t border-ink/15 pt-4">
                {t.author}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
