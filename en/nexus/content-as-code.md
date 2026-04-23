---
title: Content-as-Code — Pipeline de Contenido BlueUP
description: Generación de presentaciones y documentos corporativos con estética Dark Glassmorphism, versionados en Git y compilados a PDF
---

# Content-as-Code

<div class="project-badge">🎨 Pipeline Activo</div>

Pipeline de **generación de contenido corporativo** (presentaciones y documentos) con la estética **Dark Glassmorphism** de BlueUP. Todo el contenido se versiona como código en Git y se compila localmente a PDF de alta fidelidad.

## Architecture

```
content-as-code/
├── src/
│   ├── presentations/         # Slides en Markdown (formato Marp)
│   │   └── demo-microseg.md   # Ejemplo: micro-segmentación Zero Trust
│   └── documents/             # Documentos largos en HTML semántico
│       └── demo-whitepaper.html
├── themes/
│   ├── blueup-slides.css      # Theme Marp (Dark Glassmorphism)
│   └── blueup-document.css    # Stylesheet para documentos HTML→PDF
├── assets/
│   └── blueup-logo.svg        # Logo SVG vectorial
├── scripts/
│   ├── build-presentations.js # Compilar slides con Marp CLI
│   └── build-documents.js     # Renderizar documentos vía Playwright
├── dist/                      # Salida compilada (PDFs, HTMLs)
├── system_prompt/
│   └── system.md              # System prompt para la IA
├── DESIGN.md                  # Tokens de diseño (fuente de verdad)
├── marp.config.mjs            # Config de Marp CLI
└── package.json               # npm scripts + dependencias
```

## Pipelines de Compilación

### Presentaciones (Marp CLI)

Los archivos `.md` en `src/presentations/` usan el framework [Marp](https://marp.app/) con un theme personalizado `blueup` que implementa el design system completo.

```
Markdown (.md)  →  Marp CLI  →  PDF + HTML
                    ↑
              blueup-slides.css
```

**Frontmatter obligatorio:**

```yaml
---
marp: true
theme: blueup
paginate: true
footer: 'BlueUP — Navarro-Bores | Confidencial'
---
```

### Documentos (Playwright)

Los archivos `.html` en `src/documents/` se renderizan a PDF vía Playwright (Chromium headless), preservando todos los efectos visuales (backdrop-filter, gradientes, transparencias).

```
HTML semántico  →  Playwright (Chromium)  →  PDF
                        ↑
                  blueup-document.css
                  emulateMedia('screen')
                  printBackground: true
```

## Design System

El archivo `DESIGN.md` es la **fuente de verdad** para todos los tokens visuales. La IA debe leerlo antes de generar cualquier contenido.

### Paleta de Colores

| Token | Valor | Uso |
|---|---|---|
| `surface` | `#030712` | Fondo de página/slide |
| `brand-400` | `#60a5fa` | Acento ligero, eyebrows |
| `brand-600` | `#2563eb` | Inicio del gradiente |
| `violet-600` | `#7c3aed` | Final del gradiente |
| `gray-50` | `#f9fafb` | Títulos principales |
| `gray-300` | `#d1d5db` | Texto body |
| `success` | `#34d399` | Indicadores activos |

### Componentes CSS

| Componente | Clase | Description |
|---|---|---|
| **Glass Card** | `.glass-card` | Tarjeta translúcida con `backdrop-filter: blur(20px)` |
| **Gradient Text** | `.gradient-text` | Texto con gradiente blue→violet |
| **Eyebrow** | `.section-eyebrow` | Pre-título uppercase en `brand-400` |
| **Tech Badge** | `.tech-badge` | Pill para stacks tecnológicos |
| **Status Badge** | `.status-badge-active` | Badge verde con indicador pulsante |
| **Glow Border** | `.glass-card.glow-border` | Borde luminoso activado por hover |
| **Grid** | `.grid .grid-cols-2/3` | Layout de 2 o 3 columnas |

### Ejemplo de Uso en Marp

```html
<p class="section-eyebrow text-brand-400">ARQUITECTURA</p>

# Micro-segmentación <span class="gradient-text">Zero Trust</span>

<div class="grid grid-cols-3 mt-lg">
  <div class="glass-card">
    <h3>1. Visibilidad Activa</h3>
    <p>Telemetría en tiempo real sin agentes.</p>
  </div>
  <div class="glass-card">
    <h3>2. Control Granular</h3>
    <p>Políticas por identidad de servicio.</p>
  </div>
  <div class="glass-card">
    <h3>3. Respuesta Automática</h3>
    <p>Contención lateral en < 200ms.</p>
  </div>
</div>
```

## Integración con Nexus

Nexus orquesta el pipeline Content-as-Code a través del comando `content` en `nexus-manager.sh`:

```bash
# Compilar todo (presentaciones + documentos)
./nexus-manager.sh content build

# Solo presentaciones → PDF + HTML
./nexus-manager.sh content slides

# Solo documentos → PDF
./nexus-manager.sh content docs

# Preview con hot-reload
./nexus-manager.sh content dev
```

El skill `content-architect.md` proporciona las instrucciones para que Gemini CLI genere contenido directamente en el formato correcto.

## Flujo de Trabajo (Human-in-the-Loop)

```
┌─────────────┐     ┌────────────────────┐     ┌───────────────┐
│  1. Ingesta  │────▶│  2. Redacción IA   │────▶│  3. Compilar  │
│  de contexto │     │  (Content-as-Code) │     │  localmente   │
└─────────────┘     └────────────────────┘     └───────────────┘
       │                     │                        │
  Lee DESIGN.md        Genera .md/.html          npm run build
  Lee navarro-bores.com  con clases CSS           → dist/*.pdf
       │                     │                        │
       ▼                     ▼                        ▼
  Alinea tono         Tú revisas y              PDF pixel-perfect
  y nivel técnico     ajustas contenido         con glassmorphism
```

### Paso 1: Ingesta de Contexto
La IA lee `DESIGN.md` y opcionalmente la web corporativa para alinear tono y nivel técnico.

### Paso 2: Redacción Inyectada
Solicitas la generación del contenido inyectando la estética visual:
> "Desarrolla una presentación sobre micro-segmentación. Aplica el theme blueup. Usa glass-cards para los vectores de aislamiento."

### Paso 3: Compilación Local
Ejecutas `npm run build` para generar PDFs donde el cristal translúcido, la tipografía Inter y los gradientes se renderizan con fidelidad absoluta.

## Dependencias

| Paquete | Versión | Propósito |
|---|---|---|
| `@marp-team/marp-cli` | ^4.1 | Motor de presentaciones |
| `playwright` | ^1.52 | Renderizado HTML→PDF (Chromium headless) |
| Node.js | ≥ 18 | Runtime |
