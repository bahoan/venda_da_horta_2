import { motion } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { ActionButtons } from '../ui';
import { HighlightText } from '../ui/typography/Typography';
import { spacingClasses } from '../../styles/utils';
import { fetchCarouselItems } from '../../utils/supabaseClient';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Imagens de fallback caso a API falhe
const fallbackImages = [
  {
    id: 1,
    url: "https://cynnujihthpzbfxlfayy.supabase.co/storage/v1/object/public/storage/site_appdahorta/site-497ca662-f06d-4e12-b95d-0f6586b1f1bf",
    nome: "Resultado de vendas no WhatsApp"
  },
  {
    id: 2,
    url: "https://cynnujihthpzbfxlfayy.supabase.co/storage/v1/object/public/storage/site_appdahorta/site-17187ab5-4beb-4a2b-b358-fc3a62ce4a5d",
    nome: "Interface do WhatsApp"
  },
  {
    id: 3,
    url: "https://cynnujihthpzbfxlfayy.supabase.co/storage/v1/object/public/storage/site_appdahorta/site-f99f3c17-59e6-436c-9c76-e172de95a650",
    nome: "Mensagens de resultados"
  }
];

// Variável para controlar se a requisição já foi feita
const fetchController = {
  isFetching: false
};

// Componente para o card de imagem - movido para fora do componente principal
const ImageCard = ({ item, loading }) => {
  const [imgError, setImgError] = useState(false);
  
  if (loading) {
    return (
      <div className="relative p-1" style={{ width: '200px', height: '425px' }}>
        <div className="rounded-[2rem] overflow-hidden shadow-md bg-gray-200 animate-pulse w-full h-full">
          <div className="w-full h-full" style={{ aspectRatio: '9/19', maxHeight: '450px' }}></div>
        </div>
      </div>
    );
  }
  
  return (
    <div className="relative p-1" style={{ width: '200px', height: '425px' }}>
      <div className="rounded-[2rem] overflow-hidden shadow-md">
        <img
          src={imgError ? fallbackImages[0].url : item.url}
          alt={item.nome || "Resultado do Vendas DaHorta"}
          className="w-full h-full"
          width="200"
          height="425"
          style={{ aspectRatio: '9/19', maxHeight: '450px', objectFit: 'cover' }}
          loading="lazy"
          onError={(e) => {
            console.error(`Erro ao carregar imagem: ${item.url}`);
            setImgError(true);
          }}
        />
      </div>
    </div>
  );
};

