import React from "react";
import "./footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h3>CampusDriver</h3>

        <p>
          Plateforme de formations professionnelles — en ligne et en présentiel.
        </p>

        <div className="footer-links">
          <a href="/">Accueil</a>
          <a href="/cours">Formations</a>
          <a href="/contact">Contact</a>
        </div>

        <p className="footer-copy">
          © {new Date().getFullYear()} CampusDriver. Tous droits réservés.
        </p>
      </div>
    </footer>
  );
}
