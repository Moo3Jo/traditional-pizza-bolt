import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, Utensils, Instagram, Facebook } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-neutral-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Restaurant Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-primary rounded-none flex items-center justify-center">
                <Utensils className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-lg font-serif font-bold">Pizzeria Bella Vista</h3>
            </div>
            <p className="text-neutral-300 text-sm leading-relaxed">
              Authentische italienische Küche seit 1985. Genießen Sie traditionelle Rezepte in familiärer Atmosphäre.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-neutral-400 hover:text-accent transition-colors duration-300">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-neutral-400 hover:text-accent transition-colors duration-300">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Kontakt */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold mb-4">Kontakt</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3">
                <MapPin size={16} className="text-primary mt-1 flex-shrink-0" />
                <div>
                  <p>Musterstraße 123</p>
                  <p>12345 Musterstadt</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={16} className="text-primary flex-shrink-0" />
                <a href="tel:+4912345678" className="hover:text-accent transition-colors duration-300">
                  +49 (0) 123 456 78
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={16} className="text-primary flex-shrink-0" />
                <a href="mailto:info@bellavista.de" className="hover:text-accent transition-colors duration-300">
                  info@bellavista.de
                </a>
              </div>
            </div>
          </div>

          {/* Öffnungszeiten */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold mb-4">Öffnungszeiten</h4>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-neutral-300">Mo - Do:</span>
                <span>11:30 - 22:00</span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-300">Fr - Sa:</span>
                <span>11:30 - 23:00</span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-300">So:</span>
                <span>12:00 - 21:00</span>
              </div>
              <div className="flex items-center gap-2 mt-3 text-accent">
                <Clock size={14} />
                <span className="text-xs">Küche bis 30 Min vor Schluss</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold mb-4">Service</h4>
            <div className="space-y-2 text-sm">
              <Link to="/reservieren" className="block hover:text-accent transition-colors duration-300">
                Tisch reservieren
              </Link>
              <a 
                href="/speisekarte.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block hover:text-accent transition-colors duration-300"
              >
                Speisekarte (PDF)
              </a>
              <Link to="/getraenkekarte" className="block hover:text-accent transition-colors duration-300">
                Getränkekarte
              </Link>
              <a href="tel:+4912345678" className="block hover:text-accent transition-colors duration-300">
                Lieferservice
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Border */}
        <div className="border-t border-neutral-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-neutral-400">
            <p>&copy; 2025 Pizzeria Bella Vista. Alle Rechte vorbehalten.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/impressum" className="hover:text-accent transition-colors duration-300">
                Impressum
              </Link>
              <Link to="/datenschutz" className="hover:text-accent transition-colors duration-300">
                Datenschutz
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;