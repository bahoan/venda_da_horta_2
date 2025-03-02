import { motion } from 'framer-motion';
import { useState, useRef } from 'react';
import { Play } from 'lucide-react';

export default function VideoPlayer() {
  const [hasStarted, setHasStarted] = useState(false);
  const [isEnded, setIsEnded] = useState(false);
  const videoRef = useRef(null);

  // URL da imagem de capa
  const thumbnailUrl = "https://cynnujihthpzbfxlfayy.supabase.co/storage/v1/object/public/storage/site_appdahorta/site-526de38a-78c1-4e04-a036-6a769f4c5320";

  const handlePlayVideo = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setHasStarted(true);
      setIsEnded(false);
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
          src="https://cynnujihthpzbfxlfayy.supabase.co/storage/v1/object/public/storage/site_appdahorta/site-7318841f-295b-45ed-a059-39a9b405a92b"
          className="absolute top-0 left-0 w-full h-full"
          preload="metadata"
          controls
          onPlay={() => {
            setHasStarted(true);
            setIsEnded(false);
          }}
          onEnded={() => setIsEnded(true)}
        />
        
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
