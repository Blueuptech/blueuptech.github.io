---
title: Agentes & MCP — Nexus Orchestrator
description: Servidores MCP, skills de agentes y orquestación multi-agente con ADK
---

# Agentes & MCP

## Servidores MCP Registrados

Nexus gestiona 9 servidores MCP en `~/.gemini/settings.json` que extienden las capacidades de Gemini CLI:

| Servidor | Runtime | Propósito |
|---|---|---|
| `nexus-memory` | Python 3.13 | Caché de conocimiento local vía SQLite (`nexus_memory.db`) |
| `gcloud` | npx | Google Cloud SDK — gestión general de recursos |
| `cloud-run` | npx | Despliegues y gestión de servicios Cloud Run |
| `observability` | npx | Logs, métricas, trazas y alertas de GCP |
| `chrome-devtools` | npx | Testing de UI, Lighthouse y análisis de rendimiento |
| `cicd` | Go binary (x86_64) | CI/CD con Cloud Build y Artifact Registry |
| `filesystem` | npx | Acceso a ficheros del proyecto |
| `sequential-thinking` | npx | Razonamiento paso a paso estructurado |
| `fetch` | uvx | Fetching de URLs y APIs externas |

## Extensiones Gemini CLI

| Extensión | Descripción |
|---|---|
| **Stitch** | Diseño de UI con design systems (transporte SSE) |
| **Nanobanana** | Generación de imágenes, iconos y diagramas |
| **Google Workspace** | Integración con Gmail, Drive y Calendar |

## Servidor nexus-memory (SQLite)

El servidor MCP local de memoria persistente — implementado en `nexus_orchestrator/mcp_servers/local_knowledge.py`:

```python
from mcp.server.fastmcp import FastMCP

mcp = FastMCP("nexus-memory")

@mcp.tool()
def save_to_memory(key: str, value: str) -> str:
    """Guarda información en la memoria persistente local."""
    # INSERT OR REPLACE en tabla 'knowledge' (SQLite)

@mcp.tool()
def query_from_memory(key: str) -> str:
    """Recupera información previamente guardada."""
    # SELECT FROM knowledge WHERE key = ?
```

### Esquema de base de datos

```sql
CREATE TABLE knowledge (
    id        INTEGER PRIMARY KEY AUTOINCREMENT,
    key       TEXT UNIQUE,
    value     TEXT,
    timestamp DATETIME DEFAULT CURRENT_TIMESTAMP
);
```

### Ejecución

```bash
# El servidor se ejecuta en modo STDIO (el que usa Gemini CLI)
python3 nexus_orchestrator/mcp_servers/local_knowledge.py
```

## Arquitectura Multi-Agente (ADK)

Nexus utiliza el **Agent Development Kit (ADK)** de Google para orquestación multi-agente con routing jerárquico:

```
                ┌──────────────────┐
                │   Orchestrator   │
                │  (Hierarchical   │
                │   Routing)       │
                └───────┬──────────┘
           ┌────────────┼────────────┐
           ▼            ▼            ▼
   ┌──────────────┐ ┌──────────┐ ┌──────────┐
   │  Researcher  │ │  Coder   │ │  Budget  │
   │  (MCP Search)│ │  (Clean  │ │  Guard   │
   │              │ │   code)  │ │  (Skill) │
   └──────────────┘ └──────────┘ └──────────┘
```

### Agentes Planificados

| Agente | Ubicación | Rol |
|---|---|---|
| **Orchestrator** | `agents/orchestrator.py` | Cerebro — recibe peticiones y delega con Hierarchical Routing |
| **Researcher** | `agents/researcher.py` | Especialista en obtención de datos (usa MCP de búsqueda) |
| **Coder** | `agents/coder.py` | Especialista en generación de código limpio con docstrings |

### Skills (Instrucciones de Comportamiento)

Las skills son documentos Markdown que definen comportamientos esperados de los agentes:

::: details Budget Guard Skill
- Evaluar si la tarea puede resolverse localmente (regex, scripts simples, conocimiento interno)
- Si se requiere LLM, asegurar el uso del modelo más pequeño posible (Flash)
- Bloquear llamadas redundantes o repetitivas a la API
:::

::: details Optimization Skill
- Analizar uso de tokens y sugerir estrategias de poda
- Monitorizar y reportar si alguna petición excede 100k tokens
- Minimizar el bloat de contexto manteniendo calidad de razonamiento
:::

## Gestión de Servidores (`inject_config.py`)

CLI Python para manipulación segura de `~/.gemini/settings.json`:

```bash
# Listar servidores configurados
python3 inject_config.py list-servers

# Añadir un servidor
python3 inject_config.py add-server "nombre" "comando" '["arg1", "arg2"]' '{"ENV_VAR": "valor"}'

# Eliminar un servidor
python3 inject_config.py remove-server "nombre"
```

El script evita la manipulación inline de JSON desde shell, previniendo errores de interpolación y garantizando la integridad del fichero de configuración.
