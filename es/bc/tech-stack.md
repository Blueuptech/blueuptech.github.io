---
title: Tech Stack
description: Stack tecnológico completo de la plataforma AML
---

# Technology Stack

Stack tecnológico para la aplicación Anti-Money Laundering (AML), diseñado para cumplir los requisitos de ultra-baja latencia, autorización asíncrona híbrida y soberanía de datos estricta.

## Frontend

| Tecnología | Propósito |
|------------|-----------|
| **TypeScript** | Lenguaje principal |
| **React** | Framework de UI |
| **Vanilla CSS / CSS Modules** | Estilo — control preciso para la estética Corporate Enterprise sin frameworks pesados |
| **Zustand / Redux** | State management para dashboards de riesgo y gestión de políticas complejas |

## Backend & Edge Operations

| Tecnología | Propósito |
|------------|-----------|
| **Rust (Axum)** | Core API & agentes edge — elegido por memory safety y ultra-baja latencia requerida en verificación edge y manejo asíncrono de tokens Biscuit |
| **Python (FastAPI)** | Orquestación AI — interfaz con vLLM/Ollama y gestión de la capa de orquestación LLM |
| **NATS** | Bus de mensajería ligero para comunicación Edge ↔ Security Service (Rust). Request-Reply para verificación de tokens, pub/sub para alertas DORA (`dora.alert.>`) |

## Data & Storage

| Tecnología | Propósito |
|------------|-----------|
| **Trino** | Motor de query federado para procesamiento seguro de datasets grandes |
| **Ceph S3** | Almacenamiento de objetos soberano y escalable de logs de auditoría inmutables y datos crudos (gestionado via Apache Iceberg & Parquet) |
| **PostgreSQL** | Base de datos de metadatos para datos relacionales de la aplicación (preferencias, configuraciones) |
| **Qdrant** | Base de datos vectorial para memoria de sesión y contexto |
| **SQLite** | Spooling local en el Edge (spool, DLQ, incidentes DORA) — persistencia sin dependencias externas |

## Security & Infrastructure

| Tecnología | Propósito |
|------------|-----------|
| **Keycloak** | Identity & Access Management — SSO humano |
| **SPIRE** | Workload Identity — certificados de corta duración (SVIDs) |
| **Open Policy Agent (OPA)** | Motor de políticas para reglas de autorización centralizadas |
| **Biscuit Tokens** | Tokens de capacidad con atenuación asíncrona para autorización en el Edge |
| **NetFoundry / OpenZiti** | Zero Trust networking — Dark Services |
| **Cilium** | Aislamiento de red L7 |
| **gVisor / Kata Containers** | Sandboxing de ejecución |

## Compliance & DORA

| Componente | Propósito |
|------------|-----------|
| **Incident Classifier** | Clasificación automática de incidentes TIC según RD (UE) 2024/1772 Art. 8 (MINOR / SIGNIFICANT / MAJOR) |
| **DORA Notifier** | Cadena de notificación ITS 2025/302: Informe Inicial (4h), Intermedio (72h), Final (1 mes) |
| **Circuit Breaker** | Patrón de degradación controlada (CLOSED → OPEN → HALF_OPEN) para el servicio de verificación NATS |
| **Human Triage** | Human-in-the-Loop para intervención manual en eventos que requieren supervisión especial |
