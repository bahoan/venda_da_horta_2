import { motion } from 'framer-motion';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { Heading2, Heading3, Paragraph, SmallText, Subtitle } from '../ui/typography/Typography';
import { spacingClasses, textClasses } from '../../styles/utils';

const FAQSection = () => {
  const { elementSpacing, sectionSpacing } = spacingClasses;
  const faqs = [
    {
      question: "Funciona para quem nunca vendeu hortaliças pela internet?",
      answer: "Sim! Mesmo que você nunca tenha vendido hortaliças online, o método Vendas DaHorta é feito para começar do jeito certo, seguindo um passo a passo já validado. Você vai evitar os erros comuns e aprender direto o que realmente funciona para atrair clientes e vender com facilidade."
    },
    {
      question: "Funciona pra quem não tem horta?",
      answer: "Sim! Você não precisa ter uma horta para começar. O método Vendas DaHorta ensina a vender primeiro e, depois, produzir, fazer parcerias com agricultores locais ou revender produtos da roça. Tudo pensado para ser simples e gerar resultados rápidos, mesmo sem plantar nada."
    },
    {
      question: "Funciona pra quem nunca usou o WhatsApp pra vender?",
      answer: "Sim! O método foi criado para quem está começando do zero, mesmo sem experiência. Você vai aprender passo a passo, desde configurar o WhatsApp até atrair clientes e fazer suas primeiras vendas. É só seguir o plano e colocar em prática."
    },
    {
      question: "Funciona pra quem não entende de anúncios?",
      answer: "Sim! O método te ensina a fazer anúncios do zero, de forma simples e prática. Além disso, você vai receber modelos prontos de anúncios que já funcionam como verdadeiros ímãs de clientes da horta. Basta copiar e usar para lotar seu WhatsApp de pessoas interessadas em comprar."
    },
    {
      question: "Funciona pra quem não entende nada de vendas?",
      answer: "Sim! O método foi criado justamente para quem nunca vendeu antes. Você vai aprender passo a passo como atrair clientes e vender pelo WhatsApp de forma simples e prática. Seja automatizando as vendas ou atendendo manualmente, tudo é ensinado de maneira fácil e direta."
    },
    {
      question: "Funciona pra quem já vende?",
      answer: "Sim! O método não só funciona como potencializa suas vendas de forma rápida. Você vai aumentar as compras dos clientes que já têm e ainda atrair novos contatos todos os dias. Isso cria o efeito bola de neve, fazendo suas vendas crescerem semana após semana."
    },
    {
      question: "Funciona em épocas de baixa procura?",
      answer: "Sim! O método ensina estratégias práticas para atrair novos clientes e incentivar os antigos a comprar novamente, mesmo quando a demanda está menor. Você vai aprender a criar ofertas caipiras que mantêm as vendas constantes, garantindo faturamento o ano todo."
    },
    {
      question: "E se eu aplicar o método e não conseguir resultados?",
      answer: "O método já foi testado e comprovado por muitas pessoas, gerando resultados reais em menos de uma semana. Se você seguir o passo a passo direitinho, vai ver as vendas crescerem. Mas, se por qualquer motivo não ficar satisfeito, você tem 30 dias para pedir seu dinheiro de volta – sem risco e sem enrolação."
    }
  ];

  const [openIndex, setOpenIndex] = useState(2); // Terceira pergunta aberta por padrão

  return (
    <section className="w-full py-8 bg-gray-50 mobile-padding">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={`text-center ${elementSpacing}`}
        >
          <Heading2>
            FAQ - <span className="text-brand-green">Perguntas frequentes</span>
          </Heading2>
          <SmallText className="text-lg">Sobre o produto</SmallText>
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
                <Subtitle as="span" className="font-medium text-lg">{faq.question}</Subtitle>
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
                  <Paragraph className="whitespace-pre-line">
                    {faq.answer}
                  </Paragraph>
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
