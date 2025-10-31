import { Heart, Target, Users, Shield } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Faktenbasiert",
      description: "Wir arbeiten ausschließlich mit verifizierbaren Quellen, offiziellen Berichten und wissenschaftlichen Daten."
    },
    {
      icon: Shield,
      title: "Demokratisch",
      description: "Unser Einsatz gilt dem Schutz der freiheitlich-demokratischen Grundordnung und der Menschenwürde."
    },
    {
      icon: Heart,
      title: "Solidarisch",
      description: "Wir stehen an der Seite aller Menschen, die von Rassismus, Antisemitismus und Hetze bedroht sind."
    },
    {
      icon: Users,
      title: "Transparent",
      description: "Alle unsere Quellen sind öffentlich einsehbar. Wir machen keine geheimen Deals und verfolgen keine versteckte Agenda."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24 pb-20">
        <div className="container mx-auto px-6 max-w-4xl">
          {/* Page Header */}
          <div className="mb-20 animate-fade-in-up">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight">
              Über diese Seite
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Eine Informationsplattform für alle, die Fakten statt Propaganda wollen.
            </p>
          </div>

          {/* Mission Statement */}
          <section className="mb-24 animate-fade-in-scale">
            <h2 className="text-3xl font-bold mb-8 tracking-tight">Unsere Mission</h2>
            <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
              <p>
                Diese Seite entstand aus der Überzeugung, dass Demokratie aktive Verteidigung braucht. 
                Während rechtsextreme Parteien mit Desinformation, Hetze und Lügen arbeiten, setzen wir 
                auf Transparenz und nachprüfbare Fakten.
              </p>
              <p>
                Die AfD ist nicht "nur eine andere Meinung". Sie ist vom Verfassungsschutz als 
                rechtsextremistisch eingestuft, ihre führenden Köpfe hetzen gegen Minderheiten, 
                und ihre Politik würde das demokratische Deutschland fundamental bedrohen.
              </p>
              <p>
                Wir dokumentieren, was sie sagen und tun. Wir zeigen die Fakten. Wir machen sichtbar, 
                was oft im Rauschen der täglichen Nachrichten untergeht.
              </p>
            </div>
          </section>

          {/* Values */}
          <section className="mb-24">
            <h2 className="text-3xl font-bold mb-12 tracking-tight">Unsere Werte</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <div
                    key={index}
                    className="border border-border p-8 transition-all duration-300 hover:border-foreground/30 animate-fade-in-scale"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="w-12 h-12 bg-muted flex items-center justify-center mb-6">
                      <Icon className="w-6 h-6 text-foreground" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </section>

          {/* What we are NOT */}
          <section className="mb-24 border border-border p-12 animate-fade-in-scale">
            <h2 className="text-2xl font-bold mb-6">Was wir NICHT sind</h2>
            <ul className="space-y-4 text-muted-foreground">
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-primary mt-2 flex-shrink-0" />
                <span>Wir sind keine Partei und werben nicht für eine bestimmte politische Richtung.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-primary mt-2 flex-shrink-0" />
                <span>Wir verbreiten keine Fake News oder arbeiten mit manipulierten Daten.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-primary mt-2 flex-shrink-0" />
                <span>Wir sind nicht "die Anderen", die auch nur ihre Meinung durchdrücken wollen.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-primary mt-2 flex-shrink-0" />
                <span>Wir nehmen kein Geld von Parteien, Lobbygruppen oder anderen Organisationen mit versteckter Agenda.</span>
              </li>
            </ul>
          </section>

          {/* Methodology */}
          <section className="mb-24 animate-fade-in-scale">
            <h2 className="text-3xl font-bold mb-8 tracking-tight">Wie wir arbeiten</h2>
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Quellenprüfung</h3>
                <p>
                  Jede Information auf dieser Seite stammt aus überprüfbaren Quellen: offizielle 
                  Behördenberichte, wissenschaftliche Studien, Gerichtsdokumente oder seriöse 
                  Medienberichte. Keine anonymen Leaks, keine "ein Insider sagt"-Stories.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Transparenz</h3>
                <p>
                  Alle Quellen sind verlinkt und öffentlich einsehbar. Du kannst jede einzelne 
                  Behauptung selbst überprüfen.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Aktualisierung</h3>
                <p>
                  Wir aktualisieren unsere Daten regelmäßig, sobald neue offizielle Berichte 
                  oder Statistiken veröffentlicht werden.
                </p>
              </div>
            </div>
          </section>

          {/* Contact/Contribute */}
          <section className="border-t border-border pt-12">
            <h2 className="text-2xl font-bold mb-6">Mitmachen</h2>
            <p className="text-muted-foreground mb-6">
              Diese Seite lebt von Menschen, die für Demokratie einstehen. Wenn du helfen möchtest:
            </p>
            <ul className="space-y-3 text-muted-foreground">
              <li>→ Teile diese Seite mit Menschen, die Fakten brauchen</li>
              <li>→ Reiche weitere seriöse Quellen ein</li>
              <li>→ Melde Fehler oder veraltete Informationen</li>
              <li>→ Engagiere dich vor Ort gegen Rechtsextremismus</li>
            </ul>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;
