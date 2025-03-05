import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { Paragraph } from './typography/Typography';

// Dividir os benefícios em duas colunas
const leftColumnBenefits = [
  'Como atrair novos clientes no WhatsApp todos os dias',
  'Como vender primeiro e colher depois, sem desperdício',
  'A estratégia para vender mais de R$2.000 por dia de entrega, mesmo começando do zero',
  'Como lotar suas entregas a ponto de recusar pedidos',
  'O maior erro ao vender hortaliças online - e como evitá-lo',
  'Quanto investir em anúncios para vender hortaliças',
  'Como vender hortaliças, mesmo sem ter uma horta',
];

const rightColumnBenefits = [
  'O Segredo do vídeo de 12 segundos que pode trazer dezenas de pedidos em um só dia',
  'Como automatizar vendas no WhatsApp e faturar até dormindo',
  'Como usar a melhor ferramenta para enviar sua lista de produtos, notinhas e acompanhar relatórios de pedidos de forma gratuita',
  'Quais as melhores formas de fidelizar seus clientes',
  'O processo para crescer as vendas toda semana e faturar mais de R$15.000 por mês'
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5
    }
  }
};

const BenefitItem = ({ benefit }) => (
  <motion.div
    variants={itemVariants}
    className="flex items-start gap-1.5 md:gap-1.5 mb-0 md:mb-0 w-full"
  >
    <div className="flex-shrink-0 w-3.5 h-3.5 md:w-4 md:h-4 rounded-full bg-brand-green flex items-center justify-center mt-0.5">
      <Check className="w-2.5 h-2.5 md:w-3 md:h-3 text-white stroke-[3]" />
    </div>
    <Paragraph className="text-left flex-1">{benefit}</Paragraph>
  </motion.div>
);

export default function BenefitsList() {
  return (
    <div className="w-full flex flex-col md:flex-row gap-3 md:gap-6">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex-1 w-full"
      >
        {leftColumnBenefits.map((benefit, index) => (
          <BenefitItem key={index} benefit={benefit} />
        ))}
      </motion.div>
      
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex-1 w-full"
      >
        {rightColumnBenefits.map((benefit, index) => (
          <BenefitItem key={index} benefit={benefit} />
        ))}
      </motion.div>
    </div>
  );
}
