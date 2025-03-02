import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import GreenCTAButton from './GreenCTAButton';

const ResultsSection = () => {
  const [isGifLoaded, setIsGifLoaded] = useState(false);

  const images = [
    {
      url: "https://cynnujihthpzbfxlfayy.supabase.co/storage/v1/object/public/storage/site_appdahorta/site-497ca662-f06d-4e12-b95d-0f6586b1f1bf",
      alt: "Resultado de vendas no WhatsApp"
    },
    {
      url: "https://cynnujihthpzbfxlfayy.supabase.co/storage/v1/object/public/storage/site_appdahorta/site-17187ab5-4beb-4a2b-b358-fc3a62ce4a5d",
      alt: "Interface do WhatsApp",
      isGif: true
    },
    {
      url: "https://cynnujihthpzbfxlfayy.supabase.co/storage/v1/object/public/storage/site_appdahorta/site-f99f3c17-59e6-436c-9c76-e172de95a650",
      alt: "Mensagens de resultados"
    }
  ];

  // Pré-carregamento do GIF
  useEffect(() => {
    const gifImage = new Image();
    gifImage.src = images[1].url;
    gifImage.onload = () => setIsGifLoaded(true);
  }, []);

  return (
    <section className="w-full bg-[#E6E6E6] py-16">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-3xl md:text-4xl font-bold mb-3"
        >
          Todo dia eu recebo esse tipo de mensagem de{' '}
          <span className="text-green-500">
            quem aplica o Método Vendas DaHorta
          </span>
        </motion.h2>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative"
            >
              {image.isGif ? (
                <>
                  {/* Placeholder enquanto o GIF carrega */}
                  <div className={`aspect-[9/19] bg-gray-200 rounded-[2rem] overflow-hidden ${isGifLoaded ? 'hidden' : 'block'}`}>
                    <div className="animate-pulse w-full h-full" />
                  </div>
                  {/* GIF com fade in quando carregado */}
                  <img
                    src={image.url}
                    alt={image.alt}
                    className={`w-full rounded-[2rem] transition-opacity duration-300 ${isGifLoaded ? 'opacity-100' : 'opacity-0'}`}
                    style={{ aspectRatio: '9/19' }}
                  />
                </>
              ) : (
                <img
                  src={image.url}
                  alt={image.alt}
                  className="w-full rounded-[2rem]"
                  style={{ aspectRatio: '9/19' }}
                  loading="lazy"
                />
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="mt-16 max-w-2xl mx-auto"
        >
          {/* Quote Box com seta apontando para baixo */}
          <div className="bg-white rounded-3xl p-8 mb-8 relative shadow-sm">
            <blockquote className="text-gray-700 text-xl text-center">
              "Tudo na vida, depois que aprende, fica fácil – inclusive vender pela internet."
            </blockquote>
            {/* Seta apontando para baixo */}
            <div className="w-8 h-8 bg-white transform rotate-45 absolute -bottom-4 left-1/2 -translate-x-1/2"></div>
          </div>

          <div className="text-center space-y-4 mt-12">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 1 }}
              className="w-full"
            >
              <GreenCTAButton fullWidth />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 1.2 }}
            >
              <a 
                href="#" 
                className="block w-full bg-white text-gray-700 py-4 px-8 rounded-full font-medium text-lg hover:bg-gray-50 transition-colors flex items-center justify-center shadow-sm"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                </svg>
                Tirar dúvidas via WhatsApp
              </a>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 1.4 }}
              className="text-gray-500 mt-4 text-sm"
            >
              Normalmente respondemos em menos de 2 minutos
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ResultsSection;
