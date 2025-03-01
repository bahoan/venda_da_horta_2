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
- Docker/Nginx para deploy

## 📋 Pré-requisitos

- Node.js (versão 18 ou superior)
- npm ou yarn
- Docker (para build e deploy)

## 🔧 Instalação e Execução Local

```bash
# Clone o repositório
git clone https://github.com/MakeToMe/appdahorta.git
cd appdahorta

# Instale as dependências
npm install

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
docker build -t fmguardia/vendas-dahorta:v1.0 .

# Executar com Docker Compose
docker-compose up -d
```

## 📦 Estrutura do Projeto

```
landing-page/
├── public/              # Arquivos estáticos
├── src/                 # Código fonte
│   ├── components/      # Componentes React
│   ├── App.jsx          # Componente principal
│   └── main.jsx         # Ponto de entrada
├── Dockerfile           # Configuração Docker
├── nginx.conf           # Configuração Nginx
└── vite.config.js       # Configuração Vite
```

## 🔄 Versionamento

Utilizamos [SemVer](http://semver.org/) para versionamento. A versão atual é v1.9.

## 📄 Licença

Este projeto está licenciado sob a licença MIT - veja o arquivo LICENSE para detalhes.

## 📞 Contato

Para mais informações sobre o projeto, entre em contato.
