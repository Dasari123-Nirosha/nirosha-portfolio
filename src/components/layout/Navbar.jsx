
import { useState } from "react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="navbar">
      <div className="navbar-container">
        <a
          className="navbar-logo"
          href="#home"
          onClick={closeMenu}
          aria-label="Dasari Nirosha - Home"
        >
          <span className="navbar-logo-mark">DN</span>
          <span className="navbar-logo-name">
            Dasari <strong>Nirosha</strong>
          </span>
        </a>

        <button
          className={`navbar-toggle ${menuOpen ? "is-open" : ""}`}
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="portfolio-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav
          id="portfolio-navigation"
          className={`navbar-links ${menuOpen ? "menu-open" : ""}`}
          aria-label="Main navigation"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={closeMenu}
            >
              {link.label}
            </a>
          ))}

          <a
            className="navbar-contact-button"
            href="#contact"
            onClick={closeMenu}
          >
            Let's Talk <span aria-hidden="true">↗</span>
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
