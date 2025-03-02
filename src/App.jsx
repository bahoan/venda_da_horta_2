import { useState, useEffect } from 'react'
import { pageBlocks } from './components/blocks'
import { Footer } from './components/common'
import { VERSION } from './version.js'
import { setCookie, getCookie } from './utils/cookieManager.js'
import { ModalProvider } from './contexts/ModalContext'

export default function App() {
  const [cookieConsent, setCookieConsent] = useState(true);

  useEffect(() => {
    // Verificar se o usuário já aceitou os cookies
    const hasConsent = getCookie('cookie-consent');
    if (hasConsent) {
      setCookieConsent(true);
    } else {
      setCookieConsent(false);
    }
  }, []);

  const acceptCookies = () => {
    setCookie('cookie-consent', 'true', 365, true, 'Lax');
    setCookieConsent(true);
  };

  return (
    <ModalProvider>
      {!cookieConsent && (
        <div className="fixed bottom-0 left-0 right-0 bg-gray-800 text-white p-4 z-50 flex justify-between items-center">
          <p className="text-sm">
            Este site utiliza cookies para melhorar sua experiência. Ao continuar navegando, você concorda com nossa política de cookies.
          </p>
          <button 
            onClick={acceptCookies}
            className="ml-4 bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          >
            Aceitar
          </button>
        </div>
      )}
      <div className="fixed bottom-0 right-0 bg-black bg-opacity-50 text-white text-xs p-1 z-50">
        Version: {VERSION}
      </div>
      <main className="min-h-screen">
        {pageBlocks.map(({ component: Block }) => (
          <Block key={Block.name} />
        ))}
      </main>
      <Footer />
    </ModalProvider>
  )
}
