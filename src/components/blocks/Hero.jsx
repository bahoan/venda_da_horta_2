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
  HighlightText,
  NumberedBenefitsList
} from '../ui';
import { spacingClasses } from '../../styles/utils';

export default function Hero() {
  const { elementSpacing } = spacingClasses;
  
  return (
    <section className="flex-1 flex items-center justify-center py-2 md:py-3 mobile-padding">
      <div className="w-full"> 
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
                Existe uma nova forma de vender  <span className="text-brand-green">hortaliças e alimentos da agricultura familiar, </span> e quase ninguém sabe usar.
              </HighlightText>
            </div>
            
            <div className={elementSpacing}>
            <Subtitle className="text-xl sm:text-2xl">
              Com ela, seu WhatsApp começa a encher de cliente todo dia, suas entregas ficam lotadas de pedido e suas vendas só aumentam, semana após semana.
              </Subtitle>
            </div>
            
            <div className={elementSpacing}>
              <Subtitle className="text-xl sm:text-2xl">
              Assista a primeira aula gratuitamente e descubra como transformar suas vendas de hortaliças com 3 estratégias práticas.
              </Subtitle>
            </div>
          </div>

          <div className={`max-w-4xl mx-auto ${elementSpacing}`}>
            <NumberedBenefitsList />
          </div>

          <div className={`video-section-container ${elementSpacing}`}>
            <VideoPlayer />
          </div>
          
          <div className={`max-w-4xl mx-auto text-center ${elementSpacing}`}>
            <Paragraph>
            Se você quer ver seu WhatsApp cheio de clientes e suas entregas lotadas de pedidos toda semana, clique no botão abaixo
            </Paragraph>
          </div>
          
          <div className="max-w-4xl mx-auto">
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
