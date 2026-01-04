import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    { value: '2+', label: 'Years', sublabel: 'Experience' },
    { value: '10+', label: 'Projects', sublabel: 'Completed' },
    { value: '30+', label: 'Clients', sublabel: 'Worldwide' },
  ];

  const skills = ['React', 'TypeScript', 'Node.js', 'Next.js', 'TailwindCSS', 'REST APIs', 'System Design', 'Database Design', 'UI/UX'];

  return (
    <section id="about" className="py-24 lg:py-40 px-6 lg:px-12 bg-card" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-3 mb-4">
              <span className="w-8 h-[1px] bg-muted-foreground" />
              <span className="text-[11px] font-medium tracking-mega uppercase text-muted-foreground">
                About
              </span>
            </span>
            <h2 className="text-3xl lg:text-4xl font-semibold tracking-tight mb-8 leading-tight">
              Engineering software with purpose and precision.
            </h2>

            <div className="space-y-5 text-muted-foreground leading-relaxed">
              <p>
                I am a Computer Science and Engineering student focused on Software Development Engineering. I build full-stack applications and software systems with an emphasis on clean code, scalability, and real-world usability.
              </p>
              <p>
                My approach is rooted in strong fundamentals and problem-solving. I enjoy designing logical solutions, structuring systems effectively, and writing maintainable code that performs well and scales over time.
              </p>
              <p>
                I am continuously improving my skills in software development, data structures, algorithms, and system design, while building projects that reflect real-world use cases.
              </p>
            </div>
          </motion.div>

          {/* Right */}
          <div className="space-y-12">
            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid grid-cols-3 gap-6"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="text-center lg:text-left"
                >
                  <p className="text-3xl lg:text-4xl font-semibold mb-1">{stat.value}</p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                  <p className="text-xs text-muted-foreground/60">{stat.sublabel}</p>
                </motion.div>
              ))}
            </motion.div>

            {/* Skills */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <span className="text-[11px] font-medium tracking-mega uppercase text-muted-foreground block mb-4">
                Skills
              </span>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.3, delay: 0.4 + index * 0.05 }}
                    whileHover={{ scale: 1.05, backgroundColor: 'hsl(var(--foreground))', color: 'hsl(var(--background))' }}
                    className="px-5 py-2.5 text-sm border border-border transition-all duration-300 cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
