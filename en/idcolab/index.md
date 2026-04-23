---
title: IDColab — Zero Trust Stack
description: Secure collaboration platform with Zero Trust architecture based on OpenZiti, Zrok and Keycloak
---

# IDColab — Zero Trust Stack

<div class="project-badge">🔐 Active Project</div>

## ¿Qué es IDColab?

**IDColab** es una plataforma de colaboración segura que permite a organizaciones exponer aplicaciones internas y legacy a usuarios externos **sin necesidad de VPN, agentes ni plugins en el navegador**. La plataforma implementa una arquitectura de **confianza cero (Zero Trust)** donde cada conexión es autenticada, autorizada y cifrada de extremo a extremo.

### Problem it Solves

Las empresas con aplicaciones internas (ERPs, CRMs, herramientas de gestión de talleres, etc.) necesitan dar acceso seguro a colaboradores externos sin exponer su red corporativa. Las soluciones tradicionales (VPN, túneles SSH, port forwarding) son complejas, inseguras y difíciles de gestionar.

### Value Proposition

| Característica | Description |
|---|---|
| 🔒 **Zero Trust nativo** | Cada petición se autentica y cifra mediante mTLS — no hay perímetro de red tradicional |
| 🌐 **Sin VPN ni plugins** | Los usuarios acceden desde cualquier navegador moderno, sin instalar nada |
| 🔑 **Identidad centralizada** | Gestión de usuarios, roles y grupos mediante Keycloak (OIDC/PKCE) |
| 🏗️ **Apps legacy sin modificar** | Las aplicaciones existentes se exponen tal cual, sin necesidad de cambios en su código |
| 📊 **Portal de gestión** | Interfaz Angular para administrar usuarios, accesos y monitorizar conexiones |

### Product Presentation

<div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; max-width: 100%; border-radius: 12px; margin: 1.5rem 0; box-shadow: 0 4px 24px rgba(0,0,0,0.15);">
  <iframe
    src="https://www.youtube.com/embed/Rl31rsWZDpw"
    style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: 0; border-radius: 12px;"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    referrerpolicy="strict-origin-when-cross-origin"
    allowfullscreen
    title="Presentación plataforma IDColab"
  ></iframe>
</div>

::: tip 🎬 Live Demo
El vídeo muestra el flujo completo de la plataforma: desde el acceso del usuario externo hasta la conexión segura con la aplicación interna del taller, pasando por la autenticación OIDC con Keycloak y la mediación de la red overlay OpenZiti.
:::

### Caso de uso: Talleres colaborativos

IDColab nace como solución para un escenario real: **talleres mecánicos** que necesitan compartir información de reparaciones, inventario y facturación con sus colaboradores (peritos, aseguradoras, proveedores) de forma segura y sin exponer sus sistemas internos a internet.

```
 Colaborador externo (perito)          Taller (red interna)
        │                                     │
        │  1. Accede a URL pública            │
        ▼                                     │
  ┌──────────────┐                            │
  │  Navegador   │  2. Login OIDC/PKCE        │
  │  (sin VPN)   │─────────────────────┐      │
  └──────────────┘                     │      │
                                       ▼      │
                              ┌──────────────┐│
                              │  Keycloak    ││  3. Verifica identidad
                              │  (IdP)       ││     + grupo + permisos
                              └──────┬───────┘│
                                     │        │
                              4. JWT │        │
                                     ▼        │
                              ┌──────────────┐│
                              │  Zrok Share  ││  5. Proxy seguro sobre
                              │  (overlay)   ││     red OpenZiti (mTLS)
                              └──────┬───────┘│
                                     │        │
                                     ▼        ▼
                              ┌──────────────────┐
                              │  App del taller   │
                              │  (Legacy, Flask)  │
                              │  localhost:5000   │
                              └──────────────────┘
```

---

## Architecture Técnica

Architecture de confianza cero que expone aplicaciones legacy e internas de forma segura mediante **OpenZiti** (overlay network), **Zrok** (ingress sin VPN) y **Keycloak** (autenticación OIDC), sin necesidad de agentes o plugins en el cliente.

