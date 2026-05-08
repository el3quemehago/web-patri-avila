# Patricia Ávila Sánchez — Portfolio

Web portfolio editorial para una periodista. Sitio **estático puro**, sin
backend ni base de datos. Construido con **Next.js 14** + **Tailwind CSS** y
preparado para desplegarse gratis en **Cloudflare Pages**.

## Tecnologías

- Next.js 14 (App Router) con `output: 'export'` (sitio 100% estático)
- Tailwind CSS
- gray-matter + remark (contenido en Markdown)
- Formspree (formulario de contacto sin servidor propio)
- Lucide React (iconografía)
- Tipografías Cormorant Garamond + IBM Plex Sans + IBM Plex Mono

## Requisitos

- Node **>=18.17 <=20.x** (especificado en `package.json`)
- Yarn

## Desarrollo

```bash
yarn install
yarn dev
```

La web abre en `http://localhost:3000`.

## Build estático para Cloudflare Pages

```bash
yarn build
```

Esto genera la carpeta `out/` con todo el sitio estático listo para subir.

### Configuración en Cloudflare Pages

- **Framework preset:** Next.js (Static HTML Export)
- **Build command:** `yarn build`
- **Build output directory:** `out`
- **Node version:** 18 o 20 (definido también en `package.json` `engines`)

## Añadir un trabajo nuevo

1. Crea un archivo en `content/trabajos/mi-nuevo-trabajo.md`.
2. Añade el frontmatter:

```markdown
---
title: "Título del trabajo"
date: "2025-01-20"
client: "Medio o cliente"
category: "Reportaje"           # Periodismo de Marca | Reportaje | Entrevista | Corporativo …
image: "https://…"              # Opcional
excerpt: "Resumen breve."
externalUrl: "https://…"        # Opcional, enlace al original
---

Aquí el cuerpo del proyecto en **Markdown**.
```

3. `yarn build` regenera el sitio. El nuevo trabajo aparecerá en el archivo,
   en los filtros y tendrá su propia URL `/trabajos/mi-nuevo-trabajo/`.

## Formspree

El endpoint del formulario está en `frontend/.env`:

```
NEXT_PUBLIC_FORMSPREE_ENDPOINT=https://formspree.io/f/mdablvyv
```

Cámbialo por tu propio formulario de Formspree si lo necesitas.

## SEO

Cada página tiene `metadata` propia con título, descripción y `openGraph`.
Sitemap automático en `/sitemap.xml` y `/robots.txt`.

## Estructura

```
app/                   # Páginas (App Router)
  page.jsx             # Home
  sobre-mi/
  trabajos/
  trabajos/[slug]/     # Página individual de trabajo
  servicios/
  medios/
  contacto/
components/            # Componentes React
content/trabajos/      # Trabajos en Markdown (fuente de la verdad)
lib/works.js           # Lectura de Markdown
```
