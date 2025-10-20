"use client";

import { useEffect, useState } from "react";
import Logo from "../../assets/logo.png";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  const message =
    "Hello, I am interested in booking a test drive for one of your car models. Could you please provide me with more information?";
  const phoneNumber = "+6285121303990";
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-black/80 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="flex items-center justify-between w-full py-2 ">
        <div className="flex items-center px-8">
          <img src={Logo} alt="Chery" className="w-[10vw]" />
        </div>

        <div className="flex gap-24 items-center text-white">
          <a href="/">Home</a>
          <a href="#models">Models</a>
          <div className="rounded-l-lg bg-red-600 px-4 py-2">
            <a href={whatsappLink} target="_blank">
              Book Test Drive
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
