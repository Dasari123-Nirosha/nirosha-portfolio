
const skillCategories = [
  {
    title: "Frontend Development",
    description:
      "Technologies for building responsive and interactive user interfaces.",
    icon: "</>",
    skills: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS"],
  },
  {
    title: "Development Tools",
    description:
      "Tools and libraries used to develop and manage projects.",
    icon: "⚙",
    skills: [
      "VS Code",
      "Vite",
      "Git",
      "GitHub",
      "React Router DOM",
      "Redux",
      "Recharts",
      "Lucide React",
    ],
  },
  {
    title: "Deployment",
    description:
      "Publishing projects and making websites accessible online.",
    icon: "↗",
    skills: ["Netlify"],
  },
];

function Skills() {
  return (
    <section id="skills" className="skills-section section">
      <div className="section-container">
        <div className="skills-heading">
          <p className="section-label">
            <span className="skills-heading-number">02</span>
            MY CAPABILITIES
          </p>

          <h2 className="section-title">
            Technical <span>Skills</span>
          </h2>

          <p className="section-description">
            Technologies, development tools, and deployment platforms
            used in my frontend projects.
          </p>
        </div>

        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <article
              className="skills-category"
              key={category.title}
            >
              <div className="skills-category-header">
                <span
                  className="skills-category-icon"
                  aria-hidden="true"
                >
                  {category.icon}
                </span>

                <div className="skills-category-heading">
                  <span className="skills-category-number">
                    CATEGORY {String(index + 1).padStart(2, "0")}
                  </span>

                  <h3>{category.title}</h3>

                  <p>{category.description}</p>
                </div>
              </div>

              <div className="skills-list">
                {category.skills.map((skill) => (
                  <span className="skill-tag" key={skill}>
                    {skill}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
