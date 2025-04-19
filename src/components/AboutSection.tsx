
import { motion } from 'framer-motion';
import { Linkedin, Github, Mail, FileText, ExternalLink } from 'lucide-react';

const AboutSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
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

  const socialLinks = [
    { icon: Linkedin, href: 'https://www.linkedin.com/in/dipakkale0804', label: 'LinkedIn' },
    { icon: Github, href: 'https://github.com/dipakkale0804', label: 'GitHub' },
    { icon: ExternalLink, href: 'https://www.behance.net/designsofdipak', label: 'Behance' },
    // { icon: ExternalLink, href: 'https://medium.com', label: 'Medium' },
    { icon: Mail, href: 'mailto:dipakpkale08@gmail.com', label: 'Email' },
  ];

  return (
    <section id="about" className="relative py-20 md:py-0 overflow-hidden">
    <div className="absolute inset-0 bg-[#121212] opacity-90"></div>
    
    {/* Gradient orbs */}
    <div className="absolute top-1/4 left-0 w-64 h-64 rounded-full bg-theme-purple/20 filter blur-3xl"></div>
    <div className="absolute bottom-1/4 right-0 w-80 h-80 rounded-full bg-theme-blue/20 filter blur-3xl"></div>
    
    {/* Add the line */}
    <div className="absolute bottom-4 left-20 right-20 h-0.5 bg-gray-500/50"></div>
    
    <div className="section-container relative z-10">
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <motion.h2 
        variants={itemVariants} 
        className="section-title"
      >
        About Me
      </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
            <motion.div variants={itemVariants} className="order-2 md:order-1">
              <p className="text-gray-300 text-lg mb-6">
              I'm Dipak Kale, a passionate Product Designer with expertise in creating user-centric digital experiences.
              </p>
              <p className="text-gray-300 text-lg mb-6">
              Skilled in tools like Figma, Adobe XD, and Sketch, I design intuitive interfaces and high-fidelity prototypes, ensuring seamless user flows. I stay up to date with trends like design systems, motion design, and micro-interactions.
              </p>
              <p className="text-gray-300 text-lg mb-8">
              I have experience with HTML, CSS, JavaScript, and frameworks like React, Vue.js, and Node.js. This allows me to bridge design and development, creating scalable, user-friendly solutions that drive both user satisfaction and business success.


              </p>
              
              <motion.div 
                variants={itemVariants}
                className="flex flex-wrap gap-4"
              >
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 rounded-md transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <link.icon size={18} className="text-theme-purple" />
                    <span className="text-white text-sm">{link.label}</span>
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>
            
            <motion.div 
              variants={itemVariants}
              className="order-1 md:order-2 flex justify-center md:justify-end"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-theme-purple to-theme-blue opacity-40 rounded-lg blur-md transform rotate-6"></div>
                <img 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=700&q=80"
                  alt="Designer Portrait" 
                  className="w-full max-w-sm rounded-lg shadow-xl relative z-10 object-cover aspect-[3/4]"
                />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
