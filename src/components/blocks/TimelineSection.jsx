import { motion } from 'framer-motion';
import { Heading2, Heading3, Paragraph, HighlightText, Subtitle } from '../ui/typography/Typography';
import { spacingClasses } from '../../styles/utils';
import { Sprout } from 'lucide-react';
import { FaHatCowboy } from 'react-icons/fa6';

const TimelineSection = () => {
  const { elementSpacing, sectionSpacing } = spacingClasses;
  
  const timelineItems = [
    {
      phase: 'FASE 1:',
      title: 'IMÃ DE CLIENTES DA HORTA',
      description: [
        'Nessa fase, você vai organizar seus redes sociais e aprender a criar os primeiros anúncios que vão atrair pessoas interessadas nos seus produtos direto para o seu WhatsApp.',
        'É aqui que os primeiros novos clientes começar a chegar.'
      ],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
          <path d="M14.4 6L14 4H5v17h2v-7h5.6l.4 2h7V6z"/>
        </svg>
      )
    },
    {
      phase: 'FASE 2:',
      title: 'AUTOMAÇÃO SEMENTE',
      description: [
        'Nessa fase, você vai configurar sua primeira automação no WhatsApp para responder os novos contatos de forma rápida e organizada.',
        'Isso vai te ajudar a atender os clientes com agilidade, fazer as primeiras vendas e começar a montar uma base sólida de contatos que poderão comprar de você.'
      ],
      icon: (
        <Sprout className="w-6 h-6" />
      )
    },
    {
      phase: 'FASE 3:',
      title: 'OFERTA CAIPIRA',
      description: [
        'Nessa fase, você vai aprender a criar ofertas caipiras, de forma simples ou com a ajuda de inteligência artificial, para enviar aos seus clientes semanalmente. Também vai utilizar ferramentas fáceis para enviar essas ofertas em massa, junto com sua lista de produtos.',
        'É nesse momento que suas vendas começam a crescer semana após semana, fidelizando clientes e recuperando vendas de quem ainda não comprou.'
      ],
      icon: (
        <FaHatCowboy className="w-6 h-6" />
      )
    },
    {
      phase: 'FASE 4:',
      title: 'CARRO CHEIO DA HORTA',
      description: [
        'Nessa fase, você já tem um fluxo constante de vendas e precisa organizar as entregas de forma eficiente. Você aprenderá a criar rotas otimizadas, gerenciar pedidos e garantir que tudo seja entregue no prazo.',
        'Com esse sistema, você consegue atender mais clientes em menos tempo, aumentando sua capacidade de vendas e reduzindo custos.'
      ],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17 5H3c-1.1 0-2 .89-2 2v9h2c0 1.65 1.34 3 3 3s3-1.35 3-3h5.5c0 1.65 1.34 3 3 3s3-1.35 3-3H23v-5l-6-6zM3 11V7h4v4H3zm3 6.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm7-6.5H9V7h4v4zm4.5 6.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM15 11V7h1l4 4h-5z"/>
        </svg>
      )
    },
    {
      phase: 'FASE 5:',
      title: 'ROBOZINHO DA HORTA',
      description: [
        'Nessa fase, tudo no seu negócio já funciona de forma automática. O cardápio digital, o atendimento rápido e o envio de notinhas são feitos sem esforço, garantindo praticidade e eficiência.',
        'Suas vendas estão sólidas, permitindo que você invista no crescimento do negócio e volte a sonhar com novos objetivos de vida. Aqui, o faturamento já está entre R$12.000 e R$15.000 por mês.'
      ],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20 9V7c0-1.1-.9-2-2-2h-3c0-1.66-1.34-3-3-3S9 3.34 9 5H6c-1.1 0-2 .9-2 2v2c-1.66 0-3 1.34-3 3s1.34 3 3 3v4c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-4c1.66 0 3-1.34 3-3s-1.34-3-3-3zm-2 10H6V7h12v12zm-9-6c-.83 0-1.5-.67-1.5-1.5S8.17 10 9 10s1.5.67 1.5 1.5S9.83 13 9 13zm7.5-1.5c0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5.67-1.5 1.5-1.5 1.5.67 1.5 1.5zM8 15h8v2H8v-2z"/>
        </svg>
      )
    }
  ];

  return (
    <section className="w-full py-8 bg-white">
      <div className="max-w-4xl mx-auto mobile-padding">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={`text-center ${sectionSpacing}`}
        >
          <div className={elementSpacing}>
            <HighlightText>
              Para ficar <span className="text-brand-green">mais fácil de aplicar</span>, o Método Vendas DaHorta,<br />
              dividimos as etapas em <span className="text-brand-green">fases simples e práticas</span>
            </HighlightText>
          </div>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Central Line */}
          <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 h-[85%] w-1 bg-brand-green"/>

          {/* Timeline Items */}
          <div className="relative">
            {timelineItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`flex items-center mb-12 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } flex-row`}
              >
                {/* Content */}
                <div className={`ml-16 md:ml-0 w-[calc(100%-4rem)] md:w-[42%] ${
                  index % 2 === 0 ? 'md:mr-[8%]' : 'md:ml-[8%]'
                }`}>
                  <div className="bg-gray-50 rounded-xl overflow-hidden shadow-sm">
                    {/* Header */}
                    <div className="bg-brand-orange text-white px-6 py-3 w-full">
                      <div className="font-semibold">{item.phase}</div>
                      <Subtitle className="text-white">{item.title}</Subtitle>
                    </div>
                    {/* Content */}
                    <div className="p-6">
                      {item.description.map((paragraph, pIndex) => (
                        <Paragraph key={pIndex} className={pIndex < item.description.length - 1 ? elementSpacing : ''}>
                          {paragraph}
                        </Paragraph>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Icon */}
                <div className={`absolute left-8 md:static md:w-[8%] flex justify-center transform -translate-x-1/2 md:transform-none`}>
                  <div className="w-12 h-12 bg-brand-green rounded-full flex items-center justify-center text-white relative z-10">
                    {item.icon}
                  </div>
                </div>

                {/* Empty space for alignment in desktop */}
                <div className="hidden md:block md:w-[42%]" />
              </motion.div>
            ))}

            {/* Conclusion Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: timelineItems.length * 0.2 }}
              className="flex justify-center mt-24 relative"
            >
              <div className="w-[85%] md:w-[60%] bg-gray-50 rounded-xl overflow-hidden shadow-sm">
                <div className="bg-brand-green text-white px-6 py-3 w-full text-center">
                  <Heading3 className="text-white">
                  FASE 6: HORTA PRÓSPERA
                  </Heading3>
                </div>
                <div className="p-8">
                  <Paragraph className="text-lg">
                    Nessa fase, você domina completamente o Método Vendas DaHorta.
                    Agora, você sabe exatamente como aumentar suas vendas, expandir os dias e regiões de entrega sempre que quiser. 
                    Você tem todas as ferramentas para alcançar faturamentos acima de R$15.000 por mês.
                  </Paragraph>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
