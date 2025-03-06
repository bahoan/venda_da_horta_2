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
 * @returns {Promise<Object>} - Resposta da API com o ID do lead criado
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
        'Prefer': 'return=representation' // Alterado para retornar os dados inseridos, incluindo o ID
      },
      body: JSON.stringify(payload)
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      console.error('Erro ao salvar lead no Supabase:', errorData);
      return { error: errorData };
    }

    // Obter o ID do lead criado
    const responseData = await response.json();
    const leadId = responseData[0]?.id; // Pega o ID do primeiro item retornado

    return { success: true, leadId };
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
    const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || process.env.VITE_SUPABASE_URL || 'https://cynnujihthpzbfxlfayy.supabase.co';
    const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || process.env.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN5bm51amlodGhwemJmeGxmYXl5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTU3NTU3MDAsImV4cCI6MjAxMTMzMTcwMH0.0AqDnGhGYJbwJD0qqfQVJlw5Bf_8PAYzGNhiJQKKXYE';
    
    // URL base do Supabase (sem o caminho para a tabela)
    const baseUrl = supabaseUrl.includes('/rest/v1') 
      ? supabaseUrl.split('/rest/v1')[0] 
      : supabaseUrl;
    
    // URL completa para a tabela video_site
    const videoSiteUrl = `${baseUrl}/rest/v1/video_site`;

    // Busca os depoimentos do Supabase via REST API
    // Ordenados pela coluna sort
    const response = await fetch(`${videoSiteUrl}?select=id,url,titulo,depoimento,sort,thumbnail&order=sort.asc`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'apikey': supabaseAnonKey,
        'Authorization': `Bearer ${supabaseAnonKey}`
      }
    });

    if (!response.ok) {
      console.error(`Erro HTTP ${response.status} ao buscar depoimentos`);
      return { error: `Erro HTTP: ${response.status}`, data: [] };
    }

    const testimonials = await response.json();
    
    if (!Array.isArray(testimonials)) {
      console.error('Resposta do Supabase não é um array');
      return { error: 'Formato de resposta inválido', data: [] };
    }
    
    // Mapeia os dados do formato da tabela para o formato esperado pelo componente
    const formattedTestimonials = testimonials
      .filter(item => item && typeof item === 'object')
      .map(item => {
        return {
          id: item.id,
          url: item.url || '',
          title: item.titulo || '',
          description: item.depoimento || '',
          thumbnail: item.thumbnail || ''
        };
      })
      .filter(item => item.url); // Filtra itens sem URL
    
    return { data: formattedTestimonials };
  } catch (error) {
    console.error('Erro ao buscar depoimentos:', error);
    return { error: error.message, data: [] };
  }
}

/**
 * Busca os itens do carrossel de vídeos do Supabase
 * @returns {Promise<Object>} - Lista de itens do carrossel ou erro
 */
export async function fetchCarouselItems() {
  try {
    const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || process.env.VITE_SUPABASE_URL || 'https://cynnujihthpzbfxlfayy.supabase.co';
    const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || process.env.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN5bm51amlodGhwemJmeGxmYXl5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTU3NTU3MDAsImV4cCI6MjAxMTMzMTcwMH0.0AqDnGhGYJbwJD0qqfQVJlw5Bf_8PAYzGNhiJQKKXYE';
    
    // URL base do Supabase (sem o caminho para a tabela)
    const baseUrl = supabaseUrl.includes('/rest/v1') 
      ? supabaseUrl.split('/rest/v1')[0] 
      : supabaseUrl;
    
    // URL completa para a tabela video_site_carrossel
    const carouselUrl = `${baseUrl}/rest/v1/video_site_carrossel`;

    console.log('Buscando itens do carrossel em:', carouselUrl);

    // Busca os itens do carrossel do Supabase via REST API
    // Filtrando apenas itens não deletados (is_deleted=false) e ordenados pela coluna sort
    const queryUrl = `${carouselUrl}?select=id,url,nome,sort&is_deleted=eq.false&order=sort.asc`;
    
    const response = await fetch(queryUrl, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'apikey': supabaseAnonKey,
        'Authorization': `Bearer ${supabaseAnonKey}`,
        'Prefer': 'return=representation'
      }
    });
    
    if (!response.ok) {
      console.error(`Erro HTTP ${response.status} ao buscar itens do carrossel`);
      return { error: `Erro HTTP: ${response.status}`, data: [] };
    }

    const carouselItems = await response.json();
    
    if (!Array.isArray(carouselItems)) {
      console.error('Resposta do Supabase não é um array:', carouselItems);
      return { error: 'Formato de resposta inválido', data: [] };
    }
    
    console.log(`${carouselItems.length} itens do carrossel encontrados`);
    
    // Filtra itens sem URL e mapeia para o formato esperado pelo componente
    const formattedItems = carouselItems
      .filter(item => item && item.url)
      .map(item => ({
        id: item.id,
        url: item.url,
        nome: item.nome || '',
        sort: item.sort || 0
      }));
    
    return { data: formattedItems };
  } catch (error) {
    console.error('Erro ao buscar itens do carrossel:', error);
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
