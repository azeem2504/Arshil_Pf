import { Code2, Palette, Layers, Sparkles, Globe, Zap } from 'lucide-react';
import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';

const skills = [
  {
    icon: Code2,
    title: 'Development',
    description: 'React, TypeScript, Node.js, and modern web technologies to build robust applications.',
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    icon: Palette,
    title: 'Design',
    description: 'Creating visual systems that are both beautiful and functional, with attention to every detail.',
    gradient: 'from-pink-500 to-orange-500',
  },
  {
    icon: Layers,
    title: 'Design Systems',
    description: 'Building scalable component libraries and documentation for consistent experiences.',
    gradient: 'from-orange-500 to-yellow-500',
  },
  {
    icon: Sparkles,
    title: 'Animation',
    description: 'Bringing interfaces to life with thoughtful motion design and micro-interactions.',
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Globe,
    title: 'Web Performance',
    description: 'Optimizing for speed, accessibility, and seamless experiences across all devices.',
    gradient: 'from-cyan-500 to-green-500',
  },
  {
    icon: Zap,
    title: 'Prototyping',
    description: 'Rapidly iterating on ideas to validate concepts and refine user experiences.',
    gradient: 'from-green-500 to-emerald-500',
  },
];

const SkillCard = ({ skill, index, isInView }: { skill: typeof skills[0]; index: number; isInView: boolean }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40, rotateX: -15 }}
      animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative group perspective-1000"
    >
      <motion.div
        animate={{ 
          rotateY: isHovered ? 5 : 0,
          rotateX: isHovered ? -5 : 0,
          z: isHovered ? 50 : 0,
        }}
        transition={{ duration: 0.3 }}
        className="glass-card rounded-2xl p-8 h-full relative overflow-hidden"
      >
        {/* Gradient background on hover */}
        <motion.div
          className={`absolute inset-0 bg-gradient-to-br ${skill.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
        />
        
        {/* Icon */}
        <motion.div 
          className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${skill.gradient} flex items-center justify-center mb-6 relative`}
          whileHover={{ scale: 1.1, rotate: 5 }}
        >
          <skill.icon className="w-7 h-7 text-white" />
          
          {/* Glow effect */}
          <motion.div
            className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${skill.gradient} blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-300`}
          />
        </motion.div>
        
        <h3 className="text-xl font-semibold text-foreground mb-3 relative z-10">
          {skill.title}
        </h3>
        
        <p className="text-sm text-muted-foreground leading-relaxed relative z-10">
          {skill.description}
        </p>

        {/* Corner accent */}
        <motion.div
          className={`absolute -bottom-10 -right-10 w-40 h-40 bg-gradient-to-br ${skill.gradient} rounded-full opacity-0 group-hover:opacity-20 blur-2xl transition-opacity duration-500`}
        />
      </motion.div>
    </motion.div>
  );
};

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-24 sm:py-32 px-6 relative" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase bg-purple-500/10 text-purple-400 border border-purple-500/20 mb-6"
          >
            Expertise
          </motion.span>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-6">
            What I
            <span className="text-gradient"> do best</span>
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A blend of technical skills and creative thinking to deliver 
            exceptional digital products.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <SkillCard key={skill.title} skill={skill} index={index} isInView={isInView} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
