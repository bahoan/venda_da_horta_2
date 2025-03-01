import { motion } from 'framer-motion';

const FinalCTASection = () => {
  return (
    <section className="w-full py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto flex flex-col items-center gap-6">
          {/* Balão de diálogo */}
          <div className="bg-white rounded-[32px] p-8 relative max-w-[800px] mx-auto shadow-lg mb-4">
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-8 h-8 bg-white rotate-45 shadow-lg"></div>
            <p className="text-[28px] leading-[34px] text-center relative z-10">
              "Junte-se a comunidade do Vendas DaHorta"
            </p>
          </div>

          <button className="bg-[#07AA1D] text-white font-bold py-4 px-8 rounded-full text-xl hover:bg-[#068816] transition-colors w-full max-w-[400px]">
            Entrar no Vendas DaHorta
          </button>

          <button className="flex items-center justify-center gap-2 bg-gray-100 text-gray-700 py-3 px-6 rounded-full hover:bg-gray-200 transition-colors w-full max-w-[400px]">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="w-6 h-6">
              <path fill="currentColor" d="M19.05 4.91A9.816 9.816 0 0 0 12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01zm-7.01 15.24c-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.264 8.264 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24 2.2 0 4.27.86 5.82 2.42a8.183 8.183 0 0 1 2.41 5.83c.02 4.54-3.68 8.23-8.22 8.23zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.12-.17.25-.64.81-.78.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43s.17-.25.25-.41c.08-.17.04-.31-.02-.43s-.56-1.34-.76-1.84c-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31-.22.25-.86.85-.86 2.07 0 1.22.89 2.4 1.01 2.56.12.17 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.67-1.18.21-.58.21-1.07.14-1.18s-.22-.16-.47-.28z"/>
            </svg>
            <span>Tirar dúvidas via WhatsApp</span>
          </button>

          <p className="text-gray-500 text-sm text-center">
            Normalmente respondemos em 2 minutos
          </p>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;
