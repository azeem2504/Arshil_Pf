import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useRef } from 'react';
import PremiumButton from './PremiumButton';

const Hero = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start']
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
  const contentY = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);

  return (
    <section ref={sectionRef} className="relative min-h-screen flex items-center py-24 lg:py-32 overflow-hidden">
      {/* Background with parallax */}
      <div className="absolute inset-0">
        {/* Desktop: Split layout */}
        <div className="hidden lg:block absolute inset-0">
          <div className="absolute left-0 top-0 bottom-0 w-1/2 bg-background" />
          <div className="absolute right-0 top-0 bottom-0 w-1/2 overflow-hidden">
            <motion.img
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
              style={{ y: imageY, scale: imageScale }}
              src="image-pfp.png"
              alt="Portrait"
              className="w-full h-[120%] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background via-background/50 to-transparent" />
          </div>
        </div>

        {/* Mobile: Full background */}
        <div className="lg:hidden absolute inset-0 overflow-hidden">
          <motion.img
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.3 }}
            transition={{ duration: 1.5 }}
            style={{ y: imageY }}
            src="image-pfp.png"
            alt="Portrait"
            className="w-full h-[120%] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/90 to-background/70" />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12">
        <div className="max-w-2xl">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-7"
          >
            <span className="inline-flex items-center py-2 px-4 rounded-full bg-muted/30 backdrop-blur-sm">
              <span className="text-xs font-medium tracking-wide uppercase text-muted-foreground">
                Software Developer
              </span>
            </span>
          </motion.div>

          {/* Headline */}
          <div className="space-y-2 mb-10">
            <div className="overflow-hidden">
              <motion.h1
                initial={{ y: '100%' }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="text-[clamp(2.5rem,7vw,5.5rem)] font-semibold leading-[1.05] tracking-tight"
              >
                Engineering
              </motion.h1>
            </div>
            <div className="overflow-hidden">
              <motion.h1
                initial={{ y: '100%' }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="text-[clamp(2.5rem,7vw,5.5rem)] font-semibold leading-[1.05] tracking-tight text-muted-foreground"
              >
                software
              </motion.h1>
            </div>
            <div className="overflow-hidden">
              <motion.h1
                initial={{ y: '100%' }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="text-[clamp(2.5rem,7vw,5.5rem)] font-semibold leading-[1.05] tracking-tight"
              >
                that scales.
              </motion.h1>
            </div>
          </div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="text-base text-muted-foreground max-w-md leading-relaxed mb-12"
          >
           I engineer reliable applications with precision and care.
            Every component, every interaction, every performance detail matters.
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="flex flex-wrap items-center gap-4"
          >
            <PremiumButton href="#work" variant="primary">
              View Work
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </PremiumButton>
            <PremiumButton href="#about" variant="secondary">
              Learn More
            </PremiumButton>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border border-muted-foreground/30 rounded-full flex justify-center pt-2"
        >
          <motion.div
            className="w-1.5 h-1.5 bg-foreground rounded-full"
            animate={{ y: [0, 12, 0], opacity: [1, 0.3, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
