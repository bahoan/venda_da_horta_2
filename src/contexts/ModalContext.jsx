import { createContext, useState, useContext } from 'react';
import { LeadModal } from '../components/ui';

// Criação do contexto
const ModalContext = createContext();

// Hook personalizado para usar o contexto
export const useModal = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error('useModal deve ser usado dentro de um ModalProvider');
  }
  return context;
};

// Provedor do contexto
export function ModalProvider({ children }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <ModalContext.Provider value={{ openModal, closeModal }}>
      {children}
      <LeadModal isOpen={isModalOpen} onClose={closeModal} />
    </ModalContext.Provider>
  );
}
