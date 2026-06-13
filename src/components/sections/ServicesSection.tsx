import { Code2, Server, Smartphone } from 'lucide-react';
import { SplineScene } from '@/components/ui/spline-scene';
import { Spotlight } from '@/components/ui/spotlight';
import { Card } from '@/components/ui/card';
import Reveal from '@/components/ui/reveal';

const services = [
  {
    icon: Code2,
    title: 'Frontend Development',
    description: 'Dynamic, responsive, and ultra-fast interfaces built using the latest web standards and performance frameworks.',
  },
  {
    icon: Server,
    title: 'Backend Architecture',
    description: 'Robust infrastructure, highly optimized relational databases, and secure APIs designed to scale your business operations.',
  },
  {
    icon: Smartphone,
    title: 'Mobile Engineering',
    description: 'Native and cross-platform mobile application development delivering seamless animations and offline capabilities.',
  },
];

export default function ServicesSection() {
  return (
    <section id="servicios" className="bg-dark-900">
      <Card className="w-full min-h-screen bg-black/[0.96] relative overflow-hidden border-blue-900/30 border-x-0 rounded-none">
        <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="white" />

        <Reveal>
          <div className="text-center pt-16 md:pt-24 pb-6 md:pb-8 max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
            <h2 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-display font-bold text-white mb-4 md:mb-6">
              SERVICES
            </h2>
            <div className="w-20 md:w-32 h-0.5 md:h-1 bg-blue-500 mx-auto" />
          </div>
        </Reveal>

        <div className="flex flex-col md:flex-row min-h-screen md:min-h-[900px] max-w-7xl mx-auto pb-6 md:pb-12 relative z-10">
          <div className="md:flex-[1.2] px-4 py-4 md:p-16 flex flex-col justify-center gap-4 md:gap-8">
            {services.map((service, i) => (
              <Reveal key={service.title} delay={i * 0.15}>
                <div className="group flex items-start gap-4 md:gap-6 p-4 md:p-8 rounded-xl md:rounded-2xl bg-dark-900/60 backdrop-blur-sm hover:bg-dark-900/80 transition-all duration-300 border border-blue-900/30 hover:border-blue-500/30">
                  <div className="w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-blue-500/10 flex items-center justify-center shrink-0 group-hover:bg-blue-500/20 transition-colors">
                    <service.icon className="w-6 h-6 md:w-8 md:h-8 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-lg md:text-2xl font-semibold text-white">{service.title}</h3>
                    <p className="text-sm md:text-lg text-neutral-400 mt-1 md:mt-2 leading-relaxed max-w-xl">{service.description}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="md:flex-[2] relative h-[500px] md:h-auto">
            <Reveal delay={0.3} className="w-full h-full">
              <SplineScene
                scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                className="w-full h-full"
              />
            </Reveal>
          </div>
        </div>
      </Card>
    </section>
  );
}
