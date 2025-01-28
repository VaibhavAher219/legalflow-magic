import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

interface PricingCardProps {
  title: string;
  price: string;
  benefits: string[];
  isPrimary?: boolean;
}

const PricingCard = ({ title, price, benefits, isPrimary = false }: PricingCardProps) => {
  return (
    <div
      className={`p-8 rounded-lg ${
        isPrimary ? "bg-navy text-white" : "bg-white"
      } shadow-lg hover:shadow-xl transition-shadow duration-300`}
    >
      <h3 className="text-2xl font-bold mb-4">{title}</h3>
      <div className="mb-6">
        <span className="text-4xl font-bold">{price}</span>
      </div>
      <ul className="space-y-4 mb-8">
        {benefits.map((benefit, index) => (
          <li key={index} className="flex items-center">
            <Check className="w-5 h-5 mr-2 text-gold" />
            <span>{benefit}</span>
          </li>
        ))}
      </ul>
      <Button
        className={`w-full ${
          isPrimary
            ? "bg-gold hover:bg-gold/90 text-navy"
            : "bg-navy hover:bg-navy/90 text-white"
        }`}
      >
        Choose Plan
      </Button>
    </div>
  );
};

export default PricingCard;