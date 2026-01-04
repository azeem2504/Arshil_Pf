import { motion } from 'framer-motion';

const skills = [
  'React',
  'Next.js',
  'Node.js',
  'TypeScript',
  'Firebase',
  'Tailwind',
  'Framer Motion',
  'Three.js',
  'Python',
  'AI',
  'Full-Stack',
  'Databases',
  'Git',
  'Algorithms',
  'Problem Solving'
];


const SkillsMarquee = () => {
  return (
    <div className="relative py-8 overflow-hidden border-y border-border/50">
      {/* Gradient overlays */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />
      
      <div className="flex">
        <motion.div
          animate={{ x: [0, -50 * skills.length] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: 'loop',
              duration: 25,
              ease: 'linear',
            },
          }}
          className="flex gap-8 items-center"
        >
          {[...skills, ...skills, ...skills].map((skill, index) => (
            <div
              key={index}
              className="flex items-center gap-8 whitespace-nowrap"
            >
              <span className="text-lg md:text-xl font-medium text-foreground/80 hover:text-foreground transition-colors duration-300">
                {skill}
              </span>
              <span className="w-2 h-2 rounded-full bg-foreground/20" />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default SkillsMarquee;
