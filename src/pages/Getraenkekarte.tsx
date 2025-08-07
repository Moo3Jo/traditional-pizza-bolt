import React from 'react';
import { Download, Wine, Coffee, Droplets, Grape } from 'lucide-react';

interface DrinkCategory {
  id: number;
  name: string;
  icon: React.ReactNode;
  items: DrinkItem[];
}

interface DrinkItem {
  id: number;
  name: string;
  description?: string;
  price: string;
  volume?: string;
  alcohol?: string;
}

const Getraenkekarte: React.FC = () => {
  const drinkCategories: DrinkCategory[] = [
    {
      id: 1,
      name: "Italienische Weine",
      icon: <Wine className="w-6 h-6" />,
      items: [
        { id: 1, name: "Chianti Classico DOCG", description: "Toskana, trocken", price: "6,50", volume: "0,2l", alcohol: "13%" },
        { id: 2, name: "Pinot Grigio", description: "Friaul, frisch & fruchtig", price: "5,80", volume: "0,2l", alcohol: "12%" },
        { id: 3, name: "Barolo DOCG", description: "Piemont, kraftvoll", price: "12,90", volume: "0,2l", alcohol: "14%" },
        { id: 4, name: "Prosecco di Valdobbiadene", description: "Venetien, prickelnd", price: "7,20", volume: "0,1l", alcohol: "11%" },
      ]
    },
    {
      id: 2,
      name: "Alkoholfreie Getränke",
      icon: <Droplets className="w-6 h-6" />,
      items: [
        { id: 5, name: "Mineralwasser", description: "Still oder sprudelnd", price: "2,50", volume: "0,25l" },
        { id: 6, name: "Limonata della Casa", description: "Hausgemachte Zitronenlimonade", price: "3,80", volume: "0,3l" },
        { id: 7, name: "Aranciata Italiana", description: "Italienische Orangenlimonade", price: "3,20", volume: "0,33l" },
        { id: 8, name: "Coca Cola", description: "Original oder Zero", price: "3,50", volume: "0,33l" },
      ]
    },
    {
      id: 3,
      name: "Heißgetränke",
      icon: <Coffee className="w-6 h-6" />,
      items: [
        { id: 9, name: "Espresso", description: "Italienische Röstung", price: "2,20" },
        { id: 10, name: "Cappuccino", description: "Mit feinem Milchschaum", price: "2,80" },
        { id: 11, name: "Caffè Latte", description: "Mild und cremig", price: "3,20" },
        { id: 12, name: "Grappa", description: "Digestivo nach italienischer Art", price: "4,50", volume: "2cl", alcohol: "40%" },
      ]
    },
    {
      id: 4,
      name: "Aperitivi",
      icon: <Grape className="w-6 h-6" />,
      items: [
        { id: 13, name: "Aperol Spritz", description: "Mit Prosecco und Soda", price: "7,80", volume: "0,25l", alcohol: "8%" },
        { id: 14, name: "Negroni", description: "Gin, Campari, Vermouth", price: "8,50", volume: "0,1l", alcohol: "24%" },
        { id: 15, name: "Hugo", description: "Prosecco, Holunder, Minze", price: "6,90", volume: "0,25l", alcohol: "7%" },
        { id: 16, name: "Limoncello", description: "Hausgemacht", price: "4,20", volume: "4cl", alcohol: "32%" },
      ]
    }
  ];

  return (
    <main className="min-h-screen bg-neutral-50 pt-24 pb-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl font-serif font-bold text-neutral-800 mb-4">
            Getränkekarte
          </h1>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto mb-8">
            Entdecken Sie unsere Auswahl an italienischen Weinen, erfrischenden Getränken und authentischen Aperitivi
          </p>
          
          {/* Download Button */}
          <a 
            href="/speisekarte.pdf" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center gap-2"
          >
            <Download size={20} />
            Vollständige Speisekarte (PDF)
          </a>
        </div>

        {/* Drink Categories */}
        <div className="space-y-12">
          {drinkCategories.map((category, categoryIndex) => (
            <div key={category.id} className={`animate-slide-up`} style={{ animationDelay: `${categoryIndex * 0.1}s` }}>
              <div className="card">
                {/* Category Header */}
                <div className="flex items-center gap-4 mb-8 pb-4 border-b border-neutral-200">
                  <div className="w-12 h-12 bg-primary rounded-none flex items-center justify-center text-white">
                    {category.icon}
                  </div>
                  <h2 className="text-2xl font-serif font-bold text-neutral-800">
                    {category.name}
                  </h2>
                </div>

                {/* Drinks Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {category.items.map((item) => (
                    <div key={item.id} className="flex justify-between items-start gap-4 py-4 border-b border-neutral-100 last:border-b-0">
                      <div className="flex-1">
                        <h3 className="font-semibold text-neutral-800 text-lg mb-1">
                          {item.name}
                        </h3>
                        {item.description && (
                          <p className="text-neutral-600 text-sm mb-2">
                            {item.description}
                          </p>
                        )}
                        <div className="flex flex-wrap gap-3 text-xs text-neutral-500">
                          {item.volume && (
                            <span className="bg-neutral-100 px-2 py-1 rounded-none">
                              {item.volume}
                            </span>
                          )}
                          {item.alcohol && (
                            <span className="bg-accent/10 text-accent px-2 py-1 rounded-none">
                              {item.alcohol}
                            </span>
                          )}
                        </div>
                      </div>
                      <div className="flex-shrink-0">
                        <span className="text-xl font-bold text-primary">
                          {item.price}€
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Note */}
        <div className="mt-12 text-center">
          <div className="card max-w-2xl mx-auto">
            <h3 className="text-lg font-serif font-bold text-neutral-800 mb-3">
              Hinweis
            </h3>
            <p className="text-sm text-neutral-600 leading-relaxed">
              Alle Preise verstehen sich inkl. gesetzl. MwSt. Änderungen vorbehalten. 
              Weitere Getränke und saisonale Spezialitäten fragen Sie gerne unser Service-Team.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Getraenkekarte;