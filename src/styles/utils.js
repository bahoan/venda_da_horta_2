/**
 * Utilitários de estilo para o sistema de design do Vendas da Horta
 * 
 * Este arquivo contém classes Tailwind reutilizáveis para manter
 * a consistência visual em todo o projeto.
 * 
 * Breakpoints padrão do Tailwind:
 * - sm: 640px
 * - md: 768px
 * - lg: 1024px
 * - xl: 1280px
 * - 2xl: 1536px
 */

/**
 * Classes para seções
 */
export const sectionClasses = {
  default: 'py-8 md:py-16', // Padding vertical menor no mobile, maior no desktop
  withBackground: 'py-8 md:py-16 bg-brand-grey',
  hero: 'py-12 md:py-20', // Seção de hero com mais espaço
};

/**
 * Classes para containers
 */
export const containerClasses = {
  default: 'container mx-auto px-4 md:px-8', // Padding horizontal menor no mobile
  narrow: 'container mx-auto px-4 md:px-8 max-w-4xl',
  wide: 'container mx-auto px-4 md:px-8 max-w-7xl',
};

/**
 * Classes para cards
 */
export const cardClasses = {
  default: 'bg-white rounded-lg shadow p-4 md:p-6', // Padding menor no mobile
  bordered: 'bg-white rounded-lg border border-gray-200 p-4 md:p-6',
  highlight: 'bg-white rounded-lg shadow-md border-l-4 border-brand-green p-4 md:p-6',
  feature: 'bg-white rounded-lg shadow-md p-5 md:p-8 flex flex-col items-center text-center',
};

/**
 * Classes para grids
 */
export const gridClasses = {
  // Grid de 1 coluna no mobile, 2 no tablet, 3 no desktop
  cards: 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6',
  // Grid de 1 coluna no mobile, 2 no desktop
  twoColumns: 'grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8',
  // Grid de 1 coluna no mobile, 3 no desktop
  threeColumns: 'grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6',
  // Grid de 1 coluna no mobile, 4 no desktop
  fourColumns: 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6',
};

/**
 * Classes para botões
 */
export const buttonClasses = {
  // Botões primários (verde)
  primary: `bg-brand-green text-white font-bold py-2 px-4 md:py-3 md:px-6 rounded-lg
    transition-all duration-300
    hover:md:bg-brand-green-dark hover:md:-translate-y-1 hover:md:shadow-md
    active:scale-105 md:active:scale-100`,
  
  // Botões secundários (laranja)
  secondary: `bg-brand-orange text-white font-bold py-2 px-4 md:py-3 md:px-6 rounded-lg
    transition-all duration-300
    hover:md:bg-brand-orange-light hover:md:-translate-y-1 hover:md:shadow-md
    active:scale-105 md:active:scale-100`,
  
  // Botões neutros (cinza)
  grey: `bg-brand-grey text-text-dark font-bold py-2 px-4 md:py-3 md:px-6 rounded-lg
    transition-all duration-300
    hover:md:bg-brand-grey-dark hover:md:-translate-y-1 hover:md:shadow-md
    active:scale-105 md:active:scale-100`,
  
  // Botões outline
  outlinePrimary: `border-2 border-brand-green text-brand-green bg-transparent font-bold py-2 px-4 md:py-3 md:px-6 rounded-lg
    transition-all duration-300
    hover:md:bg-brand-green hover:md:text-white hover:md:-translate-y-1 hover:md:shadow-md
    active:scale-105 md:active:scale-100`,
  
  outlineSecondary: `border-2 border-brand-orange text-brand-orange bg-transparent font-bold py-2 px-4 md:py-3 md:px-6 rounded-lg
    transition-all duration-300
    hover:md:bg-brand-orange hover:md:text-white hover:md:-translate-y-1 hover:md:shadow-md
    active:scale-105 md:active:scale-100`,
  
  outlineGrey: `border-2 border-brand-grey text-text-dark bg-transparent font-bold py-2 px-4 md:py-3 md:px-6 rounded-lg
    transition-all duration-300
    hover:md:bg-brand-grey hover:md:-translate-y-1 hover:md:shadow-md
    active:scale-105 md:active:scale-100`,
  
  // Botões pequenos
  small: `text-sm py-1 px-3 md:py-2 md:px-4`,
  
  // Botões grandes
  large: `text-lg py-3 px-6 md:py-4 md:px-8`,
  
  // Botões de link
  link: `text-brand-green font-semibold underline
    transition-all duration-300
    hover:md:text-brand-green-dark
    active:scale-105 md:active:scale-100`,
  
  linkSecondary: `text-brand-orange font-semibold underline
    transition-all duration-300
    hover:md:text-brand-orange-light
    active:scale-105 md:active:scale-100`,
};

