const Footer = () => {
  return (
    <footer className="w-full py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-6">
          {/* Logo */}
          <img
            src="https://cynnujihthpzbfxlfayy.supabase.co/storage/v1/object/public/storage/site_appdahorta/site-b88612c0-42e5-4841-819b-ca25a3b892c4"
            alt="Logo Vendas DaHorta"
            className="h-12 object-contain"
          />

          {/* Links */}
          <div className="flex flex-col items-center gap-2">
            <h3 className="text-gray-700 font-medium mb-1">Políticas</h3>
            <div className="flex flex-col items-center gap-1">
              <a href="#" className="text-gray-500 hover:text-gray-700 transition-colors">
                Política de Privacidade
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-700 transition-colors">
                Política de Reembolso
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-700 transition-colors">
                Termos de uso
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
