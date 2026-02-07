import { useState } from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  const [open, setOpen] = useState(false);

  const linkClasses =
    "text-white hover:text-green-300 transition-all duration-300";

  const activeClass = "text-green-400 font-semibold";

  const navItems = [
    { to: "/", label: "H o m e" },
    { to: "/classes", label: "C l a s s e s" },
    { to: "/our-gym", label: "O u r G y m" },
    { to: "/gallery", label: "G a l l e r y" },
    { to: "/contact", label: "C o n t a c t" },
  ];

  return (
    <nav className="fixed w-full bg-transparent z-20 px-5 sm:px-10 py-5 flex justify-between items-center">
      {/* Logo */}
      <div className="text-2xl sm:text-3xl font-bold text-white">
        fitne<span className="text-green-400">Z</span>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex gap-8 text-lg">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) =>
              isActive ? activeClass : linkClasses
            }
          >
            {item.label}
          </NavLink>
        ))}
      </div>

      {/* Mobile Hamburger */}
      <button
        className="md:hidden text-white focus:outline-none"
        onClick={() => setOpen(!open)}
        aria-label="Toggle Menu"
      >
        <svg
          className="w-7 h-7"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          {open ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 w-full
        bg-black/80 backdrop-blur-md
        flex flex-col items-center gap-6 py-8
        transition-all duration-300 ease-out
        ${open ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"}`}
      >
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            onClick={() => setOpen(false)}
            className={({ isActive }) =>
              (isActive ? activeClass : linkClasses) +
              " text-lg hover:scale-105 transition-transform"
            }
          >
            {item.label}
          </NavLink>
        ))}
      </div>
    </nav>
  );
};

export default NavBar;
