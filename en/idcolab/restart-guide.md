---
title: Restart Guide
description: Guía de arranque diario, troubleshooting y checklist del proyecto IDColab
---

# Restart Guide (Restart Guide)

## Inicio Rápido (Nueva Sesión de Trabajo)

```bash
# 1. Encender infraestructura en GCP:
gcloud compute instances start idcolab-ziti-controller \
  --zone europe-southwest1-a

# 2. Esperar ~90s y verificar:
curl -s https://auth-frontdoor.navarro-bores.com/realms/master/.well-known/openid-configuration \
  | python3 -c "import sys,json;d=json.load(sys.stdin);print('✅ Keycloak OK')"

# 3. (Solo si Cloud Run fue eliminado) Redesplegar:
gh workflow run deploy-backend.yml --ref main
gh workflow run deploy.yml --ref main

# 4. (Solo para exponer legacy1):
bash /Volumes/DATOS/source/legacy1/start-legacy1.sh
open https://wno7a4yjxm2a.navarro-bores.com
```

## Checklist Rápido

```
☐ 1. gcloud compute instances start idcolab-ziti-controller --zone europe-southwest1-a
☐ 2. Esperar 90s → verificar: curl https://auth-frontdoor.navarro-bores.com/realms/master
☐ 3. (Si Cloud Run fue eliminado) gh workflow run deploy-backend.yml --ref main
☐ 4. (Si Cloud Run fue eliminado) gh workflow run deploy.yml --ref main
☐ 5. Verificar portal: open https://frontdoor.navarro-bores.com
☐ 6. Verificar portal gestión usuarios (debe listar admin + maria.lopez)
──── Legacy1 (automático, no requiere acción) ─────────────────────
☐ 7. Verificar contenedores legacy1 + zrok-share están Up
☐ 8. open https://wno7a4yjxm2a.navarro-bores.com
☐ 9. Login: maria.lopez / Demo2024! → "Bienvenido, María López" + grupo TALLER_001
```

## Troubleshooting

### Zrok Share no funciona — `[404]` o `not started in time`

**Síntomas**:
- `[ERROR]: unable to retrieve reserved share ([GET /detail/share/{shareToken}][404])`
- `xgress circuit not started in time, closing` en los logs del edge-router
- CLOSE_WAIT persistente en el puerto 1280

**Causa**: La identidad Ziti del cliente fue invalidada por reinicios del stack OpenZiti con `docker-compose rm -f`.

**Solución** (orden exacto):
```bash
# 1. Matar cualquier share en curso
kill -9 $(pgrep -f "zrok share") 2>/dev/null

# 2. Regenerar la identidad Ziti
zrok disable
sleep 3
TOKEN=$(python3 -c "import json; d=json.load(open('$HOME/.zrok/environment.json')); print(d['zrok_token'])")
zrok enable $TOKEN

# 3. Recrear el share con el mismo nombre
zrok reserve public http://localhost:5000 \
  --unique-name wno7a4yjxm2a \
  --oauth-provider custom-oidc \
  --oauth-email-address-pattern '*@tallergarcia.com'

# 4. Lanzar el share
nohup zrok share reserved wno7a4yjxm2a </dev/null > /tmp/zrok_final.log 2>&1 &
```

### `not authorized!` tras login Keycloak

**Causa**: El share fue creado con restricción de email `*@navarro-bores.com` pero el usuario usa `@tallergarcia.com`.

**Solución**:
```bash
kill -9 $(pgrep -f "zrok share") 2>/dev/null
zrok release wno7a4yjxm2a 2>&1 | tail -1
zrok reserve public http://localhost:5000 \
  --unique-name wno7a4yjxm2a \
  --oauth-provider custom-oidc \
  --oauth-email-address-pattern '*@tallergarcia.com'
nohup zrok share reserved wno7a4yjxm2a </dev/null > /tmp/zrok_final.log 2>&1 &
```

::: warning Bug en zrok v1.1.11
No usar `--open` solo — genera `unable to parse authorization check interval`. Usar siempre `--oauth-email-address-pattern` en su lugar.
:::

### `ERR_TOO_MANY_REDIRECTS` en el navegador

**Causa**: El share fue creado con `--oauth-provider keycloak` (nombre incorrecto). El nombre correcto del proveedor en `/etc/zrok/zrok.yml` del servidor es `custom-oidc`.

**Solución**: Recrear el share usando `--oauth-provider custom-oidc`.

### Stack OpenZiti — `KeyError: ContainerConfig`

**Síntoma**: `docker-compose up -d` falla con traceback de Python en `service.py`.

**Solución**: Recrear los contenedores:
```bash
gcloud compute ssh idcolab-ziti-controller --zone europe-southwest1-a \
  --command "cd /opt/openziti && sudo docker-compose rm -f && sudo docker-compose up -d"
```

### `xgress not started in time` bajo carga (Intermitente)

::: danger Bug Conocido
**Estado**: Reproducible de forma intermitente. El share funciona (HTTP 302) pero el circuito de datos falla por timeout.

**Hipótesis**: El canal de datos del SDK tiene latencia alta para establecer el `xgress` debido a configuración de routers privados con SANs incorrectos.

**Workaround**: Reiniciar el edge-router + relanzar el share:

```bash
gcloud compute ssh idcolab-ziti-controller --zone europe-southwest1-a \
  --command "cd /opt/openziti && sudo docker-compose restart ziti-edge-router"
sleep 20
kill -9 $(pgrep -f "zrok share") 2>/dev/null
nohup zrok share reserved wno7a4yjxm2a </dev/null > /tmp/zrok_final.log 2>&1 &
```

**Fix definitivo pendiente**: Corregir los SANs de `ziti-private-red` y `ziti-private-blue`.
:::

### NUNCA cambiar ZITI_VERSION a 1.6.0

::: danger
El controlador entra en `Restarting (2)` indefinidamente. La BD fue creada con imagen `quickstart:latest` e incompatible con `1.6.0`.

Si ocurrió por error:
```bash
gcloud compute ssh idcolab-ziti-controller --zone europe-southwest1-a \
  --command "sudo sed -i 's/ZITI_VERSION=1.6.0/ZITI_VERSION=latest/' /opt/openziti/.env && \
             cd /opt/openziti && sudo docker-compose rm -f && sudo docker-compose up -d"
```
:::
