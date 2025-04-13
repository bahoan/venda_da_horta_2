# Build stage
FROM node:18-alpine AS build

WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm ci

# Copy source and build
COPY . .
RUN npm run build

# Estágio de produção
FROM nginx:alpine AS production

# Copiar os arquivos de build para o diretorio do Nginx
COPY --from=build /app/dist /usr/share/nginx/html

# Configuracoes de timeout para o Nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY nginx-proxy-timeout.conf /etc/nginx/conf.d/timeout.conf

# Usar nosso arquivo mime.types personalizado
COPY mime.types /etc/nginx/mime.types
COPY default_types.conf /etc/nginx/conf.d/default_types.conf

# Configurar permissoes
RUN mkdir -p /var/cache/nginx && \
    mkdir -p /var/log/nginx && \
    mkdir -p /etc/nginx/conf.d && \
    chown -R nginx:nginx /var/cache/nginx && \
    chown -R nginx:nginx /var/log/nginx && \
    chown -R nginx:nginx /etc/nginx/conf.d && \
    chown -R nginx:nginx /usr/share/nginx/html && \
    chmod -R 755 /usr/share/nginx/html

# Instalar wget para healthcheck
RUN apk add --no-cache wget

# Usar root para iniciar o Nginx (evita problemas de permissao)
# USER nginx

# Expose port
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
