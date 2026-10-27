
function About() {
  const highlights = [
    {
      number: "01",
      title: "Frontend Development",
      description:
        "Building clean, responsive interfaces with a focus on usability and layout.",
    },
    {
      number: "02",
      title: "Problem Solving",
      description:
        "Breaking challenges into manageable steps and learning through practice.",
    },
    {
      number: "03",
      title: "Continuous Learning",
      description:
        "Exploring new technologies and improving my development skills.",
    },
  ];

  return (
    <section className="about-section" id="about">
      <div className="about-container">
        <div className="about-heading">
          <p className="section-eyebrow about-eyebrow">
            <span>01</span> — GET TO KNOW ME
          </p>

          <h2 className="about-title">
            A little about <span>me.</span>
          </h2>

          <p className="about-intro">
            Every great project starts with curiosity, creativity, and a
            willingness to learn.
          </p>
        </div>

        <div className="about-layout">
          <div className="about-profile">
            <div className="about-profile-top">
              <div className="about-avatar">DN</div>

              <div>
                <p className="about-profile-name">Dasari Nirosha</p>
                <p className="about-profile-role">Frontend Developer</p>
              </div>
            </div>

            <div className="about-profile-line"></div>

            <p className="about-profile-quote">
              “I believe good design should feel simple, thoughtful, and
              effortless to use.”
            </p>

            <div className="about-profile-footer">
              <span className="about-profile-dot"></span>
              Open to learning and growing
            </div>

            <div className="about-profile-decoration">✳</div>
          </div>

          <div className="about-content">
            <h3>
              Turning ideas into <span>digital experiences.</span>
            </h3>

            <p>
              Hello! I'm Dasari Nirosha. I'm interested in frontend
              development and creating web experiences that look polished
              and work smoothly across different screen sizes.
            </p>

            <p>
              I enjoy working with web technologies, building projects, and
              understanding how individual components come together to create
              a complete application. Each project gives me an opportunity
              to learn, solve problems, and improve.
            </p>

            <p>
              My goal is to keep developing my technical skills, contribute
              to meaningful projects, and grow into a confident software
              professional.
            </p>

            <div className="about-highlights">
              {highlights.map((item) => (
                <article className="about-highlight" key={item.number}>
                  <span className="about-highlight-number">
                    {item.number}
                  </span>

                  <div>
                    <h4>{item.title}</h4>
                    <p>{item.description}</p>
                  </div>

                  <span className="about-highlight-arrow" aria-hidden="true">
                    ↗
                  </span>
                </article>
              ))}
            </div>

            <a className="about-link" href="#skills">
              Discover my skills <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
