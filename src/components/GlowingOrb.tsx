import { motion } from 'framer-motion';

interface GlowingOrbProps {
  size?: number;
  color?: string;
  delay?: number;
  className?: string;
}

const GlowingOrb = ({ size = 400, color = 'purple', delay = 0, className }: GlowingOrbProps) => {
  const colors = {
    purple: 'from-purple-500/30 via-purple-600/20 to-transparent',
    pink: 'from-pink-500/30 via-pink-600/20 to-transparent',
    blue: 'from-blue-500/30 via-blue-600/20 to-transparent',
    cyan: 'from-cyan-500/30 via-cyan-600/20 to-transparent',
  };

  return (
    <motion.div
      className={`absolute rounded-full blur-3xl bg-gradient-radial ${colors[color as keyof typeof colors]} ${className}`}
      style={{ width: size, height: size }}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{
        opacity: [0.3, 0.6, 0.3],
        scale: [1, 1.2, 1],
        x: [0, 50, 0],
        y: [0, -30, 0],
      }}
      transition={{
        duration: 10,
        repeat: Infinity,
        ease: "easeInOut",
        delay,
      }}
    />
  );
};

export default GlowingOrb;
