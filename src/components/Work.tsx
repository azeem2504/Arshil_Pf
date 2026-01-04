import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ArrowUpRight } from 'lucide-react';

const projects = [
  {
    title: 'Kode AI',
    category: 'Full-Stack / Agentic AI',
    year: '2025',
    description: 'A platform that converts text prompts into fully functional web applications using AI, allowing users to generate, preview, and purchase AI-created apps, built with modern web technologies.',
    image: 'image.png',
    link: 'https://kode-ai-fawn.vercel.app'
  },
  {
    title: 'Roomify AI',
    category: 'Full-Stack / AI',
    year: '2025',
    description: 'A web application that lets users upload room photos and generates AI-based interior redesigns, built with Next.js and AI APIs.',
    image: 'image-copy.png',
    link: 'https://roomify-ai.vercel.app'
  },
  {
    title: 'Quoridor Game',
    category: 'Full-Stack / Game',
    year: '2024',
    description: 'A real-time multiplayer board game built with Next.js and Firebase Realtime Database, featuring smooth gameplay, interactive UI, and real-time updates.',
    image: 'image-copy-2.png',
    link: 'https://tpkpg.vercel.app'
  },
  {
  title: 'NotFile',
  category: 'Full-Stack / P2P',
  year: '2024',
  description: 'A peer-to-peer file sharing application enabling secure and fast file transfers between users, built with modern web technologies for real-time communication and efficiency.',
  image: 'image-copy-3.png',
  link: 'https://not-file.onrender.com'
},
];


const ProjectCard = ({ project, index }: { project: typeof projects[0]; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.a
      ref={ref}
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group block"
    >
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden bg-muted mb-5">
        <motion.img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-contain bg-black"
          animate={{ scale: isHovered ? 1.08 : 1 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        />

        {/* Overlay */}
        <motion.div
          className="absolute inset-0 bg-background/90 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            className="w-16 h-16 border-2 border-foreground flex items-center justify-center"
            initial={{ scale: 0.5, rotate: -45 }}
            animate={{
              scale: isHovered ? 1 : 0.5,
              rotate: isHovered ? 0 : -45,
            }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <ArrowUpRight className="w-6 h-6 text-foreground" />
          </motion.div>
        </motion.div>

        {/* Corner lines on hover */}
        <motion.span
          className="absolute top-4 left-4 w-8 h-[1px] bg-foreground origin-left"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        />
        <motion.span
          className="absolute top-4 left-4 w-[1px] h-8 bg-foreground origin-top"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
        />
        <motion.span
          className="absolute bottom-4 right-4 w-8 h-[1px] bg-foreground origin-right"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        />
        <motion.span
          className="absolute bottom-4 right-4 w-[1px] h-8 bg-foreground origin-bottom"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
        />
      </div>

      {/* Info */}
      <div className="space-y-3">
        <div className="flex items-start justify-between">
          <div>
            <motion.h3
              className="text-lg font-medium mb-1"
              animate={{ x: isHovered ? 8 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {project.title}
            </motion.h3>
            <p className="text-sm text-muted-foreground">{project.category}</p>
          </div>
          <span className="text-sm text-muted-foreground">{project.year}</span>
        </div>

        {/* Description with smooth reveal */}
        <motion.div
          className="overflow-hidden"
          initial={{ height: 0, opacity: 0 }}
          animate={{
            height: isHovered ? 'auto' : 0,
            opacity: isHovered ? 1 : 0
          }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.p
            className="text-sm text-muted-foreground leading-relaxed pt-2 border-t border-border/50"
            initial={{ y: 10 }}
            animate={{ y: isHovered ? 0 : 10 }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            {project.description}
          </motion.p>
        </motion.div>
      </div>
    </motion.a>
  );
};

const Work = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="work" className="py-24 lg:py-40 px-6 lg:px-12" ref={ref}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-16"
        >
          <div>
            <span className="inline-flex items-center gap-3 mb-3">
              <span className="w-8 h-[1px] bg-muted-foreground" />
              <span className="text-[11px] font-medium tracking-mega uppercase text-muted-foreground">
                Selected Work
              </span>
            </span>
            <h2 className="text-3xl lg:text-4xl font-semibold tracking-tight">
              Featured Projects
            </h2>
          </div>
          <motion.a
            href="https://github.com/azeem2504?tab=repositories"
            target='_blank'
            rel='noopener noreferrer'
            whileHover={{ x: 5 }}
            className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2 group"
          >
            View All
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </motion.a>
        </motion.div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 gap-8 lg:gap-12">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
