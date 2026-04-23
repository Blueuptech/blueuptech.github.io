---
title: Tech Stack
description: Stack tecnológico del proyecto IDColab Zero Trust
---

# Technology Stack

Stack tecnológico para la plataforma IDColab Zero Trust, diseñado para exponer aplicaciones de forma segura mediante una arquitectura de confianza cero.

## Frontend

| Tecnología | Propósito |
|------------|-----------|
| **Angular** | Framework principal (Schematics personalizados `tb-front-base`) |
| **TypeScript** | Lenguaje principal |
| **`@openziti/ziti-sdk-browser`** | SDK cliente Ziti integrado nativamente en Angular |
| **Keycloak JS** | Adaptador OIDC/PKCE para autenticación |

## Backend

| Tecnología | Propósito |
|------------|-----------|
| **Quarkus + Apache Camel** | API principal — compilación **modo JVM** (nunca GraalVM nativo por límite 8GB RAM) |
| **Java 21** | Runtime principal |
| **Keycloak Admin API** | Backend para gestión de usuarios y roles (`keycloak-api-sys`) |

## Red & Seguridad (Zero Trust)

| Tecnología | Propósito |
|------------|-----------|
| **OpenZiti** (quickstart) | Overlay network — mTLS entre todos los servicios |
| **Zrok** (`idcolab-zrok:latest`) | Ingress sin VPN — expone apps locales via overlay con branding IDColab |
| **Keycloak 26.5.5** | Identity broker — OIDC/PKCE + OAuth2 JWT |
| **nginx + Let's Encrypt** | Wildcard cert `*.navarro-bores.com` directo a VM GCP |

## Infraestructura

| Tecnología | Propósito |
|------------|-----------|
| **GCP Compute Engine** | VM `idcolab-ziti-controller` (34.175.7.45, europe-southwest1-a) |
| **Google Cloud Run** | Deploy de portal Angular y backend Keycloak API |
| **Docker Compose** | Orquestación de OpenZiti + Keycloak + Zrok en la VM |
| **GitHub Actions** | CI/CD para deploys a Cloud Run y gestión de Cloudflare DNS |
| **PostgreSQL 16** | Base de datos de Zrok (Alpine) |

## Reglas Técnicas Estrictas

::: danger Reglas de Oro
1. **Ziti SDK Nativo**: Uso estricto de `@openziti/ziti-sdk-browser` integrado directamente en Angular
2. **OAuth2 + PKCE**: El frontend implementa el flujo OIDC soportado por Keycloak y reutiliza el JWT para `ziti.enroll(jwt)`
3. **Modo JVM**: Quarkus siempre en modo JVM — **nunca compilación nativa GraalVM** (8GB RAM)
4. **Yarn en Docker**: Los Dockerfiles usan **Yarn** (`yarn install --frozen-lockfile`), no npm, por requisito de `@openziti/ziti-browzer-core`
5. **npm local**: En desarrollo local se puede usar `npm install --ignore-scripts`, pero `yarn.lock` debe mantenerse actualizado
:::
