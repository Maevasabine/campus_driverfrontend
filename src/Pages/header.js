import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./header.css";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={scrolled ? "header scrolled" : "header"}>
      <div className="header-container">
        <div className="logo">CampusDriver</div>

        <nav>
          <ul className="nav-links">
            <li><Link to="/">Accueil</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/connexion">Connexion</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
