import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { motion } from 'framer-motion';
import { LazyVideo, ActionButtons, HighlightText, Subtitle, Paragraph } from '../ui';
import { fetchVideoTestimonials } from '../../utils/supabaseClient';
import { spacingClasses } from '../../styles/utils';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Array de vídeos de fallback para caso a API falhe
const fallbackVideos = [
  {
    id: 1,
    url: '/videos/depoimento1.mp4',
    thumbnail: '/images/thumbnails/depoimento1.jpg',
    title: '"agora podemos sonhar: dobramos nossas vendas e sabemos o caminho para crescer toda semana"',
    description: 'Antes do Método Vendas DaHorta, nossas vendas eram desorganizadas e sem constância. Um dia vendíamos bem, no outro nada. R$2.000 em uma semana era um milagre. Depois do método, tudo mudou: já fizemos mais de R$3.000 em um único dia e dobramos nosso faturamento semanal para mais de R$4.000. Mas o mais importante é que agora podemos sonhar, planejar o futuro e ter a certeza de que estamos no caminho certo para crescer semana após semana.'
  },
  {
    id: 2,
    url: '/videos/depoimento2.mp4',
    thumbnail: '/images/thumbnails/depoimento2.jpg',
    title: '"Saí de R$3.000 para quase R$12.000 em um mês com o mesmo produto, só ajustando e aplicando o método certo!"',
    description: 'Eu já fui produtor com horta e vendia bem, mas quando fiquei só com o delivery, meu faturamento caiu para R$3.000, R$4.000 por mês. Eu achava que vender pela internet não era pra mim e que estava perdendo tempo. Até que um amigo me indicou o João e o Método Vendas DaHorta. Foi aí que tudo mudou: apliquei as técnicas e ajustes do método e, em um mês, passei a faturar mais R$11.000 com o mesmo produto. Hoje, sei que o segredo é usar o método certo para alcançar resultados reais!'
  },
  {
    id: 3,
    url: '/videos/depoimento3.mp4',
    thumbnail: '/images/thumbnails/depoimento3.jpg',
    title: '"em um mês quadruplicamos nossas vendas de assinaturas"',
    description: 'Trabalho com o modelo CSA (Consumidor que Sustenta Agricultura), oferecendo assinaturas mensais de cestas de alimentos. Antes do método, dependia do boca a boca e de postagens no WhatsApp e Instagram, mas nada funcionava direito. Eu ficava perdido, sem saber como atrair mais clientes. Foi aí que comecei a aplicar o Método Vendas DaHorta, e tudo mudou. Em um mês, passei de 3 assinaturas para 12. Quadruplicar minhas vendas parecia impossível antes, mas agora sei que com o método certo, o crescimento é real e rápido!'
  },
  {
    id: 4,
    url: '/videos/depoimento4.mp4',
    thumbnail: '/images/thumbnails/depoimento4.jpg',
    title: '"Investi R$32 e vendi R$1.500 no primeiro fim de semana aplicando o Método Vendas DaHorta"',
    description: 'Eu já tinha tentado de tudo para vender meus produtos orgânicos online, mas nada funcionava. Gastei dinheiro com anúncios caros e sem resultado. Quando conheci o Método Vendas DaHorta, decidi dar uma última chance. Investi apenas R$32 em anúncios seguindo exatamente o que o método ensina e, no primeiro fim de semana, vendi R$1.500 em produtos! O método é simples, direto e funciona de verdade. Hoje sei que o problema nunca foi meu produto, mas sim a estratégia que eu estava usando.'
  }
];

// Componente para o Modal de Vídeo
const VideoModal = ({ isOpen, onClose, currentVideo, onPrev, onNext }) => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  
  // Fechar o modal quando clicar fora do vídeo
  const handleOutsideClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
      setIsVideoLoaded(false);
    }
  };

  // Adicionar navegação por teclado
  React.useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isOpen) return;
      
      if (e.key === 'ArrowLeft') {
        onPrev();
        setIsVideoLoaded(false);
      } else if (e.key === 'ArrowRight') {
        onNext();
        setIsVideoLoaded(false);
      } else if (e.key === 'Escape') {
        onClose();
        setIsVideoLoaded(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onPrev, onNext, onClose]);

  if (!isOpen || !currentVideo) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 backdrop-blur-sm"
      onClick={handleOutsideClick}
      aria-modal="true"
      role="dialog"
    >
      <div className="relative w-full max-w-4xl mx-auto px-4 sm:px-6 md:px-8">
        {/* Botão de fechar no canto superior direito */}
        <button 
          onClick={() => {
            onClose();
            setIsVideoLoaded(false);
          }}
          className="absolute -top-10 right-2 sm:right-0 bg-white text-gray-800 rounded-full p-2 shadow-lg z-10"
          aria-label="Fechar"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        
        {/* Container do vídeo - simples e direto */}
        <div className="relative w-full aspect-video bg-black rounded-lg overflow-hidden">
          <video
            src={currentVideo.url}
            poster={currentVideo.thumbnail}
            controls
            autoPlay
            className="absolute inset-0 w-full h-full object-contain"
            onLoadedData={() => setIsVideoLoaded(true)}
          />
        </div>
      </div>
    </div>
  );
};

