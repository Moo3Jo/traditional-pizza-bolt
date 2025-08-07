import React, { useState, useEffect } from 'react';
import { Phone, Calendar, Clock, Users, Mail, User, Check, AlertCircle } from 'lucide-react';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  guests: string;
  date: string;
  time: string;
}

const Reservieren: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    guests: '2',
    date: '',
    time: '',
  });
  const [agreeToTerms, setAgreeToTerms] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Check form validity
  useEffect(() => {
    const isValid = Object.values(formData).every(value => value.trim() !== '') && agreeToTerms;
    setIsFormValid(isValid);
  }, [formData, agreeToTerms]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isFormValid) {
      // Simulate form submission (no backend)
      console.log('Reservation data:', formData);
      setIsSubmitted(true);
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          guests: '2',
          date: '',
          time: '',
        });
        setAgreeToTerms(false);
      }, 3000);
    }
  };

  const timeSlots = [
    '11:30', '12:00', '12:30', '13:00', '13:30', '14:00',
    '17:30', '18:00', '18:30', '19:00', '19:30', '20:00', '20:30', '21:00'
  ];

  const guestOptions = Array.from({ length: 10 }, (_, i) => i + 1);

  // Get today's date in YYYY-MM-DD format
  const today = new Date().toISOString().split('T')[0];

  if (isSubmitted) {
    return (
      <main className="min-h-screen bg-neutral-50 pt-24 pb-12">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-none shadow-lg p-8 text-center">
            <div className="w-16 h-16 bg-success rounded-full flex items-center justify-center mx-auto mb-6">
              <Check className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-2xl font-serif font-bold text-neutral-800 mb-4">
              Reservierung erfolgreich gesendet!
            </h2>
            <p className="text-neutral-600">
              Vielen Dank für Ihre Reservierungsanfrage. Wir werden uns in Kürze per E-Mail bei Ihnen melden, 
              um die Reservierung zu bestätigen.
            </p>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-neutral-50 pt-24 pb-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl font-serif font-bold text-neutral-800 mb-4">
            Tisch reservieren
          </h1>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Sichern Sie sich Ihren Platz in der Bella Vista - telefonisch oder über unser Online-Formular
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Telefonische Reservierung */}
          <div className="space-y-8">
            <div className="card">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-primary rounded-none flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-2xl font-serif font-bold text-neutral-800 mb-2">
                  Telefonische Reservierung
                </h2>
                <p className="text-neutral-600">
                  Rufen Sie uns an - wir reservieren gerne Ihren Tisch
                </p>
              </div>
              
              <div className="text-center space-y-4">
                <div className="bg-neutral-50 p-6 rounded-none">
                  <p className="text-lg font-semibold text-neutral-800 mb-2">
                    Reservierungshotline
                  </p>
                  <a 
                    href="tel:+4912345678" 
                    className="text-2xl font-bold text-primary hover:text-primary-dark transition-colors duration-300"
                  >
                    +49 (0) 123 456 78
                  </a>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                  <div className="bg-neutral-50 p-4 rounded-none">
                    <h3 className="font-semibold text-neutral-800 mb-2">Reservierungszeiten</h3>
                    <p className="text-neutral-600">Mo-So: 10:00 - 21:00</p>
                  </div>
                  <div className="bg-neutral-50 p-4 rounded-none">
                    <h3 className="font-semibold text-neutral-800 mb-2">Schnelle Antwort</h3>
                    <p className="text-neutral-600">Sofortige Bestätigung</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Zusätzliche Informationen */}
            <div className="card">
              <h3 className="text-xl font-serif font-bold text-neutral-800 mb-4">
                Wichtige Hinweise
              </h3>
              <ul className="space-y-3 text-sm text-neutral-600">
                <li className="flex items-start gap-3">
                  <AlertCircle size={16} className="text-accent mt-0.5 flex-shrink-0" />
                  <span>Reservierungen sind bis zu 30 Tage im Voraus möglich</span>
                </li>
                <li className="flex items-start gap-3">
                  <AlertCircle size={16} className="text-accent mt-0.5 flex-shrink-0" />
                  <span>Bei Gruppen ab 8 Personen bitten wir um telefonische Vorabsprache</span>
                </li>
                <li className="flex items-start gap-3">
                  <AlertCircle size={16} className="text-accent mt-0.5 flex-shrink-0" />
                  <span>Reservierungen werden 15 Minuten nach der Zeit freigegeben</span>
                </li>
                <li className="flex items-start gap-3">
                  <AlertCircle size={16} className="text-accent mt-0.5 flex-shrink-0" />
                  <span>Änderungen oder Stornierungen bitte bis 2 Stunden vorher</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Online Reservierung */}
          <div className="card">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-secondary rounded-none flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-2xl font-serif font-bold text-neutral-800 mb-2">
                Online Reservierung
              </h2>
              <p className="text-neutral-600">
                Reservieren Sie bequem online - wir melden uns zur Bestätigung
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-neutral-700 mb-2">
                    <User size={16} className="inline mr-2" />
                    Vorname *
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-neutral-300 rounded-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-neutral-700 mb-2">
                    <User size={16} className="inline mr-2" />
                    Nachname *
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-neutral-300 rounded-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-2">
                  <Mail size={16} className="inline mr-2" />
                  E-Mail *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-neutral-300 rounded-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                  required
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-neutral-700 mb-2">
                  <Phone size={16} className="inline mr-2" />
                  Telefon *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-neutral-300 rounded-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                  required
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label htmlFor="guests" className="block text-sm font-medium text-neutral-700 mb-2">
                    <Users size={16} className="inline mr-2" />
                    Personen *
                  </label>
                  <select
                    id="guests"
                    name="guests"
                    value={formData.guests}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-neutral-300 rounded-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                    required
                  >
                    {guestOptions.map(num => (
                      <option key={num} value={num}>{num} {num === 1 ? 'Person' : 'Personen'}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="date" className="block text-sm font-medium text-neutral-700 mb-2">
                    <Calendar size={16} className="inline mr-2" />
                    Datum *
                  </label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    value={formData.date}
                    onChange={handleInputChange}
                    min={today}
                    className="w-full px-3 py-2 border border-neutral-300 rounded-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="time" className="block text-sm font-medium text-neutral-700 mb-2">
                    <Clock size={16} className="inline mr-2" />
                    Uhrzeit *
                  </label>
                  <select
                    id="time"
                    name="time"
                    value={formData.time}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-neutral-300 rounded-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                    required
                  >
                    <option value="">Wählen Sie eine Zeit</option>
                    {timeSlots.map(time => (
                      <option key={time} value={time}>{time} Uhr</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <input
                  type="checkbox"
                  id="agreeToTerms"
                  checked={agreeToTerms}
                  onChange={(e) => setAgreeToTerms(e.target.checked)}
                  className="w-4 h-4 text-primary border-neutral-300 rounded-none focus:ring-primary focus:ring-2 mt-1"
                  required
                />
                <label htmlFor="agreeToTerms" className="text-sm text-neutral-700 leading-relaxed">
                  Ich stimme den{' '}
                  <a href="/datenschutz" className="text-primary hover:text-primary-dark transition-colors duration-300 underline">
                    Datenschutzbestimmungen
                  </a>{' '}
                  zu und bin damit einverstanden, dass meine Daten zur Bearbeitung meiner Reservierung verwendet werden. *
                </label>
              </div>

              <button
                type="submit"
                disabled={!isFormValid}
                className={`w-full py-3 px-6 rounded-none font-semibold transition-all duration-300 ${
                  isFormValid
                    ? 'bg-primary text-white hover:bg-primary-dark shadow-lg hover:shadow-xl transform hover:scale-105'
                    : 'bg-neutral-300 text-neutral-500 cursor-not-allowed'
                }`}
              >
                Jetzt reservieren
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Reservieren;