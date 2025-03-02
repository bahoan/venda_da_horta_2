import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { motion } from 'framer-motion';
import LazyVideo from './LazyVideo';
import GreenCTAButton from './GreenCTAButton';
import WhatsAppButton from './WhatsAppButton';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { fetchVideoTestimonials } from '../utils/supabaseClient';

// Array de vídeos de fallback para caso a API falhe
const fallbackVideos = [
  {
    id: 'JuBYKiyGJ5E',
    title: '"agora podemos sonhar: dobramos nossas vendas e sabemos o caminho para crescer toda semana"',
    description: 'Antes do Método Vendas DaHorta, nossas vendas eram desorganizadas e sem constância. Um dia vendíamos bem, no outro nada. R$2.000 em uma semana era um milagre. Depois do método, tudo mudou: já fizemos mais de R$3.000 em um único dia e dobramos nosso faturamento semanal para mais de R$4.000. Mas o mais importante é que agora podemos sonhar, planejar o futuro e ter a certeza de que estamos no caminho certo para crescer semana após semana.'
  },
  {
    id: 'Wf59tJIWjTg',
    title: '"Saí de R$3.000 para quase R$12.000 em um mês com o mesmo produto, só ajustando e aplicando o método certo!"',
    description: 'Eu já fui produtor com horta e vendia bem, mas quando fiquei só com o delivery, meu faturamento caiu para R$3.000, R$4.000 por mês. Eu achava que vender pela internet não era pra mim e que estava perdendo tempo. Até que um amigo me indicou o João e o Método Vendas DaHorta. Foi aí que tudo mudou: apliquei as técnicas e ajustes do método e, em um mês, passei a faturar mais R$11.000 com o mesmo produto. Hoje, sei que o segredo é usar o método certo para alcançar resultados reais!'
  },
  {
    id: '31FETD0WmEo',
    title: '"em um mês quadruplicamos nossas vendas de assinaturas"',
    description: 'Trabalho com o modelo CSA (Consumidor que Sustenta Agricultura), oferecendo assinaturas mensais de cestas de alimentos. Antes do método, dependia do boca a boca e de postagens no WhatsApp e Instagram, mas nada funcionava direito. Eu ficava perdido, sem saber como atrair mais clientes. Foi aí que comecei a aplicar o Método Vendas DaHorta, e tudo mudou. Em um mês, passei de 3 assinaturas para 12. Quadruplicar minhas vendas parecia impossível antes, mas agora sei que com o método certo, o crescimento é real e rápido!'
  },
  {
    id: '_QZRQr_9tkw',
    title: '"Investi R$32 e vendi R$1.500 no primeiro fim de semana aplicando o Método Vendas DaHorta"',
    description: 'Eu já tinha tentado de tudo para vender meus produtos orgânicos online, mas nada funcionava. Gastei dinheiro com anúncios caros e sem resultado. Quando conheci o Método Vendas DaHorta, decidi dar uma última chance. Investi apenas R$32 em anúncios seguindo exatamente o que o método ensina e, no primeiro fim de semana, vendi R$1.500 em produtos! O método é simples, direto e funciona de verdade. Hoje sei que o problema nunca foi meu produto, mas sim a estratégia que eu estava usando.'
  }
];

