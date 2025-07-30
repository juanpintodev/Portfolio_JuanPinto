# Despliegue en Render

## Configuración para Render

### 1. Preparación del Proyecto

El proyecto ya está configurado para desplegarse en Render con:
- `render.yaml` - Configuración automática
- `next.config.js` - Optimizado para producción
- Scripts de build y start configurados

### 2. Pasos para Desplegar

1. **Conecta tu repositorio de GitHub a Render:**
   - Ve a [render.com](https://render.com)
   - Crea una cuenta o inicia sesión
   - Haz clic en "New +" y selecciona "Web Service"
   - Conecta tu repositorio de GitHub

2. **Configuración automática:**
   - Render detectará automáticamente que es un proyecto Next.js
   - Los valores por defecto serán:
     - **Build Command**: `npm install && npm run build`
     - **Start Command**: `npm start`
     - **Environment**: Node

3. **Variables de entorno (opcional):**
   - Si necesitas variables de entorno, agrégalas en la sección "Environment Variables"
   - Por ejemplo: `NODE_ENV=production`

4. **Despliegue:**
   - Haz clic en "Create Web Service"
   - Render comenzará el despliegue automáticamente
   - El primer despliegue puede tomar 5-10 minutos

### 3. Configuración Recomendada

- **Plan**: Free (suficiente para portafolios)
- **Auto-Deploy**: Activado (se actualiza automáticamente)
- **Health Check Path**: `/` (página principal)

### 4. Dominio Personalizado (Opcional)

Después del despliegue, puedes:
1. Ir a "Settings" en tu servicio
2. En "Custom Domains" agregar tu dominio
3. Configurar los DNS según las instrucciones

### 5. Monitoreo

- **Logs**: Disponibles en tiempo real
- **Métricas**: Uso de CPU y memoria
- **Alertas**: Configurables para problemas

## Comandos Útiles

```bash
# Desarrollo local
npm run dev

# Build para producción
npm run build

# Iniciar en producción
npm start

# Linting
npm run lint
```

## Estructura del Proyecto

```
portfolio/
├── src/
│   ├── app/           # Páginas de Next.js 13+
│   ├── components/    # Componentes React
│   ├── contexts/      # Contextos de React
│   ├── data/          # Datos estáticos
│   ├── lib/           # Utilidades
│   └── types/         # Tipos TypeScript
├── public/            # Archivos estáticos
├── next.config.js     # Configuración Next.js
├── render.yaml        # Configuración Render
└── package.json       # Dependencias
``` 