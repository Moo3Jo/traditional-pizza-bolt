import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Phone } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax Effect */}
      <div 
        className="absolute inset-0 parallax"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/1566837/pexels-photo-1566837.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1280&fit=crop)'
        }}
      >
        <div className="absolute inset-0 bg-overlay"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="animate-fade-in">
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-serif font-bold mb-6 text-shadow">
            Pizzeria Bella Vista
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl mb-4 font-light text-shadow max-w-2xl mx-auto leading-relaxed">
            Benvenuti! Erleben Sie authentische italienische Küche in gemütlicher Atmosphäre
          </p>
          <p className="text-base sm:text-lg mb-8 text-accent font-medium text-shadow">
            Frische Zutaten • Traditionelle Rezepte • Familiäre Gastfreundschaft
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up">
            <Link 
              to="/getraenkekarte" 
              className="btn-primary flex items-center gap-2 w-full sm:w-auto justify-center"
            >
              Getränkekarte ansehen
              <ArrowRight size={20} />
            </Link>
            <Link 
              to="/reservieren" 
              className="btn-outline flex items-center gap-2 w-full sm:w-auto justify-center bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white hover:text-primary"
            >
              <Phone size={20} />
              Jetzt reservieren
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce-slow">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;