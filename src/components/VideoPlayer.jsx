import { motion } from 'framer-motion';

export default function VideoPlayer() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="w-full max-w-4xl mx-auto rounded-xl overflow-hidden shadow-2xl"
    >
      <div className="relative pb-[56.25%] h-0">
        <video
          src="https://cynnujihthpzbfxlfayy.supabase.co/storage/v1/object/public/storage/site_appdahorta/site-7318841f-295b-45ed-a059-39a9b405a92b"
          className="absolute top-0 left-0 w-full h-full"
          controls
          preload="metadata"
        />
      </div>
    </motion.div>
  );
}
