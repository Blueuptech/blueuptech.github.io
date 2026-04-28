---
title: "Demo — Vídeo Comercial"
description: Presentación en vídeo de la plataforma BlueUPALM para cumplimiento regulatorio AML/DORA
---

# 🎬 BlueUPALM — Demo Comercial

<div class="project-badge">📺 Presentación de Producto — 6:49 min</div>

Vídeo de presentación de **BlueUPALM**, la plataforma de grado bancario para automatizar el ciclo completo del cumplimiento regulatorio (SEPBLAC/DORA).

<div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; max-width: 100%; border-radius: 12px; margin: 1.5rem 0; box-shadow: 0 8px 32px rgba(37, 99, 235, 0.15);">
  <iframe
    src="https://www.youtube.com/embed/6gDoRdg3wbE"
    style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: 0; border-radius: 12px;"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    referrerpolicy="strict-origin-when-cross-origin"
    allowfullscreen
    title="BlueUPALM — Presentación Comercial AML/DORA"
    loading="lazy"
  ></iframe>
</div>

::: tip 💡 Subtítulos disponibles
El vídeo incluye subtítulos en **castellano** e **inglés**. Actívalos con el botón CC del reproductor de YouTube.
:::

## Contenido del Vídeo

| Escena | Tiempo | Tema |
|--------|--------|------|
| 1 | 0:00 — 0:44 | **El Problema** — DORA, SEPBLAC y la urgencia regulatoria |
| 2 | 0:44 — 1:36 | **Visión General** — 9 módulos, arquitectura completa |
| 3 | 1:36 — 2:43 | **Seguridad Zero Trust** — OpenZiti, SPIRE, Biscuit |
| 4 | 2:43 — 4:04 | **Motor AML** — Screening, KYC 360°, Cuatro Ojos |
| 5 | 4:04 — 4:54 | **Examen Especial** — Workflow SEPBLAC Art. 18 |
| 6 | 4:54 — 6:04 | **DORA** — Incidentes TIC, temporizadores regulatorios |
| 7 | 6:04 — 6:49 | **Cierre** — CTA y soberanía operativa |

## Características Destacadas

### 🛡️ Seguridad Zero Trust
- **OpenZiti Dark Services** — servicios invisibles a la red pública
- **Biscuit Tokens** — atenuación criptográfica offline
- **SPIRE SVIDs** — identidad verificable para cada workload
- **Cifrado mTLS** de extremo a extremo

### 📊 Motor AML/PBC-FT
- Screening contra listas UE, OFAC y ONU
- Matching fuzzy con coeficiente de Dice
- Perfil KYC 360° con análisis de riesgo por 8 factores
- Principio de Cuatro Ojos para segregación de funciones

### 📋 Compliance DORA
- Clasificación automática de incidentes (Minor/Significant/Major)
- Temporizadores regulatorios: 4h → 72h → 1 mes
- Plantillas ITS compatibles con BdE, DGSFP y CNMV
- MTTD: 4 min | MTTR: 1 hora

### ⚖️ Workflow Legal SEPBLAC
- Examen Especial de 10 estados (Art. 18, Ley 10/2010)
- Generación automática de formulario F19
- Audit trail inmutable y criptográfico

## Datos Técnicos

| Métrica | Valor |
|---------|-------|
| Módulos funcionales | 9 |
| Controles de seguridad | 13 |
| Tests unitarios | 65/65 ✅ |
| Stack frontend | React 19 + Vite |
| Stack backend | FastAPI + NATS JetStream |
| Seguridad Edge | Rust + Biscuit |
| Infraestructura | Kubernetes Cloud-Native |

---

<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1rem; margin-top: 1rem;">

::: info 📐 Arquitectura
Modelo de Autorización Asíncrona Híbrida, flujo Zero-Trust paso a paso.
→ [Ver arquitectura](/es/bc/architecture)
:::

::: info 📸 Capturas de Pantalla
Galería completa del frontend BlueUPALM con diseño Dark Glassmorphism.
→ [Ver capturas](/es/bc/screenshots)
:::

::: info ⚖️ Compliance AML
Examen Especial SEPBLAC, screening de sanciones y triaje four-eyes.
→ [Ver lógica normativa](/es/bc/development/aml-compliance)
:::

::: info 🔧 Tech Stack
Frontend, backend, data, seguridad e infraestructura.
→ [Ver tech stack](/es/bc/tech-stack)
:::

</div>

---

::: warning 📬 ¿Interesado?
Solicite una demostración personalizada para su entidad en [blueup.es](https://www.blueup.es)
:::
