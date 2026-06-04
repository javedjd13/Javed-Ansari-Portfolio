import { useState } from "react";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";

const skillSections = [
  {
    title: "Frontend",
    description:
      "Building responsive, accessible, and modern user interfaces with clean component architecture.",
    skills: [
      { name: "HTML", icon: "https://skillicons.dev/icons?i=html" },
      { name: "CSS", icon: "https://skillicons.dev/icons?i=css" },
      {
        name: "JavaScript",
        icon: "https://skillicons.dev/icons?i=javascript",
      },
      { name: "React", icon: "https://skillicons.dev/icons?i=react" },
      { name: "Next.js", icon: "https://skillicons.dev/icons?i=nextjs" },
      {
        name: "React Native",
        icon: "https://skillicons.dev/icons?i=react",
      },
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
      { name: "Material UI", icon: "https://skillicons.dev/icons?i=mui" },
      { name: "ShadCN UI", icon: "https://skillicons.dev/icons?i=tailwind" },
    ],
  },
  {
    title: "Backend",
    description:
      "Creating reliable APIs and server-side logic for scalable web applications.",
    skills: [
      { name: "Node.js", icon: "https://skillicons.dev/icons?i=nodejs" },
      { name: "Express.js", icon: "https://skillicons.dev/icons?i=express" },
      { name: "NestJS", icon: "https://skillicons.dev/icons?i=nestjs" },
      { name: "JavaScript", icon: "https://skillicons.dev/icons?i=javascript" },
    ],
  },
  {
    title: "Database & Tools",
    description:
      "Managing structured data and using developer tools that support smooth project delivery.",
    skills: [
      { name: "SQL", icon: "https://skillicons.dev/icons?i=mysql" },
      { name: "PostgreSQL", icon: "https://skillicons.dev/icons?i=postgres" },
      { name: "MongoDB", icon: "https://skillicons.dev/icons?i=mongodb" },
      { name: "MySQL", icon: "https://skillicons.dev/icons?i=mysql" },
    ],
  },
];

const SkillsSection = () => {
  const [activeTab, setActiveTab] = useState(skillSections[0].title);
  const activeSection = skillSections.find(
    (section) => section.title === activeTab
  );

  return (
    <section id="skills" className="py-16 px-8 bg-[#0f0e1b] text-white">
      <div className="text-center mb-12">
        <motion.h2
          className="text-4xl font-bold text-[#9FA1FF]"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Skills
        </motion.h2>
        <p className="text-gray-400 mt-2">Technologies I work with</p>
      </div>

      <div className="max-w-5xl mx-auto">
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {skillSections.map((section) => {
            const isActive = activeTab === section.title;

            return (
              <button
                key={section.title}
                type="button"
                onClick={() => setActiveTab(section.title)}
                className={`px-5 py-3 rounded-lg text-sm sm:text-base font-semibold border transition duration-300 ${isActive
                  ? "bg-[#6f73ff] text-white border-[#9FA1FF] shadow-[0_0_18px_#9FA1FF66]"
                  : "bg-[#1a192d] text-gray-300 border-[#9FA1FF33] hover:text-white hover:border-[#9FA1FF]"
                  }`}
              >
                {section.title}
              </button>
            );
          })}
        </div>

        <motion.div
          key={activeSection.title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <div className="mb-8 text-center">
            <h3 className="text-2xl font-semibold text-white">
              {activeSection.title}
            </h3>
            <p className="mt-2 text-gray-400 max-w-2xl mx-auto">
              {activeSection.description}
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 justify-items-center">
            {activeSection.skills.map((skill, index) => (
              <Tilt
                key={skill.name}
                tiltMaxAngleX={20}
                tiltMaxAngleY={20}
                perspective={1000}
                scale={1.05}
                transitionSpeed={800}
                className="w-full"
              >
                <motion.div
                  className="group relative bg-[#1a192d] rounded-xl p-6 flex flex-col items-center border border-transparent hover:border-[#9FA1FF] transition duration-300 shadow-[0_0_0_1px_rgba(255,255,255,0.05)] hover:shadow-[0_0_15px_1px_#9FA1FF55]"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.05,
                  }}
                >
                  <img
                    src={skill.icon}
                    alt={skill.name}
                    className="w-16 h-16 object-contain"
                  />
                  <p className="mt-4 text-lg font-medium text-white text-center">
                    {skill.name}
                  </p>
                </motion.div>
              </Tilt>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
