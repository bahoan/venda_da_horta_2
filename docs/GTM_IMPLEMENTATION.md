# Documentação da Implementação do Google Tag Manager

## Visão Geral
Este documento descreve a implementação do Google Tag Manager (GTM) no projeto Vendas DaHorta.

## ID do Container
O ID do container GTM usado neste projeto é: `GTM-NNCDWL44`

## Localização dos Scripts GTM
Os scripts do Google Tag Manager foram adicionados em dois locais específicos no arquivo `index.html`:

1. **Script principal** - Adicionado no início da seção `<head>`:
```html
<!-- Google Tag Manager -->
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-NNCDWL44');</script>
<!-- End Google Tag Manager -->
```

2. **Iframe de fallback** - Adicionado no início da seção `<body>`:
```html
<!-- Google Tag Manager (noscript) -->
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-NNCDWL44"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<!-- End Google Tag Manager (noscript) -->
```

## Eventos Rastreados
O projeto utiliza as seguintes funções de rastreamento definidas em `src/utils/gtm.js`:

1. `trackPageView` - Rastreia visualizações de página
2. `trackWhatsAppButtonClick` - Rastreia cliques no botão do WhatsApp
3. `trackEnterButtonClick` - Rastreia cliques no botão "Entrar no Vendas DaHorta"
4. `trackHortmartRedirect` - Rastreia redirecionamentos para o Hotmart

## Componentes que Utilizam Rastreamento

1. **ActionButtons.jsx** - Rastreia cliques nos botões de WhatsApp e "Entrar no Vendas DaHorta"
2. **LeadModal.jsx** - Rastreia redirecionamentos para o Hotmart
3. **routes.jsx** - Rastreia visualizações de página

## Manutenção
Para alterar o ID do container GTM:
1. Edite o ID `GTM-NNCDWL44` nos dois locais no arquivo `index.html`:
   - Na linha 8 dentro da tag `<script>` na seção `<head>`
   - Na linha 40 dentro da tag `<iframe>` na seção `<body>`

## Notas Adicionais
- O dataLayer é inicializado tanto no arquivo `main.jsx` quanto no arquivo `gtm.js` para garantir que esteja disponível em todos os contextos
- Os eventos são enviados para o GTM usando a função `pushEvent` em `src/utils/gtm.js`
- A implementação atual segue as melhores práticas do Google Tag Manager, com o script principal sendo carregado o mais cedo possível na página
