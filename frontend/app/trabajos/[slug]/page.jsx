import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import { getAllWorkSlugs, getWorkBySlug, getAllWorks } from '@/lib/works';

export async function generateStaticParams() {
  return getAllWorkSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const work = await getWorkBySlug(params.slug);
  if (!work) return {};
  return {
    title: work.title,
    description: work.excerpt,
    openGraph: {
      title: `${work.title} · Patricia Ávila Sánchez`,
      description: work.excerpt,
      type: 'article',
      images: work.image ? [{ url: work.image }] : undefined,
      publishedTime: work.date || undefined,
    },
    twitter: {
      card: 'summary_large_image',
      title: work.title,
      description: work.excerpt,
      images: work.image ? [work.image] : undefined,
    },
  };
}

export default async function WorkPage({ params }) {
  const work = await getWorkBySlug(params.slug);
  if (!work) notFound();

  const all = getAllWorks();
  const idx = all.findIndex((w) => w.slug === work.slug);
  const next = all[(idx + 1) % all.length];

  return (
    <div className="min-h-screen flex flex-col">
      <Nav />

      <article className="container-edit pt-10 md:pt-16 pb-20">
        <Link
          href="/trabajos/"
          className="small-caps inline-flex items-center gap-2 text-ink/60 hover:text-accent mb-10"
          data-testid="back-to-works"
        >
          <ArrowLeft size={14} /> Volver al archivo
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-12 gap-y-6 border-b border-ink pb-10">
          <div className="lg:col-span-2 space-y-4">
            <div>
              <p className="small-caps text-ink/50 mb-1">Categoría</p>
              <p className="small-caps text-accent" data-testid="work-category">{work.category}</p>
            </div>
            <div>
              <p className="small-caps text-ink/50 mb-1">Fecha</p>
              <p className="small-caps text-ink" data-testid="work-date">{work.dateLabel}</p>
            </div>
            {work.client && (
              <div>
                <p className="small-caps text-ink/50 mb-1">Medio · Cliente</p>
                <p className="small-caps text-ink" data-testid="work-client">{work.client}</p>
              </div>
            )}
          </div>

          <div className="lg:col-span-10">
            <h1
              className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[0.95] tracking-tighter mb-8"
              data-testid="work-title"
            >
              {work.title}
            </h1>
            <p className="font-serif text-2xl md:text-3xl leading-snug text-ink/80 max-w-4xl">
              {work.excerpt}
            </p>
            {work.externalUrl && (
              <a
                href={work.externalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="small-caps inline-flex items-center gap-2 mt-8 border border-ink hover:bg-ink hover:text-paper transition-colors px-5 py-3"
                data-testid="work-external-link"
              >
                Leer la publicación original <ArrowUpRight size={14} />
              </a>
            )}
          </div>
        </div>

        {work.image && (
          <div className="my-12">
            <img
              src={work.image}
              alt={work.title}
              className="w-full h-auto max-h-[80vh] object-cover"
            />
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-12 mt-8">
          <div className="lg:col-span-2 lg:sticky lg:top-28 lg:self-start mb-6 lg:mb-0">
            <p className="small-caps text-ink/50">El proyecto</p>
            <div className="hidden lg:block w-12 h-px bg-accent mt-3" />
          </div>
          <div
            className="lg:col-span-8 editorial-prose"
            dangerouslySetInnerHTML={{ __html: work.contentHtml }}
            data-testid="work-content"
          />
        </div>

        {next && (
          <div className="mt-24 pt-10 border-t border-ink/15">
            <p className="small-caps text-ink/50 mb-4">Siguiente lectura</p>
            <Link
              href={`/trabajos/${next.slug}/`}
              className="group inline-block"
              data-testid="next-work-link"
            >
              <h3 className="font-serif text-3xl md:text-5xl tracking-tight leading-tight group-hover:text-accent transition-colors">
                {next.title} <ArrowUpRight className="inline" size={28} />
              </h3>
              <p className="small-caps text-ink/60 mt-3">
                {next.category} · {next.dateLabel}
              </p>
            </Link>
          </div>
        )}
      </article>

      <Footer />
    </div>
  );
}
