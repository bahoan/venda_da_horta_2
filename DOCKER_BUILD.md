# Guia de Build da Imagem Docker - Vendas DaHorta Landing Page

Este documento contém os passos necessários para fazer o build e deploy da imagem Docker do projeto.

## Pré-requisitos

- Docker instalado
- Acesso ao DockerHub
- Node.js e npm (para desenvolvimento local)
- Acesso ao Supabase (para integração de captura de leads)

## Estrutura de Arquivos Importantes

```
landing-page/
├── Dockerfile
├── nginx.conf
├── stack.yml
├── vite.config.js
├── .env.example
└── src/
```

## Dependências de Build

Antes de iniciar o build, certifique-se que as dependências de otimização estão instaladas:

```bash
npm install --save-dev terser
npm install @supabase/supabase-js
```

## Configuração de Ambiente

1. **Configuração local**
   - Crie um arquivo `.env` baseado no `.env.example` com suas credenciais do Supabase:
   ```
   VITE_SUPABASE_URL=Sua URL
   VITE_SUPABASE_ANON_KEY=Sua chave anon
   VITE_FAVICON_URL=/vite.svg
   ```
   - **IMPORTANTE**: Não comita o arquivo `.env` no GitHub

2. **Configuração para produção**
   - As variáveis de ambiente do Supabase já estão configuradas no `stack.yml` e `docker-compose.yml`
   - **ATUALIZAÇÃO**: Certifique-se de que as variáveis de ambiente agora apontam para a URL base do Supabase, não para uma tabela específica
   - **NOVO**: A variável `VITE_FAVICON_URL` pode ser configurada no `stack.yml` para personalizar o favicon

## Passos para Build

1. **Limpar cache do Docker (se necessário)**
   ```bash
   docker system prune -a --force
   ```

2. **Build da imagem**
   ```bash
   docker build -t arturdiboa/vendas-dahorta:v1.3 .
   ```

3. **Push para DockerHub**
   ```bash
   # Fazer login no DockerHub (necessário apenas uma vez)
   docker login

   # Push da imagem
   docker push arturdiboa/vendas-dahorta:v1.3
   ```

## Deploy com Docker Swarm/Portainer

1. No Portainer, verificar se o registry do DockerHub está configurado:
   - Settings > Registries
   - Add registry > DockerHub
   - Adicionar credenciais

2. Usar o arquivo `stack.yml` para deploy com as seguintes configurações importantes:
   ```yaml
   image: docker.io/arturdiboa/vendas-dahorta:v1.3  # Caminho completo da imagem
   environment:
     - VITE_SUPABASE_URL=https://cynnujihthpzbfxlfayy.supabase.co
     - VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN5bm51amlodGhwemJmeGxmYXl5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTg5OTU4NjgsImV4cCI6MjAzNDU3MTg2OH0.ZUTO3SepkwQsuL85KGwKi8-erpGIy20bYMbiD4voGaA
     - VITE_FAVICON_URL=https://caminho-para-seu-favicon.svg  # URL personalizada para o favicon
   ```

3. Verificar se a porta 80 está configurada corretamente:
   - No nginx.conf: `listen 80;`
   - No stack.yml: `traefik.http.services.vendas-dahorta.loadbalancer.server.port=80`

## Integração com Supabase

### Detalhes da Tabela Leads

A tabela `leads` no Supabase tem a seguinte estrutura:

```sql
create table public.leads (
  id uuid not null default gen_random_uuid (),
  name text null,
  doc text null,
  whatsapp text null,
  email text null,
  is_deleted boolean null default false,
  created_at timestamp with time zone null default now(),
  updated_at timestamp with time zone null default now(),
  cep text null,
  constraint leads_pkey primary key (id)
) TABLESPACE pg_default;
```

### Detalhes da Tabela Video_Site

A tabela `video_site` no Supabase tem a seguinte estrutura:

```sql
create table public.video_site (
  id uuid not null default gen_random_uuid (),
  created_at timestamp with time zone null default now(),
  url text null,
  depoimento text null,
  titulo text null,
  sort integer null,
  constraint video_site_pkey primary key (id)
) TABLESPACE pg_default;
```

