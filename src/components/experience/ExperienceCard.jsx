import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";

const MotionArticle = motion.article;

const tiltOptions = {
  glareEnable: true,
  glareMaxOpacity: 0.1,
  glareColor: "#9FA1FF",
  glarePosition: "all",
  tiltMaxAngleX: 10,
  tiltMaxAngleY: 10,
  transitionSpeed: 400,
  scale: 1.03,
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: index * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const ExperienceCard = ({ experience, index }) => {
  const { role, company, period, description } = experience;

  return (
    <Tilt {...tiltOptions} className="cursor-pointer">
      <MotionArticle
        custom={index}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={cardVariants}
        className="relative z-10 rounded-2xl border border-[#9FA1FF60] bg-[#15152b] p-8 shadow-lg transition-shadow duration-300 hover:shadow-[0_0_20px_#9FA1FFaa]"
      >
        <h3 className="mb-2 text-3xl font-semibold text-white">{role}</h3>
        <p className="text-xl font-medium text-[#9FA1FF]">{company}</p>
        <p className="mb-6 text-sm italic text-gray-400">{period}</p>
        <p className="leading-relaxed text-gray-300">{description}</p>
      </MotionArticle>
    </Tilt>
  );
};

export default ExperienceCard;
