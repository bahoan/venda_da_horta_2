import { motion } from 'framer-motion';
import { Clock, Smartphone, Video, Users, Shield } from 'lucide-react';
import { 
  Heading2, 
  Subtitle, 
  Paragraph,
  SmallText
} from '../ui';
import { spacingClasses } from '../../styles/utils';

const features = [
  {
    icon: Clock,
    title: 'Acesso por 100 dias ao AppDaHorta',
    description: 'Tenha em mãos um sistema completo com cardápio digital, automação de atendimento, disparo em massa de mensagens e gestão de vendas – tudo em um só lugar, sem precisar começar gastando com ferramentas.'
  },
  {
    icon: Smartphone,
    title: 'Suporte por Vídeo Chamada',
    description: 'Tire todas as suas dúvidas sobre vendas, atendimento, preço de produtos, entregas e muito mais – direto com quem já está na prática.'
  },
  {
    icon: Video,
    title: 'Comunidade de Alunos',
    description: 'Faça parte de uma comunidade exclusiva no WhatsApp para trocar experiências com quem está usando essa nova forma de vender hortaliças e alimentos da agricultura familiar.'
  },
  {
    icon: Shield,
    title: 'Garantia de 30 Dias',
    description: 'Teste o método por 30 dias e, se não ficar satisfeito, pode pedir todo o seu dinheiro de volta. Sem enrolação.'
  }
];

export default function CallToAction() {
  const { elementSpacing } = spacingClasses;
  
  return (
    <section className="md:py-16 py-24 flex items-center bg-gray-50 mobile-padding">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto"
        >
          <Paragraph className="text-xl font-medium text-brand-green mb-8">
            Além do curso, você vai receber muito mais para aumentar suas vendas e resultados:
          </Paragraph>
          <div className="grid gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex flex-col items-center md:items-start md:flex-row md:text-left gap-4"
              >
                <div className="flex-shrink-0">
                  <feature.icon className="w-6 h-6 text-brand-green" />
                </div>
                <div>
                  <Subtitle className="mb-1">{feature.title}</Subtitle>
                  <Paragraph>
                    {feature.description}
                  </Paragraph>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
