
import { motion } from "framer-motion";
import TypingTitle from "../../components/about/TypingTitle";
import ResumeButton from "../../components/about/ResumeButton";
import ProfileImage from "../../components/about/ProfileImage"; // should return an <img> tag with src

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center py-20 px-[7vw] bg-[#0b0b1e] text-white overflow-hidden"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="flex flex-col-reverse md:flex-row justify-between items-center gap-12"
      >
        {/* Left Section: Text */}
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2">
            Hi, I am
          </h1>

          <h2 className="bg-gradient-to-r from-[#8245ec] to-[#4ee4ec] text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 text-[#8245ec]">
            {/* Fallback to white color if gradient fails */}
            Javed Ansari
          </h2>

          <TypingTitle />

          <p className="mt-6 max-sm:mt-4 text-gray-400 text-base sm:text-lg leading-relaxed">
            I'm a FrontEnd developer with 3 Month of experience building
            scalable and elegant web applications. I work mostly with the{" "}
            <strong className="text-[#c084fc]">React.Js</strong> and love
            crafting beautiful UIs using{" "}
            <strong className="text-[#4ee4ec]">React</strong>,{" "}
            <strong className="text-[#8245ec]">Tailwind</strong>, and{" "}
            <strong className="text-[#c084fc]">Material Ui</strong>.
          </p>

          <div className="mt-8 max-sm:mt-4">
            <ResumeButton />
          </div>
        </div>

        {/* Right Section: Profile Image */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="md:w-1/2 flex justify-center md:justify-end"
        >
          <div className="relative w-[250px] h-[250px] sm:w-[280px] sm:h-[280px] md:w-[320px] md:h-[320px] rounded-full overflow-hidden border-4 border-[#8245ec40] shadow-[0_0_60px_#8245ec66]">
            <ProfileImage />
            {/* ProfileImage component must render: <img className="w-full h-full object-cover" /> */}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
