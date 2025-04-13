import { motion } from 'framer-motion';
import { Heading2, Heading3, Paragraph, HighlightText } from '../ui/typography/Typography';
import { spacingClasses } from '../../styles/utils';
import { ActionButtons } from '../ui';

const ComparisonSection = () => {
  const { elementSpacing, sectionSpacing } = spacingClasses;
  
  const oldMethodItems = [
    {
      text: "Colhe antes, tenta vender depois: sobra produto e vem o prejuízo."
    },
    {
      text: "Depende da feira ou do movimento: se tá fraco, volta com tudo pra casa e perde dinheiro."
    },
    {
      text: "Corre atrás de cliente: gasta tempo, cansa e quase não vende."
    },
    {
      text: "Lucro baixo: vende pra atravessador e mal cobre os custos."
    },
    {
      text: "Nada é certo: fica ansioso com o monte de produto parado, sem saber pra quem vender."
    }
  ];

  const newMethodItems = [
    {
      text: "Vende antes, colhe depois: só colhe o que já foi vendido e pago."
    },
    {
      text: "Cliente chega no WhatsApp: não precisa correr atrás, tem novo cliente todo dia."
    },
    {
      text: "Vendas automáticas: você atende e vende no automático (até dormindo)."
    },
    {
      text: "Mais lucro: venda direta ao consumidor final."
    },
    {
      text: "Vendas constantes: toda semana as vendas aumentam."
    }
  ];

  return (
    <section className="w-full py-12 bg-gray-50 mobile-padding">
      <div className="max-w-5xl mx-auto">
        {/* Title */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <Heading2>
            Você prefere vender de qual forma?
          </Heading2>
        </motion.div>

        {/* Comparison Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Old Method Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-xl shadow-md overflow-hidden border-t-4 border-red-500"
          >
            <div className="p-6">
              <div className="flex items-center mb-4">
                <span className="text-3xl mr-3">🚫</span>
                <Heading3 className="text-red-600">
                Formas Antigas e Ultrapassadas:
                </Heading3>
              </div>
              
              <ul className="space-y-4">
                {oldMethodItems.map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-start"
                  >
                    <span className="inline-block bg-red-100 text-red-600 rounded-full p-1 mr-3 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </span>
                    <Paragraph className="text-gray-700">
                      {item.text.includes(':') ? (
                        <>
                          <span className="font-bold text-red-600">{item.text.split(':')[0]}</span>:
                          {item.text.split(':')[1]}
                        </>
                      ) : (
                        item.text
                      )}
                    </Paragraph>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* New Method Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-xl shadow-md overflow-hidden border-t-4 border-brand-green"
          >
            <div className="p-6">
              <div className="flex items-center mb-4">
                <span className="text-3xl mr-3">✅</span>
                <Heading3 className="text-brand-green">
                  Nova Forma de Vender Hortaliças:
                </Heading3>
              </div>
              
              <ul className="space-y-4">
                {newMethodItems.map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-start"
                  >
                    <span className="inline-block bg-green-100 text-brand-green rounded-full p-1 mr-3 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <Paragraph className="text-gray-700">
                      {item.text.includes(':') ? (
                        <>
                          <span className="font-bold text-brand-green">{item.text.split(':')[0]}</span>:
                          {item.text.split(':')[1]}
                        </>
                      ) : (
                        item.text
                      )}
                    </Paragraph>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-center my-10"
        >
          <div className="h-0.5 bg-gray-200 w-full rounded-full"></div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <HighlightText className="text-2xl">
            É hora de se atualizar!<br/>
            <span className="text-brand-green">Chega de sofrer com os tipos de vendas antigas!</span>
          </HighlightText>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <ActionButtons 
            topText="É hora de se atualizar. Com a nova forma de vender hortaliças, você tem clientes todos os dias e entregas lotadas toda semana – de um jeito simples e moderno."
          />
        </motion.div>
      </div>
    </section>
  );
};

export default ComparisonSection;
