import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const caseStudies = [
  {
    id: 1,
    title: "IRCTC Mobile App Redesign",
    subtitle: "Improving usability and booking experience",
    description: "A complete redesign of the IRCTC app focused on enhancing usability, modernizing the interface, and improving the overall ticket booking experience.",
    image: "/img/irctc.png",
    detailUrl: "https://www.behance.net/gallery/205897235/Redesigning-the-IRCTC-App"
  },
  {
    id: 2,
    title: "Travel Matic - Travel Planning App",
    subtitle: "Creating a user-centric platform for seamless travel planning",
    description: "A sleek and intuitive mobile application that simplifies the process of planning and organizing trips, designed to offer travelers personalized recommendations and efficient itinerary management.",
    image: "/img/travel.png",
    detailUrl: "https://www.behance.net/gallery/221387459/Travelling-App-UI"
  }
];

const CaseStudySection = () => {
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

  return (
    <section id="case-study" className="relative py-0 bg-[#1A1F2C]">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#121212] to-[#1A1F2C] opacity-70"></div>
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-[#121212] to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-[#121212] to-transparent"></div>
      
      {/* Gradient orbs */}
      <div className="absolute top-1/3 left-1/4 w-72 h-72 rounded-full bg-teal-500/10 filter blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/3 w-80 h-80 rounded-full bg-blue-500/10 filter blur-3xl"></div>
      
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
            Case Studies
          </motion.h2>
          
          <motion.p 
            variants={itemVariants}
            className="text-gray-300 text-lg max-w-3xl mb-12"
          >
            Deep dive into selected projects to understand my design process, problem-solving approach, and the impact of my work.
          </motion.p>

          <motion.div 
            variants={itemVariants}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {caseStudies.map((caseStudy) => (
              <motion.div 
                key={caseStudy.id}
                className="glass-card overflow-hidden rounded-xl card-hover"
                variants={itemVariants}
                whileHover={{ y: -10 }}
              >
                <div className="relative aspect-video overflow-hidden">
                  <img 
                    src={caseStudy.image} 
                    alt={caseStudy.title} 
                    className="w-full h-full object-cover"
                  />
                  {/* Blurred gradient overlay removed */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/100 to-transparent"></div>
                  
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-1">
                      {caseStudy.title}
                    </h3>
                    <p className="text-purple-400 font-medium">
                      {caseStudy.subtitle}
                    </p>
                  </div>
                </div>
                
                <div className="p-6">
                  <p className="text-gray-300 mb-6">{caseStudy.description}</p>
                  <motion.a
                    href={caseStudy.detailUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-purple-600/80 hover:bg-purple-600 text-white rounded-md transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span>View Case Study</span>
                    <ExternalLink size={16} />
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CaseStudySection;
