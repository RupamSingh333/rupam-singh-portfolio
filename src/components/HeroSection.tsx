import { useState, useEffect, useRef } from 'react';
import { Download, Github, Linkedin, Facebook, Instagram, Phone, Youtube } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { nameVariants, letterVariants, smoothBounceAnimation } from '@/types/animations';

const HeroSection = () => {

  const [typewriterText, setTypewriterText] = useState('');
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  const typewriterWords = [
    'Building digital experiences',
    'Creating innovative solutions',
    'Developing modern web apps',
    'Integrating AI technologies',
    'Crafting user-friendly interfaces'
  ];

  const typingSpeed = 120;    // Slower and smoother
  const deletingSpeed = 70;
  const pauseAfterTyping = 2000;
  const pauseAfterDeleting = 500;

  // Refs for persistency across re-renders
  const charIndexRef = useRef(0);
  const isDeletingRef = useRef(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleTyping = () => {
      const currentWord = typewriterWords[currentWordIndex];
      let updatedText = '';

      if (!isDeletingRef.current) {
        updatedText = currentWord.substring(0, charIndexRef.current + 1);
        setTypewriterText(updatedText);
        charIndexRef.current++;

        if (updatedText === currentWord) {
          isDeletingRef.current = true;
          timeoutRef.current = setTimeout(handleTyping, pauseAfterTyping);
          return;
        }
      } else {
        updatedText = currentWord.substring(0, charIndexRef.current - 1);
        setTypewriterText(updatedText);
        charIndexRef.current--;

        if (charIndexRef.current === 0) {
          isDeletingRef.current = false;
          setCurrentWordIndex((prev) => (prev + 1) % typewriterWords.length);
          timeoutRef.current = setTimeout(handleTyping, pauseAfterDeleting);
          return;
        }
      }

      timeoutRef.current = setTimeout(
        handleTyping,
        isDeletingRef.current ? deletingSpeed : typingSpeed
      );
    };

    timeoutRef.current = setTimeout(handleTyping, 500);

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [currentWordIndex]);


  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden">
      {/* Enhanced floating background elements */}
      <motion.div
        className="absolute top-20 left-10 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl"
        animate={{
          y: [0, -40, 0],
          x: [0, 30, 0],
          scale: [1, 1.2, 1]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0
        }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-40 h-40 bg-purple-500/10 rounded-full blur-2xl"
        animate={{
          y: [0, 40, 0],
          x: [0, -25, 0],
          scale: [1, 1.3, 1]
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 w-24 h-24 bg-cyan-500/10 rounded-full blur-xl"
        animate={{
          y: [0, -20, 0],
          x: [0, 20, 0],
          rotate: [0, 180, 360]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />

      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          {/* Updated name without "Kumar" and same effect as "building digital experiences" */}
          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-6"
            variants={nameVariants}
            initial="hidden"
            animate="visible"
          >
            {"Rupam Singh".split("").map((char, index) => (
              <motion.span
                key={index}
                className="inline-block bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500 bg-clip-text text-transparent"
                variants={letterVariants}
                initial="hidden"
                animate="visible"
                transition={{
                  duration: 0.8,
                  delay: index * 0.05,
                  ease: "easeOut"
                }}
                whileHover={{
                  scale: 1.2,
                  rotate: [0, -5, 5, 0],
                  transition: { duration: 0.5 }
                }}
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </motion.h1>

          <motion.div
            className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 mb-4 max-w-3xl mx-auto h-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
          >
            <motion.span
              key={typewriterText}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-medium"
            >
              {typewriterText}
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 1, repeat: Infinity }}
                className="ml-1 text-blue-600"
              >
                |
              </motion.span>
            </motion.span>
          </motion.div>

          <motion.p
            className="text-lg text-slate-500 dark:text-slate-400 mb-8 font-medium"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
          >
            <motion.span animate={{ y: [0, -8, 0], transition: { duration: 1.5, repeat: Infinity, ease: "easeInOut" } }}>
              with passion and precision
            </motion.span>
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.0, ease: "easeOut" }}
          >
            <motion.div
              whileHover={{
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)",
                y: -5
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3 }}
            >
              <Button
                size="lg"
                className="text-white bg-gradient-to-r from-blue-500 via-purple-600 to-cyan-500 hover:brightness-110 hover:shadow-lg dark:shadow-blue-900/40 px-8 py-3 rounded-full transition-all duration-300"
                onClick={() => {
                  const link = document.createElement('a');
                  link.href = '/rupam-singh-portfolio/rupam-kumar-singh-resume-73.pdf';
                  link.download = 'Rupam_Singh_Resume.pdf';
                  link.click();
                }}
              >
                <Download className="mr-2 h-5 w-5" />
                Download Resume
              </Button>


            </motion.div>

            <div className="flex space-x-4">
              {[
                { href: "https://github.com/RupamSingh333", icon: Github },
                { href: "https://www.linkedin.com/in/rupam-kumar-1061321b2", icon: Linkedin },
                { href: "https://www.facebook.com/Rupamsingh.0007", icon: Facebook },
                { href: "https://www.instagram.com/rupamsingh_007", icon: Instagram },
                { href: "https://youtube.com/@codelabs_india?si=GtP7PycEuJZFVar0", icon: Youtube }
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-slate-200/70 dark:bg-slate-700/70 hover:bg-slate-300 dark:hover:bg-slate-600 transition-all duration-500 backdrop-blur-sm"
                  whileHover={{
                    scale: 1.3,
                    rotate: 15,
                    boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
                    y: -5
                  }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.8,
                    delay: 1.2 + index * 0.1,
                    ease: "easeOut"
                  }}
                >
                  <social.icon className="h-6 w-6" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Enhanced phone number display */}
          <motion.div
            className="text-lg font-semibold text-slate-600 dark:text-slate-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.4, ease: "easeOut" }}
          >
            <motion.div
              className="flex items-center justify-center space-x-2 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 px-6 py-3 rounded-full backdrop-blur-sm border border-green-200 dark:border-green-700"
              animate={{
                y: [0, -8, 0],
                transition: {
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }
              }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 25px rgba(34, 197, 94, 0.2)"
              }}
            >
              <Phone className="h-5 w-5 text-green-600" />
              <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent font-bold">
                +91 8538945025
              </span>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
