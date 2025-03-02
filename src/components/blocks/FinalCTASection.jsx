import { motion } from 'framer-motion';
import { CTAButton, WhatsAppButton } from '../ui';

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

          <div className="w-full max-w-[400px]">
            <CTAButton variant="green" fullWidth className="mb-4" />
          </div>

          <div className="w-full max-w-[400px]">
            <WhatsAppButton fullWidth />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;
