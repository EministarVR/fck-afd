import { Shield, Scale, Users, AlertTriangle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Facts = () => {
  const factCategories = [
    {
      icon: Shield,
      title: "Verfassungsschutz-Einstufung",
      facts: [
        {
          title: "Gesichert rechtsextrem",
          description: "Der Verfassungsschutz stuft mehrere AfD-Landesverbände als gesichert rechtsextremistisch ein. Dies ist keine politische Meinung, sondern eine nachrichtendienstliche Bewertung basierend auf konkreten Erkenntnissen.",
          severity: "high"
        },
        {
          title: "Beobachtung seit Jahren",
          description: "Die AfD und ihre Teilorganisationen stehen unter intensiver Beobachtung durch deutsche Sicherheitsbehörden aufgrund von Anhaltspunkten für verfassungsfeindliche Bestrebungen.",
          severity: "high"
        }
      ]
    },
    {
      icon: Scale,
      title: "Juristische Fakten",
      facts: [
        {
          title: "Gerichtsurteile",
          description: "Gerichte haben wiederholt bestätigt, dass AfD-Politiker als 'Faschist' oder 'Nazi' bezeichnet werden dürfen, da dies unter das Recht auf freie Meinungsäußerung fällt und durch Tatsachen gedeckt ist.",
          severity: "medium"
        },
        {
          title: "Parteiverbotsverfahren möglich",
          description: "Juristen diskutieren die Grundlagen für ein mögliches Parteiverbotsverfahren. Ein Verbot setzt voraus, dass die Partei gegen die freiheitlich-demokratische Grundordnung agiert.",
          severity: "medium"
        }
      ]
    },
    {
      icon: Users,
      title: "Personelle Verflechtungen",
      facts: [
        {
          title: "Rechtsextreme Netzwerke",
          description: "Dokumentierte Verbindungen zwischen AfD-Funktionären und bekannten rechtsextremen Gruppierungen, Identitären und Neonazi-Strukturen.",
          severity: "high"
        },
        {
          title: "Ausschlussverfahren gescheitert",
          description: "Mehrere innerparteiliche Versuche, rechtsextreme Mitglieder auszuschließen, sind gescheitert oder wurden nicht konsequent verfolgt.",
          severity: "medium"
        }
      ]
    },
    {
      icon: AlertTriangle,
      title: "Öffentliche Äußerungen",
      facts: [
        {
          title: "Dokumentierte Aussagen",
          description: "Eine Vielzahl von öffentlichen Aussagen führender AfD-Politiker wurden als rassistisch, antisemitisch oder volksverhetzend eingestuft und teilweise rechtlich geahndet.",
          severity: "high"
        },
        {
          title: "Relativierung der NS-Zeit",
          description: "Wiederholte Äußerungen, die den Nationalsozialismus relativieren oder deutsche Kriegsverbrechen verharmlosen, sind dokumentiert und öffentlich zugänglich.",
          severity: "high"
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24 pb-20">
        <div className="container mx-auto px-6 max-w-6xl">
          {/* Page Header */}
          <div className="mb-20 animate-fade-in-up">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight">
              Die Fakten
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl leading-relaxed">
              Keine Meinungen. Keine Polemik. Nur nachprüfbare Tatsachen aus offiziellen Quellen, 
              Gerichtsurteilen und dokumentierten Aussagen.
            </p>
          </div>

          {/* Fact Categories */}
          <div className="space-y-24">
            {factCategories.map((category, categoryIndex) => {
              const Icon = category.icon;
              return (
                <section 
                  key={categoryIndex}
                  className="animate-fade-in-scale"
                  style={{ animationDelay: `${categoryIndex * 100}ms` }}
                >
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-12 h-12 bg-muted flex items-center justify-center">
                      <Icon className="w-6 h-6 text-foreground" />
                    </div>
                    <h2 className="text-3xl font-bold tracking-tight">
                      {category.title}
                    </h2>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {category.facts.map((fact, factIndex) => (
                      <div
                        key={factIndex}
                        className="border border-border p-8 transition-all duration-300 hover:border-foreground/30"
                      >
                        <div className="flex items-start gap-3 mb-4">
                          <div className={`w-2 h-2 mt-2 ${
                            fact.severity === 'high' ? 'bg-primary' : 'bg-secondary'
                          }`} />
                          <h3 className="text-xl font-semibold flex-1">
                            {fact.title}
                          </h3>
                        </div>
                        <p className="text-muted-foreground leading-relaxed">
                          {fact.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </section>
              );
            })}
          </div>

          {/* Legal Notice */}
          <div className="mt-24 border-t border-border pt-12">
            <p className="text-sm text-muted-foreground max-w-4xl">
              <strong>Rechtlicher Hinweis:</strong> Alle hier aufgeführten Fakten basieren auf öffentlich 
              zugänglichen Quellen, offiziellen Behördenberichten und rechtskräftigen Gerichtsurteilen. 
              Die Darstellung erfolgt im Rahmen der politischen Meinungsäußerung und des öffentlichen Interesses 
              gemäß Art. 5 GG.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Facts;
