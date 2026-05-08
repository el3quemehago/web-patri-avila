import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { ArrowUpRight, Pen, BookOpen, Mic, Building2, Layers, FileText } from 'lucide-react';

export const metadata = {
  title: 'Servicios',
  description:
    'Periodismo de marca, reportajes corporativos, memorias, edición y estrategia de contenidos por Patricia Ávila Sánchez.',
  openGraph: {
    title: 'Servicios · Patricia Ávila Sánchez',
    description:
      'Servicios editoriales y de periodismo de marca para empresas, instituciones y medios.',
  },
};

const SERVICES = [
  {
    icon: Pen,
    title: 'Periodismo de marca',
    description:
      'Contenidos editoriales para empresas con el mismo rigor que un reportaje. Newsletters, blogs, artículos firmados y formatos largos que construyen autoridad y confianza.',
  },
  {
    icon: BookOpen,
    title: 'Memorias y libros corporativos',
    description:
      'Memorias anuales, libros conmemorativos, ediciones de aniversario y publicaciones institucionales. Investigo, entrevisto, escribo y coordino el proyecto entero.',
  },
  {
    icon: Mic,
    title: 'Entrevistas y perfiles',
    description:
      'Entrevistas a directivos, expertos o protagonistas de tu sector. Para revistas internas, externas, podcast o vídeo. La conversación bien hecha sigue siendo el mejor formato.',
  },
  {
    icon: Building2,
    title: 'Voz y relato corporativo',
    description:
      'Definición del tono, los mensajes y el relato editorial de tu marca. Manuales de estilo, posicionamiento editorial y estrategia de contenidos a medio plazo.',
  },
  {
    icon: Layers,
    title: 'Dirección editorial',
    description:
      'Coordinación de proyectos editoriales complejos: equipos de redactores, planificación, control de calidad y entrega. Desde la idea hasta la imprenta o el CMS.',
  },
  {
    icon: FileText,
    title: 'Reportajes y crónicas',
    description:
      'Periodismo clásico para medios, marcas o instituciones. Investigación, fuentes, verificación y narrativa. Lo que siempre debió ser y sigue siendo.',
  },
];

export default function ServiciosPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Nav />

      <header className="container-edit pt-12 pb-10 md:pt-20 md:pb-14 border-b border-ink">
        <p className="small-caps text-accent mb-6" data-testid="servicios-label">Servicios</p>
        <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl leading-[0.95] tracking-tighter max-w-5xl">
          Lo que puedo hacer<br />por tu historia.
        </h1>
        <p className="font-sans text-lg md:text-xl text-ink/70 mt-8 max-w-3xl leading-relaxed">
          Trabajo con empresas, instituciones y medios que necesitan contenidos editoriales con
          oficio. Cada encargo se ajusta a tu calendario, tu voz y tu sector.
        </p>
      </header>

      <section className="container-edit py-12 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s, i) => {
            const Icon = s.icon;
            return (
              <div
                key={s.title}
                className={`group p-8 lg:p-10 border-t border-ink/15 ${
                  i % 3 !== 0 ? 'lg:border-l' : ''
                } ${i % 2 !== 0 ? 'md:[&:not(:nth-child(odd))]:border-l lg:border-l' : ''} border-ink/15 hover:bg-paper-soft transition-colors`}
                data-testid={`service-${i}`}
              >
                <Icon className="text-accent mb-6" size={28} strokeWidth={1.4} />
                <p className="small-caps text-ink/40 mb-3">0{i + 1}</p>
                <h3 className="font-serif text-3xl leading-tight tracking-tight mb-4">
                  {s.title}
                </h3>
                <p className="text-ink/70 leading-relaxed">{s.description}</p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="container-edit pb-20 md:pb-28">
        <div className="border-t border-ink pt-10 grid grid-cols-1 lg:grid-cols-12 gap-x-12 gap-y-8 items-center">
          <div className="lg:col-span-7">
            <h2 className="font-serif text-4xl md:text-6xl leading-tight tracking-tight">
              ¿No ves lo que buscas?
            </h2>
            <p className="font-sans text-lg text-ink/70 mt-5 max-w-2xl">
              Cuéntame el proyecto. Si no es para mí, te paso a alguien de confianza. Si lo es,
              hablamos en serio.
            </p>
          </div>
          <div className="lg:col-span-5 lg:text-right">
            <Link
              href="/contacto/"
              className="small-caps inline-flex items-center gap-2 bg-ink text-paper border border-ink hover:bg-accent hover:border-accent transition-colors px-6 py-4"
              data-testid="services-contact-cta"
            >
              Cuéntame el proyecto <ArrowUpRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
