import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './styles/fonts.css'
import './index.css'
import { VERSION } from './version.js'

console.log('Vendas DaHorta Version:', VERSION)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
