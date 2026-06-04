import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";

const experiences = [
  {
    role: "Frontend Engineer",
    company: "StepOne Technologies Pvt Ltd",
    period: "February 2026 - Present",
    description:
      "Developing responsive and scalable web interfaces with React.js, focusing on clean UI implementation, reusable components, performance optimization, and smooth user experiences across modern web applications.",
  },
  {
    role: "Frontend Developer Intern",
    company: "Upfound Software Pvt Ltd",
    period: "June 2025 - September 2025",
    description:
      "Contributed to frontend development using React.js, implementing responsive designs, optimizing performance, and collaborating with the team to enhance user experience in web applications.",
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
      className="py-20 px-6 sm:px-12 md:px-[7vw] bg-[#0b0b1e] text-[#9FA1FF] min-h-screen"
    >
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="text-4xl font-bold text-center mb-16 text-[#9FA1FF]"
      >
        Experience
      </motion.h2>

      <div className="flex flex-col gap-10 max-w-4xl mx-auto">
        {experiences.map((exp, index) => (
          <Tilt
            key={index}
            glareEnable
            glareMaxOpacity={0.1} // Glare ko bahut subtle banaya
            glareColor="#9FA1FF"
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
              className="bg-[#15152b] p-8 rounded-2xl border border-[#9FA1FF60] shadow-lg hover:shadow-[0_0_20px_#9FA1FFaa] transition-shadow duration-300 relative z-10"
            >
              <h3 className="text-3xl font-semibold mb-2 text-white">
                {exp.role}
              </h3>
              <p className="text-[#9FA1FF] font-medium text-xl">
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
