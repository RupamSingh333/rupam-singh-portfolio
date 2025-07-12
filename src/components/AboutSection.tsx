
import { MapPin, Mail, Youtube } from 'lucide-react';
import { motion } from 'framer-motion';
import { smoothBounceAnimation, textUpDownAnimation } from '@/types/animations';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm">
      <div className="container mx-auto px-6">
        <motion.h2 
          className="text-4xl md:text-5xl font-bold text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <motion.span 
            className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500 bg-clip-text text-transparent"
            animate={smoothBounceAnimation}
          >
            About Me
          </motion.span>
        </motion.h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div 
              className="space-y-6"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <motion.p 
                className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed"
                animate={textUpDownAnimation}
              >
                I'm a passionate software developer at <strong className="text-blue-600 font-semibold">Codelabs India</strong> with expertise in modern web technologies and AI integration. 
                I love creating digital solutions that make a real impact.
              </motion.p>
              
              <motion.p 
                className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed"
                animate={textUpDownAnimation}
              >
                With experience in full-stack development, I specialize in building scalable applications 
                using React, Next.js, Node.js, and various databases. I'm also passionate about integrating 
                AI technologies to create intelligent, user-friendly solutions.
              </motion.p>
              
              <div className="flex flex-wrap gap-4">
                <motion.div 
                  className="flex items-center space-x-2 text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-slate-700 px-4 py-2 rounded-full"
                  whileHover={{ x: 5, scale: 1.05 }}
                  animate={textUpDownAnimation}
                >
                  <MapPin className="h-5 w-5 text-blue-600" />
                  <span>India</span>
                </motion.div>
                <motion.div 
                  className="flex items-center space-x-2 text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-slate-700 px-4 py-2 rounded-full"
                  whileHover={{ x: 5, scale: 1.05 }}
                  animate={textUpDownAnimation}
                >
                  <Mail className="h-5 w-5 text-blue-600" />
                  <span>rupamkumar333@gmail.com</span>
                </motion.div>
                <motion.div 
                  className="flex items-center space-x-2 text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-slate-700 px-4 py-2 rounded-full"
                  whileHover={{ x: 5, scale: 1.05 }}
                  animate={textUpDownAnimation}
                >
                  <Youtube className="h-5 w-5 text-red-600" />
                  <a 
                    href="https://youtube.com/@codelabs_india?si=GtP7PycEuJZFVar0" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-red-600 transition-colors"
                  >
                    Codelabs India Channel
                  </a>
                </motion.div>
              </div>
            </motion.div>
            
            <motion.div 
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <motion.div 
                className="w-80 h-80 mx-auto bg-gradient-to-br from-blue-400 via-purple-500 to-cyan-400 rounded-full opacity-20"
                animate={{ 
                  scale: [1, 1.1, 1],
                  rotate: [0, 180, 360]
                }}
                transition={{ 
                  duration: 8, 
                  repeat: Infinity, 
                  ease: "easeInOut"
                }}
              />
              <motion.div 
                className="absolute inset-0 flex items-center justify-center"
                whileHover={{ scale: 1.05, rotate: 5 }}
                transition={{ duration: 0.5 }}
              >
                <div className="w-64 h-64 bg-gradient-to-br from-blue-600 via-purple-600 to-cyan-500 rounded-full flex items-center justify-center text-white text-6xl font-bold shadow-2xl">
                  <motion.span 
                    animate={smoothBounceAnimation}
                    className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-100"
                  >
                    RS
                  </motion.span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
