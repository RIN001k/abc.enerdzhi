import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { StatsSection } from "@/components/StatsSection";
import { CoursesSection } from "@/components/CoursesSection";
import { BenefitsSection } from "@/components/BenefitsSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { FaqSection } from "@/components/FaqSection";
import { LeadFormSection } from "@/components/LeadFormSection";
import { Footer } from "@/components/Footer";

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <StatsSection />
        <CoursesSection />
        <BenefitsSection />
        <TestimonialsSection />
        <FaqSection />
        <LeadFormSection />
      </main>
      <Footer />
    </div>
  );
}