// Componente para o Modal de Vídeo
const VideoModal = ({ isOpen, onClose, currentVideo, onPrev, onNext }) => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [modalDimensions, setModalDimensions] = useState({ width: '90%', maxWidth: '900px', maxHeight: '90vh' });

  // Ajustar dimensões do modal com base no tamanho da tela
  React.useEffect(() => {
    const updateDimensions = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      
      if (width <= 640) { // Mobile
        setModalDimensions({
          width: '95%',
          maxWidth: '100%',
          maxHeight: '85vh'
        });
      } else if (width <= 1024) { // Tablet
        setModalDimensions({
          width: '90%',
          maxWidth: '800px',
          maxHeight: '85vh'
        });
      } else { // Desktop
        setModalDimensions({
          width: '85%',
          maxWidth: '900px',
          maxHeight: '85vh'
        });
      }
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    
    return () => {
      window.removeEventListener('resize', updateDimensions);
    };
  }, []);

  // Fechar modal ao pressionar ESC
  React.useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') {
        onClose();
        setIsVideoLoaded(false);
      }
    };
    
    if (isOpen) {
      document.addEventListener('keydown', handleEsc);
      document.body.style.overflow = 'hidden'; // Previne rolagem do body
    }
    
    return () => {
      document.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = 'auto'; // Restaura rolagem
    };
  }, [isOpen, onClose]);

  // Fechar ao clicar fora do modal
  const handleOutsideClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
      setIsVideoLoaded(false);
    }
  };

  const handlePrev = () => {
    setIsVideoLoaded(false);
    onPrev();
  };

  const handleNext = () => {
    setIsVideoLoaded(false);
    onNext();
  };

  if (!isOpen || !currentVideo) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 backdrop-blur-sm transition-opacity p-4"
      onClick={handleOutsideClick}
      aria-modal="true"
      role="dialog"
    >
      <div 
        className="bg-white rounded-lg shadow-xl overflow-hidden transform transition-all flex flex-col"
        style={{ 
          width: modalDimensions.width, 
          maxWidth: modalDimensions.maxWidth,
          maxHeight: modalDimensions.maxHeight
        }}
      >
        {/* Cabeçalho */}
        <div className="bg-brand-green text-white px-4 py-2 flex justify-between items-center">
          <h2 className="text-lg font-semibold truncate">{currentVideo.title}</h2>
          <button 
            onClick={() => {
              onClose();
              setIsVideoLoaded(false);
            }}
            className="text-white hover:text-gray-200 focus:outline-none focus:ring-2 focus:ring-white rounded-full"
            aria-label="Fechar"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        {/* Vídeo */}
        <div className="aspect-video w-full bg-black">
          <iframe
            src={`https://www.youtube.com/embed/${currentVideo.id}?autoplay=1&modestbranding=1&rel=0`}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
            onLoad={() => setIsVideoLoaded(true)}
          />
        </div>
        
        {/* Descrição */}
        <div className="p-4 overflow-y-auto">
          <h3 className="text-base font-semibold text-brand-green mb-2">{currentVideo.title}</h3>
          <p className="text-sm text-gray-700">{currentVideo.description}</p>
        </div>
        
        {/* Navegação */}
        <div className="px-4 py-3 bg-gray-50 flex justify-between mt-auto">
          <button
            onClick={handlePrev}
            className="px-3 py-1.5 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-brand-green flex items-center"
          >
            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Anterior
          </button>
          <button
            onClick={handleNext}
            className="px-3 py-1.5 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-brand-green flex items-center"
          >
            Próximo
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
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

  // Buscar depoimentos do Supabase quando o componente for montado
  useEffect(() => {
    const loadTestimonials = async () => {
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
      }
    };

    loadTestimonials();
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
    const thumbnailUrl = `https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`;
    
    return (
      <div 
        className="flex flex-col gap-4 bg-white rounded-xl shadow-sm cursor-pointer mx-1 md:mx-2"
        onClick={() => openModal(index)}
      >
        <div className="aspect-video rounded-t-xl overflow-hidden bg-black relative">
          <img
            src={thumbnailUrl}
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
          <h3 className="text-lg font-semibold text-brand-green mb-2">
            {video.title}
          </h3>
          <p className="text-sm text-gray-600 line-clamp-4 hover:line-clamp-none transition-all duration-300">
            {video.description}
          </p>
        </div>
      </div>
    );
  };

  // Renderiza um loader enquanto os dados estão sendo carregados
  if (loading) {
    return (
      <section className="bg-[#F9FAFB] py-16">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-8">
              Carregando depoimentos...
            </h2>
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
    <section className="bg-[#F9FAFB] py-16 overflow-hidden">
      <div className="w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 px-4 max-w-5xl mx-auto"
        >
          <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-8">
            Eu duvido você ver essas histórias e não querer o mesmo para{' '}
            <span className="text-brand-green">
              suas vendas e sua vida
            </span>
          </h2>
        </motion.div>

        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={10}
          slidesPerView={1.1}
          centeredSlides={true}
          loop={true}
          navigation
          pagination={{ clickable: true }}
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
          className="!pb-12 !px-0"
        >
          {videos.map((video, index) => (
            <SwiperSlide key={video.id}>
              <VideoCard video={video} index={index} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Quote and CTA Section */}
      <div className="container mx-auto px-4 pb-8">
        {/* Quote */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 relative max-w-3xl mx-auto"
        >
          <div className="bg-white p-8 rounded-2xl shadow-sm relative">
            {/* Triângulo do balão */}
            <div className="absolute w-0 h-0 border-l-[20px] border-l-transparent border-r-[20px] border-r-transparent border-t-[20px] border-white -bottom-5 left-1/2 transform -translate-x-1/2"></div>
            
            <div className="flex items-start mb-6">
              <span className="text-green-500 text-6xl font-serif leading-none mr-4">"</span>
              <blockquote className="text-gray-700 text-2xl font-light pt-2">
                Eles poderiam nem estar mais trabalhando com horta se não tivessem clicado no botão abaixo
              </blockquote>
              <span className="text-green-500 text-6xl font-serif leading-none self-end ml-4">"</span>
            </div>
          </div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col gap-4 max-w-xl mx-auto mb-8"
        >
          <div className="w-full max-w-[400px] mx-auto">
            <GreenCTAButton fullWidth />
          </div>
          <div className="w-full max-w-[400px] mx-auto">
            <WhatsAppButton fullWidth />
          </div>
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
    </section>
  );
};

export default VideoSlider;
