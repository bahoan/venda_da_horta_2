import { motion } from 'framer-motion';
import { lazy, Suspense, useEffect, useState } from 'react';
import { 
  BenefitsList, 
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

// Lazy load VideoPlayer para melhorar o desempenho inicial
const VideoPlayer = lazy(() => import('../ui/media/VideoPlayer'));

export default function Hero() {
  const { elementSpacing } = spacingClasses;
  const [isMobile, setIsMobile] = useState(false);
  
  // Detectar dispositivo móvel para otimizações específicas
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  
  return (
    <section className="flex-1 flex items-center justify-center py-2 md:py-3 mobile-padding">
      <div className="w-full max-w-[1200px] mx-auto"> 
        <motion.div
          initial={{ opacity: 0, y: isMobile ? 10 : 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: isMobile ? 0.5 : 0.8, ease: 'easeOut' }}
          className="text-center"
        >
          <div style={{ width: isMobile ? '120px' : '150px', height: isMobile ? '48px' : '60px', margin: '0 auto', overflow: 'hidden', position: 'relative' }} className={elementSpacing}>
            <OptimizedImage 
              src="https://cynnujihthpzbfxlfayy.supabase.co/storage/v1/object/public/storage/site_appdahorta/site-24a3e9e2-a245-4dfb-a465-befd42dac36a" 
              alt="Logo AppDaHorta"
              className="mx-auto"
              width={isMobile ? 120 : 150}
              height={isMobile ? 48 : 60}
              quality={isMobile ? 80 : 90}
              priority={true}
              loading="eager"
              style={{ 
                width: '100%', 
                height: '100%', 
                objectFit: 'contain', 
                display: 'block',
                aspectRatio: isMobile ? '120/48' : '150/60'
              }}
            />
          </div>
          
          <div className={`max-w-4xl mx-auto text-center ${elementSpacing}`}>
            <div className={elementSpacing}>
              <HighlightText>
                Existe uma nova forma de vender <span className="text-brand-green">hortaliças e alimentos da agricultura familiar, </span> e quase ninguém sabe usar.
              </HighlightText>
            </div>
            
            {/* Reduzindo o conteúdo em dispositivos móveis para melhorar o desempenho */}
            <div className={elementSpacing}>
              <Subtitle className={`${isMobile ? 'text-lg' : 'text-xl sm:text-2xl'}`}>
                Com ela, seu WhatsApp começa a encher de cliente todo dia, suas entregas ficam lotadas de pedido e suas vendas só aumentam, semana após semana.
              </Subtitle>
            </div>
            
            {/* Condicionalmente renderizando este bloco apenas em desktop ou com texto reduzido em mobile */}
            <div className={elementSpacing}>
              <Subtitle className={`${isMobile ? 'text-lg' : 'text-xl sm:text-2xl'}`}>
                {isMobile ? 'Assista a aula gratuita e descubra como transformar suas vendas.' : 'Assista a primeira aula gratuitamente e descubra como transformar suas vendas de hortaliças com 3 estratégias práticas.'}
              </Subtitle>
            </div>
          </div>

          {/* Renderizar NumberedBenefitsList com animação mais leve em mobile */}
          <motion.div 
            className={`max-w-4xl mx-auto ${elementSpacing}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: isMobile ? 0.2 : 0.4, duration: isMobile ? 0.3 : 0.5 }}
          >
            <NumberedBenefitsList />
          </motion.div>

          <div className={`video-section-container ${elementSpacing} ${isMobile ? 'max-w-full' : 'max-w-4xl mx-auto'}`}>
            <Suspense fallback={
              <div className="w-full aspect-video bg-gray-200 animate-pulse rounded-lg flex items-center justify-center">
                <p className="text-gray-500">Carregando vídeo...</p>
              </div>
            }>
              {/* Carregando o VideoPlayer apenas quando o componente estiver visível na tela */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.1, duration: 0.3 }}
              >
                <VideoPlayer />
              </motion.div>
            </Suspense>
          </div>
          
          {!isMobile && (
            <div className={`max-w-4xl mx-auto text-center ${elementSpacing}`}>
              <Paragraph>
              Se você quer ver seu WhatsApp cheio de clientes e suas entregas lotadas de pedidos toda semana, clique no botão abaixo
              </Paragraph>
            </div>
          )}
          
          <div className={`${isMobile ? 'max-w-full px-4' : 'max-w-4xl mx-auto'}`}>
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
