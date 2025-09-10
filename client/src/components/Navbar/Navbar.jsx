import React, { useEffect, useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { threshold: 0.5 } // section considered active when 50% visible
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <div className="navbar">
      <div className="navbar-left">
        <a
          href="#home"
          className={`navbar-link ${active === "home" ? "active" : ""}`}
        >
          Home
        </a>
        <a
          href="#about"
          className={`navbar-link ${active === "about" ? "active" : ""}`}
        >
          About
        </a>
        <a
          href="#projects"
          className={`navbar-link ${active === "projects" ? "active" : ""}`}
        >
          Projects
        </a>
        <a
          href="#notes"
          className={`navbar-link ${active === "notes" ? "active" : ""}`}
        >
          Notes
        </a>
        <a
          href="#contact"
          className={`navbar-link ${active === "contact" ? "active" : ""}`}
        >
          Contact
        </a>
      </div>
      <div className="navbar-right">
        <a
          href="/resume.pdf"
          className="navbar-link"
          download="Elaine_Zhu_Resume.pdf"
        >
          Resume
        </a>
      </div>
    </div>
  );
};

export default Navbar;
