---
title: Architecture
description: Hybrid Asynchronous Authorization Architecture for the AML platform
---

# Hybrid Asynchronous Authorization Architecture

> From Rigid Governance to Agile Security

At the current frontier of agentic AI, rigid governance is the enemy of scalability. The architecture must decouple the governance plane from the execution plane to survive the latency and autonomy requirements of modern agents. Historically, we have oscillated between centralized control (secure but slow) and decentralized execution (fast but opaque). This approach breaks that stalemate through a hybrid model.

::: tip Hybrid Asynchronous Authorization Model
A superior design architecture that enables centralizing policy definition and immutable auditing, while delegating autonomous, resilient, and ultra-low latency execution in distributed, multi-cloud and Edge environments.
:::

## The Hybrid Model: Strategic Comparison

The superiority of this hybrid approach is not accidental; it stems from the need to maintain data sovereignty without degrading the user experience. While traditional models suffocate the agent with constant calls to the "center", the hybrid model grants an "authorized mission" that the agent can fulfill with total independence.

| Feature | Traditional Centralized | Purely Decentralized | **Hybrid** |
|---------|------------------------|---------------------|------------|
| **Governance** | Absolute control, but rigid | Hard to audit centrally | **Hybrid Governance**: Central policy with local enforcement |
| **Latency** | High (center call per action) | Low (local check) | **Ultra-low latency**: One initial check and local cryptographic validation |
| **Connectivity** | Requires 100% availability | Total autonomy without control | **Offline Resilience** during Edge network fluctuations |
| **Auditability** | Real-time | After the fact (*Post-hoc*) | **Full Traceability**: Real-time intent and immutable local records |

## Phase 1: The Decision (Centralized Governance)

The first phase establishes the **Master Authorization**. Here, the system evaluates the global context and identity before issuing any execution permission.

- **Orchestrator Framework:** Microservices built on LangChain, LlamaIndex or Semantic Kernel that coordinate agent logic under the Kubernetes umbrella.
- **OPA (Policy Engine):** The central arbiter that evaluates policies in real-time at every critical control point.
- **Hybrid Identity (Keycloak + SPIRE):** Keycloak manages human identity, while SPIRE issues short-lived certificates (**SVIDs**) for workloads, eliminating the need for static and vulnerable API keys.
- **Sovereign Instance (vLLM / Ollama):** The engine where models reside (Llama 3, Mistral), ensuring that language processing never leaves the controlled infrastructure.

::: warning Regulatory Compliance
This phase ensures compliance with **GDPR and the EU AI Act**. Using tools like **Langfuse or Arize Phoenix**, the system records not only the action, but the exact "reasoning" of the LLM, allowing auditors to understand why a decision was made or why a malicious prompt was blocked.
:::

## Phase 2: The Execution (Decentralized Delegation)

When authorization becomes mobile, the agent transforms into a sovereign entity capable of operating at the network edge (Edge) without constantly re-authenticating.

1. **Root Biscuit Token Issuance:** After OPA approval, the Orchestrator issues a Biscuit token. This is a capability token carrying the cryptographic proof of the "Master Authorization".
2. **Asynchronous Attenuation (Caveats):** This is the resilience core. The agent can add additional restrictions or "Caveats" to the token locally. It is a unidirectional security principle: the agent can **limit** its own privileges for a specific subtask, but can never **escalate** them.
3. **Edge Verification:** The final destination (a **Ceph S3** bucket or a local database) verifies the token and its attenuations using public key cryptography, guaranteeing zero latency and full offline operability.

## The Journey of a Request: Zero Trust Flow

This design replaces the traditional network perimeter with an uninterrupted identity flow.

### Phase 1: User Entry and Authentication

Access begins through a "dark" network tunnel that hides services from the public internet.

- **Controllers:** **NetFoundry / OpenZiti** provide the secure tunnel; **Keycloak** validates human identity via SSO.

### Phase 2: Secure Orchestration and Interception

The Orchestrator receives the query and validates whether the user has permission to activate agents.

- **Controllers:** **OPA** verifies the policy; **Prompt Sanitization** is applied to prevent **Prompt Injection** attacks; **SPIRE** issues an **SVID** so the Orchestrator can securely authenticate with the **vLLM / Ollama** engine.

### Phase 3: Tool Execution and Intent Management

If the LLM decides to use a tool (e.g. SQL Analytics), the system evaluates the operation's sensitivity.

- **Controllers:** **OPA** analyzes the intent; if PII or financial data is detected, a **Human-in-the-loop** trigger is activated for manual approval; **Trino** acts as the federated processing engine.

### Phase 4: Network Layer and Sovereign Storage

The data flow is protected at a granular level, ensuring that tools only see what they should.

- **Controllers:** **Cilium** performs Layer 7 (L7) network isolation; data resides in **Ceph (S3)** managed via **Apache Iceberg** and **Parquet** files, with column masking policies to protect sensitive information.

### Phase 5: Sandbox Action and Output Memory

Any AI-generated code is executed in a fully isolated environment to prevent leaks or malicious executions.

- **Controllers:** **gVisor / Kata Containers** provide compute sandboxing; **Qdrant** stores the session's vector memory; **Langfuse / Prometheus** close the cycle with the final flow audit.

## Value Synthesis

This architecture is not just a technology stack; it is a strategic imperative for operational sovereignty based on three pillars:

- **Identity as Perimeter:** Security doesn't depend on server location, but on the cryptographic identity of humans (Keycloak) and machines (SPIRE).
- **Dynamic Privileges:** The LLM proposes actions, but never holds absolute power. OPA policies and human intervention act as intelligent security brakes.
- **Minimum Blast Radius:** Isolation through Cilium and sandboxes like gVisor ensures that a compromise in one agent doesn't translate into a systemic breach.

::: info Target Sectors
This design is the answer for sectors like **banking** and **healthcare**, where control over AI reasoning and data sovereignty are non-negotiable requirements for business continuity in the era of artificial intelligence.
:::
