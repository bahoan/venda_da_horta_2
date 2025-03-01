import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const benefits = [
  'Como atrair novos clientes no WhatsApp todos os dias',
  'Como vender primeiro e colher depois, sem desperdício',
  'A estratégia para vender mais de R$2.000 por dia de entrega, mesmo começando do zero',
  'Como lotar suas entregas a ponto de recusar pedidos',
  'O maior erro ao vender hortaliças online - e como evitá-lo',
  'Quanto investir em anúncios para vender hortaliças',
  'Como vender hortaliças, mesmo sem ter uma horta',
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

export default function BenefitsList() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="max-w-4xl mx-auto text-left grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4"
    >
      {benefits.map((benefit, index) => (
        <motion.div
          key={index}
          variants={itemVariants}
          className="flex items-start gap-2 md:gap-3"
        >
          <div className="flex-shrink-0 w-5 h-5 md:w-6 md:h-6 rounded-full bg-brand-green bg-opacity-10 flex items-center justify-center mt-1">
            <Check className="w-3 h-3 md:w-4 md:h-4 text-brand-green" />
          </div>
          <span className="text-base md:text-lg">{benefit}</span>
        </motion.div>
      ))}
    </motion.div>
  );
}
