import Header from '@/components/layout/Header';
import HeroSection from '@/components/sections/HeroSection';
import ServicesSection from '@/components/sections/ServicesSection';
import BlogSection from '@/components/sections/BlogSection';
import PricingSection from '@/components/sections/PricingSection';
import ContactSection from '@/components/sections/ContactSection';
import FooterSection from '@/components/sections/FooterSection';
import OptimizedMeshGradient from '@/components/ui/optimized-mesh-gradient';
import ScrollProgressBar from '@/components/ui/scroll-progress';
import TawkToChat from '@/components/ui/tawkto-chat';
import { ThemeProvider } from '@/hooks/use-theme';
import { ReactLenis } from 'lenis/react';

function SectionDivider() {
  return (
    <div className="relative h-16 bg-dark-900 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-dark-900 via-blue-500/5 to-dark-900" />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <ReactLenis root options={{ lerp: 0.08, duration: 1.2, smoothWheel: true }}>
        <div className="min-h-screen bg-dark-950">
          <TawkToChat />
          <ScrollProgressBar />
          <Header />
          <main>
            <HeroSection />
            <SectionDivider />
            <ServicesSection />
            <SectionDivider />
            <BlogSection />
            <SectionDivider />

            <div className="relative overflow-hidden">
              <OptimizedMeshGradient />
              <div className="relative z-10">
                <PricingSection />
                <ContactSection />
              </div>
            </div>
          </main>
          <FooterSection />
        </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
