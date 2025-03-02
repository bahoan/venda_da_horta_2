import { motion } from 'framer-motion';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const FAQSection = () => {
  const faqs = [
    {
      question: "Funciona para quem nunca vendeu hortaliças pela internet?",
      answer: "Com certeza! Se você nunca vendeu hortaliças online, vai começar do jeito certo, com um método já validado. Você vai evitar os erros que muita gente comete e aprender direto o que funciona de verdade. É só seguir o passo a passo e começar a atrair clientes e vender sem complicação!"
    },
    {
      question: "Funciona pra quem não tem horta?",
      answer: "Você não precisa ter uma horta pra começar. O método te ensina a vender primeiro e, depois, você pode pensar na produção, fazer parcerias ou revender produtos da roça. É tudo pensado pra ser simples e começar a gerar resultados rápido, mesmo sem plantar nada."
    },
    {
      question: "Funciona pra quem nunca usou o WhatsApp pra vender?",
      answer: "Funciona, sim. O método foi criado pra quem está começando do zero, sem experiência. Você vai aprender tudo passo a passo, desde configurar o WhatsApp até atrair clientes e fazer suas primeiras vendas. É só seguir o plano e aplicar."
    },
    {
      question: "Funciona pra quem não entende de anúncios?",
      answer: "Além de te ensinar a fazer anúncios do zero, o método ainda te dá modelos prontos de anúncios que são verdadeiros ímãs de clientes da horta. É só copiar e usar para lotar seu WhatsApp de pessoas pedindo para conhecer e comprar seus produtos."
    },
    {
      question: "Funciona pra quem não entende nada de vendas?",
      answer: "Funciona, sim! O método foi pensado também pra quem nunca vendeu antes. Ele ensina o passo a passo pra atrair clientes e vender de forma simples pelo WhatsApp, mesmo sem experiência. Você vai aprender tanto a finalizar vendas automaticamente quanto a atender seus clientes manualmente, sem complicação."
    },
    {
      question: "Funciona pra quem já vende?",
      answer: "Não só funciona como vai alavancar suas vendas de uma semana para outra. Você, de cara, já vai conseguir aumentar suas vendas para os clientes que já compram de você e, em seguida, atrair novos contatos todos os dias. Isso ativa o efeito bola de neve nas suas vendas, fazendo elas crescerem semana após semana."
    },
    {
      question: "Funciona em épocas de baixa procura?",
      answer: "Sim! O método te ensina estratégias para atrair novos clientes e incentivar quem já comprou a voltar a comprar, mesmo em épocas de baixa demanda. Você vai aprender a criar ofertas caipira e trabalhar a recompra de forma inteligente, mantendo as vendas constantes o ano todo."
    },
    {
      question: "E se eu aplicar o método e não conseguir resultados?",
      answer: "O método é validado e já trouxe resultados reais para muitas pessoas em menos de 1 semana. Se você seguir tudo direitinho, vai conseguir também. Mas, se por qualquer motivo, não ficar satisfeito, você tem até 30 dias para pedir seu dinheiro de volta, e a gente devolve cada centavo que você investiu. Ou seja, o risco é zero para você!"
    }
  ];

  const [openIndex, setOpenIndex] = useState(2); // Terceira pergunta aberta por padrão

  return (
    <section className="w-full py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            FAQ - <span className="text-[#07AA1D]">Perguntas frequentes</span>
          </h2>
          <p className="text-gray-600 text-lg">Sobre o produto</p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="mb-4 bg-white rounded-lg shadow-sm"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                className={`w-full flex items-center justify-between p-4 text-left transition-colors ${
                  openIndex === index ? 'rounded-t-lg' : 'rounded-lg'
                }`}
              >
                <span className="font-medium text-lg">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 transform transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              
              {openIndex === index && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="px-4 pb-4"
                >
                  <p className="text-gray-600 whitespace-pre-line">
                    {faq.answer}
                  </p>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
