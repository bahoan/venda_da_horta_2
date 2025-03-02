import { motion } from 'framer-motion';
import { BenefitsList, VideoPlayer, OptimizedImage, CTAButton } from '../ui';

export default function Hero() {
  return (
    <section className="flex-1 flex items-center justify-center py-4 md:py-6">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <OptimizedImage 
            src="https://cynnujihthpzbfxlfayy.supabase.co/storage/v1/object/public/storage/site_appdahorta/site-b88612c0-42e5-4841-819b-ca25a3b892c4" 
            alt="Logo AppDaHorta"
            className="mx-auto mb-4 md:mb-6 max-w-[150px] h-auto"
            width={150}
            quality={90}
          />
          
          <div className="max-w-4xl mx-auto text-center mb-6 md:mb-8">
            <h1 className="text-2xl sm:text-3xl md:text-3xl font-bold mb-3 md:mb-4 leading-tight">
              <span className="block">Qualquer pessoa com acesso à internet</span>
              <span className="text-brand-green">pode vender hortaliças e produtos da roça</span>
              <span className="block">pelo celular</span>
            </h1>
            
            <p className="text-lg sm:text-xl mb-4 md:mb-6">
              Descubra como vender mais de R$2.000 por dia de entrega da horta, toda semana, pelo WhatsApp
            </p>
            
            <h2 className="text-xl sm:text-2xl font-bold mb-4 md:mb-6">
              Assista a aula de introdução gratuitamente e você vai aprender mais de 10 coisas:
            </h2>
          </div>

          <div className="px-4">
            <BenefitsList />
          </div>

          <div className="max-w-4xl mx-auto mt-8">
            <VideoPlayer />
          </div>
          
          <div className="mt-8 flex justify-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <CTAButton />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
