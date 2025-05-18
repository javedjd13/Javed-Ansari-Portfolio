import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";

const experiences = [
  {
    role: "React Developer Intern",
    company: "Lucreative Software",
    period: "July 2024 - September 2024",
    description:
      "Built modern responsive UIs using React, Tailwind CSS, and Bootstrap.",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-20 px-6 sm:px-12 md:px-[7vw] bg-[#0b0b1e] text-[#8245ec] min-h-screen"
    >
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="text-4xl font-bold text-center mb-16 text-[#8245ec]"
      >
        Experience
      </motion.h2>

      <div className="flex flex-col gap-10 max-w-4xl mx-auto">
        {experiences.map((exp, index) => (
          <Tilt
            key={index}
            glareEnable
            glareMaxOpacity={0.1} // Glare ko bahut subtle banaya
            glareColor="#8245ec"
            glarePosition="all"
            tiltMaxAngleX={10} // Thoda halka tilt
            tiltMaxAngleY={10}
            transitionSpeed={400}
            scale={1.03} // Thoda zoom on hover
            className="cursor-pointer"
          >
            <motion.div
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
              className="bg-[#15152b] p-8 rounded-2xl border border-[#8245ec60] shadow-lg hover:shadow-[0_0_20px_#8245ecaa] transition-shadow duration-300 relative z-10"
            >
              <h3 className="text-3xl font-semibold mb-2 text-white">
                {exp.role}
              </h3>
              <p className="text-[#c084fc] font-medium text-xl">
                {exp.company}
              </p>
              <p className="text-sm text-gray-400 italic mb-6">{exp.period}</p>
              <p className="text-gray-300 leading-relaxed">{exp.description}</p>
            </motion.div>
          </Tilt>
        ))}
      </div>
    </section>
  );
};

export default Experience;
