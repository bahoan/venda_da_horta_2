# Vendas DaHorta - Landing Page

Landing page para o projeto "Vendas DaHorta", uma plataforma para venda de produtos orgânicos online.

## 🌱 Sobre o Projeto

Esta landing page foi desenvolvida para promover o método de vendas de produtos orgânicos pelo WhatsApp, ajudando produtores a venderem mais de R$2.000 por dia de entrega.

## 🚀 Tecnologias Utilizadas

- React.js
- Vite
- TailwindCSS
- Framer Motion
- Swiper
- Supabase (armazenamento de leads e depoimentos)
- Docker/Nginx para deploy

## 📋 Pré-requisitos

- Node.js (versão 18 ou superior)
- npm ou yarn
- Docker (para build e deploy)
- Conta no Supabase (para armazenamento de dados)

## 🔧 Instalação e Execução Local

```bash
# Clone o repositório
git clone https://github.com/MakeToMe/appdahorta.git
cd appdahorta

# Instale as dependências
npm install

# Configure as variáveis de ambiente
cp .env.example .env
# Edite o arquivo .env com suas credenciais do Supabase

# Execute em modo de desenvolvimento
npm run dev
```

## 🏗️ Build e Deploy

Para instruções detalhadas sobre build e deploy com Docker, consulte o arquivo [DOCKER_BUILD.md](DOCKER_BUILD.md).

### Comandos Rápidos

```bash
# Build da aplicação
npm run build

# Build da imagem Docker
docker build -t fmguardia/vendas-dahorta:v1.1.9 .

# Executar com Docker Compose
docker-compose up -d
```

## 📦 Estrutura do Projeto

```
landing-page/
├── public/              # Arquivos estáticos
├── src/                 # Código fonte
│   ├── components/      # Componentes React
│   │   ├── LeadModal.jsx    # Modal de captura de leads
│   │   ├── VideoSlider.jsx  # Carrossel de depoimentos em vídeo
│   │   └── ...
│   ├── utils/           # Utilitários
│   │   └── supabaseClient.js # Cliente para API do Supabase
│   ├── App.jsx          # Componente principal
│   └── main.jsx         # Ponto de entrada
├── Dockerfile           # Configuração Docker
├── nginx.conf           # Configuração Nginx
├── docker-compose.yml   # Configuração Docker Compose
├── stack.yml            # Configuração Docker Swarm
└── vite.config.js       # Configuração Vite
```

## 🔧 Solução de Problemas Comuns

### Erro de MIME Type com JSX

Se você encontrar o erro:
```
Failed to load module script: Expected a JavaScript module script but the server responded with a MIME type of 'text/jsx'
```

Isso ocorre porque o navegador espera um arquivo JavaScript, mas está recebendo um arquivo JSX com o MIME type incorreto.

**Solução:**
1. Nunca referencie arquivos JSX diretamente no HTML
2. Use um arquivo JS intermediário que importa o JSX:
   ```javascript
   // main.js
   import './main.jsx';
   ```
3. No HTML, referencie apenas o arquivo JS:
   ```html
   <script type="module" src="/src/main.js"></script>
   ```

Para mais detalhes, consulte o arquivo `DOCKER_BUILD.md`.

## 🔄 Versionamento

Utilizamos [SemVer](http://semver.org/) para versionamento. A versão atual é v1.1.9.

### Histórico de Versões

- **v1.1.9** - Implementada solução para carregamento de módulos JSX via wrapper JS
- **v1.1.8** - Corrigido problema de diretiva duplicada no default_types.conf
- **v1.1.7** - Implementada configuração adicional para MIME types de arquivos JSX
- **v1.1.6** - Corrigido MIME type para arquivos JSX (application/javascript)
- **v1.1.5** - Corrigido problema de MIME types duplicados que causava erro 502 (Bad Gateway)
- **v1.1.4** - Corrigido erro 502 (Bad Gateway) ajustando configurações do Traefik e permissões do Nginx
- **v1.1.3** - Corrigido erro de sintaxe na configuração de MIME types do Nginx
- **v1.1.2** - Corrigido erro de MIME type para arquivos JSX
- **v1.1.1** - Corrigido problema de timeout (erro 504) ajustando configurações do Nginx
- **v1.1.0** - Adicionado carrossel de depoimentos em vídeo do Supabase e suporte para favicon personalizado
- **v1.0.0** - Versão inicial com captura de leads e integração com Hotmart

## 📄 Licença

Este projeto está licenciado sob a licença MIT - veja o arquivo LICENSE para detalhes.

## 📞 Contato

Para mais informações sobre o projeto, entre em contato.
