---
layout: home
title: BlueUP — Trust infrastructure for the AI era
titleTemplate: false

hero:
  name: BlueUP
  text: Trust infrastructure for the AI era
  tagline: We design and build cybersecurity platforms, regulatory compliance and intelligent agent orchestration. Native Zero Trust. Data sovereignty. AI Governance.
  actions:
    - theme: brand
      text: Explore products
      link: '#features'
    - theme: alt
      text: GitHub
      link: https://github.com/arnavarr

features:
  - icon: 🛡️
    title: BC — Anti-Money Laundering
    details: Detection and analysis platform for money laundering with hybrid asynchronous authorization, zero-trust networking and centralized governance. DORA and SEPBLAC compliance.
    link: /en/bc/
    linkText: View documentation
  - icon: 🔐
    title: IDColab — Zero Trust Stack
    details: Secure collaboration without VPN, agents or plugins. Exposes internal and legacy applications to external users with end-to-end mTLS encryption and OIDC authentication.
    link: /en/idcolab/
    linkText: View documentation
  - icon: ⚡
    title: Nexus — Orchestrator Framework
    details: Multi-agent orchestration framework on Gemini CLI. MCP servers, ADK skills, cost governance on Vertex AI and AI-driven development workflow automation.
    link: /en/nexus/
    linkText: View documentation
---

<div style="max-width: 1152px; margin: 0 auto; padding: 2rem 1.5rem;">

## 🏗️ Architecture

### Hybrid Asynchronous Authorization

A model that decouples the governance plane from the execution plane, combining centralized control with ultra-low latency at the edge.

| Phase | Component | Description |
|-------|-----------|-------------|
| **Decision** | Hybrid Identity | Keycloak (humans) + SPIRE SVIDs (workloads). No static API keys. |
| **Decision** | OPA Policy Engine | Real-time centralized evaluation at every critical control point. |
| **Decision** | Sovereign LLM | vLLM / Ollama — processing never leaves the controlled infrastructure. |
| **Execution** | Biscuit Tokens | Capability tokens with cryptographic proof of master authorization. |
| **Execution** | Async Attenuation | Agents restrict privileges locally but never escalate them. |
| **Execution** | Edge Verification | Local public key — zero latency and full offline operability. |

---

## 🎬 BlueUPALM in Action

BlueUPALM automates the complete regulatory compliance lifecycle — from transactional data ingestion to official supervisor communication — with Zero Trust architecture, AML engine and DORA incident management.

<div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; max-width: 100%; border-radius: 12px; margin: 1.5rem 0; box-shadow: 0 8px 32px rgba(37, 99, 235, 0.15);">
  <iframe
    src="https://www.youtube.com/embed/6gDoRdg3wbE"
    style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: 0; border-radius: 12px;"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    referrerpolicy="strict-origin-when-cross-origin"
    allowfullscreen
    title="BlueUPALM — AML/DORA Commercial Presentation"
    loading="lazy"
  ></iframe>
</div>

- ✅ 9 integrated modules — Dashboard, Clients, Alerts, Communications, DORA...
- ✅ AML engine with fuzzy screening against EU, OFAC and UN lists
- ✅ 10-state SEPBLAC legal workflow with automatic F19 form generation
- ✅ DORA incident management with regulatory timers
- → [View full presentation](/en/bc/demo) | [View documentation](/en/bc/)

---

## 🎬 IDColab in Action

IDColab enables automotive workshops to share repair information, inventory and billing with external collaborators (assessors, insurers, suppliers) securely and without exposing their internal systems to the internet.

<div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; max-width: 100%; border-radius: 12px; margin: 1.5rem 0;">
  <iframe
    src="https://www.youtube.com/embed/Rl31rsWZDpw"
    style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: 0; border-radius: 12px;"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    referrerpolicy="strict-origin-when-cross-origin"
    allowfullscreen
    title="IDColab platform presentation"
    loading="lazy"
  ></iframe>
</div>

- ✅ No VPN, agents or browser plugins
- ✅ End-to-end mTLS encryption with OpenZiti
- ✅ Legacy apps unmodified — exposed as-is
- ✅ Centralized identity with Keycloak OIDC/PKCE

---

## 🔧 Tech Stack

| Layer | Technologies |
|-------|-------------|
| **Frontend** | React, Angular, TypeScript, CSS Modules |
| **Backend** | Rust (Axum), Python (FastAPI), Quarkus + Camel, NATS |
| **Security** | OpenZiti, Keycloak, SPIRE, OPA, Biscuit Tokens |
| **Data & AI** | Vertex AI, MCP SDK, Trino, Qdrant, PostgreSQL |
| **Infrastructure** | Google Cloud, Cloud Run, Docker, Terraform, GitHub Actions, Cilium, gVisor |

---

## 🏛️ Three Design Pillars

| Pillar | Description |
|--------|-------------|
| **Identity as Perimeter** | Security doesn't depend on server location, but on the cryptographic identity of humans and machines. |
| **Dynamic Privileges** | AI proposes, but OPA policies and human intervention act as intelligent security brakes. |
| **Minimum Blast Radius** | Isolation with Cilium and gVisor sandboxes: a compromise in one agent never translates into a systemic breach. |

---

## 📬 Contact

If your organization needs Zero Trust infrastructure, AML compliance or wants to explore multi-agent orchestration with AI, we're ready.

- 🔗 [LinkedIn](https://www.linkedin.com/in/arturonavarro/)
- 🐙 [GitHub](https://github.com/arnavarr)

</div>
