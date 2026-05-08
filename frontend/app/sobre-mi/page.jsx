import Link from 'next/link';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import { ArrowUpRight } from 'lucide-react';

export const metadata = {
  title: 'Sobre mí',
  description:
    'Patricia Ávila Sánchez. Periodista formada en Interviú, hoy especializada en periodismo de marca y storytelling corporativo.',
  openGraph: {
    title: 'Sobre mí · Patricia Ávila Sánchez',
    description:
      'De Interviú al periodismo de marca. Una vida buscando historias que merecen ser contadas.',
  },
};

export default function SobreMiPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Nav />

      <header className="container-edit pt-12 pb-10 md:pt-20 md:pb-16 border-b border-ink">
        <p className="small-caps text-accent mb-6">Sobre mí</p>
        <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[0.92] tracking-tighter max-w-5xl">
          De <em>Interviú</em> al
          <br /> brand journalism.
        </h1>
      </header>

      <section className="container-edit py-16 md:py-24 grid grid-cols-1 lg:grid-cols-12 gap-x-12 gap-y-10">
        <div className="lg:col-span-5">
          <div className="aspect-[3/4] overflow-hidden border border-ink/10">
            <img
              src="https://images.unsplash.com/photo-1767436620079-c423be9f9a69?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1NzZ8MHwxfHNlYXJjaHwzfHx2aW50YWdlJTIwdHlwZXdyaXRlciUyMGRlc2t8ZW58MHx8fHwxNzc4MjM0NTg2fDA&ixlib=rb-4.1.0&q=85"
              alt="Máquina de escribir vintage sobre escritorio"
              className="w-full h-full object-cover img-grayscale"
            />
          </div>
          <p className="small-caps text-ink/50 mt-4">
            Las herramientas cambian; el oficio, no.
          </p>
        </div>

        <div className="lg:col-span-7 lg:pl-4">
          <div className="editorial-prose">
            <p className="font-serif text-3xl md:text-4xl leading-snug text-ink mb-10">
              Aprendí periodismo en <em>Interviú</em>, una redacción que enseñaba a no creerse nada
              hasta haberlo verificado dos veces. Hoy aplico ese mismo rigor al mundo
              corporativo: hago periodismo de marca.
            </p>
            <p>
              Me encanta buscar historias y luego contarlas. Las que merecen una portada y
              también las que viven en informes anuales, manuales internos, podcasts de empresa
              o webs corporativas. Creo que toda organización —cualquier persona, en realidad—
              tiene una historia que merece ser contada bien.
            </p>
            <p>
              Trabajo entre el rigor de la sala de redacción clásica y la libertad de los
              formatos modernos. Reporteo, entrevisto, documento, escribo y edito. Y, cuando hace
              falta, también dirijo equipos editoriales y proyectos de contenido de larga
              duración.
            </p>
            <blockquote>
              Sirvo para un roto y para un descosío.
            </blockquote>
            <p>
              Lo decía mi abuela y lo repito yo, sin ironía. Es la mejor descripción de cómo
              entiendo este oficio: la versatilidad como ética profesional. Lo mismo te firmo un
              reportaje de fondo que te construyo un relato corporativo coherente, lo mismo
              entrevisto a un Premio Nobel que a la persona que limpia su laboratorio.
            </p>

            <h2>Especializaciones</h2>
            <ul>
              <li>Periodismo de marca y contenido editorial corporativo</li>
              <li>Reportajes, entrevistas y crónicas largas</li>
              <li>Memorias anuales, libros conmemorativos y proyectos editoriales</li>
              <li>Estrategia de contenidos y voz de marca</li>
              <li>Edición y dirección editorial</li>
            </ul>

            <h2>Trayectoria</h2>
            <p>
              Más de dos décadas en redacciones, agencias y departamentos de comunicación.
              Empezó en <em>Interviú</em>; siguió en otros medios y agencias; hoy trabaja por
              libre con clientes que necesitan que alguien les ayude a contar lo importante.
            </p>
          </div>

          <div className="mt-12 flex flex-wrap gap-4">
            <Link
              href="/trabajos/"
              className="small-caps inline-flex items-center gap-2 border border-ink hover:bg-ink hover:text-paper transition-colors px-5 py-3"
              data-testid="about-works-cta"
            >
              Ver trabajos <ArrowUpRight size={14} />
            </Link>
            <Link
              href="/contacto/"
              className="small-caps inline-flex items-center gap-2 bg-ink text-paper border border-ink hover:bg-accent hover:border-accent transition-colors px-5 py-3"
              data-testid="about-contact-cta"
            >
              Hablemos <ArrowUpRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
