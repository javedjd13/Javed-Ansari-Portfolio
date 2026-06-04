const NavLogo = () => (
  <div
    className="text-lg font-semibold cursor-pointer"
    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
  >
    <a href="/">
      <span className="text-[#9FA1FF]">&lt;</span>
      <span className="text-white">Javed</span>
      <span className="text-[#9FA1FF]">/</span>
      <span className="text-white">Ansari</span>
      <span className="text-[#9FA1FF]">&gt;</span>
    </a>
  </div>
);

export default NavLogo;
