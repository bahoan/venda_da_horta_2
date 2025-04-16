import { motion } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';
import { Play } from 'lucide-react';

export default function VideoPlayer() {
  const [hasStarted, setHasStarted] = useState(false);
  const [isEnded, setIsEnded] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [firstVisit, setFirstVisit] = useState(true);
  const [showOverlay, setShowOverlay] = useState(false);
  const videoRef = useRef(null);

  // URL da imagem de capa
  const thumbnailUrl = "https://cynnujihthpzbfxlfayy.supabase.co/storage/v1/object/public/storage/site_appdahorta/site-54956270-8ca3-409b-9295-f489b8d05b75";

  // Inicia o vídeo automaticamente em mudo na primeira visita
  useEffect(() => {
    if (firstVisit && videoRef.current) {
      // Pequeno timeout para garantir que o vídeo esteja pronto
      const timer = setTimeout(() => {
        videoRef.current.muted = true;
        videoRef.current.play()
          .then(() => {
            setHasStarted(true);
            setIsEnded(false);
            setShowOverlay(true);
          })
          .catch(error => {
            console.error('Erro ao reproduzir vídeo automaticamente:', error);
          });
      }, 500);
      
      return () => clearTimeout(timer);
    }
  }, [firstVisit]);

  const handlePlayVideo = () => {
    if (videoRef.current) {
      // Se for a primeira visita e o usuário clicar no botão, ativa o som e reinicia o vídeo
      if (firstVisit && showOverlay) {
        videoRef.current.muted = false;
        videoRef.current.currentTime = 0; // Reinicia o vídeo do início
        videoRef.current.play();
        setIsMuted(false);
        setFirstVisit(false);
        setShowOverlay(false);
      } else {
        // Comportamento normal para visitas subsequentes
        videoRef.current.play();
        setHasStarted(true);
        setIsEnded(false);
      }
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="w-full max-w-4xl mx-auto rounded-xl overflow-hidden shadow-2xl"
    >
      <div className="relative pb-[56.25%] h-0">
        <video
          ref={videoRef}
          src="https://cynnujihthpzbfxlfayy.supabase.co/storage/v1/object/public/storage/site_appdahorta/site-a13c38f4-d1ea-47f4-9dd6-a5ac90f99efa"
          className="absolute top-0 left-0 w-full h-full"
          preload="metadata"
          controls
          muted={isMuted}
          playsInline
          onPlay={() => {
            setHasStarted(true);
            setIsEnded(false);
          }}
          onEnded={() => setIsEnded(true)}
        />
        
        {/* Overlay para primeira visita (vídeo mudo com botão de ativar som) */}
        {showOverlay && (
          <div 
            className="absolute inset-0 cursor-pointer"
            onClick={handlePlayVideo}
          >
            {/* Overlay semi-transparente */}
            <div className="absolute inset-0 bg-black bg-opacity-40"></div>
            
            {/* Botão de play com texto */}
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <div className="w-24 h-24 rounded-full bg-white bg-opacity-90 flex items-center justify-center transition-transform duration-300 transform hover:scale-110 mb-3">
                <Play size={40} className="text-brand-green ml-1" />
              </div>
              <div className="text-white text-xl font-medium bg-black bg-opacity-50 px-4 py-2 rounded-lg">
                Clique para ouvir
              </div>
            </div>
          </div>
        )}
        
        {/* Mostra a capa apenas se o vídeo não começou ou terminou */}
        {(!hasStarted || isEnded) && (
          <div 
            className="absolute inset-0 cursor-pointer"
            onClick={handlePlayVideo}
          >
            {/* Imagem de capa */}
            <img 
              src={thumbnailUrl} 
              alt="Capa do vídeo" 
              className="absolute inset-0 w-full h-full object-cover"
            />
            
            {/* Botão de play */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-20 h-20 rounded-full bg-white bg-opacity-80 flex items-center justify-center transition-transform duration-300 transform hover:scale-110">
                <Play size={36} className="text-brand-green ml-1" />
              </div>
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
}
