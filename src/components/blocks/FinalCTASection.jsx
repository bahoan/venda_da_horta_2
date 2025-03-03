import { motion } from 'framer-motion';
import { ActionButtons } from '../ui';

const FinalCTASection = () => {
  return (
    <section className="w-full py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <ActionButtons 
            fullWidth 
            showOnlyMainButton={false}
            topText="Junte-se a comunidade do Vendas DaHorta"
          />
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;
