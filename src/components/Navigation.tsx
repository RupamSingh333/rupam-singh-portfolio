
import { useState, useEffect } from 'react';
import { Moon, Sun, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';
import { smoothBounceAnimation, textUpDownAnimation, liquidGlassVariants } from '@/types/animations';

interface NavigationProps {
  isDark: boolean;
  setIsDark: (isDark: boolean) => void;
}

const Navigation = ({ isDark, setIsDark }: NavigationProps) => {
  const [activeLink, setActiveLink] = useState<string>('');
  const [glassEffect, setGlassEffect] = useState<{ x: number; y: number; show: boolean }>({
    x: 0,
    y: 0,
    show: false
  });

  const handleCallUs = () => {
    window.open('tel:+918538945025', '_self');
  };

  const handleNavClick = (item: string, event: React.MouseEvent) => {
    const rect = event.currentTarget.getBoundingClientRect();
    setGlassEffect({
      x: rect.left + rect.width / 2,
      y: rect.top + rect.height / 2,
      show: true
    });
    setActiveLink(item);
    
    // Hide glass effect after animation
    setTimeout(() => {
      setGlassEffect(prev => ({ ...prev, show: false }));
    }, 800);
    
    // Smooth scroll to section
    const element = document.getElementById(item.toLowerCase().replace(' ', ''));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <motion.nav 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="fixed top-0 left-0 right-0 z-50 bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl border-b border-slate-200 dark:border-slate-700 transition-all duration-500"
      >
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <motion.div 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="text-xl font-bold"
          >
            <motion.span 
              className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500 bg-clip-text text-transparent"
              animate={smoothBounceAnimation}
            >
              Codelabs India
            </motion.span>
          </motion.div>
          
          <div className="hidden md:flex items-center space-x-8 relative">
            {['Home', 'About', 'Technologies', 'Projects', 'Contact'].map((item, index) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase().replace(' ', '')}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item, e);
                }}
                className="hover:text-blue-600 transition-all duration-300 relative group cursor-pointer"
                whileHover={{ y: -3, scale: 1.05 }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1, ease: "easeOut" }}
              >
                <motion.span animate={textUpDownAnimation}>
                  {item}
                </motion.span>
                <motion.div
                  className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-500"
                />
              </motion.a>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            <motion.div 
              whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(34, 197, 94, 0.3)" }} 
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3 }}
            >
              <Button
                onClick={handleCallUs}
                className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white px-6 py-2 rounded-full transition-all duration-500 shadow-lg"
              >
                <Phone className="mr-2 h-4 w-4" />
                Call Us
              </Button>
            </motion.div>
            
            <motion.div 
              whileHover={{ rotate: 180, scale: 1.1 }} 
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsDark(!isDark)}
                className="p-2 rounded-full hover:bg-slate-200 dark:hover:bg-slate-700 transition-all duration-300"
              >
                {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </Button>
            </motion.div>
          </div>
        </div>
      </motion.nav>

      {/* Liquid Glass Effect */}
      <AnimatePresence>
        {glassEffect.show && (
          <motion.div
            className="fixed pointer-events-none z-40"
            style={{
              left: glassEffect.x - 50,
              top: glassEffect.y - 50,
            }}
            variants={liquidGlassVariants}
            initial="initial"
            animate="animate"
            exit="initial"
          >
            <div className="w-24 h-24 bg-gradient-to-br from-blue-400/30 via-purple-400/30 to-cyan-400/30 backdrop-blur-xl border border-white/20 shadow-2xl" />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;
