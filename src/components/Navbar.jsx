import { Menu } from "lucide-react";
import { useState } from "react";
import MobileMenu from "./MobileMenu";

const Navbar = () => {
  const navLinks = [
    { name: "Home", path: "#home" },
    { name: "About", path: "#about" },
    { name: "Projects", path: "#projects" },
    { name: "Contact", path: "#contact" },
  ];

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-40 bg-[rgba(10,10,10,0.8)] backdrop-blur-lg border-b border-white/10 shadow-lg">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <a href="#home" className="font-mono text-xl font-bold text-white">
            Arnab{" "}
            <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
              Jana
            </span>
          </a>

          {/* Mobile Menu */}
          {!menuOpen ? (
            <div
              className="w-7 h-5 relative cursor-pointer z-40 md:hidden"
              onClick={() => setMenuOpen((prev) => !prev)}
            >
              <Menu />
            </div>
          ) : (
            <MobileMenu
              menuOpen={menuOpen}
              setMenuOpen={setMenuOpen}
              navLinks={navLinks}
            />
          )}

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((item) => (
              <a
                key={item.path}
                href={item.path}
                className="text-gray-300 hover:text-white transition-colors"
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
