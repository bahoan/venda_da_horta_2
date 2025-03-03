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
    title: 'Acesso enquanto a assinatura estiver ativa',
    description: 'Você terá acesso ao curso Vendas DaHorta enquanto a assinatura estiver ativa.'
  },
  {
    icon: Smartphone,
    title: '365 dias de acesso ao AppDaHorta',
    description: 'Durante 365 dias você poderá usar o plano semente do aplicativo exclusivo para criar cardápio digitais, automatizar o envio de listas, organizar pedidos, gerar relatórios de vendas e emitir notinhas.'
  },
  {
    icon: Video,
    title: 'Suporte ao vivo por videochamada',
    description: 'Tire todas as suas dúvidas sobre vendas, anúncios, cardápio, atendimento ao cliente, ofertas, automação de produtos e muito mais.'
  },
  {
    icon: Shield,
    title: 'Garantia de 30 dias',
    description: 'Experiente sem risco. Se não gostar ou não ver valor, você pode solicitar reembolso em até 30 dias e receber todo o seu dinheiro de volta.'
  },
  {
    icon: Users,
    title: 'Acesso à Comunidade de Vendas Exclusiva',
    description: 'Troque experiências, dicas, ofertas e produtos com outros alunos(as) que estão na prática vendendo hortaliças e produtos da roça pela internet'
  }
];

export default function CallToAction() {
  const { elementSpacing } = spacingClasses;
  
  return (
    <section className="min-h-screen flex items-center bg-gray-50">
      <div className="container py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto"
        >
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
