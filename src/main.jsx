import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import AppRoutes from './routes.jsx'
import './styles/fonts.css'
import './styles/custom.css'
import './index.css'
import { VERSION } from './version.js'

console.log('Vendas DaHorta Version:', VERSION)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  </React.StrictMode>,
)
