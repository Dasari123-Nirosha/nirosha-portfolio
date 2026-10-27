


const projects = [
  {
    title: "E-commerce Management Dashboard",
    category: "E-commerce",
    description:
      "A professional e-commerce administration dashboard for managing products, tracking orders, monitoring revenue, and organizing customer information. Includes inventory management, sales analytics, pagination, and interactive management features.",
    image:
      "https://images.unsplash.com/photo-1607082349566-187342175e2f?auto=format&fit=crop&w=800&q=80",
    demo: "https://ecommercemanagementdashboard.netlify.app/",
    tech: ["React", "JavaScript", "CSS", "Recharts"],
  },
  {
    title: "Authentication & User Access Dashboard",
    category: "Security",
    description:
      "A secure access management interface designed to organize user accounts and authentication workflows. Features a modern dashboard layout, clear navigation, and a structured interface for managing user access.",
    image:
      "https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=800&q=80",
    demo: "https://authentication-user-access-dashboard.netlify.app/",
    tech: ["React", "JavaScript", "CSS", "React Router"],
  },
  {
    title: "SaaS Management Dashboard",
    category: "SaaS Analytics",
    description:
      "A modern SaaS dashboard focused on presenting business performance and important metrics in a clear, organized layout. Designed with reusable components, data visualizations, responsive sections, and intuitive navigation.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    demo: "https://saasmanagement-dashboard.netlify.app/",
    tech: ["React", "Recharts", "Lucide", "CSS"],
  },
  {
    title: "Travel & Booking Dashboard",
    category: "Travel",
    description:
      "A travel-focused dashboard designed to make destination discovery and booking information easy to explore. Combines travel-inspired visuals with a clean interface, organized information, and convenient navigation.",
    image:
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80",
    demo: "https://travel-bookingdashboard.netlify.app/",
    tech: ["React", "JavaScript", "CSS", "React Router"],
  },
  {
    title: "Helpdesk Support Dashboard",
    category: "Customer Support",
    description:
      "A support management interface for organizing customer requests and tracking service issues. Its structured dashboard design helps users review support information, manage ticket workflows, and navigate between key sections efficiently.",
    image:
      "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=800&q=80",
    demo: "https://helpdesksupportdashboard.netlify.app/",
    tech: ["React", "JavaScript", "CSS", "Lucide"],
  },
  {
    title: "Employee HR Dashboard",
    category: "Human Resources",
    description:
      "An employee management dashboard created to present workforce information in a professional and organized way. Designed around employee records, HR-related information, reusable UI components, and a consistent administration experience.",
    image:
  "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80",
    demo: "https://phenomenal-horse-5fe6e9.netlify.app/",
    tech: ["React", "JavaScript", "CSS", "Dashboard UI"],
  },
  {
    title: "Hotel Management React Application",
    category: "Hotel Management",
    description:
      "A hotel-focused web application inspired by modern hospitality experiences. Showcases a welcoming hotel presentation and a clean application layout, with an emphasis on accommodation, guest-facing information, and easy navigation.",
    image:
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80",
    demo: "https://dainty-gaufre-7bfef7.netlify.app/",
    tech: ["React", "JavaScript", "CSS", "Responsive UI"],
  },
  {
    title: "Authentication Dashboard",
    category: "User Management",
    description:
      "A dedicated authentication dashboard with a clean, focused interface for user access and account-related workflows. Built to demonstrate component-based development, structured layouts, and a consistent user experience.",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80",
    demo: "https://startling-sorbet-066ac2.netlify.app/",
    tech: ["React", "JavaScript", "CSS", "React Router"],
  },
];

function ProjectPreview({ project }) {
  return (
    <div className="project-preview">
      <img
        className="project-preview-image"
        src={project.image}
        alt={`${project.title} project`}
        loading="lazy"
      />

      <div className="project-preview-overlay">
        <span className="project-category">{project.category}</span>
        <h3>{project.title}</h3>
      </div>
    </div>
  );
}

function Projects() {
  return (
    <section className="projects-section" id="projects">
      <div className="projects-container">
        <div className="projects-heading">
          <span className="projects-eyebrow">MY WORK</span>

          <h2>
            Featured <span>Projects</span>
          </h2>

          <p>
            A collection of web applications I have developed using React,
            JavaScript, and modern frontend tools. Each project represents my
            focus on practical functionality, organized layouts, responsive
            design, and creating intuitive user experiences.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <article className="project-card" key={project.title}>
              {/* 1. Project image */}
              <ProjectPreview project={project} />

              <div className="project-card-content">
                {/* 2. Project number */}
                <span className="project-number">
                  PROJECT {String(index + 1).padStart(2, "0")}
                </span>

                {/* 3. Project title */}
                <h3>{project.title}</h3>

                {/* 4. Project description */}
                <p className="project-description">
                  {project.description}
                </p>

                {/* 5. Technologies */}
                <div className="project-tech-stack">
                  {project.tech.map((technology) => (
                    <span key={technology}>{technology}</span>
                  ))}
                </div>

                {/* 6. Category and live link */}
                <div className="project-card-footer">
                  <span className="project-type">
                    {project.category}
                  </span>

                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-live-link"
                    aria-label={`View ${project.title} live demo`}
                  >
                    Live Demo <span aria-hidden="true">↗</span>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
