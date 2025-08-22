# Etapa 1: Build de Astro
FROM node:20 AS builder
WORKDIR /app

# Copiar archivos de dependencias
COPY package*.json ./
RUN npm install

# Copiar el resto del proyecto
COPY . .

# Construir Astro (genera /dist)
RUN npm run build

# Etapa 2: Servir con Nginx
FROM nginx:alpine
# Eliminar configuración default de Nginx
RUN rm -rf /usr/share/nginx/html/*

# Copiar los archivos estáticos generados por Astro
COPY --from=builder /app/dist /usr/share/nginx/html

# Exponer el puerto
EXPOSE 80

# Arrancar Nginx
CMD ["nginx", "-g", "daemon off;"]
