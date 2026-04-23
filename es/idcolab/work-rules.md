---
title: Reglas de Trabajo
description: Reglas de oro, estándares de despliegue y toolchain del proyecto IDColab
---

# Reglas de Trabajo

## Reglas de Oro

1. **Ziti SDK Nativo**: Uso estricto de `@openziti/ziti-sdk-browser` integrado *directamente en el código del Frontend Angular*
2. **Autenticación Ziti y OIDC**: El frontend debe implementar el flujo OAuth2 + PKCE soportado por Keycloak y reutilizar el JWT para invocar `ziti.enroll(jwt)` generando material criptográfico local persistido
3. **Backend Local**: El proyecto Quarkus debe compilarse siempre en **modo JVM** (`./mvnw clean package`). Evitar estrictamente la compilación nativa con GraalVM en local para no agotar la RAM (8GB límite)
4. **Documentación en español**: Todas las explicaciones, comentarios de código y documentación deben generarse en español
5. **Yarn en Frontends (Docker)**: Los Dockerfiles de frontend usan **Yarn** (`yarn install --frozen-lockfile`) en lugar de npm. Esto es obligatorio porque `@openziti/ziti-browzer-core` (dependencia transitiva del SDK Ziti) exige Yarn mediante un `preinstall` script

## Estándares de Despliegue en Google Cloud Run

### 1. Arquitectura del Dockerfile (Estrategia de Producción)

::: warning Reglas Críticas
- **Compilación en Build-time**: Es obligatorio ejecutar `yarn build` durante la fase de construcción de la imagen. Esto evita latencias críticas y errores de timeout durante el arranque del contenedor
- **Servidor Web Estático**: El uso de servidores de desarrollo (`ng serve`, `vite`) está **prohibido** en producción. Usar servidor estático ligero (ej. `serve`)
- **Puerto dinámico**: El servidor debe escuchar en `${PORT}` (variable inyectada por Cloud Run), vinculándose a `0.0.0.0`
:::

### 2. Configuración de Angular CLI

- **Flags Obsoletos**: No usar `--disable-host-check` o `--allowed-hosts` en comandos de arranque. Usar la configuración nativa del framework

### 3. Workflow de GitHub Actions

- **Identidad de Servicio**: En `google-github-actions/deploy-cloudrun`, es obligatorio especificar la cuenta de servicio de IAM mediante `--service-account`

### 4. Requisitos de Infraestructura (IAM)

- La cuenta de servicio debe tener asignado el rol de **Usuario de cuentas de servicio** (`roles/iam.serviceAccountUser`) en el proyecto de destino

## Toolchain

| Herramienta | Uso |
|-------------|-----|
| **WARP** | Terminal principal. Levantar entornos (`start.sh`), revisar logs de Docker y flujos de red |
| **oz (OpenZiti CLI)** | Gestión de la Overlay: identidades, servicios, políticas de acceso |
| **Antigravity / Gemini CLI** | Scaffolding de código, generación de schematics Angular, resolución de bugs |

## Clientes OIDC (Keycloak realm `master`)

| Cliente | ID | Tipo | Uso |
|---------|----|----|-----|
| `portal-auth-client` | — | Public / PKCE S256 | Login del portal Angular |
| `legacy-proxy` | `eb4fd9be-...` | Public | zrok share OIDC para Legacy1 |
| `keycloak-api-sys` | `946f07a2-...` | Confidential / client_credentials | Backend Quarkus → admin API Keycloak |

## Usuarios de Demo

| Usuario | Email | Contraseña | Grupo |
|---------|-------|------------|-------|
| `maria.lopez` | `maria.lopez@tallergarcia.com` | `Demo2024!` | `TALLER_001` |
