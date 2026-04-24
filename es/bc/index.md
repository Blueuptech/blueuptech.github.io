---
title: BC — AML Platform
description: Plataforma de análisis y detección de blanqueo de capitales
---

# BC — Anti-Money Laundering Platform

<div class="project-badge">🛡️ Proyecto Activo</div>

Aplicación para el análisis y detección de información posiblemente derivada del blanqueo de capitales. Implementa una arquitectura de **Autorización Asíncrona Híbrida** que combina gobernanza centralizada con ejecución descentralizada en el edge.

## Audiencia

| Rol | Descripción |
|-----|-------------|
| **Compliance Officers** | Analistas investigando actividad sospechosa y gestionando alertas AML |
| **System Administrators** | Personal IT gestionando políticas de acceso, auth híbrida y despliegues edge |
| **External Auditors** | Reguladores revisando logs de compliance y trails de auditoría inmutables |

## Objetivos Principales

### Detección de amenazas en tiempo real
Identificar y bloquear transacciones sospechosas con ultra-baja latencia.

### Auditoría inmutable
Mantener logs criptográficos de todas las acciones y decisiones para compliance.

### Operaciones seguras en el edge
Habilitar operaciones autónomas de agentes en entornos descentralizados de forma segura.

## Features Clave

- **Risk Dashboards** — Analítica visual de transacciones flaggeadas y puntuaciones de riesgo
- **Policy Management UI** — Interfaz para definir políticas OPA centralizadas y caveats de agentes
- **Identity & Access Control** — Control granular sobre SVIDs, usuarios Keycloak y acceso de red

## Requisitos No-Funcionales

| Requisito | Detalle |
|-----------|---------|
| **Ultra-Low Latency** | Verificación en el edge con mínimo delay en procesamiento de transacciones |
| **High Resilience** | El sistema debe permanecer operativo ante fluctuaciones de red (capacidad offline) |
| **Data Sovereignty** | Los datos sensibles PII y financieros nunca abandonan los perímetros autorizados |

## Documentación

<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1rem; margin-top: 1rem;">

::: info 📐 Arquitectura
Modelo de Autorización Asíncrona Híbrida, flujo Zero-Trust paso a paso.
→ [Ver arquitectura](/es/bc/architecture)
:::

::: info 📋 Requisitos Funcionales
Global UI, Risk Dashboards, Policy Management.
→ [Ver requisitos](/es/bc/requirements/global-ui)
:::

::: info 🔧 Tech Stack
Frontend, backend, data, seguridad e infraestructura.
→ [Ver tech stack](/es/bc/tech-stack)
:::

::: info 📖 Desarrollo
Workflow TDD, guías de estilo de código.
→ [Ver workflow](/es/bc/development/workflow)
:::

::: info 🔌 Ingesta & Edge
Arquitectura CDC, verificación NATS, pre-validación ontológica y resiliencia DORA.
→ [Ver Edge Connector](/es/bc/development/edge-connector)
:::

::: info ⚖️ Compliance AML
Examen Especial SEPBLAC, screening de sanciones y triaje four-eyes.
→ [Ver lógica normativa](/es/bc/development/aml-compliance)
:::

::: info 🗺️ Roadmap
Plan de implementación por fases con estado actual y pendientes.
→ [Ver roadmap](/es/bc/development/roadmap)
:::

::: info 📸 Capturas de Pantalla
Galería completa del frontend BlueUPALM con diseño Dark Glassmorphism.
→ [Ver capturas](/es/bc/screenshots)
:::

</div>

## Vista Previa

<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-top: 1rem;">

![Dashboard](/images/bc/dashboard.png)

![Login](/images/bc/login.png)

</div>
