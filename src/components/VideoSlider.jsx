import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { motion } from 'framer-motion';
import LazyVideo from './LazyVideo';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const videos = [
  {
    id: 'JuBYKiyGJ5E',
    title: '"agora podemos sonhar: dobramos nossas vendas e sabemos o caminho para crescer toda semana"',
    description: 'Antes do Método Vendas DaHorta, nossas vendas eram desorganizadas e sem constância. Um dia vendíamos bem, no outro nada. R$2.000 em uma semana era um milagre. Depois do método, tudo mudou: já fizemos mais de R$3.000 em um único dia e dobramos nosso faturamento semanal para mais de R$4.000. Mas o mais importante é que agora podemos sonhar, planejar o futuro e ter a certeza de que estamos no caminho certo para crescer semana após semana.'
  },
  {
    id: 'Wf59tJIWjTg',
    title: '"Saí de R$3.000 para quase R$12.000 em um mês com o mesmo produto, só ajustando e aplicando o método certo!"',
    description: 'Eu já fui produtor com horta e vendia bem, mas quando fiquei só com o delivery, meu faturamento caiu para R$3.000, R$4.000 por mês. Eu achava que vender pela internet não era pra mim e que estava perdendo tempo. Até que um amigo me indicou o João e o Método Vendas DaHorta. Foi aí que tudo mudou: apliquei as técnicas e ajustes do método e, em um mês, passei a faturar mais R$11.000 com o mesmo produto. Hoje, sei que o segredo é usar o método certo para alcançar resultados reais!'
  },
  {
    id: '31FETD0WmEo',
    title: '"em um mês quadruplicamos nossas vendas de assinaturas"',
    description: 'Trabalho com o modelo CSA (Consumidor que Sustenta Agricultura), oferecendo assinaturas mensais de cestas de alimentos. Antes do método, dependia do boca a boca e de postagens no WhatsApp e Instagram, mas nada funcionava direito. Eu ficava perdido, sem saber como atrair mais clientes. Foi aí que comecei a aplicar o Método Vendas DaHorta, e tudo mudou. Em um mês, passei de 3 assinaturas para 12. Quadruplicar minhas vendas parecia impossível antes, mas agora sei que com o método certo, o crescimento é real e rápido!'
  },
  {
    id: '_QZRQr_9tkw',
    title: '"Investi R$32 e vendi R$1.500 no primeiro fim de semana aplicando o Método Vendas DaHorta!"',
    description: 'Minha maior dificuldade era atrair pessoas. Antes, dependia de conhecidos e ainda tinha que comprar dos fornecedores tudo antes de vender. isso me deixava muito ansioso, porque chegava o dia da entrega e eu fica alí olhando os produtos parados e sem saída. Mas depois de aplicar o Método Vendas DaHorta, tudo mudou. Investi apenas R$32 em anúncios e, no primeiro fim de semana, mais de 200 pessoas pediram meu cardápio pelo WhatsApp. Fechei mais de 30 pedidos e vendi mais de R$1.500! Nunca tinha visto algo assim antes. Agora sei que atrair clientes e vender pode ser mais simples do que eu imaginava.'
  },
  {
    id: '-kEB-W5yiNY',
    title: '"Mudei do apartamento para o sítio depois que aprendi a vender com o Método Vendas DaHorta"',
    description: 'Nossa vida mudou completamente com o Método Vendas DaHorta. Eu morava em apartamento e decidi recomeçar no sítio, produzindo e vendendo alimentos. O método me ensinou exatamente o que faltava: vender pela internet. Aprendi a usar anúncios e redes sociais para atrair clientes e vender o que produzimos.\n\nProduzir o que consumimos, entregar qualidade e viver no campo transformou nossa vida. Se não fosse pelo curso, talvez eu nunca tivesse tido coragem de dar esse passo e mudar minha história.'
  },
  {
    id: 'aGJMvVW_6f8',
    title: '"Com o método eu loto o carro de pedidos toda semana"',
    description: 'Com o Método Vendas DaHorta, consigo lotar meu carro de pedidos de orgânicos toda semana, entregando direto para o consumidor final. Aplicando o método sozinho, transformei meu negócio em algo lucrativo e organizado.'
  }
];

