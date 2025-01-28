import { Info, Calculator, Check } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";

const Pricing = () => {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-3 text-navy">
          Simple, Success-Driven Pricing
        </h2>
        <p className="text-gray-600 text-center mb-12 text-lg">
          Pay a low annual fee, then only when your case succeeds.
        </p>

        <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-semibold text-navy">
              Flexible Annual Plan + Case Success Fee
            </h3>
            <Calculator className="text-gray-400 h-5 w-5" />
          </div>

          <div className="space-y-6">
            <div className="space-y-2">
              <div className="flex items-baseline gap-4">
                <span className="text-4xl font-bold text-gold">$50/year</span>
                <div className="flex items-center gap-2">
                  <span className="text-2xl font-semibold text-navy">
                    + $500/case
                  </span>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger>
                        <Info className="h-4 w-4 text-gray-400" />
                      </TooltipTrigger>
                      <TooltipContent className="max-w-xs">
                        The $500 success fee ensures we're aligned with your goals.
                        You're only charged when a case resolves, whether through
                        settlement, win, or dismissal.
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
              </div>
              <p className="text-gray-600">
                Billed only when your case closes successfully.
              </p>
            </div>

            <div className="space-y-4 py-6">
              <div className="space-y-2">
                <p className="text-sm text-gray-600">Your Cost Structure</p>
                <Progress value={50} className="h-2" />
                <div className="flex justify-between text-sm text-gray-600">
                  <span>$50/year (static)</span>
                  <span>$500/case (success-based)</span>
                </div>
              </div>
            </div>

            <ul className="space-y-3">
              {[
                "Unlimited AI consultations & case management tools.",
                "Automated demand letters + document generation.",
                "Client portal with secure messaging.",
                "$500 fee applies only when a case concludes (win or settle).",
              ].map((benefit, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{benefit}</span>
                </li>
              ))}
            </ul>

            <Button
              className="w-full py-6 text-lg bg-green-600 hover:bg-green-700 transition-colors"
              size="lg"
            >
              Start Today – $50/year
            </Button>

            <div className="space-y-2 text-sm text-gray-600 pt-4">
              <p>No hidden fees. Volume discounts for firms with 10+ cases/year.</p>
              <p>Cancel annual plan anytime. Case fees apply only for closed cases.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;