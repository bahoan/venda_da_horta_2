import { useState, useEffect } from 'react'
import { pageBlocks } from './components/blocks'
import { Footer } from './components/common'
import { setCookie, getCookie } from './utils/cookieManager.js'
import { ModalProvider } from './contexts/ModalContext'

export default function App() {
  // Aceitar cookies automaticamente
  useEffect(() => {
    // Verificar se o usuário já aceitou os cookies
    const hasConsent = getCookie('cookie-consent');
    if (!hasConsent) {
      // Aceitar cookies automaticamente
      setCookie('cookie-consent', 'true', 365, true, 'Lax');
    }
  }, []);

  return (
    <ModalProvider>
      {/* Banner de cookies removido */}
      <main className="min-h-screen">
        {pageBlocks.map(({ component: Block }) => (
          <Block key={Block.name} />
        ))}
      </main>
      <Footer />
    </ModalProvider>
  )
}
