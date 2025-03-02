import { useModal } from '../contexts/ModalContext';

export default function GreenCTAButton({ className, children, fullWidth }) {
  const { openModal } = useModal();

  return (
    <button
      onClick={openModal}
      className={`bg-brand-green hover:bg-green-600 text-white font-semibold py-4 px-8 rounded-full 
      transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg uppercase tracking-wide
      ${fullWidth ? 'w-full' : ''} ${className || ''}`}
      aria-label="Entrar no Vendas da Horta"
    >
      {children || 'Entrar no Vendas da Horta'}
    </button>
  );
}
