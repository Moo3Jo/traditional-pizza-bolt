import React, { useEffect } from 'react';
import { Building, User, Mail, Phone, MapPin, Scale } from 'lucide-react';

const Impressum: React.FC = () => {
  useEffect(() => {
    // Set noindex meta tag for SEO
    const metaTag = document.createElement('meta');
    metaTag.name = 'robots';
    metaTag.content = 'noindex, nofollow';
    document.head.appendChild(metaTag);

    return () => {
      document.head.removeChild(metaTag);
    };
  }, []);

  return (
    <main className="min-h-screen bg-neutral-50 pt-24 pb-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="card">
          <h1 className="text-3xl font-serif font-bold text-neutral-800 mb-8">
            Impressum
          </h1>

          <div className="space-y-8">
            {/* Angaben nach § 5 TMG */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <Building className="w-6 h-6 text-primary" />
                <h2 className="text-xl font-serif font-bold text-neutral-800">
                  Angaben nach § 5 TMG
                </h2>
              </div>
              <div className="bg-neutral-50 p-6 rounded-none">
                <p className="font-semibold text-neutral-800 mb-2">
                  Pizzeria Bella Vista GmbH
                </p>
                <p className="text-neutral-700">
                  Musterstraße 123<br />
                  12345 Musterstadt<br />
                  Deutschland
                </p>
              </div>
            </section>

            {/* Kontaktdaten */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <Mail className="w-6 h-6 text-primary" />
                <h2 className="text-xl font-serif font-bold text-neutral-800">
                  Kontakt
                </h2>
              </div>
              <div className="bg-neutral-50 p-6 rounded-none space-y-3">
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-primary" />
                  <span className="text-neutral-700">Telefon: +49 (0) 123 456 78</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-primary" />
                  <span className="text-neutral-700">E-Mail: info@bellavista.de</span>
                </div>
              </div>
            </section>

            {/* Vertretungsberechtigter */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <User className="w-6 h-6 text-primary" />
                <h2 className="text-xl font-serif font-bold text-neutral-800">
                  Vertretungsberechtigter
                </h2>
              </div>
              <div className="bg-neutral-50 p-6 rounded-none">
                <p className="text-neutral-700">
                  <strong>Geschäftsführer:</strong> Giuseppe Rossi
                </p>
              </div>
            </section>

            {/* Handelsregister */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <Building className="w-6 h-6 text-primary" />
                <h2 className="text-xl font-serif font-bold text-neutral-800">
                  Registerangaben
                </h2>
              </div>
              <div className="bg-neutral-50 p-6 rounded-none space-y-2">
                <p className="text-neutral-700">
                  <strong>Registergericht:</strong> Amtsgericht Musterstadt
                </p>
                <p className="text-neutral-700">
                  <strong>Registernummer:</strong> HRB 12345
                </p>
                <p className="text-neutral-700">
                  <strong>Umsatzsteuer-Identifikationsnummer:</strong> DE123456789
                </p>
              </div>
            </section>

            {/* Verantwortlicher für journalistisch-redaktionelle Inhalte */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <Scale className="w-6 h-6 text-primary" />
                <h2 className="text-xl font-serif font-bold text-neutral-800">
                  Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV
                </h2>
              </div>
              <div className="bg-neutral-50 p-6 rounded-none">
                <p className="text-neutral-700">
                  Giuseppe Rossi<br />
                  Musterstraße 123<br />
                  12345 Musterstadt
                </p>
              </div>
            </section>

            {/* Haftungsausschluss */}
            <section>
              <h2 className="text-xl font-serif font-bold text-neutral-800 mb-4">
                Haftungsausschluss
              </h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-neutral-800 mb-2">Haftung für Inhalte</h3>
                  <p className="text-neutral-700 text-sm leading-relaxed">
                    Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den 
                    allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht 
                    unter der Verpflichtung, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach 
                    Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-neutral-800 mb-2">Haftung für Links</h3>
                  <p className="text-neutral-700 text-sm leading-relaxed">
                    Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. 
                    Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der 
                    verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-neutral-800 mb-2">Urheberrecht</h3>
                  <p className="text-neutral-700 text-sm leading-relaxed">
                    Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen 
                    Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der 
                    Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
                  </p>
                </div>
              </div>
            </section>

            {/* Online Streitbeilegung */}
            <section>
              <h2 className="text-xl font-serif font-bold text-neutral-800 mb-4">
                Online-Streitbeilegung
              </h2>
              <div className="bg-neutral-50 p-6 rounded-none">
                <p className="text-neutral-700 text-sm leading-relaxed">
                  Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: 
                  <a href="https://ec.europa.eu/consumers/odr/" className="text-primary hover:text-primary-dark ml-1" target="_blank" rel="noopener noreferrer">
                    https://ec.europa.eu/consumers/odr/
                  </a>. 
                  Unsere E-Mail-Adresse finden Sie oben im Impressum.
                </p>
              </div>
            </section>

            <div className="mt-8 pt-6 border-t border-neutral-200">
              <p className="text-xs text-neutral-500">
                Letzte Aktualisierung: Januar 2025
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Impressum;