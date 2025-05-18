import React, { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import Logo from "../navbar/NavLogo";
import MenuItems from "./MenuItems";
import SocialIcons from "./SocialIcons";
import MobileMenu from "./MobileMenu";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMenuItemClick = (sectionId) => {
    setActiveSection(sectionId);
    setIsOpen(false);

    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
  className={`fixed top-0 left-0 w-full z-50 transition duration-300 px-6 sm:px-[7vw] lg:px-[20vw] ${
    isScrolled
      ? "bg-[#050414] bg-opacity-70 backdrop-blur-sm shadow-md"
      : "bg-transparent"
  }`}
>
  <div className="text-white py-5 flex justify-between items-center">
    <Logo />

    {/* Desktop Menu */}
    <ul className="hidden md:flex space-x-8 md:space-x-4 text-gray-300">
      <MenuItems
        activeSection={activeSection}
        onClick={handleMenuItemClick}
      />
    </ul>

    {/* Desktop Social Icons */}
    <div className="hidden md:flex">
      <SocialIcons />
    </div>

    {/* Mobile Hamburger */}
    <div className="md:hidden">
      {isOpen ? (
        <FiX
          className="text-3xl text-[#8245ec] cursor-pointer"
          onClick={() => setIsOpen(false)}
        />
      ) : (
        <FiMenu
          className="text-3xl text-[#8245ec] cursor-pointer"
          onClick={() => setIsOpen(true)}
        />
      )}
    </div>
  </div>

  <MobileMenu
    isOpen={isOpen}
    activeSection={activeSection}
    onClick={handleMenuItemClick}
  />
</nav>

  );
};

export default Navbar;
