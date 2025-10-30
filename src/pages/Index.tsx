import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ArgumentsSection from "@/components/ArgumentsSection";
import ImpactSection from "@/components/ImpactSection";
import StatisticsSection from "@/components/StatisticsSection";
import CTASection from "@/components/CTASection";
import SourcesSection from "@/components/SourcesSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <ArgumentsSection />
      <ImpactSection />
      <StatisticsSection />
      <CTASection />
      <SourcesSection />
      <Footer />
    </div>
  );
};

export default Index;
