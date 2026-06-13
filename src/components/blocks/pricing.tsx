import { buttonVariants } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { useMediaQuery } from "@/hooks/use-media-query";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Check, Star } from "lucide-react";
import { useState, useRef } from "react";
import confetti from "canvas-confetti";
import NumberFlow from "@number-flow/react";
import type { NumberFlowProps } from "@number-flow/react";
import Reveal from "@/components/ui/reveal";

interface PricingPlan {
  name: string;
  price: string;
  yearlyPrice: string;
  period: string;
  features: string[];
  description: string;
  buttonText: string;
  href: string;
  isPopular: boolean;
  customPrice?: string;
}

interface PricingProps {
  plans: PricingPlan[];
  title?: string;
  description?: string;
}

export function Pricing({
  plans,
  title = "Simple, Transparent Pricing",
  description = "Choose the plan that works for you",
}: PricingProps) {
  const [isMonthly, setIsMonthly] = useState(true);
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const switchRef = useRef<HTMLButtonElement>(null);

  const handleToggle = (checked: boolean) => {
    setIsMonthly(!checked);
    if (checked && switchRef.current) {
      const rect = switchRef.current.getBoundingClientRect();
      const x = rect.left + rect.width / 2;
      const y = rect.top + rect.height / 2;

      confetti({
        particleCount: 50,
        spread: 60,
        origin: {
          x: x / window.innerWidth,
          y: y / window.innerHeight,
        },
        colors: ["#0066FF", "#0052cc", "#66a3ff", "#3385ff"],
        ticks: 200,
        gravity: 1.2,
        decay: 0.94,
        startVelocity: 30,
        shapes: ["circle"],
      });
    }
  };

  return (
    <div className="w-full py-20">
      <Reveal>
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-display font-bold text-white mb-4 md:mb-6">
            {title}
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base md:text-lg max-w-2xl mx-auto px-4">
            {description}
          </p>
        </div>
      </Reveal>

      <div className="flex justify-center items-center mb-10 gap-3">
        <span className={`text-sm font-medium ${isMonthly ? "text-white" : "text-neutral-500"}`}>Monthly</span>
        <Label>
          <Switch
            ref={switchRef}
            checked={!isMonthly}
            onCheckedChange={handleToggle}
          />
        </Label>
        <span className={`text-sm font-medium ${!isMonthly ? "text-white" : "text-neutral-500"}`}>
          Annual <span className="text-blue-400">(Save 20%)</span>
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        {plans.map((plan, index) => (
          <motion.div
            key={index}
            initial={{ y: 50, opacity: 0 }}
            whileInView={{
              opacity: 1,
              y: 0,
              ...(isDesktop && {
                y: plan.isPopular ? -20 : 0,
                x: index === 2 ? -30 : index === 0 ? 30 : 0,
                scale: index === 0 || index === 2 ? 0.94 : 1.0,
              }),
            }}
            viewport={{ once: true }}
            transition={{
              duration: 1.6,
              type: "spring",
              stiffness: 100,
              damping: 30,
              delay: 0.4,
              opacity: { duration: 0.5 },
            }}
            className={cn(
              `rounded-2xl border p-4 md:p-6 text-center relative backdrop-blur-sm`,
              plan.isPopular
                ? "border-blue-500 border-2 bg-blue-500/5"
                : "border-blue-900/30 bg-dark-900/60",
              "flex flex-col",
              !plan.isPopular && "mt-0 md:mt-5",
              index === 0 || index === 2 ? "z-0" : "z-10",
              index === 0 && "md:origin-right",
              index === 2 && "md:origin-left"
            )}
          >
            {plan.isPopular && (
              <div className="absolute top-0 right-0 bg-[var(--clr-btn-default)] py-0.5 px-2 rounded-bl-xl rounded-tr-xl flex items-center">
                <Star className="text-white h-4 w-4 fill-current" />
                <span className="text-white ml-1 font-sans font-semibold text-xs">
                  Popular
                </span>
              </div>
            )}
            <div className="flex-1 flex flex-col">
              <p className="text-sm md:text-base font-semibold text-neutral-400">
                {plan.name}
              </p>
              {plan.customPrice ? (
                <div className="mt-6">
                  <span className="text-2xl md:text-5xl font-bold tracking-tight text-white">
                    {plan.customPrice}
                  </span>
                </div>
              ) : (
                <>
                  <div className="mt-6 flex items-center justify-center gap-x-2">
                    <span className="text-3xl md:text-5xl font-bold tracking-tight text-white">
                      <NumberFlow
                        value={isMonthly ? Number(plan.price) : Number(plan.yearlyPrice)}
                        prefix="$"
                        format={{
                          minimumFractionDigits: 0,
                          maximumFractionDigits: 0,
                        }}
                        transformTiming={{
                          duration: 500,
                          easing: "ease-out",
                        }}
                        willChange
                        className="font-variant-numeric: tabular-nums"
                      />
                    </span>
                    {plan.period !== "Next 3 months" && (
                      <span className="text-sm font-semibold leading-6 tracking-wide text-neutral-500">
                        / {plan.period}
                      </span>
                    )}
                  </div>

                  <p className="text-xs leading-5 text-neutral-500 mt-1">
                    {isMonthly ? "billed monthly" : "billed annually"}
                  </p>
                </>
              )}

              <ul className="mt-5 gap-2 flex flex-col">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-blue-400 mt-1 flex-shrink-0" />
                    <span className="text-left text-neutral-300 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <hr className="w-full my-4 border-blue-900/30" />

              <a
                href={plan.href}
                className={cn(
                  buttonVariants({
                    variant: plan.isPopular ? "default" : "outline",
                  }),
                  "group relative w-full gap-2 overflow-hidden text-lg font-semibold tracking-tighter",
                  "transform-gpu ring-offset-current transition-all duration-300 ease-out hover:ring-2 hover:ring-[var(--clr-btn-outline-text)] hover:ring-offset-1",
                  plan.isPopular
                    ? "bg-[var(--clr-btn-default)] text-white hover:bg-[var(--clr-btn-default-hover)]"
                    : ""
                )}
              >
                {plan.buttonText}
              </a>
              <p className="mt-4 text-xs leading-5 text-neutral-500">
                {plan.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
