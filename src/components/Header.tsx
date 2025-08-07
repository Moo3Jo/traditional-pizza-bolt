import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Utensils } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationItems = [
    { name: 'Startseite', path: '/', showOnHome: false },
    { name: 'Getränkekarte', path: '/getraenkekarte' },
    { name: 'Öffnungszeiten', path: '/oeffnungszeiten' },
    { name: 'Reservieren', path: '/reservieren' },
  ];

  const isHomePage = location.pathname === '/';

  const handleMenuItemClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white shadow-lg py-2' 
        : 'bg-white/95 backdrop-blur-sm py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center space-x-3 group"
            onClick={handleMenuItemClick}
          >
            <div className="w-10 h-10 bg-primary rounded-none flex items-center justify-center group-hover:bg-primary-dark transition-colors duration-300">
              <Utensils className="w-6 h-6 text-white" />
            </div>
            <div className="hidden sm:block">
              <h1 className={`font-serif font-bold text-primary transition-all duration-300 ${
                isScrolled ? 'text-lg' : 'text-xl'
              }`}>
                Pizzeria Bella Vista
              </h1>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => {
              if (item.showOnHome === false && isHomePage) return null;
              
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`font-medium transition-colors duration-300 hover:text-primary ${
                    location.pathname === item.path 
                      ? 'text-primary border-b-2 border-primary' 
                      : 'text-neutral-700'
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-none text-neutral-700 hover:text-primary transition-colors duration-300"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white border-t border-neutral-200 shadow-lg">
            <nav className="px-4 py-4 space-y-4">
              {navigationItems.map((item) => {
                if (item.showOnHome === false && isHomePage) return null;
                
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={handleMenuItemClick}
                    className={`block py-2 font-medium transition-colors duration-300 ${
                      location.pathname === item.path 
                        ? 'text-primary' 
                        : 'text-neutral-700 hover:text-primary'
                    }`}
                  >
                    {item.name}
                  </Link>
                );
              })}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;