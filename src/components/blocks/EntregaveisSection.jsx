import { motion } from 'framer-motion';
import { Heading2, Heading3, Paragraph, HighlightText } from '../ui/typography/Typography';
import { spacingClasses } from '../../styles/utils';

const EntregaveisSection = () => {
  const { elementSpacing, sectionSpacing } = spacingClasses;
  
  const features = [
    {
      image: "https://cynnujihthpzbfxlfayy.supabase.co/storage/v1/object/public/storage/site_appdahorta/site-1420d77e-2e6c-44b4-aba1-5d68468535a4",
      text: "Nada de anotar pedidos em caderninho ou em planilhas manuais! Ao se inscrever no Método Vendas DaHorta, você ganha 100 dias de acesso gratuito ao AppDaHorta, um sistema exclusivo que vai automatizar, organizar e facilitar a vida de quem vende hortaliças e alimentos da agricultura familiar pela internet!"
    },
    {
      image: "https://cynnujihthpzbfxlfayy.supabase.co/storage/v1/object/public/storage/site_appdahorta/site-0727d2cb-d74f-4dec-8c55-d4ab7917e33a",
      text: "Tenha em mãos um sistema completo com cardápio digital para enviar aos clientes, automação de atendimento que responde sozinho, disparo em massa de mensagens para até 2.000 contatos com um clique."
    },
    {
      image: "https://cynnujihthpzbfxlfayy.supabase.co/storage/v1/object/public/storage/site_appdahorta/site-11415ebb-8fcb-471c-af8c-6a65f2865146",
      text: "Você terá relatórios de colheita e produtos vendidos para saber a quantidade certa a colher e/ou separar, além de relatórios que te ajudam a montar cada pedido vendido e muito mais – tudo em um só lugar, automático e de forma prática e eficiente."
    }
  ];

  return (
    <section className="w-full py-16 bg-gray-50 mobile-padding relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-5 pointer-events-none">
        <svg className="absolute top-0 right-0 w-1/2 h-auto" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path fill="#10b981" d="M42.8,-65.2C54.9,-56.3,63.7,-43.3,71.3,-28.7C78.9,-14.1,85.3,2.1,82.1,16.5C78.9,30.9,66.2,43.5,52.4,54.2C38.7,64.9,24,73.6,7.4,77.8C-9.2,82,-27.7,81.7,-42.3,73.5C-56.9,65.3,-67.5,49.3,-73.3,32.3C-79.1,15.3,-80.1,-2.7,-74.6,-18.1C-69.1,-33.5,-57.1,-46.3,-43.6,-55.1C-30.1,-63.9,-15,-68.7,0.3,-69.2C15.7,-69.7,30.7,-74.1,42.8,-65.2Z" transform="translate(100 100)" />
        </svg>
        <svg className="absolute bottom-0 left-0 w-1/2 h-auto" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path fill="#10b981" d="M47.7,-72.2C58.9,-62.6,63.2,-44.5,69.2,-27.7C75.1,-11,82.7,4.5,81.1,19.1C79.5,33.7,68.7,47.4,55.5,57.3C42.3,67.2,26.7,73.3,10.1,76.4C-6.5,79.5,-24.1,79.5,-39.7,72.3C-55.3,65.1,-68.9,50.6,-74.9,33.8C-80.9,17,-79.3,-2.2,-73.2,-19C-67.1,-35.8,-56.5,-50.2,-43.3,-59.3C-30,-68.4,-15,-72.2,1.7,-74.8C18.5,-77.4,36.5,-81.8,47.7,-72.2Z" transform="translate(100 100)" />
        </svg>
      </div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Title */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <HighlightText>
            AppDaHorta<br/>
            <span className="text-brand-green">Venda mais, trabalhe menos</span>
          </HighlightText>
        </motion.div>

        {/* Features */}
        <div className="space-y-24">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 items-center`}
            >
              {/* Image */}
              <div className="md:w-1/2">
                <div className="rounded-xl overflow-hidden shadow-xl transform transition-all duration-300 hover:scale-105">
                  <img 
                    src={feature.image} 
                    alt={`AppDaHorta Feature ${index + 1}`}
                    className="w-full h-auto"
                  />
                </div>
              </div>

              {/* Text */}
              <div className="md:w-1/2">
                <Paragraph className="text-gray-700 text-lg leading-relaxed">
                  {feature.text}
                </Paragraph>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Final Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-16"
        >
          <Paragraph className="text-xl font-semibold text-brand-green">
            Você começa sem gastar com nenhuma ferramenta e já sai na frente nas vendas.
          </Paragraph>
        </motion.div>
      </div>
    </section>
  );
};

export default EntregaveisSection;