const VideoSlider = () => {
  return (
    <section className="bg-gray-900 py-16">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-xl md:text-2xl font-bold text-white mb-8">
            Eu duvido você ver essas histórias e não querer o mesmo para{' '}
            <span className="text-brand-green">
              suas vendas e sua vida
            </span>
          </h2>
        </motion.div>

        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={20}
          slidesPerView={1.2}
          centeredSlides={true}
          loop={true}
          navigation
          pagination={{ clickable: true }}
          breakpoints={{
            640: {
              slidesPerView: 1.5
            },
            768: {
              slidesPerView: 2
            },
            1024: {
              slidesPerView: 2.5
            }
          }}
          className="!pb-12"
        >
          {videos.map((video) => (
            <SwiperSlide key={video.id}>
              <div className="flex flex-col gap-4">
                <div className="aspect-video rounded-xl overflow-hidden bg-black">
                  <LazyVideo videoId={video.id} />
                </div>
                <div className="text-white p-4">
                  <h3 className="text-lg font-semibold text-brand-green mb-2">
                    {video.title}
                  </h3>
                  <p className="text-sm text-gray-300 line-clamp-4 hover:line-clamp-none transition-all duration-300">
                    {video.description}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Quote and CTA Section */}
      <div className="container mx-auto px-4 pb-8">
        {/* Quote */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 relative max-w-3xl mx-auto"
        >
          <div className="bg-gray-50 p-8 rounded-2xl shadow-sm relative">
            {/* Triângulo do balão */}
            <div className="absolute w-0 h-0 border-l-[20px] border-l-transparent border-r-[20px] border-r-transparent border-t-[20px] border-gray-50 -bottom-5 left-1/2 transform -translate-x-1/2"></div>
            
            <div className="flex items-start mb-6">
              <span className="text-green-500 text-6xl font-serif leading-none mr-4">"</span>
              <blockquote className="text-gray-700 text-2xl font-light pt-2">
                Eles poderiam nem estar mais trabalhando com horta se não tivessem clicado no botão abaixo
              </blockquote>
              <span className="text-green-500 text-6xl font-serif leading-none self-end ml-4">"</span>
            </div>
          </div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col gap-4 max-w-xl mx-auto mb-8"
        >
          <a 
            href="#" 
            className="bg-green-500 hover:bg-green-600 text-white text-center py-4 px-8 rounded-full shadow-lg transform hover:scale-105 transition-all duration-200 text-lg font-semibold"
          >
            Entrar no Vendas DaHorta
          </a>
          <a 
            href="https://wa.me/seu_numero" 
            className="bg-gray-200 hover:bg-gray-300 text-gray-700 text-center py-4 px-8 rounded-full shadow-lg transform hover:scale-105 transition-all duration-200 flex items-center justify-center gap-2"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 2C6.48 2 2 6.48 2 12C2 13.9 2.5 15.68 3.35 17.22L2.05 22L6.95 20.73C8.42 21.5 10.16 21.97 12 21.97C17.52 21.97 22 17.49 22 11.97C22 6.45 17.52 2 12 2ZM16.53 15.5C16.37 15.93 15.71 16.29 15.19 16.39C14.67 16.5 14.02 16.54 13.33 16.35C12.91 16.23 12.36 16.07 11.61 15.74C9.09 14.63 7.47 12.05 7.32 11.84C7.17 11.63 6.13 10.19 6.13 8.68C6.13 7.17 6.87 6.47 7.11 6.2C7.35 5.93 7.63 5.86 7.81 5.86C7.99 5.86 8.17 5.86 8.33 5.87C8.5 5.88 8.73 5.79 8.95 6.31C9.18 6.85 9.71 8.36 9.79 8.53C9.87 8.7 9.92 8.89 9.82 9.11C9.72 9.33 9.67 9.46 9.5 9.66C9.33 9.86 9.15 10.1 9 10.24C8.83 10.4 8.65 10.57 8.85 10.91C9.05 11.25 9.71 12.32 10.68 13.18C11.94 14.31 13 14.69 13.38 14.85C13.76 15.01 13.95 14.98 14.15 14.75C14.35 14.52 14.96 13.82 15.19 13.44C15.42 13.06 15.65 13.13 15.97 13.24C16.29 13.35 17.77 14.07 18.12 14.24C18.47 14.41 18.71 14.5 18.79 14.64C18.87 14.78 18.87 15.35 18.53 15.5H16.53Z"
              />
            </svg>
            Tirar dúvidas via WhatsApp
          </a>
        </motion.div>

        {/* Response Time */}
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center text-gray-500"
        >
          Normalmente respondemos em menos de 2 minutos
        </motion.p>
      </div>
    </section>
  );
};

export default VideoSlider;
