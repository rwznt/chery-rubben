"use client";

import { useEffect, useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import Logo from "../../assets/logo.png";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const message =
    "Hello, I am interested in booking a test drive for one of your car models. Could you please provide me with more information?";
  const phoneNumber = "+6285121303990";
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-[9999] transition-all duration-300 
        ${
          scrolled
            ? "bg-black/80 backdrop-blur-md shadow-lg"
            : "md:bg-transparent bg-black/50 backdrop-blur-sm"
        }`}
    >
      <div className="flex items-center justify-between w-full py-2">
        {/* Logo */}
        <div className="flex items-center px-6 md:px-10">
          <img src={Logo} alt="Chery" className="w-[28vw] md:w-[10vw]" />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-16 items-center text-white font-medium">
          <a href="/" className="hover:text-red-500 transition">
            Home
          </a>
          <a href="#models" className="hover:text-red-500 transition">
            Models
          </a>
          <div className="rounded-l-lg bg-red-600 px-4 py-2 hover:bg-red-700 transition">
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              Book Test Drive
            </a>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white text-3xl focus:outline-none px-6 md:px-10"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={`md:hidden bg-black/90 backdrop-blur-md text-white transition-all duration-300 overflow-hidden ${
          menuOpen ? "max-h-60 py-4" : "max-h-0 py-0"
        }`}
      >
        <div className="flex flex-col items-center gap-4 text-lg">
          <a
            href="/"
            onClick={() => setMenuOpen(false)}
            className="hover:text-red-500 transition"
          >
            Home
          </a>
          <a
            href="#models"
            onClick={() => setMenuOpen(false)}
            className="hover:text-red-500 transition"
          >
            Models
          </a>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-red-600 px-5 py-2 rounded-lg hover:bg-red-700 transition"
          >
            Book Test Drive
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Header;
