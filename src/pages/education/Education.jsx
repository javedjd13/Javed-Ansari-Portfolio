
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { FaGraduationCap } from "react-icons/fa";

const educationData = [
  {
    degree: "Bachelor of Commerce in Computer Application",
    College: "Zulekha College of Commerce, Science and Technology",
    institution: "Rashtrasant Tukadoji Maharaj Nagpur University",
    details:
      "Focused on software development, algorithms, and system design. Graduated with honors.",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: i * 0.3,
      duration: 0.8,
      ease: "easeOut",
    },
  }),
};

const Education = () => {
  return (
    <section
      id="education"
      className="py-24 px-6 sm:px-10 md:px-[10vw] bg-gradient-to-tr from-[#0f0f28] via-[#1a1a40] to-[#0b0b1e] text-white min-h-screen"
    >
      <motion.h2
        className="text-4xl sm:text-5xl text-center font-extrabold mb-16 bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 text-[#8245ec]"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.8 }}
      >
        Education
      </motion.h2>

      <div className="flex justify-center">
        {educationData.map((edu, index) => (
          <Tilt
            key={index}
            glareEnable
            glareMaxOpacity={0.1}
            glareColor="#a855f7"
            glarePosition="all"
            scale={1.05}
            tiltMaxAngleX={10}
            tiltMaxAngleY={10}
            transitionSpeed={400}
            className="w-full sm:w-[90%] md:w-[70%] lg:w-[60%] bg-[#1e1e35] rounded-2xl border border-purple-600/30 shadow-lg hover:shadow-purple-500/50 transition duration-500 p-6 sm:p-8"
          >
            <motion.div
              variants={cardVariants}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
              className="relative flex flex-col gap-2 z-[1]"
            >
              <div className="flex items-center gap-3 mb-4">
                <FaGraduationCap className="text-[#8245ec] text-2xl sm:text-3xl" />
                <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-white">
                  {edu.degree}
                </h3>
              </div>
              <p className="text-purple-300 font-medium text-sm sm:text-base">
                {edu.College}
              </p>
              <p className="text-purple-300 font-medium text-sm sm:text-base">
                {edu.institution}
              </p>
              <p className="text-gray-300 mt-2 text-sm sm:text-base leading-relaxed">
                {edu.details}
              </p>
            </motion.div>
          </Tilt>
        ))}
      </div>
    </section>
  );
};

export default Education;