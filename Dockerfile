# Etapa 1: Build
FROM node:20-alpine AS builder

# Instalar dependencias necesarias para sharp y otras librerías nativas
RUN apk add --no-cache python3 make g++ vips-dev

WORKDIR /app

# Copiar archivos de dependencias
COPY package*.json ./

# Instalar dependencias
RUN npm ci

# Copiar el resto del código
COPY . .

# Build de la aplicación
RUN npm run build

# Etapa 2: Producción
FROM nginx:alpine

# Copiar los archivos compilados desde la etapa de build
COPY --from=builder /app/dist /usr/share/nginx/html

# Copiar configuración personalizada de nginx (opcional)
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Exponer puerto 80
EXPOSE 80

# Comando para iniciar nginx
CMD ["nginx", "-g", "daemon off;"]