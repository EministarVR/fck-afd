import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";

const FAQSection = () => {
  const faqs = [
    {
      question: "Kann man die AfD verbieten?",
      answer: "Ja, ein Parteiverbot ist grundsätzlich möglich. Das Bundesverfassungsgericht kann eine Partei verbieten, wenn sie darauf ausgeht, die freiheitliche demokratische Grundordnung zu beeinträchtigen oder zu beseitigen. Der Verfassungsschutz hat bereits Teile der AfD als gesichert rechtsextremistisch eingestuft – ein wichtiger Schritt in diese Richtung."
    },
    {
      question: "Ist die AfD rechtsextrem?",
      answer: "Ja, Teile der AfD sind vom Bundesamt für Verfassungsschutz offiziell als gesichert rechtsextremistisch eingestuft. Die Partei verbreitet völkisches Gedankengut, hetzt gegen Minderheiten und arbeitet mit rechtsextremen Gruppen zusammen. Das ist keine Meinungsfrage, sondern behördliche Feststellung."
    },
    {
      question: "Was hat die AfD mit rechter Gewalt zu tun?",
      answer: "Die Rhetorik der AfD schafft ein Klima, das rechte Gewalt fördert. Die Attentäter von Halle und Hanau waren von rechtsextremer Ideologie beeinflusst, die die AfD mit verbreitet. Studien zeigen: Dort wo die AfD stark ist, steigt die Zahl rechtsextremer Straftaten."
    },
    {
      question: "Warum ist ein Verbot demokratisch?",
      answer: "Die Demokratie muss sich gegen ihre Feinde wehren können. Das Grundgesetz sieht deshalb die Möglichkeit eines Parteiverbots vor – als Schutz der freiheitlichen demokratischen Grundordnung. Eine Partei, die diese Ordnung abschaffen will, kann sich nicht auf demokratische Rechte berufen."
    },
    {
      question: "Was kann ich konkret tun?",
      answer: "Informiere dich und andere über die Fakten. Teile diese Seite, engagiere dich in demokratischen Initiativen, geh zu Demonstrationen gegen Rechtsextremismus. Jede Stimme zählt. Melde rechtsextreme Inhalte, unterstütze Betroffene von rechter Gewalt und setze dich aktiv für Demokratie ein."
    },
    {
      question: "Sind das nicht nur Einzelfälle?",
      answer: "Nein. Die rechtsextremen Positionen in der AfD sind systematisch und werden von der Parteiführung geduldet oder aktiv gefördert. Björn Höcke, der als Faschist bezeichnet werden darf (Gerichturteil), ist Landesvorsitzender in Thüringen. Die 'Einzelfall'-Argumentation ist ein Ablenkungsmanöver."
    }
  ];

  return (
    <section className="relative py-32 px-6 overflow-hidden">
      <div className="container mx-auto max-w-4xl relative z-10">
        <div className="text-center mb-20 animate-fade-in-up">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 border border-primary/30 mb-6">
            <HelpCircle className="w-8 h-8 text-primary" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            Häufige <span className="gradient-text">Fragen</span>
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Antworten auf die wichtigsten Fragen rund um die AfD und ihre Gefährlichkeit
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border border-border px-8 py-2 transition-all duration-300 hover:border-foreground/30 animate-fade-in-up"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <AccordionTrigger className="text-left text-lg font-semibold hover:text-primary transition-colors">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pt-4">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
