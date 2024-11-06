import React, { useEffect, useState } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  const toggleMobileMenu = () => {
    const mobileMenu = document.querySelector(".mobile-menu");
    if (mobileMenu) {
      mobileMenu.classList.toggle("hidden");
      mobileMenu.classList.toggle("flex");
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <nav
        className={`fixed w-full z-50 ${
          scrolled ? "bg-white shadow-lg" : "bg-transparent"
        } transition-colors duration-300`}
      >
        <div className="container mx-auto px-4 py-3">
          <div className="flex justify-between items-center">
            <a
              href="#"
              className={`text-2xl font-bold ${
                scrolled ? "text-black" : "text-green-400"
              }`}
            >
              Byte Builders
            </a>
            <div className="hidden md:flex space-x-8">
              <a
                href="#services"
                className={`hover:text-green-400 ${
                  scrolled ? "text-black" : "text-gray-300"
                }`}
              >
                Services
              </a>
              <a
                href="#process"
                className={`hover:text-green-400 ${
                  scrolled ? "text-black" : "text-gray-300"
                }`}
              >
                Process
              </a>
              <a
                href="#portfolio"
                className={`hover:text-green-400 ${
                  scrolled ? "text-black" : "text-gray-300"
                }`}
              >
                Portfolio
              </a>
              <a
                href="#contact"
                className={`hover:text-green-400 ${
                  scrolled ? "text-black" : "text-gray-300"
                }`}
              >
                Contact
              </a>
            </div>
            <button
              onClick={toggleMobileMenu}
              className="md:hidden text-gray-300"
            >
              <i className="bi bi-list text-2xl"></i>
            </button>
          </div>
          <div className="mobile-menu hidden flex-col absolute top-16 left-0 w-full bg-gray-900 p-4 space-y-4">
            <a href="#services" className="hover:text-green-400 text-gray-300">
              Services
            </a>
            <a href="#process" className="hover:text-green-400 text-gray-300">
              Process
            </a>
            <a href="#portfolio" className="hover:text-green-400 text-gray-300">
              Portfolio
            </a>
            <a href="#contact" className="hover:text-green-400 text-gray-300">
              Contact
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