const ResultsSection = () => {
  const [carouselItems, setCarouselItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const swiperRef = useRef(null);
  const { elementSpacing, sectionSpacing } = spacingClasses;

  // Detectar quando a seção está visível
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

  // Buscar itens do carrossel do Supabase
  useEffect(() => {
    // Evitar chamadas duplicadas
    if (fetchController.isFetching) {
      return;
    }
    
    const loadCarouselItems = async () => {
      fetchController.isFetching = true;
      setLoading(true);
      
      try {
        console.log('Buscando itens do carrossel do banco de dados...');
        const result = await fetchCarouselItems();
        
        if (result && result.data && result.data.length > 0) {
          console.log(`${result.data.length} itens carregados com sucesso do banco de dados`);
          setCarouselItems(result.data);
          setError(null);
        } else {
          // Só usar fallback se realmente não houver dados
          console.error('Nenhum item encontrado no banco de dados:', result?.error);
          setCarouselItems(fallbackImages);
          setError('Nenhum item encontrado no banco de dados');
        }
      } catch (err) {
        console.error('Erro ao carregar itens do carrossel:', err);
        setCarouselItems(fallbackImages);
        setError(err.message || 'Erro ao carregar dados');
      } finally {
        setLoading(false);
        // Não resetamos isFetching para evitar novas chamadas
      }
    };

    loadCarouselItems();
    
    // Cleanup function
    return () => {
      // Não fazemos nada aqui, pois queremos manter isFetching=true
    };
  }, []);

  // Renderiza um loader enquanto os dados estão sendo carregados
  if (loading) {
    return (
      <section id="results-section" className={`w-full bg-[#E6E6E6] py-8 mobile-padding ${sectionSpacing}`}>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <HighlightText>
              Carregando resultados...
            </HighlightText>
          </div>
          <div className="flex justify-center">
            <div className="animate-pulse flex space-x-4">
              <div className="bg-gray-200 rounded-[2rem] h-96 w-full max-w-[200px]" style={{ aspectRatio: '9/19' }}></div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // Determinar se deve usar o modo loop com base no número de slides
  const shouldUseLoop = true; // Sempre usar loop para ter carrossel infinito
  // Ajustar o número de slides por visualização com base no número total de slides
  const getOptimalSlidesPerView = (totalSlides, breakpoint) => {
    if (totalSlides <= 1) return 1;
    if (totalSlides === 2) return Math.min(1.5, breakpoint);
    if (totalSlides === 3) return Math.min(2, breakpoint);
    return breakpoint;
  };

  return (
    <section id="results-section" className={`w-full bg-[#E6E6E6] py-8 mobile-padding ${sectionSpacing}`}>
      <div className="max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className={`text-center ${elementSpacing}`}
        >
<HighlightText>
  Todo dia eu recebo mensagens assim de quem já está usando <span className="text-brand-green">a Nova Forma de Vender Hortaliças e Alimentos da Agricultura Familiar</span>.
</HighlightText>

        </motion.div>

        {/* Área do carrossel com margem infinita */}
        <div className="w-full overflow-visible mt-8 relative">
          <div className="carousel-container -mx-4 sm:-mx-6 md:-mx-8 lg:-mx-12" style={{ minHeight: '450px' }}>
            <Swiper
              ref={swiperRef}
              modules={[Navigation, Pagination]}
              spaceBetween={5}
              slidesPerView={1.8}
              centeredSlides={true}
              loop={shouldUseLoop}
              navigation={{
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
              }}
              pagination={{ clickable: true }}
              breakpoints={{
                480: {
                  slidesPerView: getOptimalSlidesPerView(carouselItems.length, 1.8),
                  spaceBetween: 15
                },
                640: {
                  slidesPerView: getOptimalSlidesPerView(carouselItems.length, 2.2),
                  spaceBetween: 20
                },
                768: {
                  slidesPerView: getOptimalSlidesPerView(carouselItems.length, 3),
                  spaceBetween: 20
                }
              }}
              className="!pb-12 !px-0 group relative"
            >
              {/* Botões de navegação customizados - sempre visíveis */}
              <div className="swiper-button-prev !w-10 !h-10 !bg-green-600 hover:!bg-green-700 !rounded-full !shadow-lg !opacity-90 !flex !items-center !justify-center !left-2 md:!left-4 !top-[40%] z-10 !absolute">
                <ChevronLeft className="w-5 h-5 text-white" />
              </div>
              <div className="swiper-button-next !w-10 !h-10 !bg-green-600 hover:!bg-green-700 !rounded-full !shadow-lg !opacity-90 !flex !items-center !justify-center !right-2 md:!right-4 !top-[40%] z-10 !absolute">
                <ChevronRight className="w-5 h-5 text-white" />
              </div>

              {loading ? (
                // Skeleton loader para o carrossel durante o carregamento
                Array.from({ length: 3 }).map((_, index) => (
                  <SwiperSlide key={`skeleton-${index}`} className="flex justify-center">
                    <div className="max-w-[200px]">
                      <ImageCard loading={true} />
                    </div>
                  </SwiperSlide>
                ))
              ) : (
                // Carrossel real após o carregamento
                carouselItems.map((item) => (
                  <SwiperSlide key={item.id} className="flex justify-center">
                    <div className="max-w-[200px]" style={{ width: '200px', height: '425px' }}>
                      <ImageCard item={item} loading={false} />
                    </div>
                  </SwiperSlide>
                ))
              )}
            </Swiper>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className={`mt-12 max-w-2xl mx-auto ${sectionSpacing}`}
        >
          <div className="text-center space-y-4">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="w-full max-w-3xl mx-auto"
            >
              <ActionButtons 
                fullWidth 
                showOnlyMainButton={false}
                topText="Quem aplica a nova forma de vender já está colhendo mais pedidos. Clique no botão abaixo e comece também."
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ResultsSection;
