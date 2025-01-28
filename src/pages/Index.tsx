import Hero from "@/components/Hero";
import ValueProposition from "@/components/ValueProposition";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";

const Index = () => {
  return (
    <main className="font-inter">
      <Hero />
      <ValueProposition />
      <Pricing />
      <FAQ />
      <FinalCTA />
    </main>
  );
};

export default Index;