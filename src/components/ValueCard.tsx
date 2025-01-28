import { LucideIcon } from "lucide-react";

interface ValueCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const ValueCard = ({ icon: Icon, title, description }: ValueCardProps) => {
  return (
    <div className="group bg-white p-8 rounded-2xl transition-all duration-300 hover:shadow-lg border border-gray-100">
      <div className="mb-6 transform transition-transform duration-300 group-hover:scale-110">
        <div className="w-14 h-14 bg-navy/5 rounded-xl flex items-center justify-center">
          <Icon className="w-7 h-7 text-navy" />
        </div>
      </div>
      <h3 className="text-xl font-semibold mb-4 text-navy group-hover:text-gold transition-colors duration-300">
        {title}
      </h3>
      <p className="text-gray-600 leading-relaxed">
        {description}
      </p>
    </div>
  );
};

export default ValueCard;