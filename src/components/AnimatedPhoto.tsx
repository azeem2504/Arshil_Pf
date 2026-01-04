import { motion } from 'framer-motion';
import { useState } from 'react';

interface AnimatedPhotoProps {
  src: string;
  alt: string;
}

const AnimatedPhoto = ({ src, alt }: AnimatedPhotoProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div 
      className="relative cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ type: "spring", duration: 0.8 }}
    >
      {/* Animated gradient ring */}
      <motion.div
        className="absolute -inset-4 rounded-full"
        style={{
          background: 'conic-gradient(from 0deg, #a855f7, #ec4899, #0ea5e9, #10b981, #a855f7)',
          padding: '3px',
        }}
        animate={{ rotate: 360 }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
      >
        <div className="w-full h-full rounded-full bg-background" />
      </motion.div>

      {/* Glow effect */}
      <motion.div
        className="absolute -inset-8 rounded-full bg-purple-500/20 blur-2xl"
        animate={{
          scale: isHovered ? 1.3 : 1,
          opacity: isHovered ? 0.6 : 0.3,
        }}
        transition={{ duration: 0.4 }}
      />

      {/* Main photo container */}
      <motion.div
        className="relative w-40 h-40 sm:w-52 sm:h-52 md:w-64 md:h-64 rounded-full overflow-hidden border-2 border-purple-500/30"
        animate={{
          scale: isHovered ? 1.05 : 1,
          borderColor: isHovered ? 'rgba(168, 85, 247, 0.6)' : 'rgba(168, 85, 247, 0.3)',
        }}
        transition={{ duration: 0.3 }}
      >
        <motion.img
          src={src}
          alt={alt}
          className="w-full h-full object-cover"
          animate={{
            scale: isHovered ? 1.15 : 1,
          }}
          transition={{ duration: 0.4 }}
        />

        {/* Shine overlay */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/30 to-transparent"
          initial={{ x: '-150%', y: '-150%' }}
          animate={isHovered ? { x: '150%', y: '150%' } : { x: '-150%', y: '-150%' }}
          transition={{ duration: 0.6 }}
        />

        {/* Color overlay on hover */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-purple-600/40 to-transparent"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>

      {/* Orbiting particles */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 rounded-full"
          style={{
            background: i % 2 === 0 ? '#a855f7' : '#ec4899',
            left: '50%',
            top: '50%',
          }}
          animate={{
            x: [
              Math.cos((i * 45 * Math.PI) / 180) * 100,
              Math.cos(((i * 45 + 180) * Math.PI) / 180) * 100,
              Math.cos((i * 45 * Math.PI) / 180) * 100,
            ],
            y: [
              Math.sin((i * 45 * Math.PI) / 180) * 100,
              Math.sin(((i * 45 + 180) * Math.PI) / 180) * 100,
              Math.sin((i * 45 * Math.PI) / 180) * 100,
            ],
            opacity: [0.3, 0.8, 0.3],
            scale: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 6,
            delay: i * 0.3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </motion.div>
  );
};

export default AnimatedPhoto;
