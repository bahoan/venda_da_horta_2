import { useModal } from '../contexts/ModalContext';

export default function CTAButton({ className, children, fullWidth }) {
  const { openModal } = useModal();

  return (
    <button
      onClick={openModal}
      className={`btn-primary ${fullWidth ? 'w-full' : ''} ${className || ''}`}
      aria-label="Entrar no Vendas da Horta"
    >
      {children || 'Entrar no Vendas da Horta'}
    </button>
  );
}
