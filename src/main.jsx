import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import AppRoutes from './routes.jsx'
import './styles/fonts.css'
import './styles/custom.css'
import './index.css'
// Removida a importação da versão

// Removido o log da versão
// Inicializa o dataLayer para o Google Tag Manager
window.dataLayer = window.dataLayer || [];

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  </React.StrictMode>,
)
