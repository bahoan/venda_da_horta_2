import { motion } from 'framer-motion';

const TimelineSection = () => {
  const timelineItems = [
    {
      phase: 'FASE 1:',
      title: 'IMÃ DE CLIENTES DA HORTA',
      description: [
        'Sair do zero e começar a venda de produtos da horta e da roça na internet. Essa é a base da metodologia Vendas DaHorta',
        'O Método Vendas DaHorta quebra uma caminhada longa e complexa em etapas simples e possíveis.'
      ],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V6h16v12zM6 10h2v2H6zm0 4h8v2H6zm10 0h2v2h-2zm-6-4h8v2h-8zm-6-4h8v2h-8z"/>
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
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
          <path d="M19 8l-4 4h3c0 3.31-2.69 6-6 6-1.01 0-1.97-.25-2.8-.7l-1.46 1.46C8.97 19.54 10.43 20 12 20c4.42 0 8-3.58 8-8h3l-4-4zM6 12c0-3.31 2.69-6 6-6 1.01 0 1.97.25 2.8.7l1.46-1.46C15.03 4.46 13.57 4 12 4c-4.42 0-8 3.58-8 8H1l4 4 4-4H6z"/>
        </svg>
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
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
          <path d="M11 9h2V6h3V4h-3V1h-2v3H8v2h3v3zm-4 9c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2zm-8.9-5h7.45c.75 0 1.41-.41 1.75-1.03l3.86-7.01L19.42 4l-3.87 7H8.53L4.27 2H1v2h2l3.6 7.59-1.35 2.44C4.52 15.37 5.48 17 7 17h12v-2H7l1.1-2z"/>
        </svg>
      )
    },
    {
      phase: 'FASE 4:',
      title: 'CARRO CHEIO DA HORTA',
      description: [
        'Nessa fase, você já domina como atrair novos clientes com os Imãs de Clientes da Horta e como enviar Ofertas Caipira em massa de forma eficiente.',
        'Agora, com alguns cliques no celular, você consegue lotar seu carro (ou moto) de pedidos e alcançar vendas acima de R$2.000 por dia de entrega, toda semana, com crescimento constante e previsível.'
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
          <path d="M22 2H2.01L2 22l4-4h16V2zm-4 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"/>
        </svg>
      )
    },
    {
      phase: 'FASE 6:',
      title: 'HORTA PRÓSPERA',
      description: [
        'Nessa fase, você domina completamente o Método Vendas DaHorta.'
      ],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
        </svg>
      )
    }
  ];

  return (
    <section className="w-full py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Para ficar <span className="text-green-500">mais fácil de aplicar</span>, o Método Vendas DaHorta, dividimos as etapas em <span className="text-green-500">fases simples e práticas</span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Central Line */}
          <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 h-[85%] w-1 bg-green-500"/>

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
                    <div className="bg-orange-400 text-white px-6 py-3 w-full">
                      <div className="font-semibold">{item.phase}</div>
                      <h3 className="font-bold text-lg">{item.title}</h3>
                    </div>
                    {/* Content */}
                    <div className="p-6">
                      {item.description.map((paragraph, pIndex) => (
                        <p key={pIndex} className="text-gray-700 mb-3 last:mb-0">
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Icon */}
                <div className={`absolute left-8 md:static md:w-[8%] flex justify-center transform -translate-x-1/2 md:transform-none`}>
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white relative z-10">
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
                <div className="bg-green-500 text-white px-6 py-3 w-full text-center">
                  <h3 className="text-2xl font-bold">
                    Conclusão do Método
                  </h3>
                </div>
                <div className="p-8">
                  <p className="text-lg text-gray-700">
                    Agora, você sabe exatamente como aumentar suas vendas, expandir os dias e regiões de entrega sempre que quiser. 
                    Você tem todas as ferramentas para alcançar faturamentos acima de R$15.000 por mês.
                  </p>
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
