import { useState } from "react";
import { CheckCircle, XCircle, RotateCcw, Trophy } from "lucide-react";
import { Button } from "@/components/ui/button";

interface MythCard {
  id: number;
  statement: string;
  isMyth: boolean;
  explanation: string;
}

const myths: MythCard[] = [
  {
    id: 1,
    statement: "Die AfD ist eine normale konservative Partei wie die CDU.",
    isMyth: true,
    explanation: "Falsch. Die AfD wird vom Verfassungsschutz als Verdachtsfall beobachtet und teilt rechtsextreme Ideologien."
  },
  {
    id: 2,
    statement: "Rechtsextreme Straftaten haben in Deutschland zugenommen.",
    isMyth: false,
    explanation: "Richtig. Laut Verfassungsschutzbericht sind rechtsextreme Straftaten in den letzten Jahren deutlich gestiegen."
  },
  {
    id: 3,
    statement: "Die meisten Terroranschläge in Deutschland werden von Islamisten verübt.",
    isMyth: true,
    explanation: "Falsch. Die meisten Terroranschläge und -versuche gehen von Rechtsextremen aus."
  },
  {
    id: 4,
    statement: "Die AfD distanziert sich konsequent von Extremismus.",
    isMyth: true,
    explanation: "Falsch. Zahlreiche AfD-Mitglieder haben nachweisbare Verbindungen zu rechtsextremen Gruppen."
  },
  {
    id: 5,
    statement: "Der NSU-Terror wurde jahrelang nicht aufgeklärt.",
    isMyth: false,
    explanation: "Richtig. Der Nationalsozialistische Untergrund mordete jahrelang, während Behörden systematisch in die falsche Richtung ermittelten."
  },
  {
    id: 6,
    statement: "Migration ist die Hauptursache für Kriminalität in Deutschland.",
    isMyth: true,
    explanation: "Falsch. Die Kriminalitätsrate korreliert primär mit sozioökonomischen Faktoren, nicht mit Migration."
  }
];

const MythBusterGame = () => {
  const [currentCard, setCurrentCard] = useState(0);
  const [score, setScore] = useState(0);
  const [answered, setAnswered] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<boolean | null>(null);
  const [gameFinished, setGameFinished] = useState(false);

  const handleAnswer = (userSaysMyth: boolean) => {
    if (answered) return;
    
    setSelectedAnswer(userSaysMyth);
    setAnswered(true);
    
    const correct = userSaysMyth === myths[currentCard].isMyth;
    if (correct) {
      setScore(score + 1);
    }
  };

  const nextCard = () => {
    if (currentCard < myths.length - 1) {
      setCurrentCard(currentCard + 1);
      setAnswered(false);
      setSelectedAnswer(null);
    } else {
      setGameFinished(true);
    }
  };

  const restart = () => {
    setCurrentCard(0);
    setScore(0);
    setAnswered(false);
    setSelectedAnswer(null);
    setGameFinished(false);
  };

  if (gameFinished) {
    return (
      <section className="py-24 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="border border-accent/30 p-12 text-center space-y-8 animate-fade-in-scale">
            <Trophy className="w-20 h-20 text-accent mx-auto" />
            <h2 className="text-4xl font-bold">
              Spiel beendet!
            </h2>
            <div className="text-6xl font-bold text-accent">
              {score} / {myths.length}
            </div>
            <p className="text-xl text-muted-foreground">
              {score === myths.length && "Perfekt! Du kennst dich aus."}
              {score >= myths.length * 0.7 && score < myths.length && "Sehr gut! Du bist gut informiert. Scheinbar bist du kein AfD-Wähler. Mach weiter so!"}
              {score >= myths.length * 0.5 && score < myths.length * 0.7 && "Nicht schlecht! Es gibt noch einiges zu lernen."}
              {score < myths.length * 0.5 && "Informiere dich weiter über die Fakten!"}
            </p>
            <Button onClick={restart} size="lg" className="gap-2">
              <RotateCcw className="w-5 h-5" />
              Nochmal spielen
            </Button>
          </div>
        </div>
      </section>
    );
  }

  const current = myths[currentCard];
  const isCorrect = answered && selectedAnswer === current.isMyth;

  return (
    <section className="py-24 px-6">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-4xl font-bold">
            Mythos oder <span className="text-accent">Fakt</span>?
          </h2>
          <p className="text-lg text-muted-foreground">
            Teste dein Wissen über Rechtsextremismus und die AfD
          </p>
          <div className="flex justify-center gap-4 text-sm">
            <span className="text-muted-foreground">
              Frage {currentCard + 1} / {myths.length}
            </span>
            <span className="text-accent font-semibold">
              Score: {score}
            </span>
          </div>
        </div>

        <div className="border border-accent/30 p-8 md:p-12 space-y-8 animate-fade-in-scale">
          <div className="min-h-[200px] flex items-center justify-center">
            <p className="text-2xl md:text-3xl font-medium text-center leading-relaxed">
              {current.statement}
            </p>
          </div>

          {!answered && (
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => handleAnswer(true)}
                size="lg"
                variant="outline"
                className="text-lg px-8 py-6 hover:border-red-500/50 hover:bg-red-500/10"
              >
                <XCircle className="w-6 h-6 mr-2" />
                Mythos
              </Button>
              <Button
                onClick={() => handleAnswer(false)}
                size="lg"
                variant="outline"
                className="text-lg px-8 py-6 hover:border-green-500/50 hover:bg-green-500/10"
              >
                <CheckCircle className="w-6 h-6 mr-2" />
                Fakt
              </Button>
            </div>
          )}

          {answered && (
            <div className="space-y-6 animate-fade-in">
              <div className={`p-6 border-2 ${isCorrect ? 'border-green-500/50 bg-green-500/10' : 'border-red-500/50 bg-red-500/10'}`}>
                <div className="flex items-center gap-3 mb-4">
                  {isCorrect ? (
                    <CheckCircle className="w-8 h-8 text-green-500" />
                  ) : (
                    <XCircle className="w-8 h-8 text-red-500" />
                  )}
                  <span className="text-xl font-bold">
                    {isCorrect ? 'Richtig!' : 'Falsch!'}
                  </span>
                </div>
                <p className="text-lg leading-relaxed">
                  {current.explanation}
                </p>
              </div>
              <Button onClick={nextCard} size="lg" className="w-full">
                {currentCard < myths.length - 1 ? 'Nächste Frage' : 'Ergebnis anzeigen'}
              </Button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default MythBusterGame;
