import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import WorksList from '@/components/WorksList';
import { getAllWorks, getCategories } from '@/lib/works';

export const metadata = {
  title: 'Trabajos',
  description:
    'Archivo de reportajes, entrevistas y proyectos de periodismo de marca firmados por Patricia Ávila Sánchez.',
  openGraph: {
    title: 'Trabajos · Patricia Ávila Sánchez',
    description:
      'Archivo completo de reportajes, entrevistas y proyectos de brand journalism.',
  },
};

export default function TrabajosPage() {
  const works = getAllWorks();
  const categories = getCategories();
  return (
    <div className="min-h-screen flex flex-col">
      <Nav />
      <header className="container-edit pt-12 pb-10 md:pt-20 md:pb-14 border-b border-ink">
        <p className="small-caps text-accent mb-6" data-testid="trabajos-label">Archivo</p>
        <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl leading-[0.95] tracking-tighter max-w-5xl">
          Todo lo que he escrito, reporteado o ayudado a contar.
        </h1>
        <p className="font-sans text-lg md:text-xl text-ink/70 mt-8 max-w-3xl leading-relaxed">
          Una colección viva de piezas: reportajes, entrevistas, proyectos editoriales y
          periodismo de marca. Filtra por categoría para encontrar lo que te interesa.
        </p>
      </header>
      <WorksList works={works} categories={categories} />
      <Footer />
    </div>
  );
}
