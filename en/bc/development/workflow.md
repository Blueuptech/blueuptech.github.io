---
title: Development Workflow
description: Development workflow, TDD, commits and quality processes
---

# Project Workflow

## Guiding Principles

1. **El Plan es la Fuente de Verdad:** Todo el trabajo debe trackearse en `plan.md`
2. **El Tech Stack es Deliberado:** Los cambios al tech stack deben documentarse en `tech-stack.md` *antes* de la implementación
3. **Test-Driven Development:** Escribir tests unitarios antes de implementar funcionalidad
4. **Alto Code Coverage:** Objetivo >80% de code coverage para todos los módulos
5. **User Experience First:** Cada decisión debe priorizar la experiencia de usuario
6. **Non-Interactive & CI-Aware:** Preferir comandos no interactivos. Usar `CI=true` para herramientas en watch-mode

## Task Workflow

Todas las tareas siguen un ciclo de vida estricto:

### 1. Seleccionar Tarea
Elegir la siguiente tarea disponible de `plan.md` en orden secuencial.

### 2. Marcar En Progreso
Antes de comenzar, editar `plan.md` y cambiar la tarea de `[ ]` a `[~]`.

### 3. Red Phase — Tests Fallidos
- Crear archivo de test para la feature o bug fix
- Escribir uno o más tests unitarios que definan claramente el comportamiento esperado
- **CRÍTICO:** Ejecutar los tests y confirmar que fallan como se espera

### 4. Green Phase — Implementar
- Escribir la cantidad mínima de código de aplicación necesaria para que los tests fallidos pasen
- Ejecutar el test suite y confirmar que todos los tests pasan

### 5. Refactor (Opcional pero Recomendado)
- Con la seguridad de los tests pasando, refactorizar el código
- Re-ejecutar tests para asegurar que siguen pasando

### 6. Verificar Coverage

```bash
# Ejemplo para un proyecto Python
pytest --cov=app --cov-report=html

# Ejemplo para un proyecto Node.js
CI=true npm test -- --coverage
```

Objetivo: >80% coverage para código nuevo.

### 7. Documentar Desviaciones
Si la implementación difiere del tech stack:
1. **DETENER** la implementación
2. Actualizar `tech-stack.md` con el nuevo diseño
3. Añadir nota fechada explicando el cambio
4. Reanudar implementación

### 8. Commit
- Stage de todos los cambios de código relacionados
- Mensaje claro y conciso, ej: `feat(ui): Create basic HTML structure for calculator`

### 9. Attach Task Summary con Git Notes

```bash
# Obtener hash del commit
git log -1 --format="%H"

# Adjuntar nota detallada al commit
git notes add -m "<nota detallada>" <commit_hash>
```

### 10. Registrar SHA en Plan
- Actualizar `plan.md`: cambiar `[~]` a `[x]` y añadir los primeros 7 caracteres del SHA

## Quality Gates

Antes de marcar cualquier tarea como completada:

- [ ] Todos los tests pasan
- [ ] Code coverage cumple requisitos (>80%)
- [ ] El código sigue las guías de estilo del proyecto
- [ ] Todas las funciones/métodos públicos están documentados
- [ ] Type safety enforcado
- [ ] Sin errores de linting o análisis estático
- [ ] Funciona correctamente en mobile (si aplica)
- [ ] Documentation actualizada si es necesario
- [ ] Sin vulnerabilidades de seguridad introducidas

## Commit Guidelines

### Formato de Mensaje

```
<type>(<scope>): <description>

[optional body]

[optional footer]
```

### Tipos

| Tipo | Description |
|------|-------------|
| `feat` | Nueva feature |
| `fix` | Bug fix |
| `docs` | Solo documentación |
| `style` | Formateo, semicolons faltantes, etc. |
| `refactor` | Cambio de código que no añade feature ni corrige bug |
| `test` | Añadir tests faltantes |
| `chore` | Tareas de mantenimiento |

### Ejemplos

```bash
git commit -m "feat(auth): Add remember me functionality"
git commit -m "fix(posts): Correct excerpt generation for short posts"
git commit -m "test(comments): Add tests for emoji reaction limits"
```

## Definition of Done

Una tarea está completa cuando:

1. ✅ Todo el código implementado según especificación
2. ✅ Tests unitarios escritos y pasando
3. ✅ Code coverage cumple requisitos del proyecto
4. ✅ Documentation completa (si aplica)
5. ✅ El código pasa todos los checks de linting y análisis estático
6. ✅ Funciona en mobile (si aplica)
7. ✅ Notas de implementación añadidas a `plan.md`
8. ✅ Cambios committed con mensaje apropiado
9. ✅ Git note con resumen de tarea adjuntado al commit

## Emergency Procedures

### Critical Bug en Producción
1. Crear hotfix branch desde main
2. Escribir test fallido para el bug
3. Implementar fix mínimo
4. Testear exhaustivamente
5. Deploy inmediato
6. Documentar en plan.md

### Data Loss
1. Detener todas las operaciones de escritura
2. Restaurar desde último backup
3. Verificar integridad de datos
4. Documentar incidente

### Security Breach
1. Rotar todos los secrets inmediatamente
2. Revisar logs de acceso
3. Parchear vulnerabilidad
4. Notificar usuarios afectados
5. Documentar y actualizar procedimientos de seguridad
