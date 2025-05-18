import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";

const skills = [
  { name: "HTML", icon: "https://skillicons.dev/icons?i=html" },
  { name: "CSS", icon: "https://skillicons.dev/icons?i=css" },
  { name: "JavaScript", icon: "https://skillicons.dev/icons?i=javascript" },
  { name: "React", icon: "https://skillicons.dev/icons?i=react" },
  {
    name: "Redux Toolkit",
    icon: "https://raw.githubusercontent.com/reduxjs/redux/master/logo/logo.png",
  },
  {
    name: "React Query",
    icon: "https://images.seeklogo.com/logo-png/43/2/react-query-logo-png_seeklogo-435661.png",
  },
  { name: "Tailwind", icon: "https://skillicons.dev/icons?i=tailwind" },
  { name: "Bootstrap", icon: "https://skillicons.dev/icons?i=bootstrap" },
  { name: "Git", icon: "https://skillicons.dev/icons?i=git" },
  { name: "Github", icon: "https://skillicons.dev/icons?i=github" },
  { name: "Material Ui", icon: "https://skillicons.dev/icons?i=mui" },
  { name: "Postman", icon: "https://skillicons.dev/icons?i=postman" },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-16 px-8 bg-[#0f0e1b] text-white">
      <div className="text-center mb-12">
        <motion.h2
          className="text-4xl font-bold text-[#8245ec]"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Skills
        </motion.h2>
        <p className="text-gray-400 mt-2">Technologies I work with</p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 justify-items-center">
        {skills.map((skill, index) => (
          <Tilt
            key={index}
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            perspective={1000}
            scale={1.05}
            transitionSpeed={800}
            className="w-full"
          >
            <motion.div
              className="group relative bg-[#1a192d] rounded-xl p-6 flex flex-col items-center border border-transparent hover:border-[#8245ec] transition duration-300 shadow-[0_0_0_1px_rgba(255,255,255,0.05)] hover:shadow-[0_0_15px_1px_#8245ec55]"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <img src={skill.icon} alt={skill.name} className="w-16 h-16" />
              <p className="mt-4 text-lg font-medium text-white">
                {skill.name}
              </p>
            </motion.div>
          </Tilt>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
