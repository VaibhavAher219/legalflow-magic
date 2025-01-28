import { Button } from "@/components/ui/button";

const FinalCTA = () => {
  return (
    <section className="py-16 px-4 bg-navy text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Ready to Transform Your Practice?
        </h2>
        <Button
          size="lg"
          className="bg-gold hover:bg-gold/90 text-navy font-semibold text-lg px-8 py-6"
        >
          Get Started Now
        </Button>
      </div>
    </section>
  );
};

export default FinalCTA;