import Hero from "@/components/Hero";
import ValueProposition from "@/components/ValueProposition";
import OnboardingForm from "@/components/OnboardingForm";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";

const Index = () => {
  return (
    <main className="font-inter">
      <Hero />
      <ValueProposition />
      <OnboardingForm />
      <Pricing />
      <FAQ />
      <FinalCTA />
    </main>
  );
};

export default Index;