---
title: "Styleguide: TypeScript"
description: Google TypeScript Style Guide — resumen de reglas clave
---

# Google TypeScript Style Guide

Resumen de reglas clave y mejores prácticas del [Google TypeScript Style Guide](https://google.github.io/styleguide/tsguide.html), enforcado mediante la herramienta `gts`.

## 1. Language Features

| Regla | Detalle |
|-------|---------|
| **Variable Declarations** | Siempre usar `const` o `let`. **`var` está prohibido.** Usar `const` por defecto |
| **Modules** | Usar ES6 modules (`import`/`export`). **No usar `namespace`** |
| **Exports** | Usar named exports (`export {MyClass};`). **No usar default exports** |
| **Functions** | Preferir function declarations para funciones nombradas. Arrow functions para callbacks |
| **String Literals** | Usar single quotes (`'`). Template literals para interpolación |
| **Equality** | Siempre usar triple equals (`===`) y (`!==`) |
| **Type Assertions** | **Evitar** `x as SomeType` y `y!`. Si es necesario, justificar claramente |

### Clases

- **No usar `#private` fields.** Usar el modificador `private` de TypeScript
- Marcar propiedades nunca reasignadas fuera del constructor con `readonly`
- **Nunca usar el modificador `public`** (es el default). Restringir visibilidad con `private` o `protected`

## 2. Disallowed Features

::: danger Prohibido
- **`any` Type** — Preferir `unknown` o un tipo más específico
- **Wrapper Objects** — No instanciar `String`, `Boolean` o `Number`
- **ASI** — No depender de Automatic Semicolon Insertion. **Terminar explícitamente con punto y coma**
- **`const enum`** — Usar plain `enum` en su lugar
- **`eval()` y `Function(...string)`** — Prohibidos
:::

## 3. Naming

| Convención | Uso |
|------------|-----|
| `UpperCamelCase` | Clases, interfaces, types, enums, decorators |
| `lowerCamelCase` | Variables, parámetros, funciones, métodos, propiedades |
| `CONSTANT_CASE` | Constantes globales, incluyendo valores de enum |

::: warning
**No usar `_` como prefijo o sufijo** para identificadores, incluyendo propiedades privadas.
:::

## 4. Type System

- **Type Inference:** Confiar en type inference para tipos simples y obvios. Ser explícito para tipos complejos
- **`undefined` y `null`:** Ambos soportados. Ser consistente dentro del proyecto
- **Optional vs `|undefined`:** Preferir parámetros y campos opcionales (`?`) sobre añadir `|undefined`
- **`Array<T>` Type:** Usar `T[]` para tipos simples. Usar `Array<T>` para tipos union complejos
- **`{}` Type:** **No usar `{}`**. Preferir `unknown`, `Record<string, unknown>` u `object`

## 5. Comments and Documentation

- Usar `/** JSDoc */` para documentación, `//` para comentarios de implementación
- **No declarar tipos en bloques `@param` o `@return`** — es redundante en TypeScript
- Los comentarios deben añadir información, no solo restatar el código
