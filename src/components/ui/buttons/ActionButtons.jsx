import React from 'react';
import { useModal } from "../../../contexts/ModalContext";
import { trackWhatsAppButtonClick, trackEnterButtonClick } from "../../../utils/gtm";

/**
 * Componente que contém os botões de ação principal (Entrar no Vendas DaHorta) e suporte (WhatsApp)
 * 
 * @param {Object} props - Propriedades do componente
 * @param {string} props.className - Classes adicionais
 * @param {boolean} props.fullWidth - Se os botões devem ocupar toda a largura disponível
 * @param {string} props.topText - Texto a ser exibido acima dos botões
 * @param {boolean} props.showOnlyMainButton - Se deve mostrar apenas o botão principal
 */
export default function ActionButtons({
  className = '',
  fullWidth = false,
  topText = '',
  showOnlyMainButton = false,
  ...props
}) {
  const { openModal } = useModal();
  const whatsappUrl = "https://api.whatsapp.com/send/?phone=5544998105067&text=Ol%C3%A1%2C+tenho+d%C3%BAvidas+sobre+o+M%C3%A9todo+Vendas+DaHorta&type=phone_number&app_absent=0";
  
  const handleEnterClick = () => {
    // Rastreia o clique no botão principal
    trackEnterButtonClick('action_buttons');
    openModal();
  };

  const handleWhatsAppClick = () => {
    // Rastreia o clique no botão do WhatsApp
    trackWhatsAppButtonClick('action_buttons');
  };

  return (
    <div className={`flex flex-col gap-3 w-full ${className}`}>
      {/* Texto dinâmico acima dos botões */}
      {topText && (
        <p className="text-lg font-light text-center italic mb-1 px-0">
          "{topText}"
        </p>
      )}
      
      {/* Botão verde - Entrar no Vendas DaHorta */}
      <button 
        onClick={handleEnterClick}
        className={`
          bg-brand-green text-white font-bold py-4 px-6 rounded-lg
          transition-all duration-300 shadow-md
          hover:md:bg-brand-green-dark hover:md:-translate-y-1 hover:md:shadow-lg
          active:scale-105 md:active:scale-100
          w-full text-xl
        `}
        {...props}
      >
        Entrar no Vendas DaHorta
      </button>
      
      {/* Botão cinza - Tirar dúvidas via WhatsApp (condicional) */}
      {!showOnlyMainButton && (
        <div className="flex flex-col items-center w-full">
          <a 
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleWhatsAppClick}
            className={`
              flex items-center justify-center gap-3
              bg-brand-grey text-text-dark font-bold py-4 px-6 rounded-lg
              transition-all duration-300 shadow-md
              hover:md:bg-brand-grey-dark hover:md:-translate-y-1 hover:md:shadow-lg
              active:scale-105 md:active:scale-100
              w-full text-lg
            `}
            aria-label="Tirar dúvidas via WhatsApp"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="w-6 h-6">
              <path fill="currentColor" d="M19.05 4.91A9.816 9.816 0 0 0 12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01zm-7.01 15.24c-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.264 8.264 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24 2.2 0 4.27.86 5.82 2.42a8.183 8.183 0 0 1 2.41 5.83c.02 4.54-3.68 8.23-8.22 8.23zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.12-.17.25-.64.81-.78.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43s.17-.25.25-.41c.08-.17.04-.31-.02-.43s-.56-1.34-.76-1.84c-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31-.22.25-.86.85-.86 2.07 0 1.22.89 2.4 1.01 2.56.12.17 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.67-1.18.21-.58.21-1.07.14-1.18s-.22-.16-.47-.28z"/>
            </svg>
            <span>Tirar dúvidas via WhatsApp</span>
          </a>
          <p className="text-gray-700 text-sm mt-1 text-center">
            Normalmente respondemos em menos de 2 minutos
          </p>
        </div>
      )}
    </div>
  );
}
