
import { useState, useEffect } from 'react';
import { useToast } from '@/hooks/use-toast';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import TechnologiesSection from '@/components/TechnologiesSection';
import ProjectsSection from '@/components/ProjectsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  const [isDark, setIsDark] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  return (
    <div className={`min-h-screen transition-all duration-700 ${isDark ? 'dark' : ''}`}>
      <div className="bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-900 dark:via-slate-800 dark:to-indigo-950 text-slate-900 dark:text-slate-100 transition-colors duration-700">
        
        <Navigation isDark={isDark} setIsDark={setIsDark} />
        <HeroSection />
        <AboutSection />
        <TechnologiesSection />
        <ProjectsSection />
        <ContactSection />
        <Footer />
        
      </div>
    </div>
  );
};

export default Index;
