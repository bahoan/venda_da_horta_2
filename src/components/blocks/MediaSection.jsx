import { motion } from 'framer-motion';
import { Heading2, Heading3, Paragraph, HighlightText, SmallText } from '../ui/typography/Typography';
import { spacingClasses, textClasses } from '../../styles/utils';

const MediaSection = () => {
  const { elementSpacing, sectionSpacing } = spacingClasses;
  const images = [
    {
      url: "https://cynnujihthpzbfxlfayy.supabase.co/storage/v1/object/public/storage/site_appdahorta/site-94e22ec2-f1b7-49a5-99e6-b00949811d48",
      alt: "João Mariano recebendo prêmio"
    },
    {
      url: "https://cynnujihthpzbfxlfayy.supabase.co/storage/v1/object/public/storage/site_appdahorta/site-d8e9120b-9bac-4fce-982c-eaf90e2e8f11",
      alt: "João Mariano em entrevista"
    },
    {
      url: "https://cynnujihthpzbfxlfayy.supabase.co/storage/v1/object/public/storage/site_appdahorta/site-df7ea9c1-fc45-477f-9e5a-6a38eae6d757",
      alt: "João Mariano em reportagem sobre hortas comunitárias"
    },
    {
      url: "https://cynnujihthpzbfxlfayy.supabase.co/storage/v1/object/public/storage/site_appdahorta/site-1571008d-0e25-4f08-8185-1c29f396ae39",
      alt: "João Mariano em entrevista sobre agricultura"
    }
  ];

  return (
    <section className="w-full py-4 bg-white mobile-padding">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={`text-center ${elementSpacing}`}
        >
          <Heading2>
            João Mariano <span className="text-brand-green">na mídia</span>
          </Heading2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="rounded-2xl overflow-hidden"
            >
              <div className="relative aspect-[4/3]">
                <img
                  src={image.url}
                  alt={image.alt}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            </motion.div>
          ))}
        </div>

        <div className="max-w-5xl mx-auto mt-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <Heading2>
              Quem é <span className="text-brand-green">João Mariano</span>?
            </Heading2>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <img 
                src="https://cynnujihthpzbfxlfayy.supabase.co/storage/v1/object/public/storage/site_appdahorta/site-4e5c0861-567a-4d6e-bc65-c0a03d49bf65"
                alt="João Mariano na horta"
                className="rounded-full w-full max-w-md mx-auto"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className={`space-y-4 ${elementSpacing}`}
            >
              <Paragraph>
              Um caipira, criador do Método Vendas DaHorta e sócio do AppDaHorta, João largou a faculdade de Agronomia mesmo depois de ganhar prêmio estadual de ciência e tecnologia — tudo pra vender alface e transformar a forma como agricultores vendem seus produtos.
              </Paragraph>

              <Paragraph>
              Só entre janeiro e março de 2025, ajudou usuários do AppDaHorta e alunos do Método Vendas DaHorta a faturarem mais de R$2 milhões, vendendo direto para o cliente final.
              </Paragraph>

              <Paragraph>
              Com seu trabalho, tem fortalecido a renda de diversas famílias e levado alimentos da agricultura familiar para milhares de pessoas nas cidades.
              </Paragraph>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MediaSection;
