// src/utils/gtm.js

// Inicializa o dataLayer se ainda não existir
window.dataLayer = window.dataLayer || [];

/**
 * Função para enviar eventos para o Google Tag Manager
 * @param {string} eventName - Nome do evento
 * @param {object} eventParams - Parâmetros adicionais do evento
 */
export const pushEvent = (eventName, eventParams = {}) => {
  window.dataLayer.push({
    event: eventName,
    ...eventParams,
  });
};

/**
 * Função para rastrear visualizações de página
 * @param {string} pagePath - Caminho da página
 * @param {string} pageTitle - Título da página
 */
export const trackPageView = (pagePath, pageTitle) => {
  pushEvent('page_view', {
    page_path: pagePath,
    page_title: pageTitle,
  });
};

/**
 * Função para rastrear cliques no botão do WhatsApp
 * @param {string} sectionName - Nome da seção onde o botão está localizado
 */
export const trackWhatsAppButtonClick = (sectionName) => {
  pushEvent('whatsapp_button_click', {
    button_type: 'whatsapp',
    button_text: 'Tirar dúvidas via WhatsApp',
    section_name: sectionName,
  });
};

/**
 * Função para rastrear cliques no botão "Entrar no Vendas DaHorta"
 * @param {string} sectionName - Nome da seção onde o botão está localizado
 */
export const trackEnterButtonClick = (sectionName) => {
  pushEvent('enter_button_click', {
    button_type: 'enter',
    button_text: 'Entrar no Vendas DaHorta',
    section_name: sectionName,
  });
};

/**
 * Função para rastrear cliques no botão "ENTRAR" do modal que redireciona para o Hortmart
 * @param {object} leadData - Dados do lead (sem informações sensíveis)
 */
export const trackHortmartRedirect = (leadData = {}) => {
  // Não incluímos dados sensíveis como email ou telefone completo
  pushEvent('hortmart_redirect', {
    button_type: 'hortmart',
    button_text: 'ENTRAR',
    has_name: !!leadData.name,
    has_email: !!leadData.email,
    has_whatsapp: !!leadData.whatsapp,
  });
};

export default {
  pushEvent,
  trackPageView,
  trackWhatsAppButtonClick,
  trackEnterButtonClick,
  trackHortmartRedirect,
};
