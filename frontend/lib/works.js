import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const WORKS_DIR = path.join(process.cwd(), 'content', 'trabajos');

function formatDateLabel(dateStr) {
  if (!dateStr) return '';
  try {
    const d = new Date(dateStr);
    return d.toLocaleDateString('es-ES', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
    }).replace('.', '');
  } catch {
    return String(dateStr);
  }
}

export function getAllWorkSlugs() {
  if (!fs.existsSync(WORKS_DIR)) return [];
  return fs
    .readdirSync(WORKS_DIR)
    .filter((f) => f.endsWith('.md'))
    .map((f) => f.replace(/\.md$/, ''));
}

export function getAllWorks() {
  const slugs = getAllWorkSlugs();
  const works = slugs.map((slug) => {
    const filePath = path.join(WORKS_DIR, `${slug}.md`);
    const raw = fs.readFileSync(filePath, 'utf-8');
    const { data, content } = matter(raw);
    return {
      slug,
      title: data.title || slug,
      date: data.date || '',
      dateLabel: formatDateLabel(data.date),
      client: data.client || '',
      category: data.category || 'General',
      image: data.image || '',
      excerpt: data.excerpt || '',
      externalUrl: data.externalUrl || '',
      content,
    };
  });
  // newest first
  return works.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export async function getWorkBySlug(slug) {
  const filePath = path.join(WORKS_DIR, `${slug}.md`);
  if (!fs.existsSync(filePath)) return null;
  const raw = fs.readFileSync(filePath, 'utf-8');
  const { data, content } = matter(raw);
  const processed = await remark().use(html).process(content);
  return {
    slug,
    title: data.title || slug,
    date: data.date || '',
    dateLabel: formatDateLabel(data.date),
    client: data.client || '',
    category: data.category || 'General',
    image: data.image || '',
    excerpt: data.excerpt || '',
    externalUrl: data.externalUrl || '',
    contentHtml: processed.toString(),
  };
}

export function getCategories() {
  const works = getAllWorks();
  const set = new Set(works.map((w) => w.category));
  return Array.from(set);
}
