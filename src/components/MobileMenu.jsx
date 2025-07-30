import { XIcon } from "lucide-react";

const MobileMenu = ({ menuOpen, setMenuOpen, navLinks }) => {
  return (
    <div
      className={`fixed top-0 left-0 w-full bg-[rgba(10,10,10,0.8)] z-40 flex flex-col justify-center items-center transition-all duration-300 ease-in-out
        ${
          menuOpen
            ? "h-screen opacity-100 pointer-events-auto"
            : "h-0 opacity-0 pointer-events-none"
        }
        `}
    >
      <button
        className="absolute top-6 right-6 focus:outline-none cursor-pointer"
        onClick={() => setMenuOpen(false)}
        aria-label="Close Menu"
      >
        <XIcon className="text-white fill-white text-3xl" />
      </button>
      {navLinks.map((item) => (
        <a
          key={item.path}
          href={item.path}
          className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300 ease-in-out
            ${
              menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
            }
            `}
          onClick={() => setMenuOpen(false)}
        >
          {item.name}
        </a>
      ))}
    </div>
  );
};

export default MobileMenu;
