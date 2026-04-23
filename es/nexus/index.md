---
title: Nexus — Orchestrator Framework
description: Framework de orquestación multi-agente y gestión del entorno Gemini CLI
---

# Nexus — Orchestrator Framework

<div class="project-badge">⚡ Proyecto Activo</div>

Framework de gestión del entorno **Gemini CLI**: configuración de servidores MCP, extensiones, orquestación multi-agente (ADK) y gobernanza de costes sobre **Google Cloud (Vertex AI)**. Nexus proporciona la infraestructura que permite trabajar de forma profesional y reproducible con agentes de IA en todos los proyectos del ecosistema BlueUP.

## Arquitectura

```
                      ┌──────────────────────────┐
                      │    Gemini CLI (Terminal)  │
                      └────────────┬─────────────┘
                                   │ lee .gemini/GEMINI.md
                      ┌────────────▼─────────────┐
                      │  Patrón "Conductor"       │
                      │  (Contexto persistente)   │
                      └────────────┬─────────────┘
          ┌────────────────────────┼────────────────────────┐
          ▼                        ▼                        ▼
 ┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
 │  MCP Servers     │    │  Agent Skills   │    │  Cost Governance│
 │  (9 registrados) │    │  (ADK Python)   │    │  (GCP Budgets)  │
 └────────┬────────┘    └────────┬────────┘    └────────┬────────┘
          │                      │                      │
  ┌───────┴───────┐     ┌───────┴───────┐      ┌───────┴───────┐
  │ nexus-memory  │     │ orchestrator  │      │ $1 / $5 alerts│
  │ gcloud        │     │ researcher    │      │ scale-to-zero │
  │ cloud-run     │     │ coder         │      │ Free Tier     │
  │ cicd          │     └───────────────┘      └───────────────┘
  │ filesystem    │
  │ fetch         │
  │ ...           │
  └───────────────┘
```

## Componentes Principales

| Componente | Descripción |
|---|---|
| **Conductor (GEMINI.md)** | Archivo de contexto persistente que Gemini CLI lee al arrancar — define objetivo, stack, reglas y restricciones del proyecto |
| **nexus-manager.sh** | Script de automatización para instalar, reparar y vincular extensiones y servidores MCP |
| **Servidores MCP** | 9 servidores registrados en `~/.gemini/settings.json` que extienden las capacidades del agente |
| **nexus-memory** | Servidor MCP local basado en SQLite para persistencia de conocimiento entre sesiones |
| **Content-as-Code** | Pipeline de generación de presentaciones (Marp) y documentos (Playwright) con estética Dark Glassmorphism |
| **inject_config.py** | CLI Python para manipulación segura de `settings.json` sin interpolación inline |
| **scaffold.sh** | Bootstrap de nuevos proyectos con template de GEMINI.md y estructura estándar |
| **healthcheck.sh** | Validación completa de servidores MCP, extensiones y dependencias del sistema |
| **sandbox-gemini.sh** | Wrapper de seguridad que ejecuta Gemini CLI con entorno restringido |

## Proyectos Gestionados

| Proyecto | GEMINI.md | Descripción |
|---|---|---|
| **Nexus** | `.gemini/GEMINI.md` | Este framework de gestión |
| **BC (BlueUPALM)** | `.gemini/GEMINI.md` | Plataforma AML con compliance DORA/SEPBLAC |
| **IDColab** | `GEMINI.md` (raíz) | Stack Zero Trust con OpenZiti |
| **Content-as-Code** | `system_prompt/system.md` | Pipeline de contenido corporativo (Marp + Playwright) |
| **SDLC-Controls** | `.gemini/GEMINI.md` | Framework de controles SDLC |
| **Ziti Tunneler** | `.gemini/GEMINI.md` | Tunneler macOS nativo |

## Documentación

<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1rem; margin-top: 1rem;">

::: info 🔧 Tech Stack
Python, Go, Node.js, SQLite, Vertex AI.
→ [Ver tech stack](/es/nexus/tech-stack)
:::

::: info 🤖 Agentes & MCP
Servidores MCP, skills y orquestación multi-agente.
→ [Ver agentes y MCP](/es/nexus/agents-mcp)
:::

::: info 🛠️ Herramientas CLI
Scripts de automatización, healthcheck y scaffold.
→ [Ver herramientas](/es/nexus/cli-tools)
:::

::: info 💰 Gobernanza de Costes
Estrategia FinOps, alertas de presupuesto y optimización.
→ [Ver gobernanza](/es/nexus/cost-governance)
:::

::: info 🎨 Content-as-Code
Presentaciones y documentos con Dark Glassmorphism.
→ [Ver Content-as-Code](/es/nexus/content-as-code)
:::

</div>
