import { useState } from "react";
import { Megaphone, Users, FileText, Mail, CheckCircle, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

interface Action {
  id: string;
  icon: any;
  title: string;
  description: string;
  actionLabel: string;
  actionUrl?: string;
  actionType: "external" | "share" | "email";
}

const actions: Action[] = [
  {
    id: "petition",
    icon: FileText,
    title: "Petition unterschreiben",
    description: "Unterstütze Petitionen gegen Rechtsextremismus und für Demokratie",
    actionLabel: "Zur Petition",
    actionUrl: "https://www.change.org",
    actionType: "external"
  },
  {
    id: "demo",
    icon: Megaphone,
    title: "Demonstration finden",
    description: "Finde Demos gegen Rechts in deiner Nähe und zeige Präsenz",
    actionLabel: "Demos finden",
    actionUrl: "https://www.aufstehen-gegen-rassismus.de",
    actionType: "external"
  },
  {
    id: "organization",
    icon: Users,
    title: "Organisation beitreten",
    description: "Werde aktiv in Organisationen, die sich für Demokratie einsetzen",
    actionLabel: "Organisationen ansehen",
    actionUrl: "https://www.amadeu-antonio-stiftung.de",
    actionType: "external"
  },
  {
    id: "share",
    icon: Share2,
    title: "Fakten teilen",
    description: "Teile diese Seite und kläre andere über die Gefahren auf",
    actionLabel: "Seite teilen",
    actionType: "share"
  },
  {
    id: "contact",
    icon: Mail,
    title: "Politiker kontaktieren",
    description: "Schreibe an deine Abgeordneten und fordere klare Haltung gegen Rechts",
    actionLabel: "Abgeordnete finden",
    actionUrl: "https://www.abgeordnetenwatch.de",
    actionType: "external"
  }
];

const ActionCenter = () => {
  const [completedActions, setCompletedActions] = useState<string[]>([]);

  const handleAction = (action: Action) => {
    if (action.actionType === "external" && action.actionUrl) {
      window.open(action.actionUrl, "_blank");
      markAsCompleted(action.id);
    } else if (action.actionType === "share") {
      if (navigator.share) {
        navigator.share({
          title: "Fakten gegen Rechts",
          text: "Informiere dich über die Gefahren von Rechtsextremismus und der AfD",
          url: window.location.href
        }).then(() => {
          markAsCompleted(action.id);
        });
      } else {
        navigator.clipboard.writeText(window.location.href);
        toast.success("Link kopiert!", {
          description: "Du kannst den Link jetzt teilen"
        });
        markAsCompleted(action.id);
      }
    }
  };

  const markAsCompleted = (id: string) => {
    if (!completedActions.includes(id)) {
      setCompletedActions([...completedActions, id]);
      toast.success("Aktion abgeschlossen!", {
        description: "Danke für dein Engagement"
      });
    }
  };

  return (
    <section className="py-24 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 border border-accent/30 mb-4">
            <Megaphone className="w-8 h-8 text-accent" />
          </div>
          <h2 className="text-4xl font-bold">
            Aktions<span className="text-accent">-Center</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Wissen allein reicht nicht. Werde aktiv und setze ein Zeichen gegen Rechtsextremismus.
          </p>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 border border-accent/30 text-accent text-sm font-semibold">
            <CheckCircle className="w-4 h-4" />
            {completedActions.length} / {actions.length} Aktionen abgeschlossen
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {actions.map((action) => {
            const Icon = action.icon;
            const isCompleted = completedActions.includes(action.id);

            return (
              <div
                key={action.id}
                className={`border p-8 space-y-4 transition-all hover:border-accent/50 group relative overflow-hidden ${
                  isCompleted ? 'border-accent/50 bg-accent/5' : 'border-border'
                }`}
              >
                {isCompleted && (
                  <div className="absolute top-4 right-4">
                    <CheckCircle className="w-6 h-6 text-accent" />
                  </div>
                )}

                <div className="inline-flex items-center justify-center w-12 h-12 bg-accent/10 border border-accent/30 group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6 text-accent" />
                </div>

                <div className="space-y-2">
                  <h3 className="text-xl font-bold">
                    {action.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {action.description}
                  </p>
                </div>

                <Button
                  onClick={() => handleAction(action)}
                  variant={isCompleted ? "secondary" : "default"}
                  className="w-full mt-4"
                >
                  {isCompleted ? "Erneut durchführen" : action.actionLabel}
                </Button>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <div className="border border-accent/30 p-8 inline-block space-y-4">
            <p className="text-lg font-medium">
              Jede Aktion zählt im Kampf für Demokratie und gegen Rechtsextremismus.
            </p>
            <p className="text-muted-foreground">
              Teile diese Seite mit Freunden und Familie, um noch mehr Menschen zu erreichen.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ActionCenter;
