---
title: "Entregable: Angular Schematic"
description: Documentación técnica del Schematic tb-front-base para proyectos Angular con Keycloak
---

# Angular Schematic — tb-front-base

## Resumen Ejecutivo

Schematic `tb-front-base` es un acelerador de proyectos frontend Angular. Automatiza la creación de una base funcional con arquitectura estandarizada, integración con Keycloak y módulos iniciales de administración de usuarios, roles y perfil.

**Propósito**: Reducir tiempos de arranque, asegurar consistencia técnica y entregar un punto de partida estable para desarrollos frontend corporativos.

### Objetivos Principales

- **Acelerar la configuración inicial** de nuevos proyectos Angular
- **Asegurar la uniformidad** en la estructura de directorios, dependencias y scripts
- **Garantizar la integración inmediata** de la autenticación con Keycloak
- **Ofrecer componentes base reusables** (gestión de usuarios, roles y perfil)
- **Optimizar el ciclo de vida** del proyecto (pruebas, despliegue y mantenimiento)

### Módulos Incluidos

| Módulo | Descripción |
|--------|-------------|
| **Core** | Autenticación, guardas, interceptores, theming, responsividad |
| **Features** | Gestión de usuarios, roles y perfil |
| **Shared** | Componentes UI reutilizables y servicios de notificación |

## Stack Tecnológico

| Componente | Versión |
|------------|---------|
| Node.js | 25.0.0 |
| Angular CLI | 21.1.0 |
| Angular (proyecto generado) | 20.x |
| Angular Material/CDK | 20.x |
| keycloak-angular / keycloak-js | 20.x / 26.x |
| RxJS / TypeScript | 7.8 / 5.9 |

## Componentes Principales

| Ruta | Responsabilidad |
|------|-----------------|
| `src/collection.json` | Registro del schematic tb-front-base |
| `src/tb-front-base/index.ts` | Regla principal y orquestación |
| `src/tb-front-base/functions/` | Actualiza angular.json, package.json, app.config |
| `src/tb-front-base/files/` | Plantillas del proyecto generado |
| `bin/schematic-nb-project-20.js` | CLI wrapper |

## Flujo de Procesamiento

1. **`generateRepo`**: Inicializa el repositorio ejecutando `ng-new` con parámetros: nombre, prefijo, modo estricto y routing
2. **`generateFilesArray`**: Copia las plantillas base para componentes y features
3. **`updateFiles` + `templatesSource`**: Aplica los placeholders (`<%= %>`) en los archivos copiados
4. **`updateAppConfig`**: Configura la integración con Keycloak y los interceptores HTTP
5. **`generateFiles`**: Crea archivos de configuración para environments y Docker
6. **`updateAngularJson`**: Añade configuraciones específicas de build y serve
7. **`updatePackageJson`**: Modifica scripts y gestiona dependencias

## Seguridad

El uso de **keycloak-angular** permite implementar:
- `AuthGuard` para la protección de rutas
- `Interceptor HTTP` encargado de inyectar el token de autenticación en las solicitudes
- **Bloqueo de navegación** en ausencia de una sesión válida

## Configuración

### Variables de Entorno

| Variable | Descripción |
|----------|-------------|
| `apiKeyCloak` | URL del servidor Keycloak |
| `realmKeyCloak` | Nombre del realm |
| `clientIdKeyCloak` | Client ID del frontend |
| `apiUrl` | URL base del backend |

### Archivos de Entorno

| Archivo | Propósito |
|---------|-----------|
| `environment.base.ts` | Valores base de Keycloak y backend |
| `environment.local.ts` | Entorno local |
| `environment.dev.ts` | Entorno desarrollo |
| `environment.cert.ts` | Entorno certificación |
| `environment.prod.ts` | Entorno producción |

### Configuraciones de Build (angular.json)

| Ambiente | Optimización | SourceMap | FileReplacement |
|----------|-------------|-----------|-----------------|
| prod | true | false | `environment.ts` → `environment.prod.ts` |
| local | false | true | `environment.ts` → `environment.local.ts` |
| dev | false | true | `environment.ts` → `environment.dev.ts` |
| cert | false | true | `environment.ts` → `environment.cert.ts` |

## Endpoints

Base URL: `environment.apiUrl`

| Método | Endpoint | Descripción |
|--------|----------|-------------|
| POST | `auth` | Obtiene token de backend |
| GET | `users` | Listado de usuarios |
| GET | `users/{id}` | Detalle de usuario |
| GET | `users/search?username=...` | Búsqueda por username |
| POST | `users/create` | Creación de usuario |
| PUT | `users/update` | Actualización de usuario |
| PUT | `users/{id}/reset-password` | Reset de contraseña |
| GET | `roles` | Listado de roles |
| GET | `roles/{id}` | Detalle de rol |
| GET | `roles/{rolName}/permissions` | Permisos de rol |
| POST | `roles/create` | Creación de rol |
| PUT | `roles/update/{id}` | Actualización de rol |
| PUT | `roles/activate/{enabled}/role/{id}` | Activar/Desactivar rol |

## Esquemas de Datos (DTOs)

### IUsersBase

| Campo | Tipo | Descripción |
|-------|------|-------------|
| `id` | string | Identificador |
| `username` | string | Usuario |
| `firstName` | string | Nombre |
| `lastName` | string | Apellido |
| `email` | string | Correo |
| `enabled` | boolean | Estado |

### IUsersCreate / IUsersUpdate

| Campo | Tipo | Descripción |
|-------|------|-------------|
| `username` | string | Usuario |
| `firstName` | string | Nombre |
| `lastName` | string | Apellido |
| `email` | string | Correo |
| `enabled` | boolean | Estado |
| `roles` | IUsersRoles[] | Roles asignados |
| `id` | string | Solo en Update |

### IRolesItem

| Campo | Tipo | Descripción |
|-------|------|-------------|
| `id` | string | Identificador |
| `name` | string | Nombre |
| `description` | string | Descripción |
| `enabled` | boolean | Estado |
| `userRole` | boolean | Rol de usuario |
| `users` | number | Cantidad de usuarios |

## Funcionalidades por Módulo

| Módulo | Funcionalidades |
|--------|-----------------|
| **Gestión de Usuarios** | Listar, crear, editar, eliminar y resetear contraseña |
| **Gestión de Roles** | Listar, crear, editar y activar/desactivar roles |
| **Gestión de Perfil** | Pantalla base de perfil de usuario autenticado |
| **Core/Shared** | Breadcrumb dinámico, tabla reusable, modales y snackbars |

## Ejecución del Schematic

```bash
cd tb-front-base
npm run schematic:new-project-v20
```

## Pruebas

```bash
# Instalar globalmente la CLI de schematics
npm install -g @angular-devkit/schematics-cli

# Ejecutar pruebas unitarias (Jasmine)
npm run test
```

## Despliegue

### Desarrollo
Ejecutar el Schematic y levantar el proyecto con `ng serve` (modo local).

### Docker
Se incluyen Dockerfile y docker-compose. Se recomienda actualizar Node/Angular CLI para alinearlos con Angular 20.

### Publicación NPM

```bash
npm run build
npm publish
```
