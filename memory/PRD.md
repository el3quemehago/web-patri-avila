# PRD — Patricia Ávila Sánchez · Portfolio Periodístico

## Problema original
Crear un portfolio web para la periodista Patricia Ávila Sánchez. Debía ser un
sitio **estático**, exportable, sin backend ni base de datos, listo para
desplegar gratis en **Cloudflare Pages**. Estilo editorial / periódico /
revista cultural. Cada trabajo gestionado desde Markdown. Formulario de
contacto con Formspree (sin servidor propio). SEO + Open Graph en cada página.

## Decisiones de stack
- Pedido original: Astro + Tailwind. Emergent **no soporta Astro**, por lo que
  se eligió **Next.js 14 + Tailwind CSS** con `output: 'export'` (genera
  estáticos puros equivalentes a Astro y desplegables en Cloudflare Pages).
- Node `>=18.17 <=20.x` (definido en `package.json` → `engines`).

## Arquitectura
- **Next.js 14 App Router** con `output: 'export'` y `trailingSlash: true`.
- **Tailwind CSS** con paleta editorial (newsprint #F9F8F6, ink #111111,
  accent #C8102E).
- **Tipografías Google**: Cormorant Garamond (titulares), IBM Plex Sans
  (cuerpo), IBM Plex Mono (metadatos).
- **Contenido en Markdown**: `content/trabajos/*.md`, parseado con
  `gray-matter` + `remark/remark-html` en build/SSG.
- **Formspree**: `fetch()` directo al endpoint
  `https://formspree.io/f/mdablvyv` (configurable vía
  `NEXT_PUBLIC_FORMSPREE_ENDPOINT`).
- **SEO**: `metadata` exportado por página (title, description, openGraph,
  twitter), sitemap.xml y robots.txt automáticos.

## Personas
- **Cliente**: Patricia Ávila Sánchez — periodista freelance, formada en
  Interviú, especializada en periodismo de marca.
- **Visitante objetivo**: directores de comunicación, responsables de
  marketing editorial, editores de medios y empresas que necesitan
  contenidos editoriales con oficio.

## Páginas implementadas (8 rutas)
| Ruta | Descripción |
| --- | --- |
| `/` | Home con hero tipo masthead, reportaje destacado, trabajos recientes y manifiesto. |
| `/sobre-mi/` | Biografía editorial con cita "sirvo para un roto y para un descosío". |
| `/trabajos/` | Archivo con filtros por categoría (Todos, Reportaje, Periodismo de Marca, Entrevista, Corporativo). |
| `/trabajos/[slug]/` | Página individual con título, fecha, medio/cliente, categoría, imagen, extracto, enlace externo y contenido Markdown. Genera estáticos vía `generateStaticParams`. |
| `/servicios/` | 6 servicios editoriales en grid. |
| `/medios/` | Marquee + grid de medios/clientes + testimonios. |
| `/contacto/` | Formulario Formspree con validación cliente y datos de contacto. |
| `/sitemap.xml`, `/robots.txt` | SEO. |
| `/not-found` | 404 editorial. |

## Contenido inicial (6 trabajos en Markdown)
- silencio-redaccion · Reportaje · Interviú
- memoria-fundacion-cultural · Periodismo de Marca
- entrevista-cientifica · Entrevista
- voz-editorial-banca · Corporativo
- reportaje-envejecer · Reportaje · El País Semanal
- newsletter-farmaceutica · Periodismo de Marca

## Implementado a fecha 12-Dic-2025
- [x] Stack Next.js 14 + Tailwind + Markdown + Formspree
- [x] Las 7 páginas + 404 con SEO/OG por página
- [x] Filtros de categoría reactivos en `/trabajos/`
- [x] 6 trabajos de ejemplo en Markdown
- [x] Formulario Formspree con validación cliente (checkValidity + required)
- [x] Build estático configurado (`output: 'export'` → `out/`)
- [x] README con instrucciones de Cloudflare Pages y de cómo añadir trabajos
- [x] Tested via `testing_agent_v3` — 92% éxito; bug de validación corregido

## Backlog priorizado
- **P1**: Subir el sitio a Cloudflare Pages con `yarn build` → carpeta `out`.
- **P1**: Sustituir el correo y handles de redes sociales placeholder
  (`hola@patriciaavila.com`, LinkedIn, Twitter) por los reales en
  `app/contacto/page.jsx` y `components/Footer.jsx`.
- **P1**: Sustituir las imágenes Unsplash por fotografías reales del
  proyecto/cliente (URL en cada `.md`).
- **P1**: Actualizar la lista de medios reales en `app/medios/page.jsx`.
- **P2**: Página de prensa / kit de prensa descargable.
- **P2**: RSS feed de los trabajos (Next.js `route.js` estático).
- **P2**: Modo oscuro opcional siguiendo la línea editorial.

## Ficheros relevantes
```
app/                     páginas (App Router)
components/              Nav, Footer, WorkCard, WorksList, ContactForm
content/trabajos/*.md    fuente única del archivo de trabajos
lib/works.js             lectura/parsing de Markdown
next.config.js           output: 'export', trailingSlash
tailwind.config.js       paleta + fuentes
.env                     NEXT_PUBLIC_FORMSPREE_ENDPOINT, NEXT_PUBLIC_SITE_URL
```

## Despliegue Cloudflare Pages
- Build command: `yarn build`
- Output directory: `out`
- Node: 18 o 20
- Variables de entorno: `NEXT_PUBLIC_FORMSPREE_ENDPOINT`, `NEXT_PUBLIC_SITE_URL`
