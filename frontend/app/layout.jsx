import { Cormorant_Garamond, IBM_Plex_Sans, IBM_Plex_Mono } from 'next/font/google';
import './globals.css';

const serif = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-serif',
  display: 'swap',
});

const sans = IBM_Plex_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-sans',
  display: 'swap',
});

const mono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-mono',
  display: 'swap',
});

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://patriciaavila.com';

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Patricia Ávila Sánchez — Periodista & Brand Journalism',
    template: '%s · Patricia Ávila Sánchez',
  },
  description:
    'Periodista formada en Interviú, especializada en periodismo de marca. Buscadora de historias que conectan personas, empresas y cultura.',
  keywords: [
    'Patricia Ávila',
    'periodismo de marca',
    'brand journalism',
    'periodista',
    'reportaje',
    'comunicación corporativa',
    'storytelling',
    'Interviú',
  ],
  authors: [{ name: 'Patricia Ávila Sánchez' }],
  creator: 'Patricia Ávila Sánchez',
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: SITE_URL,
    siteName: 'Patricia Ávila Sánchez',
    title: 'Patricia Ávila Sánchez — Periodista & Brand Journalism',
    description:
      'Periodismo de marca con raíces en el reporterismo clásico. Historias que merecen ser contadas.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Patricia Ávila Sánchez — Periodista & Brand Journalism',
    description:
      'Periodismo de marca con raíces en el reporterismo clásico.',
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={`${serif.variable} ${sans.variable} ${mono.variable}`}>
      <body className="bg-paper text-ink font-sans antialiased selection:bg-ink selection:text-paper">
        {children}
      </body>
    </html>
  );
}
