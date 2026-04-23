---
title: Herramientas CLI — Nexus Orchestrator
description: Scripts de automatización, healthcheck, scaffold y sandbox para Gemini CLI
---

# Herramientas CLI

## Visión General

Nexus proporciona un conjunto de scripts Bash y Python para gestionar el entorno Gemini CLI de forma profesional y reproducible.

```
nexus/
├── nexus-manager.sh      ← Gestor de extensiones + Content-as-Code
├── healthcheck.sh        ← Validación del entorno
├── scaffold.sh           ← Bootstrap de nuevos proyectos
├── sandbox-gemini.sh     ← Ejecución en modo seguro
├── inject_config.py      ← Gestión de settings.json
└── hooks/pre-commit      ← Validación pre-commit
```

---

## nexus-manager.sh

Gestor central de extensiones y servidores MCP. Soporta instalación automática de repositorios (Go y Node.js) compilados para la arquitectura local (x86_64 Intel).

### Comandos de sistema

```bash
# Reparar el servidor de memoria local (nexus-memory)
./nexus-manager.sh fix-memory

# Configurar claves de API y Workspace
./nexus-manager.sh setup-secrets

# Activar transporte SSE para la extensión Stitch
./nexus-manager.sh fix-stitch
```

### Content-as-Code

Pipeline integrado para generar presentaciones y documentos corporativos con la estética Dark Glassmorphism de BlueUP.

```bash
# Compilar todo (presentaciones + documentos)
./nexus-manager.sh content build

# Solo presentaciones (Marp → PDF + HTML)
./nexus-manager.sh content slides

# Solo documentos (Playwright → PDF)
./nexus-manager.sh content docs

# Preview con hot-reload
./nexus-manager.sh content dev
```

| Subcomando | Motor | Entrada | Salida |
|---|---|---|---|
| `slides` | Marp CLI | `src/presentations/*.md` | `dist/*.pdf` + `dist/*.html` |
| `docs` | Playwright (Chromium) | `src/documents/*.html` | `dist/*.pdf` |
| `build` | Ambos | Todo | Todo |
| `dev` | Marp (watch) | Presentaciones | Preview en navegador |

→ Documentación completa: [Content-as-Code](/es/nexus/content-as-code)

### Instalación de repositorios

```bash
# Descarga, compila y registra un servidor MCP desde GitHub
./nexus-manager.sh https://github.com/user/repo.git
```

El script detecta automáticamente el tipo de proyecto (Go o Node.js) y:
1. Clona o actualiza el repositorio en `/Volumes/DATOS/source/extensions/`
2. Busca el directorio del servidor (por nombre convencional)
3. Compila el binario nativo (Go) o instala dependencias (Node.js)
4. Registra el servidor en `~/.gemini/settings.json` via `inject_config.py`

---

## healthcheck.sh

Validación completa del entorno Gemini CLI: servidores MCP, extensiones y dependencias del sistema.

```bash
# Ejecución básica
./healthcheck.sh

# Con detalle de argumentos de cada servidor
./healthcheck.sh --verbose
```

### Verificaciones realizadas

| Verificación | Detalle |
|---|---|
| **Servidores MCP** | Comprueba que cada comando configurado existe y es ejecutable |
| **Extensiones** | Verifica presencia de `gemini-extension.json` en cada extensión |
| **Dependencias** | Valida `node`, `npx`, `python3`, `uvx`, `go`, `git` |
| **GEMINI.md** | Confirma existencia del archivo de contexto del proyecto |

### Ejemplo de salida

```
╭──────────────────────────────────────────────────╮
│  ⚡ Gemini CLI — MCP Server Healthcheck           │
╰──────────────────────────────────────────────────╯

SERVIDOR               ESTADO       DETALLE
────────────────────── ────────── ────────────────────────────
nexus-memory           ✓ OK       /Library/.../python3
gcloud                 ✓ OK       /usr/local/bin/npx
cicd                   ✓ OK       /Volumes/.../cicd-intel-server

Dependencias del sistema:
  ✓ node  →  v25.0.0
  ✓ python3  →  Python 3.13.2
  ✓ go  →  go1.24.2
```

---

## scaffold.sh

Bootstrap de nuevos proyectos con la estructura y configuración estándar para Gemini CLI.

```bash
# Uso básico
./scaffold.sh <nombre> <stack> [descripcion]

# Ejemplo
./scaffold.sh "mi-api" "Node.js, TypeScript, Express" "API REST para pagos"
```

### Estructura generada

```
mi-api/
├── .gemini/
│   ├── GEMINI.md       ← Contexto de proyecto (template procesado)
│   └── settings.json   ← Configuración local de MCP
├── src/
├── tests/
└── docs/
```

El template `GEMINI.md` se genera sustituyendo las variables `{{PROJECT_NAME}}`, `{{STACK}}` y `{{PROJECT_DESCRIPTION}}` del fichero base en `templates/gemini-project/.gemini/GEMINI.md`.

---

## sandbox-gemini.sh

Wrapper de seguridad que ejecuta Gemini CLI con un entorno sanitizado, filtrando variables sensibles y restringiendo el acceso al filesystem.

```bash
# Ejecutar Gemini en modo sandbox para un proyecto
./sandbox-gemini.sh /path/to/mi-proyecto
```

### Protecciones aplicadas

| Protección | Detalle |
|---|---|
| **Entorno limpio** | Usa `env -i` para arrancar sin variables heredadas |
| **Variables bloqueadas** | Filtra `GITHUB_TOKEN`, `GEMINI_API_KEY`, `AWS_*`, etc. |
| **Filesystem restringido** | El servidor MCP `filesystem` solo accede al directorio del proyecto |
| **PATH sanitizado** | Solo `/usr/local/bin:/usr/bin:/bin:$HOME/.local/bin` |

---

## hooks/pre-commit

Hook de Git que valida la configuración antes de cada commit.

### Instalación

```bash
cp hooks/pre-commit .git/hooks/pre-commit
chmod +x .git/hooks/pre-commit
```

### Validaciones

1. **JSON syntax** — Valida `~/.gemini/settings.json` y `.gemini/settings.json` del proyecto
2. **Secretos** — Bloquea commits de archivos `.env.secrets`, `.pem`, `.key`
3. **GEMINI.md** — Avisa si el directorio `.gemini/` existe pero falta `GEMINI.md`
4. **Modelos obsoletos** — Alerta si `GEMINI.md` referencia modelos deprecados
