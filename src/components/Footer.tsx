
import { Github, Linkedin, Facebook, Instagram, Youtube } from 'lucide-react';
import { motion } from 'framer-motion';
import { smoothBounceAnimation } from '@/types/animations';

const Footer = () => {
  return (
    <motion.footer 
      className="py-12 bg-slate-100/70 dark:bg-slate-900/70 backdrop-blur-sm border-t border-slate-200 dark:border-slate-700"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <div className="container mx-auto px-6">
        <div className="text-center">
          <motion.p 
            className="text-slate-600 dark:text-slate-300 mb-6 font-medium"
            animate={{ opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            <motion.span animate={smoothBounceAnimation}>
              Made with ❤️ by Rupam Singh | Codelabs India
            </motion.span>
          </motion.p>
          
          <div className="flex justify-center space-x-6">
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
                className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-500"
                whileHover={{ 
                  scale: 1.4, 
                  rotate: 20,
                  y: -5,
                  boxShadow: "0 10px 25px rgba(59, 130, 246, 0.3)"
                }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.8, 
                  delay: index * 0.1,
                  ease: "easeOut"
                }}
              >
                <social.icon className="h-6 w-6" />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
