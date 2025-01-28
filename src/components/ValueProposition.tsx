import ValueCard from "./ValueCard";
import { Brain, Briefcase, FileText, MessageSquare } from "lucide-react";

const ValueProposition = () => {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Initial Consultations",
      description: "Automate intake forms, analyze client needs, and generate preliminary advice with AI.",
    },
    {
      icon: Briefcase,
      title: "Seamless Case Management",
      description: "Track deadlines, assign tasks, and monitor progress in one unified dashboard.",
    },
    {
      icon: FileText,
      title: "Automated Demand Letters & Docs",
      description: "Generate legally compliant letters, contracts, and forms in seconds.",
    },
    {
      icon: MessageSquare,
      title: "Client Collaboration Hub",
      description: "Secure messaging, file sharing, and real-time updates to keep clients informed.",
    },
  ];

  return (
    <section className="py-16 px-4 bg-light-gray">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-navy">
          Transform Your Practice
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <ValueCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;