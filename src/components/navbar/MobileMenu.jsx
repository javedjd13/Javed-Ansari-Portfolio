import MenuItems from "./MenuItems";
import SocialIcons from "./SocialIcons";

const MobileMenu = ({ isOpen, activeSection, onClick }) => {
  if (!isOpen) return null;

  return (
    <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-full bg-[#050414] bg-opacity-50 backdrop-blur-md z-50 rounded-lg shadow-lg md:hidden">
      <ul className="flex flex-col items-center space-y-4 py-4 text-gray-300">
        <MenuItems activeSection={activeSection} onClick={onClick} />
        <SocialIcons mobile />
      </ul>
    </div>
  );
};

export default MobileMenu;
