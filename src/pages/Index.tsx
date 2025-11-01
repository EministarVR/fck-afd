import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ArgumentsSection from "@/components/ArgumentsSection";
import ImpactSection from "@/components/ImpactSection";
import TimelineSection from "@/components/TimelineSection";
import QuotesSection from "@/components/QuotesSection";
import StatisticsSection from "@/components/StatisticsSection";
import FAQSection from "@/components/FAQSection";
import DiscordSection from "@/components/DiscordSection";
import NewsletterSection from "@/components/NewsletterSection";
import CTASection from "@/components/CTASection";
import SourcesSection from "@/components/SourcesSection";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import BackToTop from "@/components/BackToTop";

const Index = () => {
  return (
    <div className="min-h-screen">
      <ScrollProgress />
      <Header />
      <Hero />
      <ArgumentsSection />
      <ImpactSection />
      <TimelineSection />
      <QuotesSection />
      <StatisticsSection />
      <FAQSection />
      <DiscordSection />
      <NewsletterSection />
      <CTASection />
      <SourcesSection />
      <Footer />
      <BackToTop />
    </div>
  );
};

export default Index;
