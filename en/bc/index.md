---
title: BC — AML Platform
description: Anti-money laundering detection and analysis platform
---

# BC — Anti-Money Laundering Platform

<div class="project-badge">🛡️ Active Project</div>

Application for the analysis and detection of information potentially derived from money laundering. It implements a **Hybrid Asynchronous Authorization** architecture that combines centralized governance with decentralized execution at the edge.

## 🎬 Video Demo

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

→ [View full presentation with scene index](/en/bc/demo)

## Audience

| Role | Description |
|------|-------------|
| **Compliance Officers** | Analysts investigating suspicious activity and managing AML alerts |
| **System Administrators** | IT staff managing access policies, hybrid auth and edge deployments |
| **External Auditors** | Regulators reviewing compliance logs and immutable audit trails |

## Main Objectives

### Real-time threat detection
Identify and block suspicious transactions with ultra-low latency.

### Immutable auditing
Maintain cryptographic logs of all actions and decisions for compliance.

### Secure edge operations
Enable autonomous agent operations in decentralized environments securely.

## Key Features

- **Risk Dashboards** — Visual analytics of flagged transactions and risk scores
- **Policy Management UI** — Interface for defining centralized OPA policies and agent caveats
- **Identity & Access Control** — Granular control over SVIDs, Keycloak users and network access

## Non-Functional Requirements

| Requirement | Detail |
|-------------|--------|
| **Ultra-Low Latency** | Edge verification with minimal delay in transaction processing |
| **High Resilience** | System must remain operational during network fluctuations (offline capability) |
| **Data Sovereignty** | Sensitive PII and financial data never leaves authorized perimeters |

## Documentation

<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1rem; margin-top: 1rem;">

::: info 🎬 Commercial Demo
7-minute video presentation covering all features.
→ [View demo](/en/bc/demo)
:::

::: info 📐 Architecture
Hybrid Asynchronous Authorization Model, step-by-step Zero-Trust flow.
→ [View architecture](/en/bc/architecture)
:::

::: info 📋 Functional Requirements
Global UI, Risk Dashboards, Policy Management.
→ [View requirements](/en/bc/requirements/global-ui)
:::

::: info 🔧 Tech Stack
Frontend, backend, data, security and infrastructure.
→ [View tech stack](/en/bc/tech-stack)
:::

::: info 📖 Development
TDD Workflow, code style guides.
→ [View workflow](/en/bc/development/workflow)
:::

::: info 🔌 Ingestion & Edge
CDC architecture, NATS verification, ontological pre-validation and DORA resilience.
→ [View Edge Connector](/en/bc/development/edge-connector)
:::

::: info ⚖️ AML Compliance
SEPBLAC Special Examination, sanctions screening and four-eyes triage.
→ [View regulatory logic](/en/bc/development/aml-compliance)
:::

::: info 🗺️ Roadmap
Phased implementation plan with current status and pending items.
→ [View roadmap](/en/bc/development/roadmap)
:::

::: info 📸 Screenshots
Full BlueUPALM frontend gallery with Dark Glassmorphism design.
→ [View screenshots](/en/bc/screenshots)
:::

</div>

## Preview

<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-top: 1rem;">

![Dashboard](/images/bc/dashboard.png)

![Login](/images/bc/login.png)

</div>
