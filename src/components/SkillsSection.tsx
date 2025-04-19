
import { motion } from 'framer-motion';

const skills = {
  "UI/UX Tools": [
    "Figma", "Adobe XD", "Sketch", "InVision", "Framer", "Photoshop",
  ],
  "Frontend Tech": [
    "HTML", "CSS", "Bootstrap", "Tailwind CSS", "JavaScript", "React.js", "Next.js", "Vue.js"
  ],
  "Prototyping & Animation": [
    "Figma Prototypes", "Framer", "ProtoPie", "After Effects", "Origami Studio"
  ],
  "Design Process": [
    "User Research", "Wireframing", "Usability Testing", "Design Systems", "A/B Testing", 
    "UI Design", "Interaction Design", "Product Design", "Design Thinking"
  ]
};


const SkillsSection = () => {
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
    <section id="skills" className="relative py-5">
  {/* Add the line */}
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
        Skills
      </motion.h2>

      <motion.div 
        variants={itemVariants}
        className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8"
      >
       
            {Object.entries(skills).map(([category, skillList]) => (
              <motion.div 
                key={category}
                variants={itemVariants}
                className="glass-card p-6 md:p-8"
              >
                <h3 className="text-xl md:text-2xl font-semibold mb-6 text-white">
                  {category}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {skillList.map((skill) => (
                    <motion.span
                      key={skill}
                      className="skill-badge"
                      whileHover={{ 
                        scale: 1.05,
                        backgroundColor: "rgba(139, 92, 246, 0.3)",
                      }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Skill bars - animated on scroll */}
          <motion.div 
            variants={itemVariants}
            // className="mt-16 glass-card p-6 md:p-8"
          >
            {/* <h3 className="text-xl md:text-2xl font-semibold mb-6 text-white">
              Proficiency
            </h3> */}

            <div className="space-y-6">
              {[
                // { name: "UI Design", percentage: 100 },
                // { name: "UX Research", percentage: 100 },
                // { name: "Prototyping", percentage: 100 },
                // { name: "Frontend Development", percentage: 100 }
              ].map((skill) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-300">{skill.name}</span>
                    <span className="text-theme-purple">{skill.percentage}%</span>
                  </div>
                  <motion.div 
                    className="h-2 bg-white/10 rounded-full overflow-hidden"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                  >
                    <motion.div 
                      className="h-full bg-gradient-skill rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.percentage}%` }}
                      transition={{ duration: 1, ease: "easeOut" }}
                      viewport={{ once: true }}
                    />
                  </motion.div>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
