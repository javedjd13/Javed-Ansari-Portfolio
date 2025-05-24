import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import ProjectImg from "../../assets/Images/Projcet-img.png"; // Adjust the path as necessary
import ProjectImgOne from "../../assets/Images/ProjectImgOne.png"; // Adjust the path as necessary
import ProjectImgTwo from "../../assets/Images/brokihero.png"; // Adjust the path as necessary

const projects = [
  {
    title: "Event Booking App",
    description:
      "A web application for booking events and managing registrations.",
    image: ProjectImgOne,
    github: "https://github.com/javedjd13/TicketWing_TailwindCss",
    demo: "https://ticket-wing-tailwind-css.vercel.app/",
  },
  {
    title: "Real Estate  Website",
    description:
      "A responsive Real Estate website built with React and Tailwind CSS.",
    image: ProjectImgTwo,
    github: "https://github.com/javedjd13/Broki-clone-ui",
    demo: "https://broki-clone-ui.vercel.app/",
  },
  {
    title: "E-commerce Store",
    description: "An online store with product listings, cart, and checkout.",
    image: ProjectImg,
    github: "https://github.com/javedjd13/e-commerce",
    demo: "https://e-commerce-gilt-two.vercel.app/",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { delay: i * 0.2, duration: 0.7, ease: "easeOut" },
  }),
};

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-24 px-8 bg-gradient-to-tr from-[#0f0f28] via-[#1a1a40] to-[#0b0b1e] text-white min-h-screen"
    >
      <motion.h2
        className="text-5xl font-extrabold text-center mb-20 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-[#8245ec]"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        Projects
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
        {projects.map((project, index) => (
          <Tilt
            key={project.title}
            glareEnable
            glareMaxOpacity={0.15}
            glareColor="#a855f7"
            glarePosition="all"
            scale={1.08}
            tiltMaxAngleX={15}
            tiltMaxAngleY={15}
            transitionSpeed={400}
            className="bg-[rgba(255,255,255,0.07)] backdrop-blur-md rounded-2xl border border-purple-600/40 shadow-xl cursor-pointer hover:shadow-purple-500/60 transition-shadow duration-500 flex flex-col overflow-hidden"
          >
            <motion.div
              variants={cardVariants}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex flex-col h-full"
              style={{ position: "relative", zIndex: 10 }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover rounded-t-2xl border-b border-purple-600/50"
                style={{ zIndex: 1 }}
                loading="lazy"
              />
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-3xl font-semibold mb-3 text-white drop-shadow-md">
                  {project.title}
                </h3>
                <p className="text-gray-300 flex-grow leading-relaxed text-sm sm:text-base">
                  {project.description}
                </p>
                <div className="mt-6 flex gap-6">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-purple-400 hover:text-purple-600 transition-colors duration-300"
                    aria-label="GitHub Repository"
                  >
                    <FaGithub size={22} />
                    <span className="font-medium text-sm sm:text-base">
                      GitHub
                    </span>
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-pink-400 hover:text-pink-600 transition-colors duration-300"
                    aria-label="Live Demo"
                  >
                    <FaExternalLinkAlt size={20} />
                    <span className="font-medium text-sm sm:text-base">
                      Live Demo
                    </span>
                  </a>
                </div>
              </div>
            </motion.div>
          </Tilt>
        ))}
      </div>
    </section>
  );
};

export default Projects;
