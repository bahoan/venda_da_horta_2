import { useState, useEffect, useRef } from 'react';
import { saveLead } from '../utils/supabaseClient';

export default function LeadModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    whatsapp: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [saveError, setSaveError] = useState(null);
  const modalRef = useRef(null);
  const initialFocusRef = useRef(null);

  // Fechar modal ao pressionar ESC
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') onClose();
    };
    
    if (isOpen) {
      document.addEventListener('keydown', handleEsc);
      document.body.style.overflow = 'hidden'; // Previne rolagem do body
      
      // Foco automático no primeiro campo
      setTimeout(() => {
        initialFocusRef.current?.focus();
      }, 50);
    }
    
    return () => {
      document.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = 'auto'; // Restaura rolagem
    };
  }, [isOpen, onClose]);

  // Fechar ao clicar fora do modal
  const handleOutsideClick = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      onClose();
    }
  };

  // Validação de campos
  const validateField = (name, value) => {
    switch (name) {
      case 'nome':
        return value.trim() ? '' : 'Nome é obrigatório';
      case 'email':
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? '' : 'Email inválido';
      case 'whatsapp':
        // Validação de telefone com DDD (11 dígitos)
        return value.replace(/\D/g, '').length >= 10 ? '' : 'WhatsApp inválido';
      default:
        return '';
    }
  };

  // Manipulação de mudanças nos campos
  const handleChange = (e) => {
    const { name, value } = e.target;
    
    // Formatação específica para cada campo
    let formattedValue = value;
    
    if (name === 'whatsapp') {
      // Remove tudo que não é dígito
      const digits = value.replace(/\D/g, '');
      
      // Formata telefone: (11) 91234-5678
      if (digits.length <= 2) {
        formattedValue = digits.length ? `(${digits}` : '';
      } else if (digits.length <= 6) {
        formattedValue = `(${digits.substring(0, 2)}) ${digits.substring(2)}`;
      } else if (digits.length <= 10) {
        formattedValue = `(${digits.substring(0, 2)}) ${digits.substring(2, 6)}-${digits.substring(6)}`;
      } else {
        formattedValue = `(${digits.substring(0, 2)}) ${digits.substring(2, 7)}-${digits.substring(7, 11)}`;
      }
    }
    
    setFormData(prev => ({ ...prev, [name]: formattedValue }));
    
    // Validação em tempo real
    const fieldError = validateField(name, formattedValue);
    setErrors(prev => ({ ...prev, [name]: fieldError }));
    
    // Limpar mensagem de erro geral quando o usuário corrige os campos
    if (saveError) {
      setSaveError(null);
    }
  };

  // Submissão do formulário
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validar todos os campos
    const newErrors = {};
    let isValid = true;
    
    Object.entries(formData).forEach(([key, value]) => {
      const error = validateField(key, value);
      if (error) {
        newErrors[key] = error;
        isValid = false;
      }
    });
    
    setErrors(newErrors);
    
    if (!isValid) return;
    
    setIsSubmitting(true);
    setSaveError(null);
    
    try {
      // Extrair DDD e número de telefone
      const phoneDigits = formData.whatsapp.replace(/\D/g, '');
      const ddd = phoneDigits.substring(0, 2);
      const phoneNumber = phoneDigits.substring(2);
      
      // Preparar dados para o Supabase
      const leadData = {
        name: formData.nome,
        email: formData.email,
        whatsapp: formData.whatsapp,
        // Campos opcionais vazios para manter compatibilidade
        doc: '',
        cep: ''
      };
      
      // Salvar no Supabase
      const result = await saveLead(leadData);
      
      if (result.error) {
        console.error('Erro ao salvar lead:', result.error);
        setSaveError('Ocorreu um erro ao salvar seus dados. Por favor, tente novamente.');
        setIsSubmitting(false);
        return;
      }
      
      // URL base do Hotmart
      const baseUrl = 'https://pay.hotmart.com/U80022774F?bid=1740851051324';
      
      // Construir URL com parâmetros para Hotmart
      let redirectUrl = `${baseUrl}&name=${encodeURIComponent(formData.nome)}`;
      redirectUrl += `&email=${encodeURIComponent(formData.email)}`;
      redirectUrl += `&phoneac=${encodeURIComponent(ddd)}`;
      redirectUrl += `&phonenumber=${encodeURIComponent(phoneNumber)}`;
      
      // Adicionar parâmetros vazios para doc e zip para manter compatibilidade
      redirectUrl += `&doc=`;
      redirectUrl += `&zip=`;
      
      console.log('Lead salvo no Supabase. Redirecionando para:', redirectUrl);
      
      // Abrir o link em uma nova aba
      window.open(redirectUrl, '_blank');
      
      // Fechar o modal após o redirecionamento
      setTimeout(() => {
        onClose();
        setIsSubmitting(false);
      }, 1000);
      
    } catch (error) {
      console.error('Erro ao processar submissão:', error);
      setSaveError('Ocorreu um erro ao processar sua solicitação. Por favor, tente novamente.');
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm transition-opacity"
      onClick={handleOutsideClick}
      aria-modal="true"
      role="dialog"
      aria-labelledby="modal-title"
    >
      <div 
        ref={modalRef}
        className="bg-white dark:bg-gray-800 rounded-lg shadow-xl w-full max-w-md mx-4 overflow-hidden transform transition-all"
        style={{ maxHeight: '90vh' }}
      >
        {/* Cabeçalho */}
        <div className="bg-brand-green text-white px-6 py-4 flex justify-between items-center">
          <h2 id="modal-title" className="text-xl font-semibold">Entrar no Vendas da Horta</h2>
          <button 
            onClick={onClose}
            className="text-white hover:text-gray-200 focus:outline-none focus:ring-2 focus:ring-white rounded-full"
            aria-label="Fechar"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        {/* Corpo */}
        <div className="px-6 py-4 max-h-[60vh] overflow-y-auto">
          {saveError && (
            <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
              {saveError}
            </div>
          )}
          
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Nome */}
            <div>
              <label htmlFor="nome" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Nome completo
              </label>
              <input
                ref={initialFocusRef}
                type="text"
                id="nome"
                name="nome"
                value={formData.nome}
                onChange={handleChange}
                className={`w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-brand-green focus:border-brand-green ${
                  errors.nome ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="Seu nome completo"
              />
              {errors.nome && <p className="mt-1 text-sm text-red-500">{errors.nome}</p>}
            </div>
            
            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                E-mail
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-brand-green focus:border-brand-green ${
                  errors.email ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="seu@email.com"
              />
              {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
            </div>
            
            {/* WhatsApp (unificado) */}
            <div>
              <label htmlFor="whatsapp" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                WhatsApp
              </label>
              <input
                type="text"
                id="whatsapp"
                name="whatsapp"
                value={formData.whatsapp}
                onChange={handleChange}
                className={`w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-brand-green focus:border-brand-green ${
                  errors.whatsapp ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="(11) 91234-5678"
              />
              {errors.whatsapp && <p className="mt-1 text-sm text-red-500">{errors.whatsapp}</p>}
            </div>
          </form>
        </div>
        
        {/* Rodapé */}
        <div className="px-6 py-4 bg-gray-50 dark:bg-gray-700 flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="mr-2 px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-brand-green"
          >
            Cancelar
          </button>
          <button
            type="button"
            onClick={handleSubmit}
            disabled={isSubmitting}
            className="px-6 py-2 text-sm font-medium text-white bg-secondary hover:bg-secondary-light rounded-md focus:outline-none focus:ring-2 focus:ring-secondary transition-colors duration-200 flex items-center"
          >
            {isSubmitting ? (
              <>
                <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Processando...
              </>
            ) : (
              'CONFIRMAR'
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
