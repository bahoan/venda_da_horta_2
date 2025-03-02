import React from 'react';
import { useModal } from "../../../contexts/ModalContext";
import { Button } from './buttons';

/**
 * Componente de botão CTA (Call to Action)
 * 
 * @param {Object} props - Propriedades do componente
 * @param {React.ReactNode} props.children - Conteúdo do botão
 * @param {string} props.className - Classes adicionais
 * @param {'primary' | 'green' | 'grey'} props.variant - Estilo do botão (primary = laranja, green = verde, grey = cinza)
 * @param {boolean} props.fullWidth - Se o botão deve ocupar toda a largura disponível
 */
export default function CTAButton({
  variant = 'primary',
  className,
  children,
  fullWidth,
  ...props
}) {
  const { openModal } = useModal();

  // Mapeia as variantes do CTAButton para as variantes do Button
  const buttonVariant = variant === 'primary' ? 'secondary' : 
                        variant === 'green' ? 'primary' : 
                        'grey';

  const handleClick = () => {
    openModal();
  };

  return (
    <Button 
      variant={buttonVariant}
      size="large"
      className={`rounded-full ${fullWidth ? 'w-full' : ''} ${className || ''}`}
      onClick={handleClick}
      {...props}
    >
      {children}
    </Button>
  );
}
