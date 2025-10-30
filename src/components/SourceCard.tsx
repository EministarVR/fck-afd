import { ExternalLink } from "lucide-react";

interface SourceCardProps {
  title: string;
  date: string;
  summary: string;
  url: string;
  type: string;
}

const SourceCard = ({ title, date, summary, url, type }: SourceCardProps) => {
  const getTypeLabel = () => {
    switch (type) {
      case "government":
        return "Behörde";
      case "ngo":
        return "NGO";
      case "news":
        return "Medien";
      default:
        return "Quelle";
    }
  };

  return (
    <div className="border border-border p-8 hover:border-foreground/20 transition-all">
      <div className="space-y-6">
        <div className="flex items-center space-x-2 text-xs text-muted-foreground">
          <span>{getTypeLabel()}</span>
          <span>·</span>
          <span>{new Date(date).toLocaleDateString("de-DE")}</span>
        </div>

        <h3 className="text-base font-medium text-foreground">{title}</h3>
        
        <p className="text-sm text-muted-foreground leading-relaxed">
          {summary}
        </p>

        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center space-x-2 text-xs hover:underline"
        >
          <span>Zur Quelle</span>
          <ExternalLink className="h-3 w-3" />
        </a>
      </div>
    </div>
  );
};

export default SourceCard;
