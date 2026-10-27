
const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Education", href: "#education" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-top">
          <a href="#home" className="footer-brand">
            <span className="footer-brand-mark">DN</span>
            <span className="footer-brand-name">
              Dasari <strong>Nirosha</strong>
            </span>
          </a>

          <p className="footer-tagline">
            Building thoughtful digital experiences,
            <br />
            one line of code at a time.
          </p>

          <a href="#home" className="footer-back-top">
            Back to top <span aria-hidden="true">↑</span>
          </a>
        </div>

        <div className="footer-divider" />

        <div className="footer-middle">
          <div className="footer-navigation">
            <p className="footer-label">EXPLORE</p>

            <nav className="footer-links" aria-label="Footer navigation">
              {quickLinks.map((link) => (
                <a href={link.href} key={link.label}>
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          <div className="footer-connect">
            <p className="footer-label">LET'S CONNECT</p>

            <p className="footer-connect-text">
              Have an idea or opportunity?
              <br />
              I'd love to hear from you.
            </p>

            <a
              className="footer-email"
              href="mailto:dnirosha0505@gmail.com"
            >
              Start a conversation <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>

        <div className="footer-divider" />

        <div className="footer-bottom">
          <p>© {currentYear} Dasari Nirosha. All rights reserved.</p>

          <p className="footer-made-with">
            Designed with <span aria-label="love">♥</span> and built with React
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
