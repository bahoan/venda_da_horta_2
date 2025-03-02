/**
 * Utilitário para gerenciar cookies com configurações seguras
 */

/**
 * Define um cookie com as configurações apropriadas de segurança
 * @param {string} name - Nome do cookie
 * @param {string} value - Valor do cookie
 * @param {number} days - Dias de validade do cookie
 * @param {boolean} secure - Se o cookie deve ser enviado apenas em conexões seguras
 * @param {string} sameSite - Política SameSite ('Strict', 'Lax', ou 'None')
 */
export function setCookie(name, value, days = 30, secure = true, sameSite = 'Lax') {
  const date = new Date();
  date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
  
  let cookieValue = `${name}=${value}; expires=${date.toUTCString()}; path=/`;
  
  if (secure) {
    cookieValue += '; Secure';
  }
  
  // SameSite=None requer que Secure seja true
  if (sameSite === 'None' && !secure) {
    sameSite = 'Lax';
  }
  
  cookieValue += `; SameSite=${sameSite}`;
  
  document.cookie = cookieValue;
}

/**
 * Obtém o valor de um cookie pelo nome
 * @param {string} name - Nome do cookie
 * @returns {string|null} - Valor do cookie ou null se não encontrado
 */
export function getCookie(name) {
  const nameEQ = `${name}=`;
  const ca = document.cookie.split(';');
  
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i].trim();
    if (c.indexOf(nameEQ) === 0) {
      return c.substring(nameEQ.length, c.length);
    }
  }
  
  return null;
}

/**
 * Remove um cookie pelo nome
 * @param {string} name - Nome do cookie
 */
export function removeCookie(name) {
  document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; SameSite=Lax`;
}

/**
 * Verifica se os cookies estão habilitados no navegador
 * @returns {boolean} - true se os cookies estiverem habilitados
 */
export function areCookiesEnabled() {
  try {
    document.cookie = "testcookie=1; SameSite=Lax";
    const cookieEnabled = document.cookie.indexOf("testcookie") !== -1;
    document.cookie = "testcookie=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; SameSite=Lax";
    return cookieEnabled;
  } catch (e) {
    return false;
  }
}
