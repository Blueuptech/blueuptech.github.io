---
title: "Requisitos: Risk Dashboards"
description: Functional Requirements del módulo de dashboards de riesgo
---

# Risk Dashboards

## Overview

El módulo de Risk Dashboards es la vista principal para Compliance Officers para analizar transacciones y detectar patrones de blanqueo de capitales en tiempo real.

## 1. Data Grids de Alta Densidad

- **Presentación de Datos:** El dashboard debe usar un layout tabular de alta densidad para mostrar transacciones flaggeadas, puntuaciones de riesgo, timestamps e IDs de entidad.
- **Interacciones:** El grid debe soportar ordenación por risk score, filtrado por tipo de transacción, y paginación client-side para manejar flujos de datos de alta frecuencia suavemente.

::: info Stitch MCP
El componente de data grid y sus layouts específicos **MUST** ser construidos usando el Stitch MCP para asegurar alineación con los estándares de plataforma.
:::

## 2. Alertas & Indicadores Visuales

- Las transacciones con risk score superior a **80** deben estar visualmente destacadas usando colores de alto contraste (ej. `#dc2626`) e iconos de alerta (⚠️).
- Los ratios de contraste para estas alertas deben cumplir estrictamente con **WCAG 2.1 AA** para asegurar accesibilidad para todos los usuarios.

## 3. Streaming de Datos en Tiempo Real

- La UI debe estar optimizada para actualizaciones en tiempo real. Los data streams simulando transacciones en vivo deben gestionarse via state updates eficientes (ej. Zustand/Redux) para minimizar re-renders.
- Un botón **"Pause/Resume Stream"** debe estar disponible para permitir a los analistas congelar la vista de datos mientras investigan una alerta específica.

## 4. Mapeo de Architecture de Datos

### Integración Trino/Ceph S3
Los data grids deben poblarse consultando el motor federado Trino, que recupera logs de auditoría inmutables y transacciones crudas de buckets Ceph S3 via formatos Apache Iceberg.

### PII Masking & Cilium L7
Todos los datos sensibles de cliente (PII) renderizados en el dashboard deben estar enmascarados o tokenizados. La UI depende del boundary de red Cilium L7 para enforcar estas políticas de enmascaramiento antes de que el payload alcance el cliente.

### Resiliencia Offline
Si la conexión a Trino cae, el dashboard debe degradarse seamlessly a mostrar datos locales cacheados y verificados usando el estado del último token Biscuit conocido.
