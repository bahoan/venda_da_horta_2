import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { ActionButtons } from '../ui';
import { Heading2, HighlightText, Paragraph, SmallText } from '../ui/typography/Typography';
import { spacingClasses, textClasses } from '../../styles/utils';

const ResultsSection = () => {
  const [isGifLoaded, setIsGifLoaded] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const { elementSpacing, sectionSpacing } = spacingClasses;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('results-section');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  return (
    <section id="results-section" className={`w-full bg-[#E6E6E6] py-8 mobile-padding ${sectionSpacing}`}>
      <div className="max-w-4xl mx-auto">
        <div className="max-w-5xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className={`text-center ${elementSpacing}`}
          >
            <HighlightText>
              Todo dia eu recebo esse tipo de mensagem<br />
              de <span className="text-brand-green">quem aplica o Método Vendas DaHorta</span>
            </HighlightText>
          </motion.div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <img
                src="https://cynnujihthpzbfxlfayy.supabase.co/storage/v1/object/public/storage/site_appdahorta/site-497ca662-f06d-4e12-b95d-0f6586b1f1bf"
                alt="Resultado de vendas no WhatsApp"
                className="w-full rounded-[2rem]"
                style={{ aspectRatio: '9/19' }}
                loading="lazy"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative"
            >
              <div className={`aspect-[9/19] bg-gray-200 rounded-[2rem] overflow-hidden ${isGifLoaded ? 'hidden' : 'block'}`}>
                <div className="animate-pulse w-full h-full" />
              </div>
              <img
                src="https://cynnujihthpzbfxlfayy.supabase.co/storage/v1/object/public/storage/site_appdahorta/site-17187ab5-4beb-4a2b-b358-fc3a62ce4a5d"
                alt="Interface do WhatsApp"
                className={`w-full rounded-[2rem] transition-opacity duration-300 ${isGifLoaded ? 'opacity-100' : 'opacity-0'}`}
                style={{ aspectRatio: '9/19' }}
                onLoad={() => setIsGifLoaded(true)}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="relative"
            >
              <img
                src="https://cynnujihthpzbfxlfayy.supabase.co/storage/v1/object/public/storage/site_appdahorta/site-f99f3c17-59e6-436c-9c76-e172de95a650"
                alt="Mensagens de resultados"
                className="w-full rounded-[2rem]"
                style={{ aspectRatio: '9/19' }}
                loading="lazy"
              />
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.6 }}
            className={`mt-16 max-w-2xl mx-auto ${sectionSpacing}`}
          >
            {/* A frase foi removida conforme solicitado */}

            <div className="text-center space-y-4 mt-12">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="w-full max-w-3xl mx-auto"
              >
                <ActionButtons 
                  fullWidth 
                  showOnlyMainButton={false}
                  topText="Até quando você vai esperar para parar de sofrer por não conseguir vender todos os produtos da horta?"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;
