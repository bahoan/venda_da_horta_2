import { motion } from 'framer-motion';
import { 
  ActionButtons,
  Heading2,
  Paragraph,
  HighlightText
} from '../ui';
import { spacingClasses } from '../../styles/utils';

export default function FinalCTASection() {
  const { elementSpacing, sectionSpacing } = spacingClasses;

  return (
    <section className={`py-8 md:py-12 bg-gray-50 ${sectionSpacing} mobile-padding`}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={`text-center ${elementSpacing}`}
        >
          <Heading2>
            Chegou a <span className="text-brand-green">sua hora</span>
          </Heading2>
          
          <Paragraph className="max-w-3xl mx-auto">
            Não perca mais tempo tentando vender seus produtos sem uma estratégia eficiente. 
            O Método Vendas DaHorta já ajudou dezenas de pessoas a transformarem seus negócios.
          </Paragraph>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <HighlightText className="mb-8">
            Você será o próximo caso de sucesso?
          </HighlightText>
          
          <ActionButtons 
            topText="Junte-se a comunidade do Vendas DaHorta"
            fullWidth 
            showOnlyMainButton={false}
            className="px-0"
          />
        </motion.div>
      </div>
    </section>
  );
}
