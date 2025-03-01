import { motion } from 'framer-motion';
import { Clock, Smartphone, Video, Users, Shield } from 'lucide-react';

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
          <h2 className="text-xl md:text-2xl text-gray-800 font-medium mb-8 leading-relaxed">
            Se você quer vender mais de R$2.000 por dia de entrega, toda semana, com constância e crescimento, clique no botão abaixo agora
          </h2>

          <motion.a
            href="#"
            className="btn-primary inline-block mb-12 text-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Entrar no Vendas DaHorta
          </motion.a>

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
                  <h3 className="text-lg font-semibold mb-1">{feature.title}</h3>
                  <p className="text-base sm:text-lg md:text-lg text-gray-600">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
