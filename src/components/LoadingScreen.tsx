import { motion } from 'framer-motion';

interface LoadingScreenProps {
  onComplete: () => void;
}

const LoadingScreen = ({ onComplete }: LoadingScreenProps) => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 0.8, delay: 2 }}
      onAnimationComplete={onComplete}
      className="fixed inset-0 z-[100] bg-background flex items-center justify-center"
    >
      <div className="relative">
        {/* Logo text with reveal */}
        <div className="overflow-hidden">
          <motion.h1
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-4xl md:text-6xl font-semibold tracking-tight"
          >
            ARSHIL AZEEM
          </motion.h1>
        </div>
        
        {/* Loading bar */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.5, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="absolute -bottom-4 left-0 right-0 h-[2px] bg-foreground origin-left"
        />
      </div>
    </motion.div>
  );
};

export default LoadingScreen;
