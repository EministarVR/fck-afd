import { Mail, Send } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const NewsletterSection = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !email.includes('@')) {
      toast.error("Bitte gib eine gültige E-Mail-Adresse ein");
      return;
    }

    setIsSubmitting(true);
    
    // Simuliere API-Call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast.success("Erfolgreich angemeldet!", {
      description: "Du erhältst Updates über wichtige Entwicklungen."
    });
    
    setEmail("");
    setIsSubmitting(false);
  };

  return (
    <section className="relative py-32 px-6 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] bg-accent/20 rounded-full blur-[150px]" />
      </div>

      <div className="container mx-auto max-w-4xl relative z-10">
        <div className="border border-accent/30 p-12 md:p-16 space-y-8 transition-all duration-300 hover:border-accent/50 animate-fade-in-scale">
          <div className="text-center space-y-6">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 border border-accent/30">
              <Mail className="w-8 h-8 text-accent" />
            </div>

            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              Bleib <span className="text-accent">informiert</span>
            </h2>

            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Erhalte Updates zu neuen Fakten, Entwicklungen und Aktionen gegen Rechtsextremismus. 
              Keine Spam, nur wichtige Informationen.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="deine@email.de"
                className="flex-1 px-6 py-4 bg-background border-2 border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent transition-colors"
                disabled={isSubmitting}
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className="group inline-flex items-center justify-center space-x-3 px-8 py-4 bg-accent text-accent-foreground font-semibold hover:bg-accent/90 transition-all hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send className={`h-5 w-5 ${isSubmitting ? 'animate-pulse' : 'group-hover:translate-x-1 transition-transform'}`} />
                <span>{isSubmitting ? 'Senden...' : 'Anmelden'}</span>
              </button>
            </div>
          </form>

          <div className="text-center pt-6">
            <p className="text-xs text-muted-foreground">
              Deine Daten werden vertraulich behandelt. Du kannst dich jederzeit abmelden.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
