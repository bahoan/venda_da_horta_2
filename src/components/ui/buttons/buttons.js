import React from 'react';

/**
 * Componente de botão base
 * 
 * @param {Object} props - Propriedades do componente
 * @param {React.ReactNode} props.children - Conteúdo do botão
 * @param {string} props.className - Classes adicionais
 * @param {'primary' | 'green' | 'grey'} props.variant - Estilo do botão
 * @param {boolean} props.fullWidth - Se o botão deve ocupar toda a largura disponível
 */
export const Button = ({
  variant = 'primary',
  className = '',
  children,
  fullWidth = false,
  ...props
}) => {
  // Classes base do botão
  const baseClasses = 'inline-flex items-center justify-center rounded-lg font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  // Classes específicas para cada variante
  const variantClasses = {
    primary: 'bg-brand-orange hover:bg-brand-orange-light text-white focus:ring-brand-orange',
    green: 'bg-brand-green hover:bg-brand-green-dark text-white focus:ring-brand-green',
    grey: 'bg-brand-grey hover:bg-brand-grey-dark text-text-dark focus:ring-brand-grey'
  };
  
  // Classes de tamanho
  const sizeClasses = 'px-6 py-3 text-base';
  
  // Classes de largura
  const widthClasses = fullWidth ? 'w-full' : '';
  
  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses} ${widthClasses} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
