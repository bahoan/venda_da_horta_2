import { motion } from 'framer-motion';
import { Heading2, Heading3, Paragraph, HighlightText } from '../ui/typography/Typography';
import { spacingClasses } from '../../styles/utils';

const MethodSection = () => {
  const { elementSpacing, sectionSpacing } = spacingClasses;
  
  return (
    <section className="w-full py-8 bg-white mobile-padding">
      <div className="max-w-4xl mx-auto">
        {/* Method Description */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className={elementSpacing}>
            <HighlightText>
              Um plano <span className="text-brand-green">detalhado</span> para você <span className="text-brand-green">começar a vender</span> hortaliças e produtos
              da roça pela internet <span className="text-brand-green">e aumentar suas vendas semana após semana</span>
            </HighlightText>
          </div>
          
          <div className={elementSpacing}>
            <Paragraph className="text-xl">
              O Método Vendas DaHorta é dividido em 2 etapas:
            </Paragraph>
          </div>
          
          <div className={elementSpacing}>
            <Heading3>
              Etapa 1: Imã de Clientes da Horta
            </Heading3>
          </div>
        </motion.div>

        {/* Method Image 1 */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className={`max-w-4xl mx-auto ${elementSpacing}`}
        >
          <img 
            src="https://cynnujihthpzbfxlfayy.supabase.co/storage/v1/object/public/storage/site_appdahorta/site-896a65bb-4b6f-4edf-85e5-035708416496" 
            alt="Método Vendas DaHorta - Imã de Clientes"
            className="w-full h-auto rounded-lg"
          />
        </motion.div>

        {/* Method 1 Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={`max-w-3xl mx-auto text-center ${sectionSpacing}`}
        >
          <div className={elementSpacing}>
            <Paragraph>
              Aqui você aprender a atrair novos clientes e potenciais clientes para seu WhatsApp todos os dias. 
              Nessa etapa você já faz as primeiras vendas e aumenta sua base de contatos no WhatsApp.
            </Paragraph>
          </div>
        </motion.div>

        {/* Method 2 Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className={elementSpacing}>
            <Heading3>
              Etapa 2: Ciclo de Colheita de Vendas
            </Heading3>
          </div>
        </motion.div>

        {/* Method Image 2 */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className={`max-w-4xl mx-auto ${elementSpacing}`}
        >
          <img 
            src="https://cynnujihthpzbfxlfayy.supabase.co/storage/v1/object/public/storage/site_appdahorta/site-2cb43d53-e14a-46a4-89d9-65debcd3fc91" 
            alt="Método Vendas DaHorta - Ciclo de Colheita de Vendas"
            className="w-full h-auto rounded-lg"
          />
        </motion.div>

        {/* Method 2 Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <div className={elementSpacing}>
            <Paragraph>
              Nessa etapa você automatiza seu atendimento, cria uma rotina de produção e envio de ofertas 
              e cardápio para sua base de contatos.
            </Paragraph>
          </div>
          
          <div className={elementSpacing}>
            <Paragraph>
              Dessa forma você tem novos clientes entrando em contato todos os dias e novas vendas acontecendo 
              com os contatos que entraram no seu WhatsApp mas não compraram na hora, além de ter a recompra 
              de quem fidelizar.
            </Paragraph>
          </div>
          
          <div className={elementSpacing}>
            <Paragraph>
              Isso faz suas vendas aumentarem a cada semana, criando um efeito de bola de neve de vendas.
            </Paragraph>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MethodSection;
