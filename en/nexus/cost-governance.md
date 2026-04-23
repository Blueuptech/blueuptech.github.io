---
title: Gobernanza de Costes — Nexus Orchestrator
description: Estrategia FinOps, alertas de presupuesto GCP y optimización de tokens
---

# Gobernanza de Costes

## Estrategia FinOps

Nexus implementa una estrategia de minimización de costes agresiva para operar dentro o cerca del **Free Tier de Google Cloud**:

| Control | Configuración |
|---|---|
| **Modelo por defecto** | `gemini-3-flash-preview` para el 90% de las tareas |
| **Modelo premium** | `gemini-2.5-pro` reservado para revisiones de arquitectura o resolución de conflictos |
| **Región** | `us-central1` / `us-east1` (Tier 1 — Free Tier de GCP) |
| **Scale-to-Zero** | Cloud Run con `min-instances=0` |
| **Presupuesto máximo** | $5.00/mes con alertas progresivas |
| **Caché local** | SQLite (`nexus-memory`) para evitar llamadas redundantes a la API |

## Gestión de Contexto

Para minimizar el consumo de tokens:

- **Truncar historial** cada 10 turnos de conversación
- **Resúmenes automáticos** para mantener contexto relevante sin inflar tokens
- **Knowledge caching** vía `nexus-memory` (SQLite) para reutilizar resultados previos
- **Budget Guard Skill** evalúa si cada tarea puede resolverse sin llamar al LLM

## Alertas de Presupuesto GCP

El script `setup_budget_alerts.sh` configura tres niveles de alerta mediante `gcloud billing budgets create`:

```
┌─────────────────────────────────────────────────────────────────┐
│                    NIVELES DE ALERTA                            │
│                                                                 │
│  $0.50 ──── ⚠️  50% del presupuesto bajo ($1.00)              │
│  $0.80 ──── ⚠️  80% del presupuesto bajo ($1.00)              │
│  $1.00 ──── 🔔  100% del presupuesto bajo                     │
│                  → Notificación vía Pub/Sub (budget-alerts)    │
│                                                                 │
│  $4.00 ──── ⚠️  80% del Free Tier guard ($5.00)               │
│                                                                 │
│  $5.00 ──── 🚨  CRITICAL STOP                                 │
│                  → Pub/Sub (critical-budget-alerts)            │
│                  → Diseñado para activar Cloud Function        │
│                    que desactive la facturación                 │
└─────────────────────────────────────────────────────────────────┘
```

### Uso del script

```bash
# Ver opciones
./nexus_orchestrator/setup_budget_alerts.sh

# Configurar alertas (requiere gcloud autenticado)
./nexus_orchestrator/setup_budget_alerts.sh <BILLING_ACCOUNT_ID>

# Modo prueba (no crea recursos)
./nexus_orchestrator/setup_budget_alerts.sh <BILLING_ACCOUNT_ID> --dry-run
```

### Prerequisitos

```bash
# Autenticación
gcloud auth login

# Proyecto configurado
gcloud config set project <PROJECT_ID>

# Obtener ID de cuenta de facturación
gcloud billing accounts list
```

## Pub/Sub Topics

El script crea automáticamente dos topics de Pub/Sub:

| Topic | Propósito |
|---|---|
| `budget-alerts` | Notificaciones del presupuesto bajo ($1.00) — informativo |
| `critical-budget-alerts` | Alerta crítica ($5.00) — diseñado para trigger de kill switch |

## Kill Switch (Conceptual)

El siguiente paso tras configurar las alertas es crear una **Cloud Function** suscrita al topic `critical-budget-alerts` que desactive la facturación automáticamente al alcanzar $5.00:

```python
# Pseudocódigo del Cloud Function (pendiente de implementación)
def disable_billing(event, context):
    """Se dispara cuando el gasto alcanza $5.00."""
    billing_client = billing.CloudBillingClient()
    billing_client.update_project_billing_info(
        name=f"projects/{PROJECT_ID}",
        project_billing_info={"billingAccountName": ""}  # Desvincula billing
    )
```

::: warning
El kill switch es un diseño conceptual. Su implementación requiere permisos de `billing.projects.updateBillingInfo` y debe probarse cuidadosamente en un entorno de staging.
:::

## Directrices de Despliegue

Todas las decisiones de infraestructura siguen estos principios:

1. **Terraform obligatorio** — Infraestructura definida con Google Cloud Foundation Fabric patterns
2. **Scale-to-Zero** — Ningún servicio debe consumir recursos cuando no se usa
3. **Free Tier first** — Priorizar regiones y servicios con cuota gratuita
4. **Monitorización activa** — Alertas proactivas antes de alcanzar límites
