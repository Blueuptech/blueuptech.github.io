# Gemini CLI — Entorno de Development

> Documentation del entorno Gemini CLI configurado para el ecosistema de proyectos BlueUP.

## Overview

Gemini CLI es la interfaz de línea de comandos para interactuar con modelos Gemini de Google, extendida con servidores MCP (Model Context Protocol) que le dan acceso a herramientas, APIs y sistemas de ficheros.

Nuestro entorno está gestionado por **Nexus-Orchestrator**, un framework propio que incluye:
- Configuración centralizada de servidores MCP
- Scripts de automatización y healthcheck
- Templates de proyecto con el patrón "Conductor"
- Gobernanza de costes con alertas de presupuesto GCP

## Servidores MCP

| Servidor | Propósito | Runtime |
|---|---|---|
| `nexus-memory` | Caché de conocimiento local (SQLite) | Python 3.13 |
| `gcloud` | Google Cloud SDK general | npx |
| `cloud-run` | Despliegues y gestión Cloud Run | npx |
| `observability` | Logs, métricas, trazas, alertas | npx |
| `chrome-devtools` | Testing UI, Lighthouse, rendimiento | npx |
| `cicd` | CI/CD con Cloud Build y Artifact Registry | Go binary (x86_64) |
| `filesystem` | Acceso a ficheros del proyecto | npx |
| `sequential-thinking` | Razonamiento paso a paso estructurado | npx |
| `fetch` | Fetching de URLs y APIs externas | uvx |

## Extensiones

| Extensión | Description |
|---|---|
| **Stitch** | Diseño de UI con design systems |
| **Nanobanana** | Generación de imágenes, iconos y diagramas |
| **Google Workspace** | Integración con Gmail, Drive, Calendar |

## Patrón "Conductor" — GEMINI.md

Cada proyecto incluye un archivo `.gemini/GEMINI.md` que actúa como "memoria de proyecto" para el agente. Gemini CLI lo lee automáticamente al arrancar.

### Estructura estándar

```markdown
# Nombre del Proyecto — Conductor

## Objetivo          ← Qué hace el proyecto
## Arquitectura      ← Cómo está organizado
## Stack Técnico     ← Tecnologías usadas
## Convenciones      ← Reglas de código y commits
## Restricciones     ← Lo que el agente NO debe hacer
## Estructura        ← Directorios principales
```

### Proyectos configurados

| Proyecto | GEMINI.md | Notas |
|---|---|---|
| Nexus | ✅ `.gemini/GEMINI.md` | Framework de gestión |
| BC (BlueUPALM) | ✅ `.gemini/GEMINI.md` | DORA/SEPBLAC compliance |
| IDColab | ✅ `GEMINI.md` (raíz) | Zero Trust con OpenZiti |
| SDLC-Controls | ✅ `.gemini/GEMINI.md` | Jekyll site |
| Ziti Tunneler | ✅ `.gemini/GEMINI.md` | macOS tunneler |

## Guía de Onboarding

### 1. Requisitos previos

```bash
# Node.js (para servidores MCP basados en npx)
# Verificar que /usr/local/bin/node existe
node --version  # v25+

# Python 3.13 (para nexus-memory MCP server)
/Library/Frameworks/Python.framework/Versions/3.13/bin/python3 --version

# uv/uvx (para servidor fetch)
uvx --version

# Gemini CLI
gemini --version
```

### 2. Configuración inicial

```bash
# Clonar nexus
git clone <nexus-repo> /Volumes/DATOS/source/nexus

# Verificar estado del entorno
cd /Volumes/DATOS/source/nexus
./healthcheck.sh --verbose
```

### 3. Crear un nuevo proyecto

```bash
# Opción A: Script scaffold
./scaffold.sh "mi-proyecto" "Node.js, TypeScript" "Mi API REST"

# Opción B: Función shell (requiere source ~/.zshrc)
cd /path/to/mi-proyecto
gemini-init "mi-proyecto" "Python, FastAPI"
```

### 4. Comandos útiles

```bash
# Arrancar Gemini en un proyecto (lee GEMINI.md automáticamente)
cd /path/to/proyecto && gemini

# Arrancar Gemini en el proyecto Nexus
gemini-nexus

# Healthcheck de servidores MCP
./healthcheck.sh

# Gestión de servidores MCP
python3 inject_config.py list-servers
python3 inject_config.py add-server "nombre" "comando" '["arg1"]'
python3 inject_config.py remove-server "nombre"
```

## Troubleshooting

### Servidor MCP no arranca

1. Ejecutar `./healthcheck.sh --verbose`
2. Verificar que el binario/comando existe en el PATH
3. Para servidores npx: asegurar que `node` está en `/usr/local/bin/`
4. Para nexus-memory: verificar que `mcp` está instalado en Python 3.13

### Extensiones no disponibles

- Verificar `~/.gemini/extensions/extension-enablement.json`
- Los overrides deben incluir `/Volumes/DATOS/*` además de `/Users/arnavarr/*`

### Error "config.json conflict"

- Solo debe existir `~/.gemini/settings.json`
- Si aparece `config.json`, es un formato legacy — eliminarlo

### Tokens y secretos

- Los tokens (GITHUB_TOKEN, API keys) están en `~/.env.secrets` (chmod 600)
- Se cargan vía `source ~/.env.secrets` desde `.zshrc`
- **Nunca** hardcodear tokens en `.zshrc`, `settings.json` ni en código

## Architecture de Ficheros

```
~/.gemini/
├── settings.json              ← Configuración global (9 servidores MCP)
├── extensions/
│   ├── extension-enablement.json  ← Scope de extensiones
│   ├── Stitch/                    ← Extensión de diseño UI
│   ├── nanobanana/                ← Generación de imágenes
│   └── google-workspace-cli/      ← Integración Workspace
├── trustedFolders.json        ← Directorios de confianza
└── projects.json              ← Mapeo proyecto → nombre

/Volumes/DATOS/source/nexus/   ← Framework de gestión
├── .gemini/GEMINI.md          ← Contexto del proyecto
├── healthcheck.sh             ← Validación de servidores
├── sandbox-gemini.sh          ← Ejecución con entorno restringido
├── scaffold.sh                ← Bootstrap de nuevos proyectos
├── inject_config.py           ← CLI de gestión de settings.json
├── nexus-manager.sh           ← Gestor de extensiones
├── hooks/pre-commit           ← Validación pre-commit
└── templates/                 ← Templates de proyecto
```
