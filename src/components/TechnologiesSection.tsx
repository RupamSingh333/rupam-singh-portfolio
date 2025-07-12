
import { Card, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { containerVariants, itemVariants, smoothBounceAnimation, textUpDownAnimation } from '@/types/animations';

const TechnologiesSection = () => {
  const technologies = [
    { name: 'Next.js', icon: '⚡', color: 'from-black to-gray-700' },
    { name: 'React.js', icon: '⚛️', color: 'from-blue-400 to-blue-600' },
    { name: 'Node.js', icon: '🟢', color: 'from-green-400 to-green-600' },
    { name: 'PHP', icon: '🐘', color: 'from-purple-400 to-purple-600' },
    { name: 'CakePHP', icon: '🍰', color: 'from-red-400 to-red-600' },
    { name: 'MongoDB', icon: '🍃', color: 'from-green-500 to-green-700' },
    { name: 'MySQL', icon: '🐬', color: 'from-blue-500 to-blue-700' },
    { name: 'HTML', icon: '📄', color: 'from-orange-400 to-orange-600' },
    { name: 'JavaScript', icon: '💛', color: 'from-yellow-400 to-yellow-600' },
    { name: 'AI Integration', icon: '🤖', color: 'from-cyan-400 to-cyan-600' },
    { name: 'WhatsApp Messaging', icon: '💬', color: 'from-green-400 to-green-600' },
    { name: 'Mobile & Web Apps', icon: '📱', color: 'from-indigo-400 to-indigo-600' }
  ];

  return (
    <section id="technologies" className="py-20">
      <div className="container mx-auto px-6">
        <motion.h2 
          className="text-4xl md:text-5xl font-bold text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
          viewport={{ once: true }}
        >
          <motion.span 
            className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500 bg-clip-text text-transparent"
            animate={smoothBounceAnimation}
          >
            Technologies
          </motion.span>
        </motion.h2>
        
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.08, 
                rotateY: 10,
                boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
                y: -8
              }}
              transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <Card className="hover:shadow-2xl border-slate-200 dark:border-slate-700 bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm h-full transition-all duration-500">
                <CardContent className="p-6 text-center">
                  <motion.div 
                    className="text-4xl mb-3"
                    animate={{ 
                      rotate: [0, 10, -10, 0],
                      scale: [1, 1.1, 1]
                    }}
                    transition={{ 
                      duration: 3, 
                      repeat: Infinity, 
                      delay: index * 0.2,
                      ease: [0.25, 0.46, 0.45, 0.94]
                    }}
                  >
                    {tech.icon}
                  </motion.div>
                  <motion.h3 
                    className="font-semibold text-slate-800 dark:text-slate-200"
                    animate={textUpDownAnimation}
                  >
                    {tech.name}
                  </motion.h3>
                  <motion.div 
                    className={`mt-2 h-1 bg-gradient-to-r ${tech.color} rounded-full`}
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    transition={{ 
                      duration: 1.5, 
                      delay: index * 0.1,
                      ease: [0.25, 0.46, 0.45, 0.94]
                    }}
                    viewport={{ once: true }}
                  />
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TechnologiesSection;
