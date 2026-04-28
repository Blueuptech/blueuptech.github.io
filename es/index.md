---
layout: home
title: BlueUP — Infraestructura de confianza para la era de la IA
titleTemplate: false

hero:
  name: BlueUP
  text: Infraestructura de confianza para la era de la IA
  tagline: Diseñamos y construimos plataformas de ciberseguridad, compliance regulatorio y orquestación de agentes inteligentes. Zero Trust nativo. Soberanía del dato. Gobernanza IA.
  actions:
    - theme: brand
      text: Explorar productos
      link: '#features'
    - theme: alt
      text: GitHub
      link: https://github.com/arnavarr

features:
  - icon: 🛡️
    title: BC — Anti-Money Laundering
    details: Plataforma de detección y análisis de blanqueo de capitales con autorización híbrida asíncrona, zero-trust networking y gobernanza centralizada. Compliance DORA y SEPBLAC.
    link: /es/bc/
    linkText: Ver documentación
  - icon: 🔐
    title: IDColab — Zero Trust Stack
    details: Colaboración segura sin VPN, agentes ni plugins. Expone aplicaciones internas y legacy a usuarios externos con cifrado mTLS de extremo a extremo y autenticación OIDC.
    link: /es/idcolab/
    linkText: Ver documentación
  - icon: ⚡
    title: Nexus — Orchestrator Framework
    details: Framework de orquestación multi-agente sobre Gemini CLI. Servidores MCP, skills ADK, gobernanza de costes sobre Vertex AI y automatización de flujos de desarrollo con IA.
    link: /es/nexus/
    linkText: Ver documentación
---

<div style="max-width: 1152px; margin: 0 auto; padding: 2rem 1.5rem;">

## 🏗️ Arquitectura

### Autorización Asíncrona Híbrida

Un modelo que desacopla el plano de gobernanza del plano de ejecución, combinando control centralizado con ultra-baja latencia en el edge.

| Fase | Componente | Descripción |
|------|-----------|-------------|
| **Decisión** | Identidad Híbrida | Keycloak (humanos) + SPIRE SVIDs (workloads). Sin API keys estáticas. |
| **Decisión** | Motor de Políticas OPA | Evaluación centralizada en tiempo real en cada punto de control crítico. |
| **Decisión** | LLM Soberano | vLLM / Ollama — el procesamiento nunca sale de la infraestructura controlada. |
| **Ejecución** | Biscuit Tokens | Tokens de capacidad con prueba criptográfica de la autorización maestra. |
| **Ejecución** | Atenuación Asíncrona | Los agentes restringen privilegios localmente pero nunca los amplían. |
| **Ejecución** | Verificación Edge | Clave pública local — latencia cero y operatividad offline total. |

---

## 🎬 BlueUPALM en acción

BlueUPALM automatiza el ciclo completo del cumplimiento regulatorio — desde la ingesta del dato transaccional hasta la comunicación oficial al supervisor — con arquitectura Zero Trust, motor AML y gestión de incidentes DORA.

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

- ✅ 9 módulos integrados — Dashboard, Clientes, Alertas, Comunicaciones, DORA...
- ✅ Motor AML con screening fuzzy contra UE, OFAC y ONU
- ✅ Workflow legal SEPBLAC de 10 estados con generación automática de F19
- ✅ Gestión de incidentes DORA con temporizadores regulatorios
- → [Ver presentación completa](/es/bc/demo) | [Ver documentación](/es/bc/)

---

## 🎬 IDColab en acción

IDColab permite que talleres mecánicos compartan información de reparaciones, inventario y facturación con colaboradores externos (peritos, aseguradoras, proveedores) de forma segura y sin exponer sus sistemas internos a internet.

<div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; max-width: 100%; border-radius: 12px; margin: 1.5rem 0;">
  <iframe
    src="https://www.youtube.com/embed/Rl31rsWZDpw"
    style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: 0; border-radius: 12px;"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    referrerpolicy="strict-origin-when-cross-origin"
    allowfullscreen
    title="Presentación plataforma IDColab"
    loading="lazy"
  ></iframe>
</div>

- ✅ Sin VPN, agentes ni plugins en el navegador
- ✅ Cifrado mTLS extremo a extremo con OpenZiti
- ✅ Apps legacy sin modificar — se exponen tal cual
- ✅ Identidad centralizada con Keycloak OIDC/PKCE

---

## 🔧 Stack Tecnológico

| Capa | Tecnologías |
|------|-------------|
| **Frontend** | React, Angular, TypeScript, CSS Modules |
| **Backend** | Rust (Axum), Python (FastAPI), Quarkus + Camel, NATS |
| **Seguridad** | OpenZiti, Keycloak, SPIRE, OPA, Biscuit Tokens |
| **Data & IA** | Vertex AI, MCP SDK, Trino, Qdrant, PostgreSQL |
| **Infraestructura** | Google Cloud, Cloud Run, Docker, Terraform, GitHub Actions, Cilium, gVisor |

---

## 🏛️ Tres pilares de diseño

| Pilar | Descripción |
|-------|-------------|
| **Identidad como Perímetro** | La seguridad no depende de la ubicación del servidor, sino de la identidad criptográfica del humano y la máquina. |
| **Privilegios Dinámicos** | La IA propone, pero las políticas OPA y la intervención humana actúan como frenos inteligentes de seguridad. |
| **Blast Radius Mínimo** | Aislamiento con Cilium y sandboxes gVisor: un compromiso en un agente nunca se traduce en una brecha sistémica. |

---

## 📬 Contacto

Si tu organización necesita infraestructura Zero Trust, compliance AML o explorar orquestación multi-agente con IA, estamos listos.

- 🔗 [LinkedIn](https://www.linkedin.com/in/arturonavarro/)
- 🐙 [GitHub](https://github.com/arnavarr)

</div>
