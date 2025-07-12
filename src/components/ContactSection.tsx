
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { motion } from 'framer-motion';
import { smoothBounceAnimation, textUpDownAnimation } from '@/types/animations';

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-slate-50/60 dark:bg-slate-800/60 backdrop-blur-sm">
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
            Get In Touch
          </motion.span>
        </motion.h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div 
              className="space-y-8"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <motion.div animate={textUpDownAnimation}>
                <h3 className="text-2xl font-bold mb-4 text-slate-800 dark:text-slate-200">
                  Let's Create Something Amazing Together
                </h3>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  I'm always excited to work on new projects and collaborate with fellow developers. 
                  Whether you have a project in mind or just want to say hello, feel free to reach out!
                </p>
              </motion.div>
              
              <div className="space-y-6">
                {[
                  { icon: Mail, text: 'rupamkumar333@gmail.com', href: 'mailto:rupamkumar333@gmail.com' },
                  { icon: Phone, text: '+91 8538945025', href: 'tel:+918538945025' },
                  { icon: MapPin, text: 'India', href: '#' }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center space-x-4 p-4 bg-white/70 dark:bg-slate-700/70 rounded-lg backdrop-blur-sm hover:bg-white/90 dark:hover:bg-slate-700/90 transition-all duration-300"
                    whileHover={{ x: 5, scale: 1.02 }}
                    animate={textUpDownAnimation}
                  >
                    <item.icon className="h-6 w-6 text-blue-600" />
                    <span className="text-slate-700 dark:text-slate-300">{item.text}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            <motion.div 
              className="bg-white/70 dark:bg-slate-700/70 p-8 rounded-2xl backdrop-blur-sm shadow-xl"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <Input placeholder="Your Name" className="bg-white/50 dark:bg-slate-600/50" />
                  <Input placeholder="Your Email" type="email" className="bg-white/50 dark:bg-slate-600/50" />
                </div>
                <Input placeholder="Subject" className="bg-white/50 dark:bg-slate-600/50" />
                <Textarea 
                  placeholder="Your Message"
                  rows={5}
                  className="bg-white/50 dark:bg-slate-600/50"
                />
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button className="w-full bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500 hover:from-blue-700 hover:via-purple-700 hover:to-cyan-600 text-white py-3 rounded-full transition-all duration-500">
                    <Send className="mr-2 h-5 w-5" />
                    Send Message
                  </Button>
                </motion.div>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
