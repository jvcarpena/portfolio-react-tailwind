import React, { useState } from "react";

function Header() {
  // State to track menu visibility
  const [isOpen, setIsOpen] = useState(false);

  // Toggle menu function
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="sticky top-0 bg-[#1e3346] z-1000 shadow-sm">
      <section className="mx-auto flex max-w-7xl items-center justify-between p-4">
        <h1 className="text-3xl font-medium">
          <a href="#hero" className="hover:opacity-60">
            JV Carpena
          </a>
        </h1>

        {/* Hamburger Button */}
        <div>
          <button
            id="hamburger-button"
            className={`relative h-8 w-8 cursor-pointer text-3xl md:hidden ${
              isOpen && "toggle-btn"
            }`}
            onClick={toggleMenu}
          >
            <div
              className="absolute top-4 -mt-0.5 h-1 w-8 rounded bg-white transition-all duration-500 
                before:absolute before:h-1 before:w-8 before:-translate-x-4 before:-translate-y-3 before:rounded before:bg-white before:transition-all before:duration-500 before:content-['']
                after:absolute after:h-1 after:w-8 after:-translate-x-4 after:translate-y-3 after:rounded after:bg-white after:transition-all after:duration-500 after:content-['']"
            ></div>
          </button>

          {/* Desktop Nav */}
          <nav className="hidden space-x-8 text-xl md:block" aria-label="main">
            <a href="#projects" className="hover:opacity-60">
              Projects
            </a>
            <a href="#skills" className="hover:opacity-60">
              Skills
            </a>
            <a href="#contacts" className="hover:opacity-60">
              Contact Me
            </a>
          </nav>
        </div>
      </section>

      {/* Mobile Menu */}
      <section
        id="mobile-menu"
        className={`animate-open-menu absolute top-[68px] w-full origin-top flex-col justify-center bg-black text-5xl transition-all duration-500 ${
          isOpen ? "flex" : "hidden"
        }`}
      >
        <nav
          className="flex min-h-screen flex-col items-center py-8"
          aria-label="mobile"
        >
          <a
            href="#hero"
            className="w-full py-6 text-center hover:opacity-90"
            onClick={toggleMenu}
          >
            Home
          </a>
          <a
            href="#projects"
            className="w-full py-6 text-center hover:opacity-90"
            onClick={toggleMenu}
          >
            Projects
          </a>
          <a
            href="#skills"
            className="w-full py-6 text-center hover:opacity-90"
            onClick={toggleMenu}
          >
            Skills
          </a>
          <a
            href="#contacts"
            className="w-full py-6 text-center hover:opacity-90"
            onClick={toggleMenu}
          >
            Contact Me
          </a>
        </nav>
      </section>
    </header>
  );
}

export default Header;
