---
title: "Styleguide: Python"
description: Google Python Style Guide — resumen de reglas clave
---

# Google Python Style Guide

Resumen de reglas clave del [Google Python Style Guide](https://google.github.io/styleguide/pyguide.html).

## 1. Python Language Rules

| Regla | Detalle |
|-------|---------|
| **Linting** | Ejecutar `pylint` para detectar bugs y problemas de estilo |
| **Imports** | Usar `import x` para packages/modules. `from x import y` solo para submodules |
| **Exceptions** | Usar clases de excepción built-in. No usar `except:` desnudo |
| **Global State** | Evitar estado global mutable. Constantes de módulo en `ALL_CAPS_WITH_UNDERSCORES` |
| **Comprehensions** | Usar para casos simples. Evitar para lógica compleja |
| **Default Args** | No usar objetos mutables como defaults (ej. `[]` o `{}`) |
| **True/False** | Usar implicit false (ej. `if not my_list:`). Usar `if foo is None:` para `None` |
| **Type Annotations** | Fuertemente recomendados para todas las APIs públicas |

## 2. Python Style Rules

### Formato Básico

- **Line Length:** Máximo 80 caracteres
- **Indentation:** 4 espacios por nivel. Nunca usar tabs
- **Blank Lines:** Dos líneas en blanco entre definiciones top-level. Una entre métodos

### Docstrings

Usar `"""triple double quotes"""`. Toda función, clase y método público debe tener docstring.

```python
def calculate_risk_score(transaction: Transaction) -> float:
    """Calcula el risk score de una transacción.

    Args:
        transaction: La transacción a evaluar.

    Returns:
        Un float entre 0.0 y 100.0 representando el nivel de riesgo.

    Raises:
        ValueError: Si la transacción no tiene datos válidos.
    """
```

### Strings y TODOs

- Usar f-strings para formateo
- Ser consistente con single (`'`) o double (`"`) quotes
- Formato TODO: `TODO(username): Fix this.`

### Imports

Los imports deben estar en líneas separadas y agrupados:
1. Standard library
2. Third-party
3. Imports de la propia aplicación

## 3. Naming

| Convención | Uso |
|------------|-----|
| `snake_case` | Módulos, funciones, métodos, variables |
| `PascalCase` | Clases |
| `ALL_CAPS_WITH_UNDERSCORES` | Constantes |
| `_leading_underscore` | Miembros internos de módulo/clase |

## 4. Main

Todos los archivos ejecutables deben tener una función `main()` con la lógica principal:

```python
def main():
    """Punto de entrada principal."""
    ...

if __name__ == '__main__':
    main()
```

::: warning
**SER CONSISTENTE.** Al editar código, coincidir con el estilo existente.
:::
