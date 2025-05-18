import { motion } from "framer-motion";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message Sent Successfully ✅");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section
      id="contact"
      className="relative py-20 px-[7vw] bg-[#0b0b1e] text-white"
    >
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-center mb-16 text-[#8245ec]"
      >
        Contact Me
      </motion.h2>

      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="backdrop-blur-md bg-white/5 p-8 rounded-xl border border-[#8245ec30] max-w-3xl mx-auto shadow-xl space-y-6"
      >
        <div>
          <label className="block mb-2 text-gray-300 font-medium">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-lg bg-[#15152b] text-white border border-[#8245ec33] focus:outline-none focus:ring-2 focus:ring-[#8245ec]"
          />
        </div>

        <div>
          <label className="block mb-2 text-gray-300 font-medium">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-lg bg-[#15152b] text-white border border-[#8245ec33] focus:outline-none focus:ring-2 focus:ring-[#8245ec]"
          />
        </div>

        <div>
          <label className="block mb-2 text-gray-300 font-medium">
            Message
          </label>
          <textarea
            name="message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-lg bg-[#15152b] text-white border border-[#8245ec33] focus:outline-none focus:ring-2 focus:ring-[#8245ec]"
          />
        </div>

        <button
          type="submit"
          className="w-full py-3  hover:bg-[#6b3edf] rounded-lg font-semibold transition duration-300 bg-[#8245ec] bg-contact-btn cursor-pointer"
        >
          Send Message 🚀
        </button>
      </motion.form>
    </section>
  );
};

export default Contact;
