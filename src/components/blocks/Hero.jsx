import { motion } from 'framer-motion';
import { 
  BenefitsList, 
  VideoPlayer, 
  OptimizedImage, 
  ActionButtons,
  Heading1,
  Heading2,
  Heading3,
  Paragraph,
  Subtitle,
  HighlightText
} from '../ui';
import { spacingClasses } from '../../styles/utils';

export default function Hero() {
  const { elementSpacing } = spacingClasses;
  
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
            className={`mx-auto ${elementSpacing} max-w-[150px] h-auto`}
            width={150}
            quality={90}
          />
          
          <div className={`max-w-4xl mx-auto text-center ${elementSpacing}`}>
            <div className={elementSpacing}>
              <HighlightText>
                Qualquer pessoa com acesso à internet <span className="text-brand-green">pode vender hortaliças e produtos da roça</span> pelo celular
              </HighlightText>
            </div>
            
            <div className={elementSpacing}>
              <Subtitle className="text-lg sm:text-xl">
                Descubra como vender mais de R$2.000 por dia de entrega da horta, toda semana, pelo WhatsApp
              </Subtitle>
            </div>
            
            <div className={elementSpacing}>
              <Heading3 className="text-xl sm:text-2xl">
                Assista a aula de introdução gratuitamente e você vai aprender mais de 10 coisas:
              </Heading3>
            </div>
          </div>

          <div className={`px-4 ${elementSpacing}`}>
            <BenefitsList />
          </div>

          <div className={`max-w-4xl mx-auto ${elementSpacing}`}>
            <VideoPlayer />
          </div>
          
          <div className={`max-w-4xl mx-auto text-center ${elementSpacing}`}>
            <Paragraph>
              Se você quer vender mais de R$2.000 por dia de entrega, toda semana, com constância e crescimento, clique no botão abaixo agora
            </Paragraph>
          </div>
          
          <div className="max-w-4xl mx-auto px-4">
            <ActionButtons 
              showOnlyMainButton={true} 
              fullWidth
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