const VideoSlider = () => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const swiperRef = useRef(null);

  // Variável para controlar se a requisição já foi feita
  const fetchController = {
    isFetching: false
  };

  // Verifica se é mobile
  useEffect(() => {
    const checkIfMobile = () => {
      const isMobile = window.innerWidth <= 768;
      setIsMobile(isMobile);
      
      // Controla o autoplay baseado no tamanho da tela
      if (swiperRef.current?.swiper) {
        if (isMobile && !modalOpen) {
          swiperRef.current.swiper.autoplay.start();
        } else {
          swiperRef.current.swiper.autoplay.stop();
        }
      }
    };

    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    return () => window.removeEventListener('resize', checkIfMobile);
  }, [modalOpen]);

  // Buscar depoimentos do Supabase quando o componente for montado
  useEffect(() => {
    // Evitar chamadas duplicadas
    if (fetchController.isFetching) {
      return;
    }
    
    const loadTestimonials = async () => {
      fetchController.isFetching = true;
      setLoading(true);
      
      try {
        const result = await fetchVideoTestimonials();
        
        if (result.error || !result.data || result.data.length === 0) {
          console.error('Erro ao carregar depoimentos:', result.error);
          // Usar os vídeos de fallback em caso de erro
          setVideos(fallbackVideos);
        } else {
          setVideos(result.data);
        }
      } catch (err) {
        console.error('Erro inesperado:', err);
        // Usar os vídeos de fallback em caso de erro
        setVideos(fallbackVideos);
      } finally {
        setLoading(false);
        // Não resetamos isFetching para evitar novas chamadas
      }
    };

    loadTestimonials();
    
    // Cleanup function
    return () => {
      // Não fazemos nada aqui, pois queremos manter isFetching=true
    };
  }, []);

  const openModal = (index) => {
    setCurrentVideoIndex(index);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const goToPrevVideo = () => {
    setCurrentVideoIndex((prevIndex) => 
      prevIndex === 0 ? videos.length - 1 : prevIndex - 1
    );
  };

  const goToNextVideo = () => {
    setCurrentVideoIndex((prevIndex) => 
      prevIndex === videos.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Componente para o card de vídeo (thumbnail)
  const VideoCard = ({ video, index }) => {
    return (
      <div 
        className="flex flex-col gap-4 bg-white rounded-xl shadow-sm cursor-pointer mx-1 md:mx-2"
        onClick={() => openModal(index)}
      >
        <div className="aspect-video rounded-t-xl overflow-hidden bg-black relative">
          <img
            src={video.thumbnail}
            alt={video.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 hover:bg-opacity-40 transition-all flex items-center justify-center">
            <svg
              className="w-16 h-16 text-white hover:scale-110 transition-transform"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>
        <div className="text-gray-800 p-4">
          <Subtitle className="text-brand-green mb-2">
            {video.title}
          </Subtitle>
          <Paragraph className="text-sm">
            {video.description}
          </Paragraph>
        </div>
      </div>
    );
  };

  // Renderiza um loader enquanto os dados estão sendo carregados
  if (loading) {
    return (
      <section className="bg-[#F9FAFB] py-8">
        <div className="max-w-4xl mx-auto mobile-padding">
          <div className="text-center mb-12">
            <HighlightText>
              Carregando depoimentos...
            </HighlightText>
          </div>
          <div className="flex justify-center">
            <div className="animate-pulse flex space-x-4">
              <div className="bg-gray-200 rounded-xl h-64 w-full max-w-md"></div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto mobile-padding">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={`text-center ${spacingClasses.elementSpacing}`}
        >
          <HighlightText>
            Eu duvido você ver essas histórias e não<br />
            querer o mesmo para <span className="text-brand-green">suas vendas e sua vida</span>
          </HighlightText>
        </motion.div>
      </div>

      {/* Área do carrossel com margem infinita */}
      <div className="w-full overflow-hidden">
        <Swiper
          ref={swiperRef}
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={10}
          slidesPerView={1.1}
          centeredSlides={true}
          loop={true}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          breakpoints={{
            480: {
              slidesPerView: 1.3,
              spaceBetween: 15
            },
            640: {
              slidesPerView: 1.5,
              spaceBetween: 20
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 20
            },
            1024: {
              slidesPerView: 2.5,
              spaceBetween: 20
            },
            1280: {
              slidesPerView: 3,
              spaceBetween: 25
            },
            1536: {
              slidesPerView: 3.5,
              spaceBetween: 30
            }
          }}
          className="!pb-12 !px-0 group relative"
        >
          {/* Botões de navegação customizados */}
          <div className="swiper-button-prev !w-12 !h-12 !bg-brand-green hover:!bg-brand-green/90 !rounded-full !shadow-lg !opacity-90 !flex !items-center !justify-center !left-2 md:!left-4 !top-[25%]">
            <ChevronLeft className="w-6 h-6 text-white" />
          </div>
          <div className="swiper-button-next !w-12 !h-12 !bg-brand-green hover:!bg-brand-green/90 !rounded-full !shadow-lg !opacity-90 !flex !items-center !justify-center !right-2 md:!right-4 !top-[25%]">
            <ChevronRight className="w-6 h-6 text-white" />
          </div>

          {videos.map((video, index) => (
            <SwiperSlide key={video.id}>
              <VideoCard video={video} index={index} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="max-w-4xl mx-auto mobile-padding">
        {/* Quote and CTA Section */}
        <div className="max-w-4xl mx-auto pb-8">
          {/* Quote - Removido pois agora está no componente ActionButtons */}

          {/* ActionButtons */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col gap-4 w-full max-w-3xl mx-auto mb-8"
          >
            <ActionButtons 
              fullWidth 
              topText="Eles poderiam nem estar mais trabalhando com horta se não tivessem clicado no botão abaixo"
            />
          </motion.div>
        </div>

        {/* Modal de Vídeo */}
        <VideoModal 
          isOpen={modalOpen}
          onClose={closeModal}
          currentVideo={videos[currentVideoIndex]}
          onPrev={goToPrevVideo}
          onNext={goToNextVideo}
        />
      </div>
    </section>
  );
};

export default VideoSlider;
