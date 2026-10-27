
function Hero() {
  return (
    <section className="hero-section" id="home">
      <div className="hero-container">
        {/* Left side: Introduction */}
        <div className="hero-content">
          <p className="hero-eyebrow">
            <span className="hero-status-dot"></span>
            FRONTEND DEVELOPER
          </p>

          <h1 className="hero-title">
            Hello, I'm
            <span>Dasari Nirosha.</span>
          </h1>

          <h2 className="hero-subtitle">
            I build thoughtful digital experiences.
          </h2>

          <p className="hero-description">
            I'm passionate about creating clean, responsive, and user-friendly
            web experiences. I enjoy turning ideas into meaningful interfaces
            while continuously learning and improving my development skills.
          </p>

          <div className="hero-actions">
            <a className="hero-primary-button" href="#projects">
              Explore My Work <span aria-hidden="true">↗</span>
            </a>

            <a className="hero-secondary-button" href="#contact">
              Let's Connect
            </a>
          </div>

          <div className="hero-details">
            <div className="hero-detail-item">
              <span className="hero-detail-number">01</span>
              <span>Creative Thinking</span>
            </div>

            <div className="hero-detail-item">
              <span className="hero-detail-number">02</span>
              <span>Responsive Design</span>
            </div>

            <div className="hero-detail-item">
              <span className="hero-detail-number">03</span>
              <span>Continuous Learning</span>
            </div>
          </div>
        </div>

        {/* Right side: Your actual photo */}
        <div className="hero-visual">
          <div className="hero-visual-glow"></div>

          <div className="hero-photo-frame">
            <img
              src="/images/nirosha.jpg"
              alt="Dasari Nirosha"
              className="hero-photo"
            />

          </div>
        </div>
      </div>

      <a className="hero-scroll-indicator" href="#about">
        <span className="hero-scroll-line"></span>
        Scroll to discover
      </a>
    </section>
  );
}

export default Hero;
