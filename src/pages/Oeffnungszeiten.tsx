import React from 'react';
import { Clock, Phone, MapPin, AlertCircle, Calendar, Car } from 'lucide-react';

const Oeffnungszeiten: React.FC = () => {
  const openingHours = [
    { day: 'Montag', hours: '11:30 - 22:00', kitchen: '11:30 - 21:30' },
    { day: 'Dienstag', hours: '11:30 - 22:00', kitchen: '11:30 - 21:30' },
    { day: 'Mittwoch', hours: '11:30 - 22:00', kitchen: '11:30 - 21:30' },
    { day: 'Donnerstag', hours: '11:30 - 22:00', kitchen: '11:30 - 21:30' },
    { day: 'Freitag', hours: '11:30 - 23:00', kitchen: '11:30 - 22:30' },
    { day: 'Samstag', hours: '11:30 - 23:00', kitchen: '11:30 - 22:30' },
    { day: 'Sonntag', hours: '12:00 - 21:00', kitchen: '12:00 - 20:30' },
  ];

  const holidays = [
    { date: '24. Dezember', status: 'Geschlossen', note: 'Heiligabend' },
    { date: '25. Dezember', status: '14:00 - 20:00', note: '1. Weihnachtstag' },
    { date: '31. Dezember', status: '11:30 - 01:00', note: 'Silvester (Reservierung empfohlen)' },
    { date: '1. Januar', status: '15:00 - 22:00', note: 'Neujahr' },
  ];

  const getCurrentDay = () => {
    const days = ['Sonntag', 'Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag'];
    return days[new Date().getDay()];
  };

  const currentDay = getCurrentDay();

  return (
    <main className="min-h-screen bg-neutral-50 pt-24 pb-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl font-serif font-bold text-neutral-800 mb-4">
            Öffnungszeiten
          </h1>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Wir freuen uns auf Ihren Besuch! Hier finden Sie unsere aktuellen Öffnungszeiten und wichtigen Informationen.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Regular Opening Hours */}
          <div className="lg:col-span-2">
            <div className="card">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-primary rounded-none flex items-center justify-center text-white">
                  <Clock className="w-6 h-6" />
                </div>
                <h2 className="text-2xl font-serif font-bold text-neutral-800">
                  Reguläre Öffnungszeiten
                </h2>
              </div>

              <div className="space-y-4">
                {openingHours.map((schedule) => (
                  <div 
                    key={schedule.day} 
                    className={`flex justify-between items-center py-4 px-4 rounded-none transition-colors duration-300 ${
                      schedule.day === currentDay 
                        ? 'bg-primary/10 border-l-4 border-primary' 
                        : 'bg-neutral-50'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className={`font-semibold ${
                        schedule.day === currentDay ? 'text-primary' : 'text-neutral-800'
                      }`}>
                        {schedule.day}
                      </span>
                      {schedule.day === currentDay && (
                        <span className="bg-primary text-white text-xs px-2 py-1 rounded-none font-bold">
                          HEUTE
                        </span>
                      )}
                    </div>
                    <div className="text-right">
                      <div className="font-semibold text-neutral-800">
                        {schedule.hours}
                      </div>
                      <div className="text-sm text-neutral-600">
                        Küche: {schedule.kitchen}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 p-4 bg-accent/10 rounded-none border-l-4 border-accent">
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-neutral-800 mb-1">Wichtiger Hinweis</p>
                    <p className="text-sm text-neutral-700">
                      Die Küche schließt 30 Minuten vor dem Restaurant. 
                      Reservierungen werden empfohlen, besonders an Wochenenden.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Holiday Hours */}
            <div className="card mt-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-secondary rounded-none flex items-center justify-center text-white">
                  <Calendar className="w-6 h-6" />
                </div>
                <h2 className="text-2xl font-serif font-bold text-neutral-800">
                  Feiertage & Sonderzeiten
                </h2>
              </div>

              <div className="space-y-4">
                {holidays.map((holiday, index) => (
                  <div key={index} className="flex justify-between items-center py-3 px-4 bg-neutral-50 rounded-none">
                    <div>
                      <div className="font-semibold text-neutral-800">
                        {holiday.date}
                      </div>
                      <div className="text-sm text-neutral-600">
                        {holiday.note}
                      </div>
                    </div>
                    <div className={`font-semibold ${
                      holiday.status === 'Geschlossen' ? 'text-error' : 'text-success'
                    }`}>
                      {holiday.status}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Contact & Location Info */}
          <div className="space-y-8">
            {/* Contact Card */}
            <div className="card">
              <h3 className="text-xl font-serif font-bold text-neutral-800 mb-6">
                Kontakt & Reservierung
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-neutral-800">Telefon</p>
                    <a 
                      href="tel:+4912345678" 
                      className="text-primary hover:text-primary-dark transition-colors duration-300"
                    >
                      +49 (0) 123 456 78
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-neutral-800">Adresse</p>
                    <p className="text-neutral-600 text-sm">
                      Musterstraße 123<br />
                      12345 Musterstadt
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-neutral-800">Reservierungen</p>
                    <p className="text-neutral-600 text-sm">
                      Täglich 10:00 - 21:00
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Parking Info */}
            <div className="card">
              <div className="flex items-center gap-3 mb-4">
                <Car className="w-6 h-6 text-primary" />
                <h3 className="text-xl font-serif font-bold text-neutral-800">
                  Parkmöglichkeiten
                </h3>
              </div>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between items-center">
                  <span className="text-neutral-700">Hauseigene Plätze</span>
                  <span className="text-success font-semibold">Kostenlos</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-neutral-700">Parkhaus City (100m)</span>
                  <span className="text-neutral-600">2€/h</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-neutral-700">Straßenparkplätze</span>
                  <span className="text-neutral-600">1€/h</span>
                </div>
              </div>
            </div>

            {/* Special Notes */}
            <div className="card">
              <h3 className="text-xl font-serif font-bold text-neutral-800 mb-4">
                Service-Informationen
              </h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-neutral-700">Lieferservice bis 21:00 Uhr verfügbar</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-neutral-700">Abholung mit 15% Rabatt auf alle Speisen</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-neutral-700">Kindergerichte und Hochstühle verfügbar</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-neutral-700">Barrierefrei zugänglich</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Oeffnungszeiten;