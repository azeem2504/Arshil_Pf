import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { cn } from '@/lib/utils';

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  image: string;
  link?: string;
  className?: string;
  color?: string;
}

const ProjectCard = ({ title, description, tags, image, link = '#', className, color = 'purple' }: ProjectCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const colorClasses = {
    purple: 'from-purple-500/20 to-pink-500/20 group-hover:from-purple-500/30 group-hover:to-pink-500/30',
    blue: 'from-blue-500/20 to-cyan-500/20 group-hover:from-blue-500/30 group-hover:to-cyan-500/30',
    orange: 'from-orange-500/20 to-yellow-500/20 group-hover:from-orange-500/30 group-hover:to-yellow-500/30',
    green: 'from-green-500/20 to-emerald-500/20 group-hover:from-green-500/30 group-hover:to-emerald-500/30',
  };

  return (
    <motion.a
      href={link}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={cn(
        'group block relative rounded-2xl overflow-hidden border-gradient bg-card',
        className
      )}
      whileHover={{ y: -10, scale: 1.02 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* Image container */}
      <div className="relative aspect-[16/10] overflow-hidden">
        <motion.div
          className={`absolute inset-0 bg-gradient-to-br ${colorClasses[color as keyof typeof colorClasses]} z-10 transition-all duration-500`}
        />
        <motion.img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
          animate={{ scale: isHovered ? 1.1 : 1 }}
          transition={{ duration: 0.6 }}
        />
        
        {/* Hover overlay */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent z-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        />

        {/* Arrow icon */}
        <motion.div
          className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center z-30"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ 
            opacity: isHovered ? 1 : 0, 
            scale: isHovered ? 1 : 0.5,
            rotate: isHovered ? 0 : -45 
          }}
          transition={{ duration: 0.3 }}
        >
          <ArrowUpRight className="w-5 h-5 text-white" />
        </motion.div>
      </div>
      
      {/* Content */}
      <div className="p-6 relative z-10">
        <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-gradient transition-all duration-300">
          {title}
        </h3>
        
        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
          {description}
        </p>
        
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="text-xs font-medium px-3 py-1 rounded-full bg-white/5 text-muted-foreground border border-white/5"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.a>
  );
};

export default ProjectCard;
