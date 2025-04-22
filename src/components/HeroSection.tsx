import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

const HeroSection = () => {
  const scrollToProjects = () => {
    const projectsSection = document.querySelector('#projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-hero opacity-70"></div>
      
      {/* Animated dots/particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            // key={i}
            // className="absolute w-1 h-1 md:w-2 md:h-2 rounded-full bg-white/20"
            // initial={{ 
            //   x: Math.random() * 100 - 50 + "%", 
            //   y: Math.random() * 100 - 50 + "%"
            // }}
            // animate={{ 
            //   x: [
            //     Math.random() * 100 - 50 + "%", 
            //     Math.random() * 100 - 50 + "%",
            //     Math.random() * 100 - 50 + "%"
            //   ],
            //   y: [
            //     Math.random() * 100 - 50 + "%",
            //     Math.random() * 100 - 50 + "%",
            //     Math.random() * 100 - 50 + "%"
            //   ]
            // }}
            // transition={{ 
            //   duration: 10 + Math.random() * 20, 
            //   repeat: Infinity,
            //   ease: "linear"
            // }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-4"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-sm md:text-base font-medium mb-4">
            Designer | Developer
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-white"
        >
          Hi, I'm <span className="animated-gradient-text">Dipak Kale</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-8 text-center px-4"
          style={{
            fontFamily: '"DM Sans", sans-serif',
            fontSize: '22px',
            lineHeight: '35.6px',
            color: 'transparent',
            background: 'linear-gradient(to right, #3498db, #ffffff)',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            display: 'inline-block',
          }}>
          Developer & Product Designer skilled in building scalable, user-centric digital experiences. I craft intuitive interfaces by blending design thinking with modern development practices to drive real-world impact.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col md:flex-row gap-4 justify-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary"
            onClick={scrollToProjects}
          >
            View My Work
          </motion.button>

          {/* Resume Button */}
          <motion.a
            href="https://drive.google.com/file/d/1K3v23avSUT1nJdqAZXgaB_8MQkd9okeG/view?usp=sharing" 
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-outline"
          >
            Resume
          </motion.a>
        </motion.div>
      </div>

      {/* Black blur gradient at the bottom */}
      <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-black/80 to-transparent backdrop-blur-sm pointer-events-none z-0" />

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          duration: 1,
          delay: 1.2, 
          repeat: Infinity,
          repeatType: "reverse" 
        }}
      >
        <ArrowDown className="w-6 h-6 text-white/70" />
      </motion.div>
    </section>
  );
};

export default HeroSection;
