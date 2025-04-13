import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Heading2, Heading3, Paragraph } from '../ui/typography/Typography';
import { ActionButtons } from '../ui';
import { spacingClasses } from '../../styles/utils';

const DemonstrationSection = () => {
  const { elementSpacing, sectionSpacing } = spacingClasses;
  const [isGifLoaded, setIsGifLoaded] = useState(false);

  // Pré-carregamento do GIF
  useEffect(() => {
    const gifImage = new Image();
    gifImage.src = "https://cynnujihthpzbfxlfayy.supabase.co/storage/v1/object/public/storage/site_appdahorta/site-0824192d-c12c-45f6-8efc-7b2135285408";
    gifImage.onload = () => setIsGifLoaded(true);
  }, []);

  const steps = [
    {
      number: 1,
      title: "Novos clientes chegam no seu WhatsApp pedindo o cardápio..",
      image: "https://cynnujihthpzbfxlfayy.supabase.co/storage/v1/object/public/storage/site_appdahorta/site-4a7df91d-1212-4ffb-81c0-a1e371ebf91c",
      isGif: false
    },
    {
      number: 2,
      title: "O atendimento acontece no automático.",
      image: "https://cynnujihthpzbfxlfayy.supabase.co/storage/v1/object/public/storage/site_appdahorta/site-882e9a91-f78d-4571-a1c1-d8a791e17f20",
      isGif: false
    },
    {
      number: 3,
      title: "Você recebe a notinha pronta e o relatório de pedidos.",
      image: "https://cynnujihthpzbfxlfayy.supabase.co/storage/v1/object/public/storage/site_appdahorta/site-a8dbe916-2c22-45af-8d86-18fde6603491",
      isGif: false
    },
    {
      number: 4,
      title: "Você dispara suas Ofertas Caipiras pra todo mundo.",
      image: "https://cynnujihthpzbfxlfayy.supabase.co/storage/v1/object/public/storage/site_appdahorta/site-995494c8-7479-431b-9261-4a11e892df56",
      isGif: false
    }
  ];

  const galleryImages = [
    "https://cynnujihthpzbfxlfayy.supabase.co/storage/v1/object/public/storage/site_appdahorta/site-35d82df2-3b86-400b-a0ff-666e8c2f685d",
    "https://cynnujihthpzbfxlfayy.supabase.co/storage/v1/object/public/storage/site_appdahorta/site-64c3905b-b132-40e0-8256-96dcb2a2ad43",
    "https://cynnujihthpzbfxlfayy.supabase.co/storage/v1/object/public/storage/site_appdahorta/site-892f7644-e690-43b9-a238-270e3cad7fbc",
    "https://cynnujihthpzbfxlfayy.supabase.co/storage/v1/object/public/storage/site_appdahorta/site-ccc7cedf-68c8-4100-87f4-ffe0ce0f8140"
  ];

  return (
    <section className="w-full py-16 bg-white mobile-padding overflow-hidden relative">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-green-50 rounded-full opacity-30 -mr-32 -mt-32"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-green-50 rounded-full opacity-30 -ml-40 -mb-40"></div>
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
            Veja como funciona quando você aplica o Método Vendas DaHorta:
          </Heading2>
        </motion.div>

        {/* Steps */}
        <div className="space-y-24">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex flex-col gap-8 items-center"
            >
              {/* Step Content */}
              <div className="w-full">
                <div className="flex flex-col items-center mb-6 text-center">
                  <div className="flex-shrink-0 w-14 h-14 rounded-full bg-brand-green text-white flex items-center justify-center font-bold text-2xl mb-4 shadow-lg relative">
                    <span className="absolute -top-1 -right-1 w-4 h-4 bg-brand-green rounded-full"></span>
                    <span className="absolute -bottom-1 -left-1 w-3 h-3 bg-brand-green rounded-full opacity-70"></span>
                    {step.number}
                  </div>
                  <Heading3 className="text-gray-800 max-w-md mx-auto">
                    {step.title}
                  </Heading3>
                </div>
              </div>

              {/* Step Image */}
              <div className="w-full max-w-2xl mx-auto">
                <div className="rounded-xl overflow-hidden shadow-xl border border-gray-100 transform transition-transform duration-300 hover:scale-105">
                  {step.isGif ? (
                    <div className="relative">
                      {!isGifLoaded && (
                        <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
                          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-brand-green"></div>
                        </div>
                      )}
                      <img 
                        src={step.image} 
                        alt={`Passo ${step.number} do Método Vendas DaHorta`}
                        className="w-full h-auto"
                      />
                    </div>
                  ) : (
                    <img 
                      src={step.image} 
                      alt={`Passo ${step.number} do Método Vendas DaHorta`}
                      className="w-full h-auto"
                    />
                  )}
                </div>
              </div>
            </motion.div>
          ))}

          {/* Final Step with Gallery */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-16"
          >
            <div className="text-center mb-12">
              <div className="flex flex-col items-center mb-6">
                <div className="flex-shrink-0 w-16 h-16 rounded-full bg-brand-green text-white flex items-center justify-center font-bold text-2xl mb-4 shadow-lg relative">
                  <span className="absolute -top-1 -right-1 w-4 h-4 bg-brand-green rounded-full"></span>
                  <span className="absolute -bottom-1 -left-1 w-3 h-3 bg-brand-green rounded-full opacity-70"></span>
                  5
                </div>
                <Heading3 className="text-gray-800 max-w-2xl mx-auto">
                E pronto: suas vendas começam a crescer toda semana.
                </Heading3>
              </div>
            </div>

            {/* Gallery */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {galleryImages.map((image, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-white p-2"
                >
                  <img 
                    src={image} 
                    alt={`Resultado do Método Vendas DaHorta ${index + 1}`}
                    className="w-full h-auto object-contain"
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Call to Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full max-w-3xl mx-auto mt-16 text-center"
          >
            <ActionButtons 
              topText="Quando a nova forma de vender entra em ação, o resultado aparece no seu bolso."
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DemonstrationSection;
