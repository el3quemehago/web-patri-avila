'use client';

import { useMemo, useState } from 'react';
import WorkCard from './WorkCard';

export default function WorksList({ works, categories }) {
  const [active, setActive] = useState('Todos');
  const filters = ['Todos', ...categories];

  const filtered = useMemo(() => {
    if (active === 'Todos') return works;
    return works.filter((w) => w.category === active);
  }, [active, works]);

  return (
    <section className="container-edit py-10 md:py-14" data-testid="works-list-section">
      <div className="flex flex-wrap items-center gap-x-2 gap-y-3 mb-10 md:mb-14 border-b border-ink/15 pb-5">
        <span className="small-caps text-ink/50 mr-4">Filtrar:</span>
        {filters.map((cat) => {
          const isActive = active === cat;
          return (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              data-testid={`filter-btn-${cat.toLowerCase().replace(/\s/g, '-')}`}
              className={`small-caps px-3 py-1.5 transition-colors border ${
                isActive
                  ? 'bg-ink text-paper border-ink'
                  : 'bg-transparent text-ink/70 border-transparent hover:text-accent hover:border-ink/20'
              }`}
            >
              {cat}
            </button>
          );
        })}
        <span className="ml-auto small-caps text-ink/50" data-testid="works-count">
          {filtered.length} pieza{filtered.length !== 1 ? 's' : ''}
        </span>
      </div>

      {filtered.length === 0 ? (
        <p className="font-serif text-3xl text-ink/40 py-20 text-center">
          Aún no hay piezas en esta categoría.
        </p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-2">
          {filtered.map((work, i) => (
            <WorkCard key={work.slug} work={work} index={i} />
          ))}
        </div>
      )}
    </section>
  );
}
