---
title: "Capturas de Pantalla"
description: Galería de capturas del frontend BlueUPALM
---

# Capturas de Pantalla — BlueUPALM

Galería de pantallas del frontend BlueUPALM, la plataforma de análisis y detección de blanqueo de capitales. El diseño sigue el sistema visual **BlueUP Dark Glassmorphism**: canvas oscuro, superficies de cristal con backdrop-blur, gradientes azul→violeta y micro-animaciones.

## Login

Pantalla de acceso con selección de entidad y autenticación por dominio Windows.

![Login — BlueUPALM](/images/bc/login.png)

- Tarjeta glass con `backdrop-filter: blur(20px)` y borde sutil
- Orbs animados decorativos (azul y violeta) con `animation: float 8s infinite`
- Botón primario con gradiente `#2563eb → #7c3aed`
- Branding BlueUP en el footer

---

## Dashboard Principal

Vista principal con KPIs operativos y analítica visual de alertas AML.

![Dashboard — BlueUPALM](/images/bc/dashboard.png)

- **4 tarjetas KPI** con hover glow y trend indicators
- **Alertas por Indicador** — gráfico de barras agrupado (Recharts)
- **Evolución Segmentación del Riesgo** — área apilada (Alto/Medio/Bajo)
- **Evolución Alertas Generadas** — líneas con puntos

---

## Clientes — Perfiles de Riesgo

Grid de alta densidad con perfiles de riesgo de clientes, clasificados por segmento.

![Clientes — Perfiles de Riesgo](/images/bc/clients-risk-profiles.png)

- Sidebar con navegación jerárquica (Tomador, Asegurado, Primario, Secundario)
- Risk dots con semántica de color (🔴 Alto, 🟠 Medio, 🟢 Bajo)
- Indicadores de estado, diligencia y variación de peso
- Data grid con headers glass y hover states azules

---

## Alertas — Dashboard

Distribución de alertas por área y análisis comparativo.

![Alertas — Dashboard](/images/bc/alerts-dashboard.png)

- **Distribución por Área** — gráfico de tarta (Seg. Continuado, Medios Cobro, Tipología Clientes)
- **Alertas por Área - Análisis** — barras agrupadas (Analizadas vs Sin Analizar vs Nº Clientes)
- Botón CTA con gradiente para acceso al listado detallado

---

## Comunicaciones SEPBLAC

Dashboard operativo de comunicaciones al Servicio Ejecutivo.

![Comunicaciones](/images/bc/communications.png)

- **Operativa Reportable** — barras comparativas por indicador
- **Distribución ECV** — tarta con proporciones (DMO Asociado, Generado, Pendiente)
- **Evolución Operativa Reportable** — línea temporal con puntos

---

## Administración — Indicadores

Tabla maestra de indicadores de alerta configurables por la entidad.

![Administración — Indicadores](/images/bc/admin-indicators.png)

- 9 indicadores SEPBLAC con área, frecuencia y patrón
- Sidebar de administración con secciones colapsables
- Checkmarks de activación por entidad
- Paginación y filtros integrados

---

## Diseño Visual

El frontend está construido con:

| Componente | Tecnología |
|-----------|-----------|
| **Framework** | React 18 + Vite |
| **Routing** | react-router-dom v7 |
| **Charts** | Recharts |
| **Styling** | CSS Vanilla (design tokens) |
| **Font** | Inter (Google Fonts) |
| **Design System** | BlueUP Dark Glassmorphism |

### Tokens de Diseño Clave

| Token | Valor | Uso |
|-------|-------|-----|
| `--canvas` | `#030712` | Fondo principal |
| `--glass-surface` | `rgba(255,255,255,0.03)` | Superficies de cristal |
| `--glass-border` | `rgba(255,255,255,0.06)` | Bordes sutiles |
| `--brand-gradient` | `#2563eb → #7c3aed` | Gradiente primario |
| `--risk-high` | `#ef4444` | Riesgo alto |
| `--risk-medium` | `#f59e0b` | Riesgo medio |
| `--risk-low` | `#22c55e` | Riesgo bajo |
