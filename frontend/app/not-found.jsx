import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-paper text-ink p-10">
      <p className="small-caps text-accent mb-6">Error 404</p>
      <h1 className="font-serif text-7xl md:text-9xl tracking-tighter leading-none mb-6">
        Sin pista.
      </h1>
      <p className="font-serif text-2xl text-ink/70 max-w-xl text-center mb-10">
        La página que buscas se ha ido a verificar una fuente y todavía no ha vuelto.
      </p>
      <Link
        href="/"
        className="small-caps border border-ink hover:bg-ink hover:text-paper transition-colors px-6 py-3"
        data-testid="not-found-home-link"
      >
        Volver a la portada
      </Link>
    </div>
  );
}
