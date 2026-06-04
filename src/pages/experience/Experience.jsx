import { motion } from "framer-motion";
import ExperienceCard from "../../components/experience/ExperienceCard";
import experiences from "../../data/experiences";

const MotionHeading = motion.h2;

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-20 px-6 sm:px-12 md:px-[7vw] bg-[#0b0b1e] text-[#9FA1FF] min-h-screen"
    >
      <MotionHeading
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="text-4xl font-bold text-center mb-16 text-[#9FA1FF]"
      >
        Experience
      </MotionHeading>

      <div className="flex flex-col gap-10 max-w-4xl mx-auto">
        {experiences.map((exp, index) => (
          <ExperienceCard
            key={`${exp.company}-${exp.role}`}
            experience={exp}
            index={index}
          />
        ))}
      </div>
    </section>
  );
};

export default Experience;