### Endpoints e Autenticação

- **URL Base da API**: `https://cynnujihthpzbfxlfayy.supabase.co`
- **Tabelas Utilizadas**: 
  - `leads` - Para captura de informações de leads
  - `video_site` - Para exibição de depoimentos em vídeo
- **Chave ANON**: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN5bm51amlodGhwemJmeGxmYXl5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTg5OTU4NjgsImV4cCI6MjAzNDU3MTg2OH0.ZUTO3SepkwQsuL85KGwKi8-erpGIy20bYMbiD4voGaA`

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
1. Verificar se a porta do Nginx (80) corresponde à porta configurada no Traefik
2. Verificar logs do container para erros de permissão ou configuração
3. Garantir que o network_public existe e está configurado corretamente

Se encontrar problemas com a integração do Supabase:
1. Verificar se as variáveis de ambiente estão corretamente configuradas
2. Verificar os logs do container para erros de conexão com o Supabase
3. Testar a API do Supabase diretamente para confirmar que está funcionando
4. **NOVO**: Certifique-se de que a URL do Supabase está configurada como URL base e não como URL específica de tabela

### Problemas específicos com o carrossel de depoimentos:
1. Se os vídeos não aparecerem, verifique se a tabela `video_site` existe e contém dados
2. Verifique se os IDs dos vídeos do YouTube estão corretos na tabela
3. O sistema possui um fallback para vídeos estáticos caso a API falhe, verifique o console para erros

## Arquivos de Configuração

### nginx.conf
```nginx
server {
    listen 80;
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
  },
  define: {
    'process.env.VITE_SUPABASE_URL': JSON.stringify(process.env.VITE_SUPABASE_URL),
    'process.env.VITE_SUPABASE_ANON_KEY': JSON.stringify(process.env.VITE_SUPABASE_ANON_KEY)
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
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

### docker-compose.yml
```yaml
version: '3.8'

services:
  landing-page:
    build: .
    ports:
      - "80:80"
    restart: unless-stopped
    environment:
      - NODE_ENV=production
      - VITE_SUPABASE_URL=${VITE_SUPABASE_URL:-https://cynnujihthpzbfxlfayy.supabase.co}
      - VITE_SUPABASE_ANON_KEY=${VITE_SUPABASE_ANON_KEY:-eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN5bm51amlodGhwemJmeGxmYXl5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTg5OTU4NjgsImV4cCI6MjAzNDU3MTg2OH0.ZUTO3SepkwQsuL85KGwKi8-erpGIy20bYMbiD4voGaA}
```

## Notas Importantes

- Sempre use o caminho completo da imagem: `docker.io/arturdiboa/vendas-dahorta:v1.3`
- A porta 80 deve estar consistente em todos os arquivos de configuração
- O usuário nginx deve ter permissões corretas nos diretórios relevantes
- As otimizações de performance e privacidade estão configuradas para seguir as melhores práticas atuais do Chrome
- **Nunca comite o arquivo .env com credenciais do Supabase no repositório**
- As variáveis de ambiente do Supabase devem ser configuradas no ambiente de produção via stack.yml

## Solução para Problemas de MIME Type com JSX

### Problema

Ao carregar arquivos JSX diretamente como módulos JavaScript no navegador, pode ocorrer o seguinte erro:

```
Failed to load module script: Expected a JavaScript module script but the server responded with a MIME type of 'text/jsx'. Strict MIME type checking is enforced for module scripts per HTML spec.
```

### Solução Implementada

Para resolver este problema, implementamos uma abordagem em duas partes:

1. **Wrapper JS para arquivos JSX**:
   - Criamos um arquivo `main.js` que importa o arquivo `main.jsx`
   - No HTML, referenciamos apenas o arquivo `.js`, não o `.jsx`
   - Exemplo:
     ```html
     <!-- Correto -->
     <script type="module" src="/src/main.js"></script>
     
     <!-- Incorreto - Causa erro de MIME type -->
     <script type="module" src="/src/main.jsx"></script>
     ```

2. **Configuração do Nginx**:
   - Definimos o MIME type correto para arquivos JSX no arquivo `mime.types`
   - Adicionamos uma configuração específica para arquivos JSX no `nginx.conf`
   - Removemos diretivas duplicadas de `default_type` para evitar conflitos

### Melhores Práticas

- **Nunca referencie arquivos JSX diretamente no HTML** - Sempre use um arquivo JS intermediário
- **Evite modificar manualmente os MIME types** - Use a abordagem de wrapper quando possível
- **Verifique a configuração do bundler** - Certifique-se de que o Vite está configurado para transpilar JSX corretamente
- **Teste em diferentes navegadores** - Chrome, Firefox e Safari podem ter comportamentos diferentes

### Verificação de Configuração

Se precisar verificar se os MIME types estão configurados corretamente:

```bash
# Verificar o MIME type retornado pelo servidor
curl -I http://localhost:3000/src/main.js
```

O cabeçalho `Content-Type` deve mostrar `application/javascript` para arquivos JS e JSX.

## Atualizações para o Carrossel de Depoimentos

### Alterações nos Arquivos Docker

1. **stack.yml e docker-compose.yml**
   - Atualize a variável `VITE_SUPABASE_URL` para apontar para a URL base do Supabase:
   ```yaml
   environment:
     - VITE_SUPABASE_URL=https://cynnujihthpzbfxlfayy.supabase.co
     - VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN5bm51amlodGhwemJmeGxmYXl5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTg5OTU4NjgsImV4cCI6MjAzNDU3MTg2OH0.ZUTO3SepkwQsuL85KGwKi8-erpGIy20bYMbiD4voGaA
   ```

2. **Dockerfile**
   - Nenhuma alteração necessária no Dockerfile para suportar o carrossel de depoimentos

### Considerações de Performance

1. **Carregamento de Imagens**
   - O carrossel carrega thumbnails do YouTube, o que pode impactar a performance
   - Considere implementar lazy loading para as imagens do carrossel

2. **Fallback**
   - O sistema possui um mecanismo de fallback para depoimentos estáticos
   - Em caso de falha na API, os depoimentos pré-definidos serão exibidos

### Permissões do Supabase

Certifique-se de que as políticas de segurança do Supabase permitem:
1. Leitura anônima na tabela `video_site`
2. Escrita anônima na tabela `leads`

## Personalização do Favicon

A aplicação agora suporta a personalização do favicon através de uma variável de ambiente:

### Configuração do Favicon

1. **Variável de ambiente**
   - `VITE_FAVICON_URL`: URL para o favicon personalizado
   - Valor padrão: `/vite.svg`

2. **Como configurar**
   - No arquivo `.env` local:
     ```
     VITE_FAVICON_URL=/caminho/para/seu/favicon.svg
     ```
   - No `stack.yml` para produção:
     ```yaml
     environment:
       - VITE_FAVICON_URL=https://caminho-para-seu-favicon.svg
     ```

3. **Formatos suportados**
   - SVG (recomendado para melhor qualidade)
   - PNG, ICO, GIF (também suportados)

4. **Considerações importantes**
   - Para arquivos locais, use caminhos relativos à pasta raiz (não use `/public/`)
   - Para arquivos externos, use URLs completas (https://...)
   - Certifique-se de que o arquivo está acessível publicamente se for uma URL externa

## Histórico de Versões

### v1.3 (02/03/2025)
- Adicionado suporte para múltiplos domínios (vendasdahorta.com e www.vendasdahorta.com)
- Configuração do Traefik atualizada para rotear ambos os domínios
- Otimizações de performance e segurança
- Migração do repositório Docker Hub para arturdiboa

### v1.2 (01/03/2025)
- Atualizada a versão da imagem Docker para v1.2
- Corrigido problema de MIME type para arquivos JSX
- Implementada solução para carregamento de módulos JSX via wrapper JS

### v1.1.9 (28/02/2025)
- Implementada solução definitiva para problemas de MIME type com JSX usando wrapper JS
- Adicionadas configurações de timeout para melhorar a estabilidade

### v1.1.1 (01/03/2025)
- Adicionado suporte para carregamento dinâmico de depoimentos em vídeo do Supabase
- Implementado carrossel de depoimentos em tela cheia
