const NavLogo = () => (
  <div
    className="text-lg font-semibold cursor-pointer"
    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
  >
    <a href="/">
      <span className="text-[#8245ec]">&lt;</span>
      <span className="text-white">Javed</span>
      <span className="text-[#8245ec]">/</span>
      <span className="text-white">Ansari</span>
      <span className="text-[#8245ec]">&gt;</span>
    </a>
  </div>
);

export default NavLogo;
