import { motion } from 'framer-motion';
import { Heading2, Heading3, Paragraph, HighlightText } from '../ui/typography/Typography';
import { spacingClasses } from '../../styles/utils';
import { Users, Truck, Store } from 'lucide-react';

const ParaQuemSection = () => {
  const { elementSpacing } = spacingClasses;
  
  const profiles = [
    {
      icon: <Users size={36} className="text-brand-green" />,
      title: "Agricultor que produz Hortaliças e Alimentos da Agricultura Familiar",
      description: "Que quer vender direto para o consumidor final, podendo ter parceria com outros agricultores e fornecedores.",
      color: "from-green-50 to-green-100",
      borderColor: "border-brand-green",
      iconBg: "bg-green-50"
    },
    {
      icon: <Truck size={36} className="text-blue-500" />,
      title: "Empreendedor que não produz, mas compra de agricultores locais, fornecedores, mercados ou Ceasa",
      description: "Que quer montar um delivery de alimentos saudáveis, seja em casa ou em um ponto comercial.",
      color: "from-blue-50 to-blue-100",
      borderColor: "border-blue-500",
      iconBg: "bg-blue-50"
    },
    {
      icon: <Store size={36} className="text-purple-500" />,
      title: "Dono de Hortifruti e Pequenos Comércios",
      description: "Que deseja montar um delivery e vender direto pelo WhatsApp, ampliando as vendas e fidelizando os clientes.",
      color: "from-purple-50 to-purple-100",
      borderColor: "border-purple-500",
      iconBg: "bg-purple-50"
    }
  ];

  return (
    <section className="w-full py-16 bg-white mobile-padding relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-green-200"></div>
        <div className="absolute top-1/2 -left-24 w-64 h-64 rounded-full bg-blue-200"></div>
        <div className="absolute -bottom-24 right-1/4 w-80 h-80 rounded-full bg-purple-200"></div>
      </div>
      
      <div className="max-w-5xl mx-auto relative z-10">
        {/* Title */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <HighlightText>
            Esse método funciona para <span className="text-brand-green">quem é:</span>
          </HighlightText>
        </motion.div>

        {/* Profiles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {profiles.map((profile, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`rounded-xl overflow-hidden shadow-lg border-t-4 ${profile.borderColor} transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl`}
            >
              <div className={`bg-gradient-to-br ${profile.color} p-8 h-full flex flex-col`}>
                {/* Icon */}
                <div className={`${profile.iconBg} w-16 h-16 rounded-full flex items-center justify-center mb-6 shadow-md`}>
                  {profile.icon}
                </div>
                
                {/* Content */}
                <div>
                  <h3 className="mb-3 text-gray-800 text-lg font-semibold">
                    {profile.title}
                  </h3>
                  <Paragraph className="text-gray-700 text-base">
                    {profile.description}
                  </Paragraph>
                </div>
                
                {/* Checkmark */}
                <div className="mt-auto pt-6 flex justify-end">
                  <div className="bg-white rounded-full p-2 shadow-md">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-brand-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Espaço adicional no final */}
        <div className="h-8"></div>
      </div>
    </section>
  );
};

export default ParaQuemSection;
