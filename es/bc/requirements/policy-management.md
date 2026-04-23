---
title: "Requisitos: Policy Management"
description: Requisitos funcionales del módulo de gestión de políticas
---

# Policy Management

## Overview

El módulo de Policy Management permite a los System Administrators configurar y supervisar las reglas de autorización centralizadas que dictan lo que los agentes edge y los usuarios pueden hacer dentro de la plataforma AML.

## 1. Editor de Reglas OPA

- **Interfaz:** Una UI estructurada basada en formularios para crear, actualizar y gestionar reglas de Open Policy Agent (OPA) sin necesidad de escribir código Rego directamente.
- **Validación:** Verificación de sintaxis en tiempo real y simulación de impacto de políticas antes del deployment.

::: info Stitch MCP
La interfaz del editor de reglas y las vistas de aprobación manual **DEBEN** ser generadas usando el Stitch MCP.
:::

## 2. Triggers Human-in-the-Loop

- Ciertas acciones (ej. sobrescribir un bloqueo de alto riesgo o aprobar una exportación masiva de datos) requieren aprobación humana explícita.
- La UI debe soportar una cola de solicitudes pendientes de revisión manual, con opciones para aprobar o rechazar.

## 3. Visibilidad de Tokens Asíncronos

- La interfaz debe proporcionar visibilidad sobre los tokens Biscuit activos emitidos a agentes edge.
- Los administradores deben tener la capacidad de revocar o atenuar explícitamente tokens activos globalmente via la UI, que se propagará al edge via la overlay segura de NetFoundry.

## 4. Mapeo de Arquitectura de Enforcement de Políticas

### Integración Open Policy Agent (OPA)
La UI sirve como front-end para definir políticas. Estas definiciones se envían a la instancia central de OPA. La UI debe mapear estructuras de reglas (ej. bloques de condición) directamente a schemas de política Rego esperados por OPA.

### Propagación de Biscuit Tokens
Cuando una actualización de política requiere restringir un agente edge específico, la UI dispara un flujo backend que genera un nuevo token Biscuit con el "Caveat" (atenuación) añadido. La UI debe mostrar el estado de firma criptográfica de estos tokens.

### Zero Trust Network Access (ZTNA)
Todas las acciones administrativas dentro de la UI de Policy Management se enrutan exclusivamente a través de la overlay de NetFoundry. La UI debe indicar visiblemente si el túnel administrativo está activo, asegurando que las operaciones son seguras.
