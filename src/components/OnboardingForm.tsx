import { Card } from "@/components/ui/card";

const OnboardingForm = () => {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6">
          Get Started with Associate Attorney AI
        </h2>
        <p className="text-lg text-gray-600 mb-8">
          Fill out this quick form to begin your journey towards AI-powered legal practice management.
        </p>
        <Card className="p-4 md:p-6 shadow-lg">
          <iframe
            src="YOUR_GOOGLE_FORM_URL_HERE"
            className="w-full min-h-[600px] border-0"
            title="Onboarding Form"
          />
        </Card>
        <p className="mt-4 text-sm text-gray-500">
          Your information is secure and will never be shared with third parties.
        </p>
      </div>
    </section>
  );
};

export default OnboardingForm;