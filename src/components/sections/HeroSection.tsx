import Hero from '@/components/ui/animated-shader-hero';

export default function HeroSection() {
  const handleExplore = () => {
    document.getElementById('servicios')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="inicio">
      <Hero
        headline={{
          line1: "ENGINEERING",
          line2: "NEXT-GEN SOFTWARE"
        }}
        subtitle="We build ultra-scalable digital platforms, robust backend architectures, and high-performance user interfaces. Turning complex business requirements into sleek, production-ready code."
        buttons={{
          primary: {
            text: "Explore Solutions",
            onClick: handleExplore
          }
        }}
      />
    </section>
  );
}
