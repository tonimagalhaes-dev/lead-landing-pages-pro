import { Link } from 'react-router-dom';
import { MapPin, Instagram, MessageCircle, Mail } from 'lucide-react';
import { createWhatsAppUrl } from '@/lib/constants';

const Footer = () => {
  const handleWhatsAppClick = () => {
    window.open(createWhatsAppUrl('Olá! Gostaria de agendar uma avaliação.'), '_blank');
  };

  const handleInstagramClick = () => {
    window.open('https://instagram.com/drakatia_amaral', '_blank');
  };

  const handleEmailClick = () => {
    window.open('mailto:contato@drakatiaamaral.com.br', '_blank');
  };

  return (
    <footer className="bg-slate-50 border-t border-border mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo e Descrição */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <img
              src="/lovable-uploads/Logo.png"
              alt="Logo Dra. Katia Amaral"
              className="w-12 h-12 object-contain rounded-full bg-white"
              />
              <div>
              <h2 className="font-playfair font-semibold text-lg">Dra. Katia Amaral</h2>
              <p className="text-xs text-muted-foreground">Saúde e Estética Avançada</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              Procedimentos estéticos personalizados, realizados por enfermeira especializada 
              e focada no seu bem-estar.
            </p>
          </div>

          {/* Menu Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Menu</h3>
            <nav className="space-y-2">
              <Link to="/" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Início
              </Link>
              <Link to="/otomodelacao" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Otomodelação
              </Link>
              <Link to="/harmonizacao-facial" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Harmonização Facial
              </Link>
              <Link to="/preenchimento-labial" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Preenchimento Labial
              </Link>
              <Link to="/harmonizacao-glutea" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Harmonização Glútea
              </Link>
              <Link to="/bioestimulador-colageno" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Bioestimulador de Colágeno
              </Link>
              <Link to="/skinbooster" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Skinbooster
              </Link>
              <Link to="/ozonioterapia" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Ozonioterapia
              </Link>
              <Link to="/micropigmentacao" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Micropigmentação
              </Link>
              <Link to="/jato-de-plasma" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Jato de Plasma - Eletrocautério
              </Link>
              <Link to="/empetiers-mesoterapia" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Empetiers/Mesoterapia
              </Link>
              <Link to="/escleroterapia" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Escleroterapia
              </Link>
              <Link to="/terapia-capilar" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Terapia Capilar
              </Link>
              <Link to="/sobre" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Sobre
              </Link>
              <Link to="/contato" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Contato
              </Link>
            </nav>
          </div>

          {/* Contato */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Contato</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 text-primary" />
                <span>São Paulo - SP</span>
              </div>
              
              <button 
                onClick={handleWhatsAppClick}
                className="flex items-center space-x-3 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-green-500" />
                <span>WhatsApp</span>
              </button>
              
              <button 
                onClick={handleInstagramClick}
                className="flex items-center space-x-3 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <Instagram className="w-4 h-4 text-pink-500" />
                <span>@drakatia_amaral</span>
              </button>
              
              <button 
                onClick={handleEmailClick}
                className="flex items-center space-x-3 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="w-4 h-4 text-primary" />
                <span>contato@drakatiaamaral.com.br</span>
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} KedemTech. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
