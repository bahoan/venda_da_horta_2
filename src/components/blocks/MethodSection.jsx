import { motion } from 'framer-motion';
import { Heading2, Heading3, Paragraph, HighlightText } from '../ui/typography/Typography';
import { spacingClasses } from '../../styles/utils';

const MethodSection = () => {
  const { elementSpacing, sectionSpacing } = spacingClasses;
  
  return (
    <section className="w-full py-6 bg-white mobile-padding">
      <div className="max-w-3xl mx-auto">
        {/* Method Description */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <div className={elementSpacing}>
          <HighlightText>
  O Método Vendas DaHorta traz <span className="text-brand-green">a nova forma</span> de vender hortaliças e alimentos da <span className="text-brand-green">agricultura familiar</span>.
</HighlightText>

          </div>
          
          <div className={elementSpacing}>
          <Paragraph className="text-xl">
  Ele é dividido em 3 etapas práticas, que você aplica para atrair mais clientes, <strong>multiplicar suas vendas</strong> e crescer toda semana.
</Paragraph>

          </div>
          
          <div className={elementSpacing}>
            <div className="inline-block">
              <Heading3 className="bg-gradient-to-r from-green-50 to-white px-4 py-2 rounded-lg border-l-4 border-brand-green shadow-sm">
                ETAPA 1: Ímã de Clientes da Horta
              </Heading3>
            </div>
          </div>
        </motion.div>

        {/* Method Image 1 */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className={`max-w-2xl mx-auto ${elementSpacing}`}
        >
          <img 
            src="https://cynnujihthpzbfxlfayy.supabase.co/storage/v1/object/public/storage/site_appdahorta/site-72186a68-e7e1-4ffc-b00d-4a09f3a0b96a" 
            alt="Método Vendas DaHorta - Imã de Clientes"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </motion.div>

        {/* Method 1 Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={`max-w-2xl mx-auto text-center ${sectionSpacing}`}
        >
          <div className={elementSpacing}>
            <Paragraph>
            Você aprende a atrair novos clientes da sua cidade todos os dias, que chegam no seu WhatsApp pedindo para comprar.
            </Paragraph>
          </div>
        </motion.div>
        
        {/* Divider 1 */}
        <div className="flex items-center justify-center my-10">
          <div className="h-0.5 bg-gray-200 w-16 rounded-full"></div>
          <div className="mx-4 w-8 h-8 rounded-full bg-brand-green flex items-center justify-center shadow-md">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
          <div className="h-0.5 bg-gray-200 w-16 rounded-full"></div>
        </div>

        {/* Method 2 Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className={elementSpacing}>
            <div className="inline-block">
              <Heading3 className="bg-gradient-to-r from-green-50 to-white px-4 py-2 rounded-lg border-l-4 border-brand-green shadow-sm">
                ETAPA 2: Ofertas Caipiras
              </Heading3>
            </div>
          </div>
        </motion.div>

        {/* Method Image 2 */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className={`max-w-2xl mx-auto ${elementSpacing}`}
        >
          <img 
            src="https://cynnujihthpzbfxlfayy.supabase.co/storage/v1/object/public/storage/site_appdahorta/site-a6bd2d74-7edc-4804-a519-3e9a49f53572" 
            alt="Método Vendas DaHorta - Ciclo de Colheita de Vendas"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </motion.div>

        {/* Method 2 Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center"
        >
<div className={elementSpacing}>
  <Paragraph>
  Você monta cardápios digitais com seus produtos e dispara ofertas em massa - aumentando as vendas sem incomodar ninguém.
  </Paragraph>
</div>
        </motion.div>
        
        {/* Divider 2 */}
        <div className="flex items-center justify-center my-10">
          <div className="h-0.5 bg-gray-200 w-16 rounded-full"></div>
          <div className="mx-4 w-8 h-8 rounded-full bg-brand-green flex items-center justify-center shadow-md">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
          <div className="h-0.5 bg-gray-200 w-16 rounded-full"></div>
        </div>
        
        {/* Method 3 Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={`text-center ${sectionSpacing}`}
        >
          <div className={elementSpacing}>
            <div className="inline-block">
              <Heading3 className="bg-gradient-to-r from-green-50 to-white px-4 py-2 rounded-lg border-l-4 border-brand-green shadow-sm">
                ETAPA 3: Bola de Neve de Vendas
              </Heading3>
            </div>
          </div>
        </motion.div>

        {/* Method 3 Image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={`max-w-2xl mx-auto ${elementSpacing}`}
        >
          <img 
            src="https://cynnujihthpzbfxlfayy.supabase.co/storage/v1/object/public/storage/site_appdahorta/site-014feda7-ce71-4e59-9f5f-5d8553ee972b" 
            alt="Método Vendas DaHorta - Bola de Neve de Vendas"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </motion.div>

        {/* Method 3 Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center"
        >
          <div className={elementSpacing}>
            <Paragraph>
            Suas vendas crescem de forma contínua, até lotar seus dias de entrega. É o efeito bola de neve: quanto mais você aplica, mais vende.
            </Paragraph>
          </div>

        </motion.div>
        
        {/* Final Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 mb-6 max-w-2xl mx-auto"
        >
          <div className="bg-gray-50 border-l-4 border-brand-green rounded-r-lg p-5 shadow-sm">
            <div className="flex items-start">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-brand-green flex-shrink-0 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <Paragraph className="text-gray-700 font-medium italic">
                É a partir daqui que você decide se aumenta o número de entregas por dia ou se abre mais dias de entregas.
              </Paragraph>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MethodSection;
