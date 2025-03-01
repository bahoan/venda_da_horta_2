import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { SproutIcon, TrendingUpIcon, VideoIcon } from 'lucide-react';

const ScenariosSection = () => {
  const [isGifLoaded, setIsGifLoaded] = useState(false);

  // Pré-carregamento do GIF
  useEffect(() => {
    const gifImage = new Image();
    gifImage.src = "https://cynnujihthpzbfxlfayy.supabase.co/storage/v1/object/public/storage/site_appdahorta/site-46834e53-fc1e-40b7-85ff-38c05f29684b";
    gifImage.onload = () => setIsGifLoaded(true);
  }, []);

  const scenarios = [
    {
      title: "Se você está começando do zero:",
      content: "Com o Método Vendas DaHorta, você começa de forma certa, economizando tempo e esforço. Mesmo sem contatos no WhatsApp, o método te ensina a atrair clientes rapidamente, investindo pouco e usando modelos prontos e testados. É só copiar, colar e começar a vender, antes de gastar ou produzir, garantindo que você já vai ter clientes te esperando e sem correr o risco de fazer grandes investimentos na estrutura da sua horta ou produção e não ter retorno.",
      icon: <SproutIcon className="w-6 h-6 flex-shrink-0 mt-1" />
    },
    {
      title: "Se você já vende hortaliças e produtos da roça:",
      content: "O Método Vendas DaHorta vai impulsionar suas vendas. Com disparo em massa, você vende mais para seus clientes atuais e recupera muitos os contatos que estão no seu WhatsApp há tempos, mas que nunca pediram nem um molinho de salsa para comprar. Em poucos dias, você começa a atrair novos clientes, automatizando a organização das formas constante e recorrente de vez seus problemas de vendas.",
      icon: <TrendingUpIcon className="w-6 h-6 flex-shrink-0 mt-1" />
    }
  ];

  return (
    <section className="w-full py-16">
      <div className="container mx-auto px-4">
        {/* Cards de Cenários */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {scenarios.map((scenario, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-[#07AA1D] rounded-2xl p-6 text-white"
            >
              <div className="flex items-start gap-4">
                {scenario.icon}
                <div>
                  <h3 className="font-medium text-lg mb-4">{scenario.title}</h3>
                  <p className="leading-relaxed">{scenario.content}</p>
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
          className="mt-20 text-center"
        >
          {/* Logo */}
          <img 
            src="https://cynnujihthpzbfxlfayy.supabase.co/storage/v1/object/public/storage/site_appdahorta/site-c8a0c1f7-bcbd-4760-abf2-cd4079b628d2"
            alt="Logo AppDaHorta"
            className="h-16 mx-auto mb-6"
          />

          {/* Texto */}
          <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-12">
            Ao comprar o curso Vendas DaHorta, você ganha 360 dias de acesso ao ao plano básico AppDaHorta, 
            uma ferramenta completa para organizar e automatizar suas vendas.
          </p>

          {/* GIF com loading placeholder */}
          <div className="max-w-[320px] mx-auto">
            <div className={`aspect-[9/16] bg-gray-100 rounded-[2rem] overflow-hidden ${isGifLoaded ? 'hidden' : 'block'}`}>
              <div className="animate-pulse w-full h-full" />
            </div>
            <img
              src="https://cynnujihthpzbfxlfayy.supabase.co/storage/v1/object/public/storage/site_appdahorta/site-46834e53-fc1e-40b7-85ff-38c05f29684b"
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
              <p className="text-gray-700 leading-relaxed">
                Com ele, você pode criar cardápios digitais para seus clientes fazerem pedidos sozinhos, 
                enviar notinhas automáticas, acompanhar relatórios de vendas e gerenciar tudo em um só lugar.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
              className="bg-white/50 backdrop-blur-sm border border-gray-100 rounded-2xl p-6 shadow-sm"
            >
              <p className="text-gray-700 leading-relaxed">
                Além disso, conte com o disparador de mensagens em massa para compartilhar seu cardápio 
                e ofertas com todos os contados do seu WhatsApp de forma rápida e prática, otimizando 
                seu tempo e aumentando as vendas.
              </p>
            </motion.div>
          </div>

          {/* Seção de Encontros por Vídeo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-24 max-w-4xl mx-auto text-center"
          >
            <div className="flex justify-center items-center gap-3 mb-6">
              <VideoIcon className="w-8 h-8 text-[#07AA1D]" />
              <h2 className="text-2xl md:text-3xl font-bold">
                Encontros por <span className="text-[#07AA1D]">Vídeo Chamada</span>
              </h2>
            </div>

            <p className="text-gray-700 text-lg leading-relaxed max-w-3xl mx-auto mb-12">
              Duas vezes por mês, realizamos encontros ao vivo por videochamada com os alunos do Vendas DaHorta. 
              Esses momentos são ideais para tirar dúvidas, aprender novas estratégias e receber dicas práticas 
              para melhorar suas vendas, criar ofertas e alcançar resultados ainda melhores.
            </p>

            <p className="text-xl font-medium text-[#07AA1D] mb-12">
              Dentro do Vendas DaHorta você nunca estará só.
            </p>

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

              <div className="px-6 py-8 flex flex-col items-center gap-6">
                {/* Balão de diálogo */}
                <div className="bg-white rounded-[32px] p-8 relative max-w-[800px] mx-auto shadow-lg mb-4">
                  <p className="text-[28px] leading-[34px] text-center relative z-10">
                    Até quando você vai esperar para parar de sofrer por não conseguir vender todos os produtos da horta?
                  </p>
                  <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-8 h-8 bg-white rotate-45 shadow-lg"></div>
                </div>

                <button className="bg-[#07AA1D] text-white font-bold py-4 px-8 rounded-full text-xl hover:bg-[#068816] transition-colors w-full max-w-[400px]">
                  Entrar no Vendas DaHorta
                </button>

                <button className="flex items-center justify-center gap-2 bg-gray-100 text-gray-700 py-3 px-6 rounded-full hover:bg-gray-200 transition-colors w-full max-w-[400px]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="w-6 h-6">
                    <path fill="currentColor" d="M19.05 4.91A9.816 9.816 0 0 0 12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01zm-7.01 15.24c-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.264 8.264 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24 2.2 0 4.27.86 5.82 2.42a8.183 8.183 0 0 1 2.41 5.83c.02 4.54-3.68 8.23-8.22 8.23zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.12-.17.25-.64.81-.78.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43s.17-.25.25-.41c.08-.17.04-.31-.02-.43s-.56-1.34-.76-1.84c-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31-.22.25-.86.85-.86 2.07 0 1.22.89 2.4 1.01 2.56.12.17 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.67-1.18.21-.58.21-1.07.14-1.18s-.22-.16-.47-.28z"/>
                  </svg>
                  <span>Tirar dúvidas via WhatsApp</span>
                </button>

                <p className="text-gray-500 text-sm text-center">
                  Normalmente respondemos em menos de 2 minutos
                </p>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ScenariosSection;
