import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { ArrowLeft, AlertCircle, CheckCircle } from "lucide-react";

interface Myth {
  myth: string;
  reality: string;
  explanation: string;
}

const myths: Myth[] = [
  {
    myth: "Die AfD ist demokratisch gewählt, also muss man sie akzeptieren",
    reality: "Demokratie bedeutet nicht, dass demokratiefeindliche Kräfte toleriert werden müssen",
    explanation: "Das Grundgesetz schützt sich selbst durch die 'wehrhafte Demokratie'. Parteien, die die demokratische Ordnung abschaffen wollen, können verboten werden."
  },
  {
    myth: "Die AfD sagt nur laut, was viele denken",
    reality: "Hetze und Rassismus sind nicht 'Volksmeinung', sondern verfassungsfeindlich",
    explanation: "Nur weil etwas von manchen gedacht wird, macht es das nicht richtig oder akzeptabel. Die AfD normalisiert extremistische Positionen."
  },
  {
    myth: "Andere Parteien sind genauso schlimm",
    reality: "Keine demokratische Partei wird vom Verfassungsschutz beobachtet",
    explanation: "Die AfD ist die einzige Bundestagspartei, die als rechtsextremistischer Verdachtsfall eingestuft wird. Das ist ein fundamentaler Unterschied."
  },
  {
    myth: "Die AfD kümmert sich um die 'kleinen Leute'",
    reality: "Die AfD-Programmatik schadet gerade sozial Schwächeren",
    explanation: "Sozialkürzungen, Ablehnung des Mindestlohns, Steuersenkungen für Reiche - die AfD-Politik ist unsozial."
  },
  {
    myth: "Die AfD ist eine Protestpartei gegen 'die da oben'",
    reality: "Die AfD selbst besteht aus Privilegierten und Karrierepolitikern",
    explanation: "Viele AfD-Politiker sind vermögende Unternehmer, Juristen und Berufspolitiker - keine 'Menschen aus dem Volk'."
  },
  {
    myth: "Man muss mit der AfD reden und ihre Sorgen ernst nehmen",
    reality: "Mit Rechtsextremen gibt es keine produktive Debatte",
    explanation: "Die AfD missbraucht demokratischen Dialog zur Verbreitung ihrer Ideologie. Ihre 'Sorgen' sind oft vorgeschobene Rechtfertigungen für Hetze."
  },
  {
    myth: "Die AfD schützt deutsche Kultur und Traditionen",
    reality: "Die AfD instrumentalisiert Kultur für ihre ausgrenzende Agenda",
    explanation: "Deutsche Kultur war schon immer vielfältig und von Austausch geprägt. Die AfD propagiert ein rückwärtsgewandtes, homogenes Weltbild."
  },
  {
    myth: "Die AfD wird vom Establishment ungerechtfertigt bekämpft",
    reality: "Kritik an der AfD basiert auf ihren eigenen Aussagen und Taten",
    explanation: "Niemand 'erfindet' etwas über die AfD. Ihre problematischen Positionen sind dokumentiert und stammen aus ihren eigenen Verlautbarungen."
  },
  {
    myth: "Ein AfD-Verbot würde nichts bringen, die Wähler gibt es trotzdem",
    reality: "Ein Verbot würde die Verbreitung rechtsextremen Gedankenguts eindämmen",
    explanation: "Verbote nehmen extremistischen Bewegungen Ressourcen, Reichweite und Legitimität. Das zeigt die Geschichte mehrfach."
  },
  {
    myth: "Die AfD ist nur gegen illegale Migration",
    reality: "Die AfD lehnt Migration grundsätzlich ab, auch legale",
    explanation: "Die 'Remigrationspläne' der AfD richten sich auch gegen Menschen mit deutschem Pass. Es geht um ethnische Säuberung, nicht um Recht und Ordnung."
  },
  {
    myth: "Die AfD wird die EU reformieren",
    reality: "Die AfD will die EU zerstören",
    explanation: "Ein 'Dexit' würde Deutschland wirtschaftlich und politisch isolieren und massiven Schaden anrichten."
  },
  {
    myth: "Die AfD ist besser für die Wirtschaft",
    reality: "Rechtsextremismus schadet der Wirtschaft massiv",
    explanation: "Fachkräfte meiden rechtsregierte Regionen, internationale Investoren ziehen sich zurück, Innovationskraft schwindet."
  }
];

const Myths = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="container mx-auto px-4 sm:px-6 pt-24 sm:pt-32 pb-12">
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors mb-6 sm:mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Zurück zur Startseite
        </Link>

        <div className="max-w-5xl mx-auto space-y-8 sm:space-y-12">
          <div className="text-center space-y-4">
            <div className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 bg-accent/10 border border-accent/30 mb-4">
              <AlertCircle className="w-7 h-7 sm:w-8 sm:h-8 text-accent" />
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
              Mythen <span className="text-accent">aufgeklärt</span>
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto">
              Häufige Irrtümer über die AfD und was wirklich dahintersteckt
            </p>
          </div>

          <div className="space-y-6 sm:space-y-8">
            {myths.map((item, index) => (
              <div
                key={index}
                className="border border-border hover:border-accent/50 transition-all overflow-hidden"
              >
                <div className="bg-red-500/10 border-b border-red-500/30 p-4 sm:p-6">
                  <div className="flex items-start gap-3 sm:gap-4">
                    <AlertCircle className="w-5 h-5 sm:w-6 sm:h-6 text-red-500 flex-shrink-0 mt-1" />
                    <div>
                      <div className="text-xs sm:text-sm font-semibold text-red-500 uppercase tracking-wider mb-2">
                        Mythos #{index + 1}
                      </div>
                      <p className="text-base sm:text-lg font-medium">
                        {item.myth}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-accent/10 border-b border-accent/30 p-4 sm:p-6">
                  <div className="flex items-start gap-3 sm:gap-4">
                    <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <div className="text-xs sm:text-sm font-semibold text-accent uppercase tracking-wider mb-2">
                        Realität
                      </div>
                      <p className="text-base sm:text-lg font-medium">
                        {item.reality}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-4 sm:p-6">
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    {item.explanation}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 sm:mt-12 p-6 sm:p-8 bg-accent/5 border border-accent/30">
            <h2 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-accent">
              Warum ist Aufklärung wichtig?
            </h2>
            <p className="text-sm sm:text-base leading-relaxed mb-4">
              Diese Mythen werden gezielt verbreitet, um die AfD normaler erscheinen zu lassen 
              als sie ist. Viele Menschen wiederholen sie, ohne die Hintergründe zu kennen.
            </p>
            <p className="text-sm sm:text-base leading-relaxed">
              Faktenbasierte Aufklärung ist der beste Schutz gegen Desinformation und 
              rechtsextreme Propaganda. Teile diese Informationen!
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Myths;