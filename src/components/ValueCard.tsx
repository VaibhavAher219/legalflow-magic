import { LucideIcon } from "lucide-react";

interface ValueCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const ValueCard = ({ icon: Icon, title, description }: ValueCardProps) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="mb-4">
        <Icon className="w-12 h-12 text-navy" />
      </div>
      <h3 className="text-xl font-semibold mb-2 text-navy">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default ValueCard;