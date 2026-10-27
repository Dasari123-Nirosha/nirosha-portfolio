const experiences = [
  {
    number: '01',
    type: 'PROFESSIONAL EXPERIENCE',
    role: 'Frontend Developer',
    organization: 'Stackly',
    duration: 'June 2026 – Present',
    description:
      'Working on frontend development tasks, creating responsive user interfaces, improving dashboard layouts, and applying React concepts to practical development projects.',
    highlights: [
      'React component development',
      'Responsive UI implementation',
      'Dashboard design and styling',
      'Frontend debugging and improvements',
    ],
    current: true,
  },
  {
    number: '02',
    type: 'INTERNSHIP & TECHNICAL TRAINING',
    role: 'Java Full Stack Intern',
    organization: 'Tap Academy',
    duration: 'Technical Training',
    description:
      'Building a foundation in Java programming and full-stack development concepts while strengthening problem-solving skills and understanding software development practices.',
    highlights: [
      'Java programming fundamentals',
      'Object-oriented programming concepts',
      'Web development fundamentals',
      'Problem-solving and coding practice',
    ],
    current: false,
  },
]

function Experience() {
  return (
    <section id="experience" className="experience-section section">
      <div className="section-container">
        <div className="experience-heading">
          <p className="section-label">MY PROFESSIONAL JOURNEY</p>

          <h2 className="section-title">
            Experience & <span>Growth</span>
          </h2>

          <p className="section-description">
            My journey in technology is shaped by practical development,
            continuous learning, and a commitment to improving my skills
            through real-world work.
          </p>
        </div>

        <div className="experience-timeline">
          {experiences.map((experience) => (
            <article
              className="experience-card glass-card"
              key={experience.number}
            >
              <div className="experience-card-top">
                <span className="experience-number">
                  {experience.number}
                </span>

                <span className="experience-type">
                  {experience.type}
                </span>

                {experience.current && (
                  <span className="experience-current">
                    <span className="status-dot"></span>
                    Current
                  </span>
                )}
              </div>

              <div className="experience-card-content">
                <div className="experience-main">
                  <h3>{experience.role}</h3>

                  <p className="experience-organization">
                    {experience.organization}
                  </p>

                  <p className="experience-duration">
                    {experience.duration}
                  </p>
                </div>

                <div className="experience-details">
                  <p className="experience-description">
                    {experience.description}
                  </p>

                  <h4>Key Focus Areas</h4>

                  <ul className="experience-highlights">
                    {experience.highlights.map((highlight) => (
                      <li key={highlight}>
                        <span aria-hidden="true">↗</span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="experience-bottom">
          <span className="experience-bottom-icon" aria-hidden="true">
            ✦
          </span>

          <p>
            Every project is an opportunity to learn, build, and become
            a better developer.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Experience