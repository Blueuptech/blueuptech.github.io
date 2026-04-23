---
title: Tech Stack — Nexus Orchestrator
description: Stack técnico del framework de orquestación multi-agente
---

# Tech Stack

## Lenguajes y Runtimes

| Tecnología | Versión | Uso |
|---|---|---|
| **Python** | 3.13+ (`requires-python >= 3.12`) | Servidores MCP, agentes ADK, scripts de configuración |
| **Go** | latest | Compilación nativa de extensiones MCP (e.g. CICD para x86_64) |
| **Node.js** | v25+ | Ejecución de servidores MCP via `npx` |
| **Bash** | 5.x | Scripts de automatización, healthcheck, sandbox |

## Dependencias Python

Definidas en `pyproject.toml`:

```toml
[project]
name = "nexus-orchestrator"
version = "1.0.0"
requires-python = ">=3.12"

dependencies = [
    "mcp>=1.27.0,<2.0",          # SDK de Model Context Protocol
    "pydantic>=2.12,<3.0",       # Validación de datos
    "pydantic-settings>=2.13,<3.0",  # Configuración tipada
]

[project.optional-dependencies]
dev = [
    "pytest>=8.0",               # Framework de testing
    "ruff>=0.4",                 # Linter & formatter
]
```

## Frameworks y Herramientas

| Herramienta | Propósito |
|---|---|
| **MCP SDK** (`mcp` v1.27+) | Framework para crear servidores de Model Context Protocol |
| **FastMCP** | API simplificada del SDK para definir tools con decoradores |
| **Pydantic** | Validación y serialización de datos |
| **ADK** (Agent Development Kit) | Framework de Google para orquestación multi-agente |
| **SQLite** | Base de datos embebida para caché de conocimiento (`nexus_memory.db`) |
| **Ruff** | Linter y formatter de Python (target: `py312`, line-length: `100`) |

## Infraestructura

| Servicio | Configuración |
|---|---|
| **Vertex AI (Gemini)** | Modelos de IA — `gemini-3-flash-preview` (90%) y `gemini-2.5-pro` (10%) |
| **Google Cloud Run** | Microservicios de apoyo con `min-instances=0` (scale-to-zero) |
| **GCP Región** | `us-central1` / `us-east1` (Tier 1 — Free Tier) |
| **Pub/Sub** | Topics para alertas de presupuesto (`budget-alerts`, `critical-budget-alerts`) |
| **Terraform** | Infraestructura como código (Google Cloud Foundation Fabric) |

## Gestores de Paquetes

| Gestor | Ámbito |
|---|---|
| **uv** / **uvx** | Entorno virtual Python, ejecución de herramientas (e.g. `fetch` MCP) |
| **npm** / **npx** | Servidores MCP basados en Node.js |
| **pip** | Dependencias Python del proyecto |

## Estándares de Código

```yaml
Linting:       ruff (select: E, F, I, N, W)
Line-length:   100 caracteres
Python target: py312
Type hints:    Obligatorios en todas las funciones
Docstrings:    Estilo Google, en español
Commits:       Conventional Commits (feat:, fix:, refactor:, docs:)
Idioma código: Inglés
Idioma docs:   Español
```
