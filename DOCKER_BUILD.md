# Guia de Build da Imagem Docker - Vendas DaHorta Landing Page

Este documento contém os passos necessários para fazer o build e deploy da imagem Docker do projeto.

## Pré-requisitos

- Docker instalado
- Acesso ao DockerHub
- Node.js e npm (para desenvolvimento local)

## Estrutura de Arquivos Importantes

```
landing-page/
├── Dockerfile
├── nginx.conf
├── stack.yml
├── vite.config.js
└── src/
```

## Dependências de Build

Antes de iniciar o build, certifique-se que as dependências de otimização estão instaladas:

```bash
npm install --save-dev terser
```

## Passos para Build

1. **Limpar cache do Docker (se necessário)**
   ```bash
   docker system prune -a --force
   ```

2. **Build da imagem**
   ```bash
   docker build -t fmguardia/vendas-dahorta:v1.0 .
   ```

3. **Push para DockerHub**
   ```bash
   # Fazer login no DockerHub (necessário apenas uma vez)
   docker login

   # Push da imagem
   docker push fmguardia/vendas-dahorta:v1.0
   ```

## Deploy com Docker Swarm/Portainer

1. No Portainer, verificar se o registry do DockerHub está configurado:
   - Settings > Registries
   - Add registry > DockerHub
   - Adicionar credenciais

2. Usar o arquivo `stack.yml` para deploy com as seguintes configurações importantes:
   ```yaml
   image: docker.io/fmguardia/vendas-dahorta:v1.0  # Caminho completo da imagem
   ```

3. Verificar se a porta 3000 está configurada corretamente:
   - No nginx.conf: `listen 3000;`
   - No stack.yml: `traefik.http.services.vendas-dahorta.loadbalancer.server.port=3000`

## Otimizações Implementadas

### Performance
- Otimização de carregamento de fontes com preload e display swap
- Minificação agressiva de JavaScript com Terser
- Code splitting para vendor chunks
- Tree-shaking otimizado

### Privacidade e Segurança
- Headers de privacidade atualizados para Chrome Privacy Sandbox
- Configurações de cookies seguindo as melhores práticas
- Headers de segurança CORS e CSP otimizados
- Desativação de recursos de rastreamento de terceiros

## Troubleshooting

Se encontrar erro "502 Bad Gateway":
1. Verificar se a porta do Nginx (3000) corresponde à porta configurada no Traefik
2. Verificar logs do container para erros de permissão ou configuração
3. Garantir que o network_public existe e está configurado corretamente

## Arquivos de Configuração

### nginx.conf
```nginx
server {
    listen 3000;
    # ... outras configurações ...
    
    # Headers de privacidade e cookies
    add_header Permissions-Policy "interest-cohort=(), browsing-topics=(), join-ad-interest-group=(), run-ad-auction=()";
    add_header Cross-Origin-Opener-Policy "same-origin-allow-popups";
    add_header Cross-Origin-Embedder-Policy "credentialless";
    
    # Cookie settings
    add_header Set-Cookie "CookieConsent=false; Path=/; SameSite=Strict; Secure; Partitioned";
    add_header Cookie-Same-Site "Strict";
    add_header Cookie-Same-Party "true";
}
```

### vite.config.js
```javascript
export default defineConfig({
  build: {
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true
      }
    },
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
        }
      }
    },
    target: 'esnext'
  }
})
```

### Dockerfile
```dockerfile
FROM node:18-alpine as build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
RUN chown -R nginx:nginx /usr/share/nginx/html && \
    chmod -R 755 /usr/share/nginx/html && \
    chown -R nginx:nginx /var/cache/nginx && \
    chown -R nginx:nginx /var/log/nginx && \
    chown -R nginx:nginx /etc/nginx/conf.d
USER nginx
EXPOSE 3000
CMD ["nginx", "-g", "daemon off;"]
```

## Notas Importantes

- Sempre use o caminho completo da imagem: `docker.io/fmguardia/vendas-dahorta:v1.0`
- A porta 3000 deve estar consistente em todos os arquivos de configuração
- O usuário nginx deve ter permissões corretas nos diretórios relevantes
- As otimizações de performance e privacidade estão configuradas para seguir as melhores práticas atuais do Chrome
