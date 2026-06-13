import { Pricing } from "@/components/blocks/pricing";

const pricingPlans = [
  {
    name: "LANDING PAGE",
    price: "499",
    yearlyPrice: "399",
    period: "one-time",
    features: [
      "Bespoke UI/UX Design",
      "Fluid Vector Animations",
      "Core Web Vitals SEO",
      "Mobile Responsive",
      "Contact Form Integration",
    ],
    description: "Perfect for startups & personal brands",
    buttonText: "Get Quote",
    href: "#contacto",
    isPopular: false,
  },
  {
    name: "CORPORATE",
    price: "1299",
    yearlyPrice: "999",
    period: "one-time",
    features: [
      "Multi-page (Up to 5)",
      "Integrated CMS Platform",
      "3-Month Premium Support",
      "Custom Animations",
      "SEO Optimization",
      "Analytics Dashboard",
      "Priority Support",
    ],
    description: "Ideal for growing businesses",
    buttonText: "Get Started",
    href: "#contacto",
    isPopular: true,
  },
  {
    name: "TELL US YOUR BUDGET",
    price: "0",
    yearlyPrice: "0",
    period: "one-time",
    customPrice: "Let's Talk",
    features: [
      "Everything in Corporate",
      "Custom Web Applications",
      "Microservices Architecture",
      "Dedicated Account Manager",
      "24/7 Priority Support",
      "SLA Agreement",
      "Custom Integrations",
    ],
    description: "Tell us your needs and we'll tailor a solution",
    buttonText: "Contact Us",
    href: "#contacto",
    isPopular: false,
  },
];

export default function PricingSection() {
  return (
    <section id="precios" className="py-24">
      <div className="max-w-7xl mx-auto">
        <Pricing
          plans={pricingPlans}
          title="PRICING PLANS"
          description="Choose the plan that works for you. All plans include access to our platform, lead generation tools, and dedicated support."
        />
      </div>
    </section>
  );
}
