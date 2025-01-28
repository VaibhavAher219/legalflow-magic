import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-[90vh] flex flex-col items-center justify-center bg-gradient-to-b from-white to-light-gray px-4 py-24">
      <div className="max-w-5xl mx-auto text-center animate-fade-in">
        <h1 className="text-5xl md:text-7xl font-bold mb-8 text-navy leading-tight">
          Never Hire a Legal Assistant{" "}
          <span className="text-gold">Again</span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-12 text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Cut your law firm's expenses by a third with our AI-powered practice management. 
          Automate consultations, case handling, and client communication—all while you focus on what matters most.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <Button
            size="lg"
            className="bg-navy hover:bg-navy/90 text-white font-semibold text-lg px-8 py-6 min-w-[200px]"
          >
            Start Free Trial
            <ChevronRight className="w-5 h-5" />
          </Button>
          <p className="text-sm text-gray-500">No credit card required. Cancel anytime.</p>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          <Button
            variant="outline"
            className="rounded-full border-2 border-navy/10 hover:border-navy/20 bg-white text-navy px-6 py-2"
          >
            Initial Consultation
          </Button>
          <Button
            variant="outline"
            className="rounded-full border-2 border-navy/10 hover:border-navy/20 bg-white text-navy px-6 py-2"
          >
            Document Filing
          </Button>
          <Button
            variant="outline"
            className="rounded-full border-2 border-navy/10 hover:border-navy/20 bg-white text-navy px-6 py-2"
          >
            Case Analysis
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;