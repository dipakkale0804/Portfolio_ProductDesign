
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      
      toast({
        title: "Message sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
        variant: "default",
      });
      
      // Reset success state after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 1500);
  };

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

  const formFieldVariants = {
    rest: { scale: 1 },
    focus: { scale: 1.02 }
  };

  return (
    <section id="contact" className="relative py-5">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[#121212] opacity-90"></div>
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-[#1A1F2C] to-transparent"></div>
      
  {/* Gradient orbs */}
      <div className="absolute top-1/4 left-0 w-64 h-64 rounded-full bg-theme-purple/20 filter blur-3xl"></div>
      <div className="absolute bottom-1/4 right-0 w-80 h-80 rounded-full bg-theme-blue/20 filter blur-3xl"></div>
      
      <div className="section-container relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <motion.h2 
            variants={itemVariants} 
            className="section-title"
          >
            Get In Touch
          </motion.h2>
          
          <motion.p 
            variants={itemVariants}
            className="text-gray-300 text-lg max-w-3xl mb-12"
          >
           
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
            <motion.div variants={itemVariants}>
              <form onSubmit={handleSubmit} className="space-y-6">
                <motion.div
                  variants={formFieldVariants}
                  initial="rest"
                  whileFocus="focus"
                  className="space-y-2"
                >
                  <label htmlFor="name" className="block text-gray-300 text-sm">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-theme-purple/50 focus:border-theme-purple/50 transition-all"
                  />
                </motion.div>
                
                <motion.div
                  variants={formFieldVariants}
                  initial="rest"
                  whileFocus="focus"
                  className="space-y-2"
                >
                  <label htmlFor="email" className="block text-gray-300 text-sm">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-theme-purple/50 focus:border-theme-purple/50 transition-all"
                  />
                </motion.div>
                
                <motion.div
                  variants={formFieldVariants}
                  initial="rest"
                  whileFocus="focus"
                  className="space-y-2"
                >
                  <label htmlFor="message" className="block text-gray-300 text-sm">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-theme-purple/50 focus:border-theme-purple/50 transition-all resize-none"
                  />
                </motion.div>
                
                <motion.button
                  type="submit"
                  className={`inline-flex items-center gap-2 px-6 py-3 rounded-md font-medium transition-all ${
                    isSubmitted
                      ? 'bg-green-600 hover:bg-green-700 text-white'
                      : 'bg-theme-purple hover:bg-theme-purple/90 text-white'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Sending...</span>
                    </>
                  ) : isSubmitted ? (
                    <>
                      <CheckCircle size={18} />
                      <span>Message Sent!</span>
                    </>
                  ) : (
                    <a
                    href="mailto:dipakpkale08@gmail.com"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Send Message
                  </a>
                  )}
                </motion.button>
              </form>
            </motion.div>
            
            <motion.div variants={itemVariants} className="glass-card p-8">
              <h3 className="text-xl md:text-2xl font-semibold mb-6 text-white">Contact Information</h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-theme-purple font-medium mb-2">Email</h4>
                  <a
                    href="mailto:dipakpkale08@gmail.com"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    dipakpkale08@gmail.com
                  </a>
                </div>
                
                <div>
                  <h4 className="text-theme-purple font-medium mb-2">Location</h4>
                  <p className="text-gray-300">India, Maharashtra</p>
                </div>
                
                <div>
                  <h4 className="text-theme-purple font-medium mb-2">Follow Me</h4>
                  <div className="flex gap-4">
                  
              
                    
                  <motion.a
  href="https://github.com/dipakkale0804"
  target="_blank"
  className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-white transition-colors"
  whileHover={{ scale: 1.1, backgroundColor: "rgba(139, 92, 246, 0.3)" }}
  whileTap={{ scale: 0.9 }}
>
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
  </svg>
</motion.a>

<motion.a
  href="https://www.linkedin.com/in/dipakkale0804"
  target="_blank"
  className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-white transition-colors"
  whileHover={{ scale: 1.1, backgroundColor: "rgba(14, 118, 168, 0.3)" }}
  whileTap={{ scale: 0.9 }}
>
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.49 8.98H4.5V24H.49V8.98zm7.95 0H12.4v2.02h.06c.54-1 1.84-2.05 3.79-2.05 4.05 0 4.8 2.67 4.8 6.13V24H17.1v-6.72c0-1.6-.03-3.66-2.23-3.66-2.23 0-2.57 1.74-2.57 3.54V24H8.44V8.98z" />
  </svg>
</motion.a>

<motion.a
  href="https://www.behance.net/designsofdipak"
  target="_blank"
  className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-white transition-colors"
  whileHover={{ scale: 1.1, backgroundColor: "rgba(0, 119, 181, 0.3)" }}
  whileTap={{ scale: 0.9 }}
>
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M22 9.24h-6.71c.17-1.04.94-1.58 2.3-1.58 1.04 0 1.85.34 2.16.94h2.02c-.45-2.14-2.29-3.2-4.18-3.2-2.49 0-4.31 1.79-4.31 4.37s1.82 4.34 4.31 4.34c2.56 0 4.3-1.84 4.3-4.33v-.54h-4.3c.02-.57.28-1.16 1.39-1.16 1.01 0 1.32.46 1.42 1.16H22v-.5zm-8.66 3.35c0-2.6-1.74-4.37-4.19-4.37H0v12.55h9.15c2.47 0 4.19-1.73 4.19-4.34 0-1.6-.61-2.68-1.74-3.32 1.14-.65 1.74-1.63 1.74-3.02zm-4.85 6.6H3.41v-3.36h5.08c.97 0 1.6.73 1.6 1.66 0 .91-.63 1.7-1.6 1.7zm.25-5.23H3.41V9.6h5.33c.9 0 1.5.69 1.5 1.56 0 .83-.6 1.58-1.5 1.58zm9.01-8.64h-3.53v1.51h3.53V5z" />
  </svg>
</motion.a>



                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
