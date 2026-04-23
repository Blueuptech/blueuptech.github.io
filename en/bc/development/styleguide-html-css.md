---
title: "Styleguide: HTML/CSS"
description: Google HTML/CSS Style Guide — resumen de reglas clave
---

# Google HTML/CSS Style Guide

Resumen de reglas clave del [Google HTML/CSS Style Guide](https://google.github.io/styleguide/htmlcssguide.html).

## 1. Reglas Generales

| Regla | Detalle |
|-------|---------|
| **Protocol** | Usar HTTPS para todos los recursos embebidos |
| **Indentation** | Indentar con 2 espacios. No usar tabs |
| **Capitalization** | Solo minúsculas para todo el código |
| **Trailing Whitespace** | Eliminar todo trailing whitespace |
| **Encoding** | UTF-8 (sin BOM). Especificar `<meta charset="utf-8">` |

## 2. HTML Style Rules

- **Document Type:** Usar `<!doctype html>`
- **HTML Validity:** Usar HTML válido
- **Semantics:** Usar elementos HTML según su propósito (ej. `<p>` para párrafos)
- **Multimedia Fallback:** Proporcionar texto `alt` para imágenes
- **Separation of Concerns:** Separar estrictamente estructura (HTML), presentación (CSS) y comportamiento (JavaScript)
- **`type` Attributes:** Omitir atributos `type` para stylesheets y scripts

## 3. HTML Formatting

- Usar nueva línea para cada elemento block, list o table, e indentar sus hijos
- Usar comillas dobles (`""`) para valores de atributos

## 4. CSS Style Rules

- **CSS Validity:** Usar CSS válido
- **Class Naming:** Usar nombres significativos y genéricos. Separar palabras con guión (`-`)

::: tip Naming
- ✅ Bien: `.video-player`, `.site-navigation`
- ❌ Mal: `.vid`, `.red-text`
:::

- **ID Selectors:** Evitar selectores ID para estilos. Preferir selectores de clase
- **Shorthand Properties:** Usar propiedades shorthand donde sea posible
- **`0` and Units:** Omitir unidades para valores `0` (ej. `margin: 0;`)
- **Leading `0`s:** Incluir siempre `0` iniciales (ej. `font-size: 0.8em;`)
- **Hex Notation:** Usar notación hex de 3 caracteres donde sea posible (ej. `#fff`)
- **`!important`:** Evitar su uso

## 5. CSS Formatting

| Regla | Detalle |
|-------|---------|
| **Declaration Order** | Alfabetizar declaraciones dentro de una regla |
| **Indentation** | Indentar todo el contenido de bloque |
| **Semicolons** | Usar punto y coma después de cada declaración |
| **Spacing** | Espacio después de `:` de propiedad, espacio antes de `{` |
| **Selectors** | Nueva línea para cada selector y declaración |
| **Rule Separation** | Separar reglas con nueva línea |
| **Quotation Marks** | Usar single quotes (`''`) en selectores de atributo |

::: warning
**SER CONSISTENTE.** Al editar código, coincidir con el estilo existente.
:::
