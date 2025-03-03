import { motion } from 'framer-motion';
import { OptimizedImage, HighlightText } from '../ui';
import { spacingClasses } from '../../styles/utils';

const images = [
  {
    url: "https://cynnujihthpzbfxlfayy.supabase.co/storage/v1/object/public/storage/site_appdahorta/site-87e134b0-0135-4aa2-8d22-c9478a69dd37",
    alt: "Homem com carro cheio de produtos",
    width: 800
  },
  {
    url: "https://cynnujihthpzbfxlfayy.supabase.co/storage/v1/object/public/storage/site_appdahorta/site-db1d3e97-6599-47d6-af3f-df3cc6310cb8",
    alt: "Interior do carro com sacolas",
    width: 800
  },
  {
    url: "https://cynnujihthpzbfxlfayy.supabase.co/storage/v1/object/public/storage/site_appdahorta/site-e0fb0904-8dc2-4a3c-a790-5e80af9755d8",
    alt: "Moto com caixas",
    width: 800
  },
  {
    url: "https://cynnujihthpzbfxlfayy.supabase.co/storage/v1/object/public/storage/site_appdahorta/site-1c1ae4b9-0718-4fda-afce-1d1081a36130",
    alt: "Criança acenando",
    width: 800
  },
  {
    url: "https://cynnujihthpzbfxlfayy.supabase.co/storage/v1/object/public/storage/site_appdahorta/site-058516fe-60c4-415e-902b-0a70e58ed5e3",
    alt: "Interior do carro com produtos organizados",
    width: 800
  },
  {
    url: "https://cynnujihthpzbfxlfayy.supabase.co/storage/v1/object/public/storage/site_appdahorta/site-c3619ef3-e793-4141-ba62-9466dec92e2a",
    alt: "Pessoa com carro de entrega",
    width: 800
  }
];

export default function Gallery() {
  const { elementSpacing } = spacingClasses;
  
  return (
    <section className="bg-white py-16">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className={`text-center ${elementSpacing}`}
        >
          <HighlightText>
            Quem aplica o método Vendas DaHorta,<br />
            <span className="text-brand-green">lota o carro e a moto de entregas toda semana</span>
          </HighlightText>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="aspect-[4/3] overflow-hidden rounded-xl"
            >
              <OptimizedImage
                src={image.url}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                width={image.width}
                quality={85}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
