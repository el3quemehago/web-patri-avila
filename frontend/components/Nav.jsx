'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const links = [
  { href: '/', label: 'Portada' },
  { href: '/sobre-mi/', label: 'Sobre mí' },
  { href: '/trabajos/', label: 'Trabajos' },
  { href: '/servicios/', label: 'Servicios' },
  { href: '/medios/', label: 'Medios' },
  { href: '/contacto/', label: 'Contacto' },
];

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  return (
    <nav
      className="sticky top-0 z-50 bg-paper/85 backdrop-blur-md border-b border-ink/15"
      data-testid="main-nav"
    >
      <div className="container-edit flex items-center justify-between h-16 md:h-20">
        <Link
          href="/"
          className="font-serif text-xl md:text-2xl tracking-tight leading-none hover:text-accent transition-colors"
          data-testid="nav-logo"
        >
          Patricia Ávila <span className="text-ink/40">·</span> <span className="italic font-light">Sánchez</span>
        </Link>

        <ul className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className={`small-caps relative pb-1 transition-colors ${
                  isActive(l.href) ? 'text-accent' : 'text-ink hover:text-accent'
                }`}
                data-testid={`nav-link-${l.label.toLowerCase().replace(/\s/g, '-').replace('í','i').replace('ó','o')}`}
              >
                {l.label}
                {isActive(l.href) && (
                  <span className="absolute -bottom-px left-0 right-0 h-px bg-accent" />
                )}
              </Link>
            </li>
          ))}
        </ul>

        <button
          aria-label="Abrir menú"
          className="lg:hidden p-2 -mr-2"
          onClick={() => setOpen(!open)}
          data-testid="mobile-menu-toggle"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden border-t border-ink/15 bg-paper" data-testid="mobile-menu">
          <ul className="container-edit py-6 space-y-4">
            {links.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className={`block font-serif text-3xl ${
                    isActive(l.href) ? 'text-accent' : 'text-ink'
                  }`}
                  data-testid={`mobile-nav-link-${l.label.toLowerCase().replace(/\s/g,'-').replace('í','i').replace('ó','o')}`}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
