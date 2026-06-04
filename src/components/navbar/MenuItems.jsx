const MenuItems = ({ activeSection, onClick }) => {
  const menuItems = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "education", label: "Education" },
  ];

  return (
    <>
      {menuItems.map((item) => (
        <li
          key={item.id}
          className={`cursor-pointer hover:text-[#9FA1FF] ${
            activeSection === item.id ? "text-[#9FA1FF]" : ""
          }`}
        >
          <button className="cursor-pointer" onClick={() => onClick(item.id)}>{item.label}</button>
        </li>
      ))}
    </>
  );
};

export default MenuItems;
