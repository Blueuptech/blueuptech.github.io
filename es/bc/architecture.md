---
title: Arquitectura
description: Arquitectura de Autorización Asíncrona Híbrida para la plataforma AML
---

# Arquitectura de Autorización Asíncrona Híbrida

> De la Gobernanza Rígida a la Seguridad Ágil

En la frontera actual de la IA agéntica, la gobernanza rígida es el enemigo de la escalabilidad. La arquitectura debe desacoplar el plano de gobernanza del plano de ejecución para sobrevivir a los requisitos de latencia y autonomía de los agentes modernos. Históricamente, nos hemos movido entre el control centralizado (seguro pero lento) y la ejecución descentralizada (rápida pero opaca). Este enfoque rompe este estancamiento mediante un enfoque híbrido.

::: tip Modelo de Autorización Asíncrona Híbrida
Una arquitectura de diseño superior que permite centralizar la definición de políticas y la auditoría inmutable, mientras delega una ejecución autónoma, resiliente y de ultra-baja latencia en entornos distribuidos, multi-cloud y Edge.
:::

## El Modelo Híbrido: Comparativa Estratégica

La superioridad de este enfoque híbrido no es accidental; nace de la necesidad de mantener la soberanía del dato sin degradar la experiencia de usuario. Mientras que los modelos tradicionales asfixian al agente con llamadas constantes al "centro", el modelo híbrido otorga una "misión autorizada" que el agente puede cumplir con total independencia.

| Característica | Centralizado Tradicional | Puramente Descentralizado | **Híbrido** |
|---|---|---|---|
| **Gobernanza** | Control absoluto, pero rígido | Difícil de auditar centralmente | **Gobernanza Híbrida**: Política central con aplicación local |
| **Latencia** | Alta (llamada al centro por cada acción) | Baja (comprobación local) | **Ultra-baja latencia**: Una comprobación inicial y validación criptográfica local |
| **Conectividad** | Requiere 100% de disponibilidad | Autonomía total sin control | **Resiliencia Offline** ante fluctuaciones de red en el Edge |
| **Auditabilidad** | En tiempo real | A posteriori (*Post-hoc*) | **Trazabilidad Total**: Intención en tiempo real y registros locales inmutables |

## Fase 1: La Decisión (Gobernanza Centralizada)

La primera fase establece la **Autorización Maestra**. Aquí, el sistema evalúa el contexto global y la identidad antes de emitir cualquier permiso de ejecución.

- **Orquestador Framework:** Microservicios construidos en LangChain, LlamaIndex o Semantic Kernel que coordinan la lógica del agente bajo el paraguas de Kubernetes.
- **OPA (Motor de Políticas):** El árbitro central que evalúa las políticas en tiempo real en cada punto de control crítico.
- **Identidad Híbrida (Keycloak + SPIRE):** Keycloak gestiona la identidad de los humanos, mientras que SPIRE emite certificados de corta duración (**SVIDs**) para las cargas de trabajo, eliminando la necesidad de API keys estáticas y vulnerables.
- **Instancia Soberana (vLLM / Ollama):** El motor donde residen los modelos (Llama 3, Mistral), asegurando que el procesamiento del lenguaje nunca salga de la infraestructura controlada.

::: warning Cumplimiento Normativo
En esta fase se garantiza el cumplimiento del **GDPR y la AI Act de la UE**. Mediante herramientas como **Langfuse o Arize Phoenix**, el sistema registra no solo la acción, sino el "razonamiento" exacto del LLM, permitiendo a los auditores entender por qué se tomó una decisión o por qué se bloqueó un prompt malicioso.
:::

## Fase 2: La Ejecución (Delegación Descentralizada)

Cuando la autorización se vuelve móvil, el agente se transforma en una entidad soberana capaz de operar en el extremo de la red (Edge) sin reautenticarse constantemente.

1. **Emisión de Root Biscuit Token:** Tras la aprobación de OPA, el Orquestador emite un token Biscuit. Este es un token de capacidad que porta la prueba criptográfica de la "Autorización Maestra".
2. **Atenuación Asíncrona (Caveats):** Este es el núcleo de la resiliencia. El agente puede añadir restricciones adicionales o "Caveats" al token de forma local. Es un principio de seguridad unidireccional: el agente puede **limitar** sus propios privilegios para una subtarea específica, pero nunca puede **ampliarlos**.
3. **Verificación en el Edge:** El destino final (un bucket de **Ceph S3** o una base de datos local) verifica el token y sus atenuaciones mediante criptografía de clave pública, garantizando una latencia cero y total operatividad offline.

## El Viaje de una Petición: Flujo Zero Trust

Este diseño sustituye el perímetro de red tradicional por un flujo de identidad ininterrumpido.

### Fase 1: Entrada y Autenticación del Usuario

El acceso comienza mediante un túnel de red "oscuro" que oculta los servicios de la internet pública.

- **Controladores:** **NetFoundry / OpenZiti** proporcionan el túnel seguro; **Keycloak** valida la identidad humana vía SSO.

### Fase 2: Orquestación Segura e Intercepción

El Orquestador recibe la consulta y valida si el usuario tiene permiso para activar agentes.

- **Controladores:** **OPA** verifica la política; se aplica **Prompt Sanitization** para prevenir ataques de **Prompt Injection**; **SPIRE** emite un **SVID** para que el Orquestador se autentique de forma segura con el motor **vLLM / Ollama**.

### Fase 3: Ejecución de Herramientas y Gestión de la Intención

Si el LLM decide usar una herramienta (ej. SQL Analytics), el sistema evalúa la sensibilidad de la operación.

- **Controladores:** **OPA** analiza la intención; si se detectan datos PII o financieros, se activa un disparador de **Human-in-the-loop** para aprobación manual; **Trino** actúa como motor de procesamiento federado.

### Fase 4: Capa de Red y Almacenamiento Soberano

El flujo de datos se protege a nivel granular, asegurando que las herramientas solo vean lo que deben.

- **Controladores:** **Cilium** realiza el aislamiento de red en Capa 7 (L7); los datos residen en **Ceph (S3)** gestionados mediante **Apache Iceberg** y archivos **Parquet**, con políticas de enmascaramiento de columnas para proteger información sensible.

### Fase 5: Sandbox Action y Memoria de Salida

Cualquier código generado por la IA se ejecuta en un entorno de aislamiento total para evitar fugas o ejecuciones maliciosas.

- **Controladores:** **gVisor / Kata Containers** proporcionan el sandboxing de cómputo; **Qdrant** almacena la memoria vectorial de la sesión; **Langfuse / Prometheus** cierran el ciclo con la auditoría final del flujo.

## Síntesis del Valor

Esta arquitectura no es solo una pila tecnológica; es un imperativo estratégico para la soberanía operativa basada en tres pilares:

- **Identidad como Perímetro:** La seguridad no depende de la ubicación del servidor, sino de la identidad criptográfica del humano (Keycloak) y de la máquina (SPIRE).
- **Privilegios Dinámicos:** El LLM propone acciones, pero nunca ostenta el poder absoluto. Las políticas de OPA y la intervención humana actúan como frenos de seguridad inteligentes.
- **Minimización del Radio de Daño (Blast Radius):** El aislamiento mediante Cilium y Sandboxes como gVisor garantiza que un compromiso en un agente no se traduzca en una brecha sistémica.

::: info Sectores Objetivo
Este diseño es la respuesta para sectores como la **banca** y la **salud**, donde el control sobre el razonamiento de la IA y la soberanía del dato son requisitos innegociables para la continuidad del negocio en la era de la inteligencia artificial.
:::
