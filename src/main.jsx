import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import AppRoutes from './routes.jsx'

// Importação de estilos - Prioriza o carregamento de estilos críticos
import './styles/fonts.css'
import './styles/custom.css'
import './index.css'

// Inicializa o dataLayer para o Google Tag Manager
window.dataLayer = window.dataLayer || [];

// Inicializa a aplicação com estratégia de carregamento progressivo
const initApp = () => {
  ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </React.StrictMode>,
  )
};

// Verifica se o navegador suporta requestIdleCallback para não bloquear a renderização inicial
if ('requestIdleCallback' in window) {
  // Carrega a aplicação quando o navegador estiver ocioso
  window.requestIdleCallback(initApp, { timeout: 2000 });
} else {
  // Fallback para navegadores que não suportam requestIdleCallback
  // Usa um pequeno timeout para permitir que o HTML seja renderizado primeiro
  setTimeout(initApp, 10);
}
