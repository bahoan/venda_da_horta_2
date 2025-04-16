import { motion } from 'framer-motion';
import { Paragraph } from './typography/Typography';

const benefits = [
  {
    number: '1',
    title: 'O segredo do caminho para ir do zero até mais de 20 mil/mês, todo mês, vendendo direto para o cliente final.'
  },
  {
    number: '2',
    title: 'Como criar um Ímã de Clientes da Horta e lotar seu WhatsApp de novos clientes todos os dias, pedindo para comprar seus produtos.'
  },
  {
    number: '3',
    title: 'Como vender primeiro e só colher, produzir ou comprar dos seus fornecedores depois, somente o que já foi vendido e já foi pago.'
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

const NumberedBenefitItem = ({ number, title }) => (
  <motion.div
    variants={itemVariants}
    className="flex items-start gap-6 w-full border-b border-gray-300 pb-7 pt-7 last:border-b-0 px-4 md:px-6"
    style={{ minHeight: '100px', display: 'flex' }} // Altura mínima fixa para evitar layout shift
  >
    <div className="flex-shrink-0 w-12 h-12 md:w-16 md:h-16 flex items-center justify-center" style={{ flexShrink: 0 }}>
      <span className="text-4xl md:text-6xl font-semibold text-brand-green">{number}</span>
    </div>
    <div className="flex-1 pt-1" style={{ minHeight: '80px' }}> {/* Altura mínima para o conteúdo */}
      <Paragraph className="text-left text-base md:text-lg leading-relaxed text-gray-700 font-medium">{title}</Paragraph>
    </div>
  </motion.div>
);

export default function NumberedBenefitsList() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="w-full max-w-3xl mx-auto bg-white rounded-lg overflow-hidden border border-gray-200 shadow-sm"
      style={{ minHeight: '300px' }} // Altura mínima fixa para reservar espaço
    >
      {benefits.map((benefit, index) => (
        <NumberedBenefitItem 
          key={index} 
          number={benefit.number} 
          title={benefit.title} 
        />
      ))}
    </motion.div>
  );
}
