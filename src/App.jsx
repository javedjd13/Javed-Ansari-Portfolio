import About from "./pages/about/About";
import Skills from "./pages/skills/Skills";
import Experience from "./pages/experience/Experience";
import Projects from "./pages/projects/Projects";
import Education from "./pages/education/Education";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Contact from "./pages/contact/Contact";

const App = () => {
  return (
    <div className="bg-[#050414] text[white]">
      <Navbar />
      <div className="container mx-auto relative">
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Contact />
      </div>
      <Footer />
    </div>
  );
};

export default App;
