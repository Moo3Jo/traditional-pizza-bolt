import React, { useEffect } from 'react';
import { Shield, Eye, Database, Lock, UserCheck, Mail } from 'lucide-react';

const Datenschutz: React.FC = () => {
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
            Datenschutzerklärung
          </h1>

          <div className="space-y-8">
            {/* Allgemeine Hinweise */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <Shield className="w-6 h-6 text-primary" />
                <h2 className="text-xl font-serif font-bold text-neutral-800">
                  Allgemeine Hinweise
                </h2>
              </div>
              <div className="bg-neutral-50 p-6 rounded-none">
                <p className="text-neutral-700 leading-relaxed">
                  Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten 
                  passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie 
                  persönlich identifiziert werden können. Ausführliche Informationen zum Thema Datenschutz entnehmen 
                  Sie unserer unter diesem Text aufgeführten Datenschutzerklärung.
                </p>
              </div>
            </section>

            {/* Datenerfassung auf dieser Website */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <Database className="w-6 h-6 text-primary" />
                <h2 className="text-xl font-serif font-bold text-neutral-800">
                  Datenerfassung auf dieser Website
                </h2>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-neutral-800 mb-2">Wer ist verantwortlich für die Datenerfassung auf dieser Website?</h3>
                  <p className="text-neutral-700 text-sm leading-relaxed bg-neutral-50 p-4 rounded-none">
                    Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten 
                    können Sie dem Impressum dieser Website entnehmen.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-neutral-800 mb-2">Wie erfassen wir Ihre Daten?</h3>
                  <p className="text-neutral-700 text-sm leading-relaxed bg-neutral-50 p-4 rounded-none">
                    Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z.B. um 
                    Daten handeln, die Sie in ein Kontaktformular oder Reservierungsformular eingeben. Andere Daten werden 
                    automatisch beim Besuch der Website durch unsere IT-Systeme erfasst. Das sind vor allem technische Daten 
                    (z.B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs).
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-neutral-800 mb-2">Wofür nutzen wir Ihre Daten?</h3>
                  <p className="text-neutral-700 text-sm leading-relaxed bg-neutral-50 p-4 rounded-none">
                    Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gewährleisten. 
                    Andere Daten können zur Analyse Ihres Nutzerverhaltens verwendet werden. Die über das Reservierungsformular 
                    erhobenen Daten verwenden wir ausschließlich zur Bearbeitung Ihrer Tischreservierung.
                  </p>
                </div>
              </div>
            </section>

            {/* Ihre Rechte */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <UserCheck className="w-6 h-6 text-primary" />
                <h2 className="text-xl font-serif font-bold text-neutral-800">
                  Ihre Rechte bezüglich Ihrer Daten
                </h2>
              </div>
              <div className="bg-neutral-50 p-6 rounded-none">
                <p className="text-neutral-700 text-sm leading-relaxed mb-4">
                  Sie haben jederzeit das Recht unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer 
                  gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung, 
                  Sperrung oder Löschung dieser Daten zu verlangen.
                </p>
                <ul className="space-y-2 text-sm text-neutral-700">
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span>Recht auf Auskunft (Art. 15 DSGVO)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span>Recht auf Berichtigung (Art. 16 DSGVO)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span>Recht auf Löschung (Art. 17 DSGVO)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span>Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span>Recht auf Datenübertragbarkeit (Art. 20 DSGVO)</span>
                  </li>
                </ul>
              </div>
            </section>

            {/* Reservierungsformular */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <Mail className="w-6 h-6 text-primary" />
                <h2 className="text-xl font-serif font-bold text-neutral-800">
                  Reservierungsformular
                </h2>
              </div>
              <div className="space-y-4">
                <div className="bg-neutral-50 p-6 rounded-none">
                  <h3 className="font-semibold text-neutral-800 mb-2">Art und Zweck der Verarbeitung:</h3>
                  <p className="text-neutral-700 text-sm leading-relaxed">
                    Wenn Sie uns über das Reservierungsformular kontaktieren, werden die von Ihnen gemachten Angaben 
                    (Vor- und Nachname, E-Mail-Adresse, Telefonnummer, Anzahl Personen, Datum und Uhrzeit) zum Zwecke 
                    der Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert.
                  </p>
                </div>
                
                <div className="bg-neutral-50 p-6 rounded-none">
                  <h3 className="font-semibold text-neutral-800 mb-2">Rechtsgrundlage:</h3>
                  <p className="text-neutral-700 text-sm leading-relaxed">
                    Die Verarbeitung erfolgt auf Grundlage Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO).
                  </p>
                </div>

                <div className="bg-neutral-50 p-6 rounded-none">
                  <h3 className="font-semibold text-neutral-800 mb-2">Empfänger:</h3>
                  <p className="text-neutral-700 text-sm leading-relaxed">
                    Empfänger der Daten sind nur die verantwortliche Stelle und ggf. technische Dienstleister, 
                    die für die technische Bereitstellung der Website zuständig sind.
                  </p>
                </div>

                <div className="bg-neutral-50 p-6 rounded-none">
                  <h3 className="font-semibold text-neutral-800 mb-2">Speicherdauer:</h3>
                  <p className="text-neutral-700 text-sm leading-relaxed">
                    Die Daten werden gelöscht, sobald sie für die Erreichung des Zweckes ihrer Erhebung nicht mehr 
                    erforderlich sind. Für die personenbezogenen Daten aus dem Reservierungsformular ist dies dann der Fall, 
                    wenn die jeweilige Konversation mit Ihnen beendet ist und der Restaurantbesuch stattgefunden hat.
                  </p>
                </div>
              </div>
            </section>

            {/* Server-Log-Dateien */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <Eye className="w-6 h-6 text-primary" />
                <h2 className="text-xl font-serif font-bold text-neutral-800">
                  Server-Log-Dateien
                </h2>
              </div>
              <div className="bg-neutral-50 p-6 rounded-none">
                <p className="text-neutral-700 text-sm leading-relaxed mb-4">
                  Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten Server-Log-Dateien, 
                  die Ihr Browser automatisch an uns übermittelt. Dies sind:
                </p>
                <ul className="space-y-2 text-sm text-neutral-700 mb-4">
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span>Browsertyp und Browserversion</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span>Verwendetes Betriebssystem</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span>Referrer URL</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span>Hostname des zugreifenden Rechners</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span>Uhrzeit der Serveranfrage</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span>IP-Adresse</span>
                  </li>
                </ul>
                <p className="text-neutral-700 text-sm leading-relaxed">
                  Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen. Die Erfassung dieser 
                  Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO.
                </p>
              </div>
            </section>

            {/* Kontaktdaten des Datenschutzbeauftragten */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <Lock className="w-6 h-6 text-primary" />
                <h2 className="text-xl font-serif font-bold text-neutral-800">
                  Kontakt bei Datenschutzfragen
                </h2>
              </div>
              <div className="bg-neutral-50 p-6 rounded-none">
                <p className="text-neutral-700 text-sm leading-relaxed mb-4">
                  Bei Fragen zum Datenschutz können Sie sich jederzeit an uns wenden:
                </p>
                <div className="space-y-2 text-sm">
                  <p className="text-neutral-700">
                    <strong>Pizzeria Bella Vista GmbH</strong>
                  </p>
                  <p className="text-neutral-700">
                    Giuseppe Rossi<br />
                    Musterstraße 123<br />
                    12345 Musterstadt
                  </p>
                  <p className="text-neutral-700">
                    <strong>E-Mail:</strong> datenschutz@bellavista.de<br />
                    <strong>Telefon:</strong> +49 (0) 123 456 78
                  </p>
                </div>
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

export default Datenschutz;