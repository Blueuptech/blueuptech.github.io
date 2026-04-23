---
title: "Entregable: API Toolbox Keycloak"
description: Documentation técnica del sistema API Toolbox Keycloak (keycloak-api-sys)
---

# API Toolbox Keycloak

## Resumen Ejecutivo

Sistema API backend construido con **Quarkus + Apache Camel** que actúa como proxy de administración del servidor Keycloak. Proporciona una API REST unificada para gestionar usuarios, roles, grupos y organizaciones del realm, abstrayendo la complejidad de la Keycloak Admin API.

### Main Objectives

- **Simplificar la gestión** de identidades Keycloak mediante una API REST limpia
- **Abstraer la complejidad** de la Keycloak Admin API nativa
- **Proporcionar CRUD completo** para usuarios, roles, grupos y organizaciones
- **Mantener estándares de error** con formato RFC 7807

### Módulos Incluidos

| Módulo | Description |
|--------|-------------|
| **Autenticación** | Obtención de token admin via client_credentials |
| **Usuarios** | CRUD completo, búsqueda, reset de contraseña, gestión de sesiones |
| **Roles y Permisos** | CRUD de roles, asignación de permisos |
| **Grupos** | CRUD de grupos, asignación de usuarios |
| **Organizaciones** | CRUD de organizaciones Keycloak |

## Stack Tecnológico

| Componente | Versión / Detalle |
|------------|-------------------|
| **Runtime** | Quarkus (modo JVM) |
| **Integración** | Apache Camel |
| **Lenguaje** | Java 21 |
| **Auth** | OAuth2 client_credentials (Keycloak) |
| **Errores** | RFC 7807 Problem Details |

::: danger Modo JVM Obligatorio
Compilar siempre en modo JVM (`./mvnw clean package`). **Nunca** usar compilación nativa GraalVM — el límite de 8GB RAM lo impide.
:::

## Main Components

| Ruta | Responsabilidad |
|------|-----------------|
| `src/main/java/.../resource/` | REST endpoints (JAX-RS) |
| `src/main/java/.../service/` | Lógica de negocio y comunicación con Keycloak Admin API |
| `src/main/java/.../dto/` | Objetos de transferencia de datos |
| `src/main/java/.../exception/` | Manejo de errores RFC 7807 |
| `src/main/resources/application.properties` | Configuración Quarkus + Keycloak |

## Configuración

### Variables de Entorno

| Variable | Description | Ejemplo |
|----------|-------------|---------|
| `KEYCLOAK_URL` | URL del servidor Keycloak | `https://auth-frontdoor.navarro-bores.com` |
| `KEYCLOAK_REALM` | Realm de administración | `master` |
| `KEYCLOAK_CLIENT_ID` | Client ID (confidential) | `keycloak-api-sys` |
| `KEYCLOAK_CLIENT_SECRET` | Secret del client | `***` |
| `KEYCLOAK_ADMIN_REALM` | Realm objetivo de gestión | `master` |

## Endpoints

### Autenticación

| Método | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/auth/token` | Obtiene token admin via client_credentials |

### Usuarios

| Método | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/users` | Listado de usuarios (paginado) |
| GET | `/api/users/{id}` | Detalle de usuario |
| GET | `/api/users/search?username=...` | Búsqueda por username |
| POST | `/api/users` | Crear usuario |
| PUT | `/api/users/{id}` | Actualizar usuario |
| DELETE | `/api/users/{id}` | Eliminar usuario |
| PUT | `/api/users/{id}/reset-password` | Reset de contraseña |
| GET | `/api/users/{id}/sessions` | Sesiones activas del usuario |
| DELETE | `/api/users/{id}/sessions` | Cerrar todas las sesiones |

### Roles y Permisos

