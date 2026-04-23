---
title: Review Checklist
description: Review checklist for AML platform modules
---

# Review Checklist

Checklist de verificación para asegurar la completitud de los requisitos funcionales de cada módulo.

## Global UI & Navigation

- [ ] ¿El layout global define un sidebar de navegación claro y un header superior?
- [ ] ¿Los componentes UI están explícitamente mapeados para ser diseñados usando el Stitch MCP basado en estándares de plataforma?
- [ ] ¿Hay un placeholder o indicador para el estado de sesión SVID/Keycloak del usuario en el header?
- [ ] ¿El mapeo de identidad Keycloak está documentado para los roles de UI?
- [ ] ¿El manejo de tokens SPIRE/SVID está especificado para los componentes edge en la UI?

## Risk Dashboards

- [ ] ¿Todas las interacciones de data grid (ordenación, filtrado, paginación) están completamente especificadas?
- [ ] ¿Las alertas visuales siguen la estética de alto contraste y las reglas WCAG 2.1 AA?
- [ ] ¿Hay un requisito explícito de usar el Stitch MCP para generar los layouts del dashboard?
- [ ] ¿El flujo de datos desde Ceph S3 via consultas federadas Trino está claramente mapeado?
- [ ] ¿Las reglas de enmascaramiento PII enforcadas en el boundary Cilium L7 están documentadas?

## Policy Management

- [ ] ¿La UI especifica cómo visualizar y editar reglas de Open Policy Agent (OPA)?
- [ ] ¿Hay provisiones para triggers de revisión manual (Human-in-the-loop) para acciones sensibles?
- [ ] ¿El requisito de generación via Stitch MCP está explícitamente mencionado para el editor de políticas?
- [ ] ¿La creación y propagación de tokens Biscuit está claramente definida en los flujos de UI?
- [ ] ¿La interacción entre la UI, el motor OPA y los agentes edge está mapeada?
