# Etapa 1: Build
FROM node:20-alpine AS builder

# Argumentos de build
ARG VITE_GOOGLE_URL
ENV VITE_GOOGLE_URL=$VITE_GOOGLE_URL

# Instalar pnpm y dependencias necesarias para sharp
RUN apk add --no-cache python3 make g++ vips-dev && \
    corepack enable && \
    corepack prepare pnpm@latest --activate

WORKDIR /app

# Copiar archivos de dependencias
COPY package.json pnpm-lock.yaml ./

# Instalar dependencias
RUN pnpm install --frozen-lockfile

# Copiar el resto del código
COPY . .

# Build de la aplicación
RUN pnpm run build

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