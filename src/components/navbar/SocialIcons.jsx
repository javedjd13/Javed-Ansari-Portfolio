import { FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";
const SocialIcons = ({ mobile }) => {
  const iconClass = mobile
    ? "text-gray-300 hover:text-white"
    : "text-gray-300 hover:text-[#8245ec]";

  return (
    <div className="flex space-x-4 md:space-x-3">
      <motion.a
        href="https://github.com/javedjd13"
        target="_blank"
        rel="noreferrer"
        whileHover={{ scale: 1.2, color: "#8245ec" }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <FaGithub size={24} />
      </motion.a>
      <motion.a
        href="https://linkedin.com/in/javed-ansari-83a4a42b5"
        target="_blank"
        rel="noreferrer"
        whileHover={{ scale: 1.2, color: "#8245ec" }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <FaLinkedin size={24} />
      </motion.a>
    </div>
  );
};

export default SocialIcons;
