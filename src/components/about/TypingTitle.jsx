import ReactTypingEffect from "react-typing-effect";

const TypingTitle = () => (
  <h3 className="text-xl max-sm:my-4 sm:text-2xl md:text-3xl font-semibold mb-4 text-[#8245ec] leading-tight">
    <span className="text-white">I am a passionate </span>
    <ReactTypingEffect
      text={[
        "FrontEnd Developer",
        "App Developer",
        "Programmer",
        "React Developer",
        "Web Developer",
        "Software Engineer",
        "Tech Enthusiast",
        "Tech Lover",
      ]}
      speed={100}
      eraseSpeed={50}
      typingDelay={500}
      eraseDelay={2000}
      cursorRenderer={(cursor) => (
        <span className="text-[#8245ec]">{cursor}</span>
      )}
    />
  </h3>
);

export default TypingTitle;
