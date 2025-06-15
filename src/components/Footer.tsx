
import { Github } from 'lucide-react';

const Footer = () => (
  <footer className="bg-yros-blue border-t border-yros-grey">
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <span className="text-xl font-bold bg-gradient-to-r from-yros-light-grey to-yros-white text-transparent bg-clip-text">YROS.AI</span>
        </div>
        <div className="flex space-x-6 text-yros-light-grey">
          <a href="#" className="hover:text-yros-white transition-colors">Política de Privacidade</a>
          <a href="#" className="hover:text-yros-white transition-colors">API Docs</a>
          <a href="#" className="hover:text-yros-white transition-colors">Login</a>
          <a href="#" className="hover:text-yros-white transition-colors">Contato</a>
        </div>
        <div className="mt-4 md:mt-0">
          <a href="#" className="text-yros-light-grey hover:text-yros-white transition-colors">
            <Github className="w-6 h-6" />
          </a>
        </div>
      </div>
      <div className="text-center text-yros-grey mt-8 pt-8 border-t border-yros-grey">
        © {new Date().getFullYear()} YROS.AI. Todos os direitos reservados.
      </div>
    </div>
  </footer>
);

export default Footer;