```
 Browser
    │
    ▼  HTTPS (nginx + Let's Encrypt wildcard *.navarro-bores.com)
┌──────────────────────────────────────────────────────────────────────────┐
│  VM GCP: idcolab-ziti-controller  (34.175.7.45) — disco 20GB             │
│                                                                          │
│  ┌────────────────────┐   ┌─────────────────────────┐  ┌──────────────┐  │
│  │  Keycloak 26.5     │   │  zrok-controller         │  │  OpenZiti    │  │
│  │  :8080             │   │  idcolab-zrok:latest     │  │  Controller  │  │
│  │  idcolab-keycloak  │   │  :18080 (console UI)     │  │  :1280       │  │
│  │  :latest (branding)│   │  zrok-frontend           │  │  ZAC :8443   │  │
│  └────────────────────┘   │  idcolab-zrok:latest     │  └──────────────┘  │
│                           │  :18090 (proxy shares)   │                    │
│  ┌────────────────────┐   │  :18091 (OIDC server)    │                    │
│  │  nginx (systemd)   │   └─────────────────────────┘                    │
│  │  :80 / :443        │   ┌─────────────────────────┐                    │
│  │  Let's Encrypt TLS │   │  zrok-db                 │                    │
│  └────────────────────┘   │  postgres:16-alpine      │                    │
│                           └─────────────────────────┘                    │
└──────────────────────────────────────────────────────────────────────────┘
    │  OpenZiti Overlay (TLS mTLS)
    ▼
 Mac (Dev)
    ├─ zrok share reserved wno7a4yjxm2a → legacy1 (:5000)
    └─ portal-auth client (Angular dev)
```

## Public URLs

| URL | Servicio |
|-----|----------|
| `https://frontdoor.navarro-bores.com` | Portal Angular (Cloud Run) |
| `https://auth-frontdoor.navarro-bores.com` | Keycloak OIDC |
| `https://console-frontdoor.navarro-bores.com` | Zrok Controller UI |
| `https://wno7a4yjxm2a.navarro-bores.com` | **Legacy1** (Flask, via Zrok share) |

## Repository Structure

```
idcolab/
├── frontend/
│   ├── portal-auth/          # Angular app con @openziti/ziti-sdk-browser
│   └── private-app/          # Aplicación privada (SDK Ziti nativo)
├── backend/                  # Quarkus + Apache Camel (modo JVM)
├── keycloak-api-sys/         # API de administración de Keycloak
│   └── DockerFiles/          # Scripts de registro de clientes OIDC
├── infra/                    # Docker Compose local (dev)
├── keycloak-vm/              # Dockerfile del Keycloak con tema IDColab
├── tb-front-base/            # Angular Schematic generador
├── .github/workflows/
│   ├── deploy.yml            # Deploy portal-auth → Cloud Run
│   ├── deploy-backend.yml    # Deploy keycloak-api-sys → Cloud Run
│   └── ...                   # Otros workflows de CI/CD
├── RESTART_GUIDE.md          # Guía completa de arranque diario
└── GEMINI.md                 # Reglas de trabajo para IA
```

## Zero Trust Technologies

| Componente | Tecnología | Rol |
|------------|------------|-----|
| Overlay network | **OpenZiti** (quickstart) | mTLS entre todos los servicios |
| Ingress sin VPN | **Zrok** (`idcolab-zrok:latest`) | Expone apps locales via overlay — imagen personalizada con branding idcolab ZTA |
| Identity broker | **Keycloak 26.5.5** | OIDC/PKCE + OAuth2 JWT |
| SDK cliente | `@openziti/ziti-sdk-browser` | Angular integra Ziti nativamente |
| Tunnel público | **nginx + Let's Encrypt** | Wildcard cert `*.navarro-bores.com` directo a VM |

## Documentation

<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1rem; margin-top: 1rem;">

::: info 📐 Tech Stack
Angular, Quarkus, OpenZiti, Zrok, Keycloak.
→ [View tech stack](/en/idcolab/tech-stack)
:::

::: info 🚀 Implementation Plan
Fases y tareas del proyecto Zero Trust.
→ [View plan](/en/idcolab/implementation-plan)
:::

::: info 🔄 Restart Guide
Inicio rápido y troubleshooting diario.
→ [View restart guide](/en/idcolab/restart-guide)
:::

::: info 📋 Work Rules
Reglas de oro y estándares de despliegue.
→ [View rules](/en/idcolab/work-rules)
:::

::: info 📦 Angular Schematic
Documentation técnica del generador tb-front-base.
→ [View deliverable](/en/idcolab/deliverables/angular-schematic)
:::

::: info 🔑 API Toolbox Keycloak
Documentation técnica de keycloak-api-sys.
→ [View deliverable](/en/idcolab/deliverables/keycloak-api)
:::

</div>
