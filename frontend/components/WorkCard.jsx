'use client';

import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

export default function WorkCard({ work, index = 0 }) {
  return (
    <Link
      href={`/trabajos/${work.slug}/`}
      className="group block border-t border-ink/20 pt-6 pb-10 px-0 md:px-6 md:[&:not(:nth-child(3n+1))]:border-l md:border-l-ink/15 transition-colors"
      data-testid={`work-card-${work.slug}`}
    >
      {work.image ? (
        <div className="overflow-hidden mb-5 aspect-[4/3]">
          <img
            src={work.image}
            alt={work.title}
            className="w-full h-full object-cover img-grayscale"
            loading="lazy"
          />
        </div>
      ) : (
        <div className="aspect-[4/3] mb-5 bg-paper-soft flex items-center justify-center border border-ink/10">
          <span className="font-serif text-6xl text-ink/20">{(work.category || 'P')[0]}</span>
        </div>
      )}
      <div className="flex items-center gap-2 mb-3 flex-wrap">
        <span className="small-caps text-accent">{work.category}</span>
        <span className="text-ink/30">·</span>
        <span className="small-caps text-ink/60">{work.dateLabel}</span>
        {work.client && (
          <>
            <span className="text-ink/30">·</span>
            <span className="small-caps text-ink/60">{work.client}</span>
          </>
        )}
      </div>
      <h3 className="font-serif text-2xl md:text-3xl leading-[1.1] tracking-tight mb-3 group-hover:text-accent transition-colors">
        {work.title}
      </h3>
      <p className="text-sm text-ink/70 leading-relaxed line-clamp-3 mb-4">{work.excerpt}</p>
      <span className="small-caps inline-flex items-center gap-1 text-ink/60 group-hover:text-accent">
        Leer pieza <ArrowUpRight size={12} />
      </span>
    </Link>
  );
}
