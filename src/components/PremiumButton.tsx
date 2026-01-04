import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface PremiumButtonProps {
  children: ReactNode;
  href?: string;
  variant?: 'primary' | 'secondary' | 'outline';
  className?: string;
  onClick?: () => void;
}

const PremiumButton = ({ children, href, variant = 'primary', className, onClick }: PremiumButtonProps) => {
  const baseStyles = "relative inline-flex items-center justify-center overflow-hidden group cursor-pointer";
  
  const variants = {
    primary: "h-14 px-10",
    secondary: "h-12 px-8",
    outline: "h-12 px-6",
  };

  const Component = href ? motion.a : motion.button;

  if (variant === 'primary') {
    return (
      <Component
        href={href}
        onClick={onClick}
        whileHover={{ scale: 1.05, y: -2 }}
        whileTap={{ scale: 0.98 }}
        className={cn(baseStyles, variants[variant], "rounded-full glass-button", className)}
      >
        {/* Liquid glass gradient overlay */}
        <span className="absolute inset-0 rounded-full bg-gradient-to-br from-white/20 via-transparent to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Shimmer effect */}
        <span className="absolute inset-0 rounded-full overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/30 to-transparent" />
        </span>
        
        {/* Text */}
        <span className="relative z-10 text-sm font-medium tracking-wide text-foreground flex items-center gap-2">
          {children}
        </span>
      </Component>
    );
  }

  if (variant === 'secondary') {
    return (
      <Component
        href={href}
        onClick={onClick}
        whileHover={{ scale: 1.05, y: -2 }}
        whileTap={{ scale: 0.98 }}
        className={cn(baseStyles, variants[variant], "rounded-full glass-button", className)}
      >
        {/* Liquid glass gradient overlay */}
        <span className="absolute inset-0 rounded-full bg-gradient-to-br from-white/10 via-transparent to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Text */}
        <span className="relative z-10 text-sm font-medium tracking-wide text-foreground flex items-center gap-2">
          {children}
        </span>
      </Component>
    );
  }

  // Outline variant
  return (
    <Component
      href={href}
      onClick={onClick}
      whileHover={{ x: 5 }}
      className={cn(baseStyles, variants[variant], "group", className)}
    >
      <span className="relative z-10 text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300 flex items-center gap-2">
        {children}
        <motion.span 
          className="w-4 h-[1px] bg-current"
          initial={{ width: 16 }}
          whileHover={{ width: 24 }}
        />
      </span>
    </Component>
  );
};

export default PremiumButton;