/**
 * Classes para inputs
 */
export const inputClasses = {
  // Input padrão
  default: `w-full px-4 py-3 rounded-lg border border-gray-300 text-text-dark
    transition-all duration-300
    focus:outline-none focus:ring-1 focus:ring-brand-green focus:border-brand-green
    placeholder:text-gray-400`,
  
  // Input com erro
  error: `w-full px-4 py-3 rounded-lg border border-red-500 text-text-dark
    transition-all duration-300
    focus:outline-none focus:ring-1 focus:ring-red-500 focus:border-red-500
    placeholder:text-gray-400`,
  
  // Mensagem de erro
  errorMessage: 'text-red-500 text-sm mt-1',
  
  // Label
  label: 'block text-text-dark font-medium mb-2',
  
  // Container de input
  container: 'mb-4',
};

/**
 * Classes para seletores
 */
export const selectorClasses = {
  // Select padrão
  select: `w-full px-4 py-3 rounded-lg border border-gray-300 text-text-dark
    transition-all duration-300
    focus:outline-none focus:ring-1 focus:ring-brand-green focus:border-brand-green
    appearance-none bg-white`,
  
  // Checkbox
  checkbox: `h-5 w-5 text-brand-green border-gray-300 rounded
    focus:ring-0 focus:ring-offset-0 focus:outline-none`,
  
  // Radio
  radio: `h-5 w-5 text-brand-green border-gray-300
    focus:ring-0 focus:ring-offset-0 focus:outline-none`,
  
  // Label para checkbox e radio
  checkLabel: 'ml-2 block text-text-dark',
  
  // Container para checkbox e radio
  checkContainer: 'flex items-center',
};

/**
 * Classes para espaçamentos padrão
 * Usadas para manter consistência de espaçamento em todo o projeto
 */
export const spacingClasses = {
  // Espaçamento padrão entre elementos
  elementSpacing: 'mb-5 md:mb-6',
  // Espaçamento menor para itens de lista ou elementos menores
  smallSpacing: 'mb-3 md:mb-4',
  // Espaçamento maior para seções
  sectionSpacing: 'mb-5 md:mb-8',
  // Espaçamento horizontal padrão
  horizontalSpacing: 'mx-4 md:mx-6',
};

/**
 * Classes para textos
 */
export const textClasses = {
  // Títulos
  heading1: 'text-4xl md:text-5xl font-bold text-text-dark mb-4 w-full',
  heading2: 'text-3xl md:text-4xl font-bold text-text-dark mb-3 w-full',
  heading3: 'text-2xl font-bold text-text-dark mb-2 w-full',
  subtitle: 'text-xl font-semibold text-text-dark mb-2 w-full',
  
  // Parágrafos
  paragraph: 'text-base text-text-medium mb-4 w-full',
  highlight: 'text-2xl md:text-3xl font-black text-center text-text-dark mb-4 w-full',
  quote: 'italic text-lg border-l-4 border-brand-green pl-4 py-2 text-text-medium w-full',
  small: 'text-sm text-text-light w-full',
};
