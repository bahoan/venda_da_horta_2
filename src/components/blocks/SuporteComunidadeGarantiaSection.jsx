import { motion } from 'framer-motion';
import { Heading2, Heading3, Paragraph, HighlightText } from '../ui/typography/Typography';
import { spacingClasses } from '../../styles/utils';
import { ActionButtons } from '../ui';
import { Video, Users, Shield } from 'lucide-react';

const SuporteComunidadeGarantiaSection = () => {
  const { elementSpacing, sectionSpacing } = spacingClasses;
  
  return (
    <section className="w-full py-16 bg-white mobile-padding">
      <div className="max-w-6xl mx-auto">
        <div className="space-y-24">
          {/* Aulas Ao Vivo e Suporte */}
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-1"
            >
              <div className="flex items-center mb-4">
                <Video size={28} className="text-brand-green mr-3" />
                <Heading3 className="text-gray-800">
                  📹 Aulas Ao Vivo e Suporte por Vídeo Chamada
                </Heading3>
              </div>
              <Paragraph className="text-gray-700 mb-4">
                A cada 15 dias, participe de aulas ao vivo e fale diretamente com especialistas para tirar dúvidas, ajustar estratégias e melhorar seus resultados.
              </Paragraph>
              <Paragraph className="text-gray-700">
                Receba orientações sobre vendas, atendimento, preços, entregas e muito mais – tudo de forma prática e direta!
              </Paragraph>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-2"
            >
              <div className="rounded-xl overflow-hidden shadow-xl">
                <img 
                  src="https://cynnujihthpzbfxlfayy.supabase.co/storage/v1/object/public/storage/site_appdahorta/site-8e919b45-c1b4-43de-96a8-19d63388ce97" 
                  alt="Aulas Ao Vivo e Suporte por Vídeo Chamada"
                  className="w-full h-auto"
                />
              </div>
            </motion.div>
          </div>

          {/* Comunidade Vendas DaHorta */}
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-2 md:order-1"
            >
              <div className="rounded-xl overflow-hidden shadow-xl">
                <img 
                  src="https://cynnujihthpzbfxlfayy.supabase.co/storage/v1/object/public/storage/site_appdahorta/site-335ff5a9-e524-43a7-afcb-f85c7ab81746" 
                  alt="Comunidade Vendas DaHorta no WhatsApp"
                  className="w-full h-auto"
                />
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-1 md:order-2"
            >
              <div className="flex items-center mb-4">
                <Users size={28} className="text-brand-green mr-3" />
                <Heading3 className="text-gray-800">
                  Comunidade Vendas DaHorta no WhatsApp!
                </Heading3>
              </div>
              <Paragraph className="text-gray-700 mb-4">
                Participe de um grupo exclusivo com outros alunos que também estão aplicando o método.
              </Paragraph>
              <Paragraph className="text-gray-700">
                Troque experiências, compartilhe resultados e tire dúvidas direto com quem está na prática. Um espaço para se apoiar, aprender e crescer junto!
              </Paragraph>
            </motion.div>
          </div>

          {/* Garantia Raiz */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gray-50 rounded-2xl p-8 md:p-12 shadow-lg"
          >
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-8">
              <img 
                src="https://cynnujihthpzbfxlfayy.supabase.co/storage/v1/object/public/storage/site_appdahorta/site-c20428b0-3dc5-4754-8b9a-b58c6e48fa40" 
                alt="Garantia Raiz"
                className="w-40 h-auto"
              />
              
              <div className="text-center md:text-left">
                <Heading2 className="text-gray-800 mb-2">
                  Garantia Raiz
                </Heading2>
                <Heading3 className="text-brand-green font-semibold">
                  Teste tudo por 30 dias
                </Heading3>
              </div>
            </div>
            
            <div className="max-w-3xl mx-auto">
              <Paragraph className="text-gray-700 mb-4 text-center">
                Você tem 30 dias para testar o método Vendas DaHorta, usar o AppDaHorta, conhecer todos os detalhes da nova forma de vendas, ter acesso ao suporte e a comunidade.
              </Paragraph>
              
              <Paragraph className="text-gray-700 text-center">
                Se por qualquer motivo não ficar satisfeito, é só enviar uma mensagem pelo WhatsApp dentro desse prazo e solicitar seu dinheiro de volta. Sem enrolação, você receberá cada centavo do valor investido.
              </Paragraph>
            </div>
          </motion.div>
          
          {/* Call to Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="max-w-3xl mx-auto mt-16"
          >
            <ActionButtons 
              topText="Você não tem nada a perder - e pode transformar suas vendas pra sempre."
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SuporteComunidadeGarantiaSection;
