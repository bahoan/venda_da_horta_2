/**
 * Cliente Supabase para integração com a API REST
 * 
 * Este módulo fornece funções para interagir com a tabela de leads no Supabase
 * utilizando a API REST diretamente, sem depender da biblioteca completa do Supabase.
 */

/**
 * Envia um novo lead para o Supabase
 * @param {Object} leadData - Dados do lead
 * @param {string} leadData.name - Nome completo
 * @param {string} leadData.email - Email
 * @param {string} [leadData.doc] - CPF/CNPJ (opcional)
 * @param {string} [leadData.whatsapp] - Número de WhatsApp (opcional)
 * @param {string} [leadData.cep] - CEP (opcional)
 * @returns {Promise<Object>} - Resposta da API
 */
export async function saveLead(leadData) {
  try {
    const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || process.env.VITE_SUPABASE_URL;
    const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || process.env.VITE_SUPABASE_ANON_KEY;
    
    if (!supabaseUrl || !supabaseAnonKey) {
      console.error('Supabase URL ou chave ANON não configuradas');
      return { error: 'Configuração do Supabase ausente' };
    }

    // URL base do Supabase (sem o caminho para a tabela)
    const baseUrl = supabaseUrl.includes('/rest/v1') 
      ? supabaseUrl.split('/rest/v1')[0] 
      : supabaseUrl;
    
    // URL completa para a tabela leads
    const leadsUrl = `${baseUrl}/rest/v1/leads`;

    // Prepara os dados do lead
    const payload = {
      name: leadData.name || null,
      email: leadData.email || null,
      doc: leadData.doc || null,
      whatsapp: leadData.whatsapp || null,
      cep: leadData.cep || null,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
      is_deleted: false
    };

    // Envia os dados para o Supabase via REST API
    const response = await fetch(leadsUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'apikey': supabaseAnonKey,
        'Authorization': `Bearer ${supabaseAnonKey}`,
        'Prefer': 'return=minimal'
      },
      body: JSON.stringify(payload)
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      console.error('Erro ao salvar lead no Supabase:', errorData);
      return { error: errorData };
    }

    return { success: true };
  } catch (error) {
    console.error('Erro ao processar requisição para o Supabase:', error);
    return { error: error.message };
  }
}

/**
 * Verifica se a conexão com o Supabase está funcionando
 * @returns {Promise<boolean>} - true se a conexão estiver funcionando
 */
export async function testSupabaseConnection() {
  try {
    const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || process.env.VITE_SUPABASE_URL;
    const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || process.env.VITE_SUPABASE_ANON_KEY;
    
    if (!supabaseUrl || !supabaseAnonKey) {
      console.error('Supabase URL ou chave ANON não configuradas');
      return false;
    }

    // URL base do Supabase (sem o caminho para a tabela)
    const baseUrl = supabaseUrl.includes('/rest/v1') 
      ? supabaseUrl.split('/rest/v1')[0] 
      : supabaseUrl;

    // Faz uma requisição HEAD para verificar a conexão
    const response = await fetch(`${baseUrl}/rest/v1/leads`, {
      method: 'HEAD',
      headers: {
        'apikey': supabaseAnonKey,
        'Authorization': `Bearer ${supabaseAnonKey}`
      }
    });

    return response.ok;
  } catch (error) {
    console.error('Erro ao testar conexão com o Supabase:', error);
    return false;
  }
}

/**
 * Busca os depoimentos em vídeo do Supabase
 * @returns {Promise<Object>} - Lista de depoimentos ou erro
 */
export async function fetchVideoTestimonials() {
  try {
    const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || process.env.VITE_SUPABASE_URL;
    const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || process.env.VITE_SUPABASE_ANON_KEY;
    
    if (!supabaseUrl || !supabaseAnonKey) {
      console.error('Supabase URL ou chave ANON não configuradas');
      return { error: 'Configuração do Supabase ausente', data: [] };
    }

    // URL base do Supabase (sem o caminho para a tabela)
    const baseUrl = supabaseUrl.includes('/rest/v1') 
      ? supabaseUrl.split('/rest/v1')[0] 
      : supabaseUrl;
    
    // URL completa para a tabela video_site
    const videoSiteUrl = `${baseUrl}/rest/v1/video_site`;

    console.log('Buscando depoimentos em:', videoSiteUrl);

    // Busca os depoimentos do Supabase via REST API
    // Ordenados pela coluna sort
    const response = await fetch(`${videoSiteUrl}?order=sort.asc`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'apikey': supabaseAnonKey,
        'Authorization': `Bearer ${supabaseAnonKey}`
      }
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      console.error('Erro ao buscar depoimentos do Supabase:', errorData);
      return { error: errorData, data: [] };
    }

    const testimonials = await response.json().catch(err => {
      console.error('Erro ao processar resposta JSON:', err);
      return [];
    });
    
    if (!Array.isArray(testimonials)) {
      console.error('Resposta do Supabase não é um array:', testimonials);
      return { error: 'Formato de resposta inválido', data: [] };
    }
    
    // Mapeia os dados do formato da tabela para o formato esperado pelo componente
    const formattedTestimonials = testimonials.map(item => {
      if (!item || typeof item !== 'object') {
        return { id: '', title: '', description: '' };
      }
      
      // Extrai o ID do YouTube da URL
      const youtubeId = extractYoutubeId(item.url || '');
      
      return {
        id: youtubeId,
        title: item.titulo || '',
        description: item.depoimento || ''
      };
    }).filter(item => item.id); // Filtra itens sem ID
    
    return { data: formattedTestimonials };
  } catch (error) {
    console.error('Erro ao processar requisição para o Supabase:', error);
    return { error: error.message, data: [] };
  }
}

/**
 * Extrai o ID do YouTube de uma URL
 * @param {string} url - URL do vídeo do YouTube
 * @returns {string} - ID do vídeo
 */
function extractYoutubeId(url) {
  if (!url) return '';
  
  // Padrões de URL do YouTube
  const patterns = [
    /(?:https?:\/\/)?(?:www\.)?youtube\.com\/watch\?v=([^&]+)/i,
    /(?:https?:\/\/)?(?:www\.)?youtu\.be\/([^?]+)/i,
    /(?:https?:\/\/)?(?:www\.)?youtube\.com\/embed\/([^?]+)/i
  ];
  
  for (const pattern of patterns) {
    const match = url.match(pattern);
    if (match && match[1]) {
      return match[1];
    }
  }
  
  // Se não conseguir extrair, retorna a própria URL
  return url;
}
