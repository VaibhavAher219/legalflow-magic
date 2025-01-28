import PricingCard from "./PricingCard";

const Pricing = () => {
  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-navy">
          Simple, Transparent Pricing
        </h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <PricingCard
            title="Annual Subscription"
            price="$50/year"
            benefits={[
              "Unlimited AI consultations",
              "Basic document automation",
              "Client portal access",
              "24/7 email support",
            ]}
          />
          <PricingCard
            title="Pay Per Case Closure"
            price="$500/case"
            benefits={[
              "Advanced AI case analysis",
              "Premium document templates",
              "Priority support",
              "Dedicated account manager",
            ]}
            isPrimary
          />
        </div>
        <p className="text-center mt-8 text-gray-600">
          Switch plans anytime. Volume discounts available for firms.
        </p>
      </div>
    </section>
  );
};

export default Pricing;