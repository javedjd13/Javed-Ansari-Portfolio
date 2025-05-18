import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
  FaLinkedin,
  FaGithub,
  FaEnvelope,
} from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="bg-[#0b0b1e] text-white py-12 px-4 text-center">
      {/* Name */}
      <h2 className="text-2xl font-bold text-[#a855f7] mb-6 tracking-wide">
        Javed Ansari
      </h2>

      {/* Navigation Links */}
      <nav className="mb-6 flex flex-wrap justify-center gap-6 text-base font-medium">
        {["About", "Skills", "Experience", "Projects", "Education"].map(
          (link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="hover:text-[#a855f7] transition"
            >
              {link}
            </a>
          )
        )}
      </nav>

      {/* Social Icons */}
      <div className="flex justify-center gap-6 text-xl mb-6">
        <div className="flex gap-6 text-2xl">
          <motion.a
            href="javed13jd@gmail.com"
            whileHover={{ scale: 1.2, color: "#8245ec" }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <FaEnvelope />
          </motion.a>

          <motion.a
            href="https://github.com/javedjd13"
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.2, color: "#8245ec" }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <FaGithub />
          </motion.a>

          <motion.a
            href="https://linkedin.com/in/javed-ansari-83a4a42b5"
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.2, color: "#8245ec" }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <FaLinkedin />
          </motion.a>
        </div>
      </div>

      {/* Copyright */}
      <p className="text-sm text-gray-400">
        © {new Date().getFullYear()} Javed Ansari. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
