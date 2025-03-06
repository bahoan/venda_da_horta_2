import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { SproutIcon, TrendingUpIcon, VideoIcon } from 'lucide-react';
import { ActionButtons } from '../ui';
import { Heading2, Heading3, Paragraph, HighlightText, Subtitle, Quote, SmallText } from '../ui/typography/Typography';
import { spacingClasses, textClasses } from '../../styles/utils';

const ScenariosSection = () => {
  const [isGifLoaded, setIsGifLoaded] = useState(false);
  const { elementSpacing, sectionSpacing, smallSpacing } = spacingClasses;

  // Pré-carregamento do https://cynnujihthpzbfxlfayy.supabase.co/storage/v1/object/public/storage/site_appdahorta/site-0824192d-c12c-45f6-8efc-7b2135285408
  useEffect(() => {
    const gifImage = new Image();
    gifImage.src = "https://cynnujihthpzbfxlfayy.supabase.co/storage/v1/object/public/storage/site_appdahorta/site-0824192d-c12c-45f6-8efc-7b2135285408";
    gifImage.onload = () => setIsGifLoaded(true);
  }, []);

  const scenarios = [
    {
      title: "Se você está começando do zero:",
      content: "Com o Método Vendas DaHorta, você começa da forma certa, economizando tempo e esforço. Mesmo sem contatos no WhatsApp, o método te ensina a atrair clientes rapidamente, investindo pouco e usando modelos prontos e testados. É só copiar, colar e começar a vender antes de colher ou produzir, garantindo mais chances de sucesso sem desperdícios e sem correr o risco de fazer grandes investimentos na estrutura da sua horta ou produção e não ter retorno.",
      icon: <SproutIcon className="w-6 h-6 flex-shrink-0 mt-1" />
    },
    {
      title: "Se você já vende hortaliças e produtos da roça:",
      content: "O Método Vendas DaHorta vai impulsionar suas vendas. Com disparos em massa, você vende mais para seus clientes atuais e recupera vendas de contatos que estão no seu WhatsApp há tempos, mas que nunca pediram nem um pezinho de alface para comprar. Em poucos dias, você começa a atrair novos clientes, aumentando o faturamento de forma constante e resolvendo de vez seus problemas de vendas.",
      icon: <TrendingUpIcon className="w-6 h-6 flex-shrink-0 mt-1" />
    }
  ];

  return (
    <section className={`py-8 md:py-12 bg-white ${sectionSpacing} mobile-padding`}>
      <div className="max-w-4xl mx-auto">
        {/* Cards de Cenários */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {scenarios.map((scenario, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className={`rounded-2xl p-6 text-white ${index === 0 ? 'bg-brand-green' : 'bg-brand-orange'}`}
            >
              <div className="flex items-start gap-4">
                {scenario.icon}
                <div>
                  <div className={smallSpacing}>
                    <Subtitle className="text-white">{scenario.title}</Subtitle>
                  </div>
                  <Paragraph className="leading-relaxed text-white">{scenario.content}</Paragraph>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Seção AppDaHorta */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className={`mt-20 text-center ${sectionSpacing}`}
        >
          {/* Logo */}
          <img 
            src="https://cynnujihthpzbfxlfayy.supabase.co/storage/v1/object/public/storage/site_appdahorta/site-c8a0c1f7-bcbd-4760-abf2-cd4079b628d2"
            alt="Logo AppDaHorta"
            className={`h-16 mx-auto ${elementSpacing}`}
          />

          {/* Texto */}
          <div className={elementSpacing}>
            <Paragraph className="text-lg max-w-3xl mx-auto">
            Ao comprar o curso Vendas DaHorta, você ganha 360 dias de acesso ao plano básico do AppDaHorta, uma ferramenta completa para organizar e automatizar suas vendas.
            </Paragraph>
          </div>

          {/* GIF com loading placeholder */}
          <div className={`max-w-[320px] mx-auto ${elementSpacing}`}>
            <div className={`aspect-[9/16] bg-gray-100 rounded-[2rem] overflow-hidden ${isGifLoaded ? 'hidden' : 'block'}`}>
              <div className="animate-pulse w-full h-full" />
            </div>
            <img
              src="https://cynnujihthpzbfxlfayy.supabase.co/storage/v1/object/public/storage/site_appdahorta/site-0824192d-c12c-45f6-8efc-7b2135285408"
              alt="Demonstração AppDaHorta"
              className={`w-full rounded-[2rem] transition-opacity duration-300 ${isGifLoaded ? 'opacity-100' : 'opacity-0'}`}
              style={{ aspectRatio: '9/16' }}
              onLoad={() => setIsGifLoaded(true)}
            />
          </div>

          {/* Cards de recursos */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mt-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="bg-white/50 backdrop-blur-sm border border-gray-100 rounded-2xl p-6 shadow-sm"
            >
              <Paragraph className="leading-relaxed">
                Com ele, você pode criar cardápios digitais para seus clientes fazerem pedidos sozinhos, 
                enviar notinhas automáticas, acompanhar relatórios de vendas e gerenciar tudo em um só lugar.
              </Paragraph>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
              className="bg-white/50 backdrop-blur-sm border border-gray-100 rounded-2xl p-6 shadow-sm"
            >
              <Paragraph className="leading-relaxed">
                Além disso, conte com o disparador de mensagens em massa para compartilhar seu cardápio 
                e ofertas com todos os contados do seu WhatsApp de forma rápida e prática, otimizando 
                seu tempo e aumentando as vendas.
              </Paragraph>
            </motion.div>
          </div>

          {/* Seção de Encontros por Vídeo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className={`mt-24 max-w-4xl mx-auto text-center ${sectionSpacing}`}
          >
            <div className={`${elementSpacing} text-center`}>
              <div className="inline-flex flex-col sm:flex-row items-center gap-2 sm:gap-3 justify-center">
                <VideoIcon className="w-6 h-6 sm:w-8 sm:h-8 text-brand-green" />
                <HighlightText className="text-xl sm:text-2xl mt-1">
                  Encontros por <span className="text-brand-green block sm:inline">Vídeo Chamada</span>
                </HighlightText>
              </div>
            </div>

            <div className={elementSpacing}>
              <Paragraph className="text-lg leading-relaxed max-w-3xl mx-auto">
                Duas vezes por mês, realizamos encontros ao vivo por videochamada com os alunos do Vendas DaHorta. 
                Esses momentos são ideais para tirar dúvidas, aprender novas estratégias e receber dicas práticas 
                para melhorar suas vendas, criar ofertas e alcançar resultados ainda melhores.
              </Paragraph>
            </div>

            <div className={elementSpacing}>
              <Subtitle className="text-brand-green">
                Dentro do Vendas DaHorta você nunca estará só.
              </Subtitle>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="rounded-2xl overflow-hidden bg-white relative"
            >
              <div className="relative w-full flex justify-center">
                <img
                  src="https://cynnujihthpzbfxlfayy.supabase.co/storage/v1/object/public/storage/site_appdahorta/site-55d00e76-6389-45fd-b726-80ba1d488ef4"
                  alt="Demonstração de vendas"
                  className="w-full max-w-[640px] aspect-video object-cover"
                />
              </div>

              <div className="px-0 sm:px-6 py-8 flex flex-col items-center gap-6">
                {/* ActionButtons com a frase */}
                <div className="w-full max-w-3xl mx-auto">
                  <ActionButtons 
                    fullWidth 
                    showOnlyMainButton={false}
                    topText="Tudo na vida, depois que aprende, fica fácil – inclusive vender pela internet."
                    className="px-0"
                  />
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ScenariosSection;
