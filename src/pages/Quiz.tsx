import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MythBusterGame from "@/components/MythBusterGame";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const Quiz = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="container mx-auto px-6 pt-32 pb-12">
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Zurück zur Startseite
        </Link>
      </div>
      <MythBusterGame />
      <Footer />
    </div>
  );
};

export default Quiz;
