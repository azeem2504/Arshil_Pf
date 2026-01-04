import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowUpRight, Send } from 'lucide-react';
import PremiumButton from './PremiumButton';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-24 lg:py-40 px-6 lg:px-12" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <span className="inline-flex items-center gap-3 mb-4">
            <span className="w-8 h-[1px] bg-muted-foreground" />
            <span className="text-[11px] font-medium tracking-mega uppercase text-muted-foreground">
              Contact
            </span>
          </span>
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-semibold tracking-tight mb-4 leading-tight">
            Let's create something extraordinary together.
          </h2>
          <p className="text-muted-foreground mb-8 leading-relaxed">
            Have a project in mind? I'm currently available for freelance work and exciting collaborations.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <PremiumButton variant="primary">
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();

                  // Gmail compose URL with just your email
                  const gmailUrl = "https://mail.google.com/mail/?view=cm&to=arshilazeem5@gmail.com";
                  const opened = window.open(gmailUrl, "_blank");

                  // Fallback to mailto if Gmail fails or popup blocked
                  if (!opened) {
                    window.location.href = "mailto:arshilazeem5@gmail.com";
                  }
                }}
                className="flex items-center gap-2"
              >
                <Send className="w-4 h-4" />
                Send a Message
              </a>
            </PremiumButton>

            <motion.span
              className="inline-flex items-center gap-2 text-sm text-muted-foreground"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <span className="w-2 h-2 rounded-full bg-green-500" />
              Available for work
            </motion.span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16 pt-12 border-t border-border"
        >
          <div className="grid sm:grid-cols-2 gap-8">
            <div>
              <span className="text-[11px] font-medium tracking-mega uppercase text-muted-foreground block mb-3">
                Email
              </span>
              <a
                href="https://mail.google.com/mail/?view=cm&to=arshilazeem5@gmail.com"
                target='_blank'
                rel='noopener noreferrer'
                className="group inline-flex items-center gap-3 text-xl lg:text-2xl font-medium hover:text-muted-foreground transition-colors"
              >
                arshilazeem5@gmail.com
                <ArrowUpRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            </div>

            <div>
              <span className="text-[11px] font-medium tracking-mega uppercase text-muted-foreground block mb-3">
                Location
              </span>
              <p className="text-xl lg:text-2xl font-medium text-muted-foreground">
                New Delhi, India
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