| Método | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/roles` | Listado de roles |
| GET | `/api/roles/{id}` | Detalle de rol |
| POST | `/api/roles` | Crear rol |
| PUT | `/api/roles/{id}` | Actualizar rol |
| PUT | `/api/roles/{id}/activate/{enabled}` | Activar/Desactivar rol |
| GET | `/api/roles/{name}/permissions` | Permisos de un rol |

### Grupos

| Método | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/groups` | Listado de grupos |
| GET | `/api/groups/{id}` | Detalle de grupo |
| POST | `/api/groups` | Crear grupo |
| PUT | `/api/groups/{id}` | Actualizar grupo |
| DELETE | `/api/groups/{id}` | Eliminar grupo |
| GET | `/api/groups/{id}/members` | Miembros de un grupo |
| PUT | `/api/groups/{id}/members/{userId}` | Añadir usuario al grupo |
| DELETE | `/api/groups/{id}/members/{userId}` | Eliminar usuario del grupo |

### Organizaciones

| Método | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/organizations` | Listado de organizaciones |
| POST | `/api/organizations` | Crear organización |
| GET | `/api/organizations/{id}` | Detalle de organización |

## Esquemas de Datos (DTOs)

### UserDto

| Campo | Tipo | Description |
|-------|------|-------------|
| `id` | String | Identificador UUID |
| `username` | String | Nombre de usuario |
| `firstName` | String | Nombre |
| `lastName` | String | Apellido |
| `email` | String | Correo electrónico |
| `enabled` | boolean | Estado activo/inactivo |
| `emailVerified` | boolean | Email verificado |
| `roles` | List\<RoleDto\> | Roles asignados |
| `groups` | List\<GroupDto\> | Grupos asignados |

### RoleDto

| Campo | Tipo | Description |
|-------|------|-------------|
| `id` | String | Identificador |
| `name` | String | Nombre del rol |
| `description` | String | Description |
| `enabled` | boolean | Estado |

### GroupDto

| Campo | Tipo | Description |
|-------|------|-------------|
| `id` | String | Identificador |
| `name` | String | Nombre del grupo |
| `path` | String | Path jerárquico |

### ErrorResponse (RFC 7807)

| Campo | Tipo | Description |
|-------|------|-------------|
| `type` | String | URI del tipo de error |
| `title` | String | Título del error |
| `status` | int | Código HTTP |
| `detail` | String | Description detallada |
| `instance` | String | URI de la petición |

## Manejo de Errores

Todos los errores siguen el formato **RFC 7807 Problem Details**:

| Código HTTP | Significado |
|-------------|-------------|
| `400` | Bad Request — datos inválidos |
| `401` | Unauthorized — token ausente o expirado |
| `403` | Forbidden — permisos insuficientes |
| `404` | Not Found — recurso no encontrado |
| `409` | Conflict — recurso duplicado |
| `500` | Internal Server Error |

## Operación y Monitoreo

### Health Endpoints (Quarkus SmallRye Health)

| Endpoint | Propósito |
|----------|-----------|
| `/q/health` | Health check completo |
| `/q/health/live` | Liveness probe |
| `/q/health/ready` | Readiness probe |

### Métricas

Expuestas via Micrometer en `/q/metrics` (formato Prometheus).

## Despliegue

### Development

```bash
cd keycloak-api-sys
./mvnw quarkus:dev
```

### Docker

```bash
./mvnw clean package -DskipTests
docker build -f src/main/docker/Dockerfile.jvm -t keycloak-api-sys .
docker run -p 8080:8080 keycloak-api-sys
```

### Compilación JAR

```bash
./mvnw clean package -DskipTests
java -jar target/quarkus-app/quarkus-run.jar
```

## Funcionalidades por Módulo

| Módulo | Funcionalidades |
|--------|-----------------|
| **Gestión de Usuarios** | CRUD completo, búsqueda, reset contraseña, sesiones |
| **Gestión de Roles** | CRUD, activar/desactivar, permisos |
| **Gestión de Grupos** | CRUD, asignación de miembros |
| **Gestión de Organizaciones** | CRUD organizaciones Keycloak |
| **Autenticación** | Token admin via client_credentials |
