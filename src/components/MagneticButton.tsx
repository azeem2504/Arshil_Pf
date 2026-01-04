import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'ghost';
}

const MagneticButton = ({ children, className, href, onClick, variant = 'primary' }: MagneticButtonProps) => {
  const ref = useRef<HTMLAnchorElement & HTMLButtonElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setPosition({ x: x * 0.3, y: y * 0.3 });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  const baseStyles = "relative inline-flex items-center justify-center px-8 py-4 text-base font-medium rounded-full transition-all duration-300 overflow-hidden group";
  
  const variants = {
    primary: "bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 text-white animate-gradient hover:shadow-[0_0_40px_rgba(168,85,247,0.4)]",
    secondary: "glass border border-white/10 text-foreground hover:border-white/20 hover:bg-white/5",
    ghost: "text-foreground hover:text-purple-400",
  };

  const Component = href ? 'a' : 'button';

  return (
    <motion.div
      style={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
    >
      <Component
        ref={ref as any}
        href={href}
        onClick={onClick}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className={cn(baseStyles, variants[variant], className)}
      >
        <span className="relative z-10 flex items-center gap-2">{children}</span>
        {variant === 'primary' && (
          <motion.div
            className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"
            initial={false}
          />
        )}
      </Component>
    </motion.div>
  );
};

export default MagneticButton;
