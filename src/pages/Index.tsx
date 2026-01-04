import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Work from '@/components/Work';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import LoadingScreen from '@/components/LoadingScreen';
import ScrollReveal from '@/components/ScrollReveal';
import SkillsMarquee from '@/components/SkillsMarquee';

const Index = () => {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading && <LoadingScreen onComplete={() => setLoading(false)} />}
      <div className="min-h-screen bg-background noise">
        <Navigation />
        <Hero />
        <SkillsMarquee />
        <ScrollReveal>
          <Work />
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <About />
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <Contact />
        </ScrollReveal>
        <Footer />
      </div>
    </>
  );
};

export default Index;
