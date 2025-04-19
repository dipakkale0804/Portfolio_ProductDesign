
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <footer className="relative bg-[#0F1319] py-10 md:py-16">
      <div className="absolute inset-0 bg-gradient-to-t from-[#0F1319] to-[#121212] opacity-50"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-center"
        >
          {/* <motion.div variants={itemVariants} className="mb-6 md:mb-0">
            <span className="text-2xl font-bold animated-gradient-text">Dipak </span>
          </motion.div> */}
{/*           
          <motion.div variants={itemVariants} className="flex gap-6 md:gap-10 mb-6 md:mb-0">
            <a href="#about" className="text-gray-400 hover:text-white transition-colors">About</a>
            <a href="#skills" className="text-gray-400 hover:text-white transition-colors">Skills</a>
            <a href="#projects" className="text-gray-400 hover:text-white transition-colors">Projects</a>
            <a href="#case-study" className="text-gray-400 hover:text-white transition-colors">Case Study</a>
            <a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a>
          </motion.div> */}
          
          <motion.div variants={itemVariants} className="flex gap-4">

</motion.div>

        </motion.div>
        
        <motion.div 
          variants={itemVariants}
          className="border-t border-white/10 mt-8 pt-8 text-center"
        >
          <p className="text-gray-400 flex items-center justify-center gap-1">
  © {currentYear} All rights reserved. 
  <a href="https://github.com/dipakkale0804" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
    Dipak Kale
  </a>
</p>

        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
