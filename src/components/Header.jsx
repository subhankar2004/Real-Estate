import React, { useState } from "react";
import "./Header.css";
import { FaBars, FaTimes } from "react-icons/fa"; // Icons for the hamburger menu

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <section className="h-wrapper">
      <div className="flexCenter paddings innerWidth h-container">
        <img src="./assets/logo.png" alt="logo" width={100} />

        {/* Hamburger menu icon for mobile view */}
        <div className="hamburger-icon" onClick={toggleMenu}>
          {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </div>

        {/* Main menu - visible on larger screens */}
        <div className={`h-menu ${isMenuOpen ? "open" : ""}`}>
          <a href="#">Residency</a>
          <a href="#">Our Value</a>
          <a href="#">Contact Us</a>
          <a href="#">Get Started</a>
          <a href="#">
            <button className="button">Contact</button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Header;



