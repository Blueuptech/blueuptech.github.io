---
title: "Requisitos: Global UI & Navegación"
description: Requisitos funcionales de la interfaz global y navegación de la plataforma AML
---

# Global UI & Navegación

## Overview

La aplicación requiere un shell global persistente compuesto por un menú de navegación lateral (sidebar) y una barra de cabecera superior (header).

## 1. Estructura del Layout Global

- **Sidebar (Izquierda):** Debe contener enlaces de navegación a los módulos primarios: "Risk Dashboards", "Policy Management", "Audit Logs" y "Settings". Debe ser colapsable para maximizar la densidad de datos.
- **Header (Superior):** Debe mostrar el perfil del usuario actual, estado de conexión (túnel NetFoundry activo/inactivo), y contexto del entorno actual.
- **Área de Contenido Principal:** Ocupa el espacio restante del viewport, optimizado para data grids compatibles con WCAG 2.1 AA.

## 2. Flujo de Navegación

- Los usuarios al hacer click en un enlace del sidebar deben experimentar routing client-side seamless.
- La ruta activa debe estar visualmente destacada en el sidebar.
- Si un usuario carece del rol Keycloak para ver un módulo específico (ej. Policy Management), ese enlace debe ocultarse.

## 3. Componentes UI & Estética

::: info Generación via Stitch MCP
Todos los diseños, layouts y componentes **DEBEN** ser creados usando el Stitch MCP. Los diseños generados deben adherirse estrictamente a los estándares definidos en la plataforma Stitch y mantener una estética "Corporate Enterprise" (azules apagados, grises, alto contraste).
:::

- Las alertas o estados offline (ej. desconectado del OPA central) deben usar un banner de advertencia de alto contraste amarillo/rojo en la parte superior del área de contenido.

## 4. Mapeo de Arquitectura de Identidad & Auth

### Integración Keycloak
El Header debe recuperar el contexto de usuario (Nombre, Rol) del JWT de Keycloak. Los guards de routing deben enforcar control de acceso basado en roles (RBAC) a nivel de componente.

### SPIRE (Workload Identity)
La UI debe establecer mutual TLS (mTLS) con el proxy edge local. El indicador de estado de conexión en el header monitoriza directamente la validez de los SVIDs de corta duración emitidos por SPIRE.

### Biscuit Tokens
La UI depende del backend para emitir tokens Biscuit con capacidad offline; sin embargo, la UI debe manejar y mostrar gracefully las advertencias de expiración o atenuación de tokens.
