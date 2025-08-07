import React from 'react';
import { Calendar, Clock, MapPin } from 'lucide-react';

interface Event {
  id: number;
  title: string;
  date: string;
  time: string;
  description: string;
  image: string;
  featured: boolean;
}

const Events: React.FC = () => {
  const events: Event[] = [
    {
      id: 1,
      title: "Italienische Weinverkostung",
      date: "15. März 2025",
      time: "19:00 Uhr",
      description: "Entdecken Sie die Vielfalt italienischer Weine bei unserer exklusiven Weinverkostung mit dem Sommelier Marco Rossi.",
      image: "https://images.pexels.com/photos/1407846/pexels-photo-1407846.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      featured: true
    },
    {
      id: 2,
      title: "Pizza-Kochkurs für Familien",
      date: "22. März 2025", 
      time: "14:00 Uhr",
      description: "Lernen Sie gemeinsam mit Ihren Kindern die Kunst der Pizza-Zubereitung von unserem Chefkoch Giuseppe.",
      image: "https://images.pexels.com/photos/1260968/pexels-photo-1260968.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      featured: false
    },
    {
      id: 3,
      title: "Live Musik: Italienische Serenaden",
      date: "29. März 2025",
      time: "20:30 Uhr", 
      description: "Genießen Sie einen romantischen Abend mit traditionellen italienischen Melodien von der Band 'Amore Mio'.",
      image: "https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      featured: false
    }
  ];

  return (
    <section className="section-padding bg-neutral-100">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-neutral-800 mb-4">
            Aktuelle Events
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Erleben Sie besondere Momente in der Bella Vista - von Weinverkostungen bis hin zu Live-Musik
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Featured Event */}
          {events.filter(event => event.featured).map((event) => (
            <div key={event.id} className="lg:col-span-2">
              <div className="card overflow-hidden hover:shadow-2xl transition-shadow duration-300">
                <div className="flex flex-col lg:flex-row">
                  <div className="lg:w-1/2">
                    <img 
                      src={event.image} 
                      alt={event.title}
                      className="w-full h-64 lg:h-full object-cover"
                    />
                  </div>
                  <div className="lg:w-1/2 p-8 flex flex-col justify-center">
                    <div className="flex items-center gap-2 text-accent mb-3">
                      <span className="bg-accent px-3 py-1 text-xs font-bold text-white uppercase tracking-wider">
                        Highlight
                      </span>
                    </div>
                    <h3 className="text-2xl lg:text-3xl font-serif font-bold text-neutral-800 mb-4">
                      {event.title}
                    </h3>
                    <div className="flex flex-col sm:flex-row gap-4 mb-4 text-neutral-600">
                      <div className="flex items-center gap-2">
                        <Calendar size={18} className="text-primary" />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock size={18} className="text-primary" />
                        <span>{event.time}</span>
                      </div>
                    </div>
                    <p className="text-neutral-700 mb-6 leading-relaxed">
                      {event.description}
                    </p>
                    <button className="btn-primary self-start">
                      Jetzt anmelden
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Regular Events */}
          {events.filter(event => !event.featured).map((event, index) => (
            <div key={event.id} className={`animate-slide-up`} style={{ animationDelay: `${index * 0.2}s` }}>
              <div className="card overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <img 
                  src={event.image} 
                  alt={event.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-serif font-bold text-neutral-800 mb-3">
                    {event.title}
                  </h3>
                  <div className="flex flex-col gap-2 mb-4 text-sm text-neutral-600">
                    <div className="flex items-center gap-2">
                      <Calendar size={16} className="text-primary" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock size={16} className="text-primary" />
                      <span>{event.time}</span>
                    </div>
                  </div>
                  <p className="text-neutral-700 mb-4 text-sm leading-relaxed">
                    {event.description}
                  </p>
                  <button className="btn-outline text-sm w-full">
                    Mehr erfahren
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;