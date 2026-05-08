import { getAllWorkSlugs } from '@/lib/works';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://patriciaavila.com';

export default function sitemap() {
  const staticRoutes = [
    '',
    '/sobre-mi',
    '/trabajos',
    '/servicios',
    '/medios',
    '/contacto',
  ].map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: path === '' ? 1 : 0.7,
  }));

  const workRoutes = getAllWorkSlugs().map((slug) => ({
    url: `${SITE_URL}/trabajos/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.6,
  }));

  return [...staticRoutes, ...workRoutes];
}
