import { useState, useRef } from "react";
import { saveLead } from "../../utils/supabaseClient";

export default function LeadModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    whatsapp: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [touchedFields, setTouchedFields] = useState({});
  const modalRef = useRef(null);
  const initialFocusRef = useRef(null);

  // Validação de campos
  const validateField = (name, value) => {
    switch (name) {
      case 'nome':
        return value.trim().length < 3 ? 'Nome deve ter pelo menos 3 caracteres' : '';
      case 'email':
        return !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? 'Email inválido' : '';
      case 'whatsapp':
        // Aceita tanto formato de celular (XX) XXXXX-XXXX quanto fixo (XX) XXXX-XXXX
        return !/^\(\d{2}\)\s\d{4,5}-\d{4}$/.test(value) ? 'WhatsApp inválido' : '';
      default:
        return '';
    }
  };

  // Manipulação de mudanças nos campos
  const handleChange = (e) => {
    const { name, value } = e.target;
    
    // Se for WhatsApp, formata o número
    let formattedValue = value;
    if (name === 'whatsapp') {
      const digits = value.replace(/\D/g, '');
      
      // Formata de acordo com a quantidade de dígitos (telefone fixo ou celular)
      if (digits.length <= 10) {
        // Formato para telefone fixo: (XX) XXXX-XXXX
        formattedValue = digits
          .replace(/\D/g, '')
          .replace(/^(\d{2})(\d)/, '($1) $2')
          .replace(/(\d{4})(\d)/, '$1-$2')
          .slice(0, 14);
      } else {
        // Formato para celular: (XX) XXXXX-XXXX
        formattedValue = digits
          .replace(/\D/g, '')
          .replace(/^(\d{2})(\d)/, '($1) $2')
          .replace(/(\d{5})(\d)/, '$1-$2')
          .slice(0, 15);
      }
    }

    setFormData(prev => ({
      ...prev,
      [name]: formattedValue
    }));

    // Se o campo já foi tocado, valida em tempo real
    if (touchedFields[name]) {
      const error = validateField(name, formattedValue);
      setErrors(prev => ({
        ...prev,
        [name]: error // Se error for string vazia, remove o erro
      }));
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setTouchedFields(prev => ({
      ...prev,
      [name]: true
    }));
    
    const error = validateField(name, value);
    setErrors(prev => ({
      ...prev,
      [name]: error
    }));
  };

  // Submissão do formulário
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Valida todos os campos
    const newErrors = {};
    Object.keys(formData).forEach(key => {
      const error = validateField(key, formData[key]);
      if (error) newErrors[key] = error;
    });

    setErrors(newErrors);
    setTouchedFields({
      nome: true,
      email: true,
      whatsapp: true
    });

    if (Object.keys(newErrors).length === 0) {
      setIsSubmitting(true);
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
    }
  };

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm transition-opacity"
      aria-modal="true"
      role="dialog"
      aria-labelledby="modal-title"
    >
      <div 
        ref={modalRef}
        className="bg-white rounded-lg p-6 w-full max-w-md mx-4 relative"
      >
        <div className="flex justify-between items-center mb-6 pr-2">
          <h2 className="text-xl font-bold text-green-600 pr-8">
            Entrar no Vendas da Horta
          </h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 p-1"
            aria-label="Fechar"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Nome completo
              </label>
              <input
                ref={initialFocusRef}
                type="text"
                value={formData.nome}
                onChange={handleChange}
                onBlur={handleBlur}
                name="nome"
                placeholder="Seu nome completo"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500"
              />
              {touchedFields.nome && errors.nome && (
                <p className="mt-1 text-sm text-red-500">{errors.nome}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                E-mail
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={handleChange}
                onBlur={handleBlur}
                name="email"
                placeholder="seu@email.com"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500"
              />
              {touchedFields.email && errors.email && (
                <p className="mt-1 text-sm text-red-500">{errors.email}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                WhatsApp
              </label>
              <input
                type="tel"
                value={formData.whatsapp}
                onChange={handleChange}
                onBlur={handleBlur}
                name="whatsapp"
                placeholder="(XX) XXXX-XXXX"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500"
              />
              {touchedFields.whatsapp && errors.whatsapp && (
                <p className="mt-1 text-sm text-red-500">{errors.whatsapp}</p>
              )}
            </div>
          </div>

          <div className="mt-6">
            {/* Botão Cancelar - Comentado temporariamente
            <button
              type="button"
              onClick={onClose}
              className="px-6 py-3 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
            >
              Cancelar
            </button>
            */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full px-6 py-3 bg-orange-500 text-white font-medium rounded-lg hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
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
                'ENTRAR'
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
