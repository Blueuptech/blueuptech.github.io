---
title: Implementation Plan
description: Fases de implementación y lista de tareas del proyecto IDColab Zero Trust
---

# Implementation Plan

## Objetivo

Architecture de confianza cero (Zero Trust) donde el acceso al Frontend y Backend está mediado nativamente por la integración del SDK de OpenZiti `@openziti/ziti-sdk-browser` directamente en la aplicación Angular, conectándose a una red Overlay sin necesidad de plugins de navegador externos.

## Fases

### Fase 1: Infraestructura y Red

- Análisis y configuración de la infraestructura Docker (`keycloak-api-sys/DockerFiles` y `docker-compose.yml`)
- Compilación de la API nativa de Quarkus y despliegue usando contenedores Docker
- Integración y despliegue de los controladores/routers de OpenZiti

### Fase 2: Configuración de Identidad (Keycloak)

- Arranque de Keycloak en la imagen base orquestada con el resto de servicios
- Configuración de Realm, Clients y flujos de autenticación OAuth2 + PKCE para el Zero Trust Stack

### Fase 3: Plugin Zero Trust (Extensión de Chrome)

- Inicialización de proyecto aislado en TypeScript para la extensión
- Configuración de Webpack para el empaquetado del plugin y `manifest.json` (V3)
- Integración del Service Worker con `@openziti/ziti-sdk-browser`
- Gestión de sesiones y mediación de peticiones de red transparentes usando la red Ziti

### Fase 4: Aplicaciones y Mediación (Frontend & Backend)

- Implementación de la aplicación Frontend en Angular
- Protección y restricción del tráfico hacia el Frontend y la API para que sólo admitan conexiones provenientes del cliente OpenZiti autenticado

## Lista de Tareas

### Infraestructura Backend & Ziti

- [ ] Compilar el binario nativo de la API Quarkus (`keycloak-api-sys`)
- [ ] Levantar los contenedores de Keycloak, la API y la red OpenZiti mediante Docker Compose
- [ ] Configurar el entorno local usando variables de entorno (`.env`) para credenciales

### Red OpenZiti

- [ ] Establecer las políticas de acceso, servicios y endpoints en la red de OpenZiti (Zero Trust)
- [ ] Generar identidades (JWT/Enrollment) correspondientes para integrarlas con la extensión

### Plugin Chrome (Manifest V3)

- [ ] Crear la estructura de carpetas y configurar `tsconfig.json` y `webpack.config.js`
- [ ] Desarrollar los scripts del Service Worker (`background.ts`)
- [ ] Instalar el paquete `@openziti/ziti-sdk-browser`
- [ ] Implementar la autenticación de la identidad de OpenZiti dentro del Service Worker
- [ ] Interceptar el tráfico de los dominios seguros hacia la red overlay

### Frontend / Integración Final

- [ ] Validar flujos de inicio de sesión de usuario final
- [ ] Confirmar que todo acceso HTTP(S) ajeno a la red Ziti hacia los microservicios es denegado
- [ ] Probar el acceso en el navegador Chrome con la extensión encendida y apagada
