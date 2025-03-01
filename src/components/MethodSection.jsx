import { motion } from 'framer-motion';

const MethodSection = () => {
  return (
    <section className="w-full py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Method Description */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            <span>Um plano </span>
            <span className="text-green-500">detalhado</span>
            <span> para você </span>
            <span className="text-green-500">começar a vender</span>
            <span> hortaliças e produtos da roça pela internet </span>
            <span className="text-green-500">e aumentar suas vendas semana após semana</span>
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            O Método Vendas DaHorta é dividido em 2 etapas:
          </p>
          <h3 className="text-2xl md:text-3xl font-bold">
            Etapa 1: Imã de Clientes da Horta
          </h3>
        </motion.div>

        {/* Method Image 1 */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto mb-8"
        >
          <img 
            src="https://cynnujihthpzbfxlfayy.supabase.co/storage/v1/object/public/storage/site_appdahorta/site-896a65bb-4b6f-4edf-85e5-035708416496" 
            alt="Método Vendas DaHorta - Imã de Clientes"
            className="w-full h-auto rounded-lg"
          />
        </motion.div>

        {/* Method 1 Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <p className="text-lg text-gray-700">
            Aqui você aprender a atrair novos clientes e potenciais clientes para seu WhatsApp todos os dias. 
            Nessa etapa você já faz as primeiras vendas e aumenta sua base de contatos no WhatsApp.
          </p>
        </motion.div>

        {/* Method 2 Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h3 className="text-2xl md:text-3xl font-bold">
            Etapa 2: Ciclo de Colheita de Vendas
          </h3>
        </motion.div>

        {/* Method Image 2 */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto mb-8"
        >
          <img 
            src="https://cynnujihthpzbfxlfayy.supabase.co/storage/v1/object/public/storage/site_appdahorta/site-2cb43d53-e14a-46a4-89d9-65debcd3fc91" 
            alt="Método Vendas DaHorta - Ciclo de Colheita de Vendas"
            className="w-full h-auto rounded-lg"
          />
        </motion.div>

        {/* Method 2 Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <p className="text-lg text-gray-700 mb-6">
            Nessa etapa você automatiza seu atendimento, cria uma rotina de produção e envio de ofertas 
            e cardápio para sua base de contatos.
          </p>
          <p className="text-lg text-gray-700 mb-6">
            Dessa forma você tem novos clientes entrando em contato todos os dias e novas vendas acontecendo 
            com os contatos que entraram no seu WhatsApp mas não compraram na hora, além de ter a recompra 
            de quem fidelizar.
          </p>
          <p className="text-lg text-gray-700">
            Isso faz suas vendas aumentarem a cada semana, criando um efeito de bola de neve de vendas.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default MethodSection;
