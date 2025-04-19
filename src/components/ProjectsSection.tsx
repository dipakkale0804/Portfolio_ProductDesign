import { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Eye } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: "Payment App UI Design",
    description: "Designed a high-fidelity UI for a payment app, focusing on usability and seamless transactions. Conducted user research and usability testing to refine the interface. Created interactive prototypes for a smooth user journey and engaging UI.",
    image: "/img/pay ui.png",
    tech: ["Figma", "Prototyping", "User Testing"],
    demoUrl: "https://www.figma.com/design/qGPlGi7yEEPndw47mGkNuT/Untitled?node-id=0-1&p=f",
    githubUrl: "#",
    caseStudyUrl: "#case-study"
  },
  {
    id: 2,
    title: "IRCTC App UI Redesign",
    description: "Created user flows and wireframes to enhance ticket booking efficiency by 40%. Designed a new UI to improve accessibility, navigation, and user experience. Conducted usability tests and iterated based on feedback for an optimized design.",
    image: "/img/irctc ui.png",
    tech: ["Figma", "User Testing", "Design System"],
    demoUrl: "https://www.figma.com/design/9K9vsFg3TJVWnrSWIxk0r0/IRCTC-Redesign",
    githubUrl: "#",
    caseStudyUrl: "#case-study"
  },
];

const ProjectsSection = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

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
    <section id="projects" className="relative py-4">
      <div className="absolute bottom-4 left-20 right-20 h-0.5 bg-gray-500/50"></div>

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
            Featured Projects
          </motion.h2>

          <motion.div 
            variants={itemVariants}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8"
          >
            {projects.map((project) => (
              <motion.div 
                key={project.id}
                className="glass-card overflow-hidden rounded-xl card-hover"
                variants={itemVariants}
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
                whileHover={{ y: -10 }}
              >
                <div className="relative overflow-hidden aspect-video">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-700 ease-in-out"
                    style={{ 
                      transform: hoveredProject === project.id ? 'scale(1.05)' : 'scale(1)'
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#121212] to-transparent opacity-70"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-1">{project.title}</h3>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {project.tech.map((tech, index) => (
                        <span key={index} className="px-2 py-1 bg-black/30 backdrop-blur-sm rounded-md text-white/90 text-xs">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <p className="text-gray-300 mb-6">{project.description}</p>
                  <div className="flex flex-wrap gap-3">
                    <motion.a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-theme-purple/80 hover:bg-theme-purple text-white rounded-md transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Eye size={16} />
                      <span>View</span>
                    </motion.a>
                    {/* Uncomment below if needed */}
                    {/* 
                    <motion.a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 text-white rounded-md transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Github size={16} />
                      <span>Source</span>
                    </motion.a>

                    <motion.a
                      href={project.caseStudyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 text-white rounded-md transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ExternalLink size={16} />
                      <span>Case Study</span>
                    </motion.a>
                    */}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
