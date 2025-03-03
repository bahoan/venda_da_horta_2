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
    <section className="pt-8 pb-24 bg-white">
      <div className="container mx-auto px-4">
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
              <Heading2>
                Quem é <span className="text-brand-green">João Mariano</span>?
              </Heading2>
              
              <Paragraph>
                João Mariano é pioneiro e especialista em venda de produtos da horta e da roça pela internet no Brasil. <span className="font-semibold">Criador do Método Vendas DaHorta</span>, ele já ajudou dezenas de pessoas a alcançarem resultados expressivos, mesmo começando do zero.
              </Paragraph>

              <Paragraph>
                João desenvolveu sua metodologia com base no seu próprio negócio de delivery de hortaliças, chamado Horta & DaRoça, aliando sua experiência como agricultor, estudos em agronomia e capacitações em marketing para criar um método acessível, prático e comprovado.
              </Paragraph>

              <Paragraph>
                Ele acredita que, com as estratégias certas e o suporte adequado, qualquer pessoa pode transformar sua realidade, alcançar uma renda constante e proporcionar mais segurança e qualidade de vida para sua família, vendendo produtos pela internet de forma eficiente, profissional e com tranquilidade.
              </Paragraph>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MediaSection;
