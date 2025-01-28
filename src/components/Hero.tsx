import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="min-h-[80vh] flex items-center justify-center bg-navy text-white px-4 py-16">
      <div className="max-w-4xl mx-auto text-center animate-fade-in">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 font-inter">
          Streamline Your Legal Practice with AI
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-2xl mx-auto">
          Join thousands of attorneys automating consultations, case management, and client communication.
        </p>
        <Button
          size="lg"
          className="bg-gold hover:bg-gold/90 text-navy font-semibold text-lg px-8 py-6"
        >
          Start Your Free Trial
        </Button>
        <p className="mt-4 text-sm text-gray-400">No credit card required. Cancel anytime.</p>
      </div>
    </section>
  );
};

export default Hero;