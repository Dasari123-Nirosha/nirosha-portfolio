function ProjectCard({
  number,
  title,
  category,
  description,
  technologies = [],
  preview,
  liveUrl,
  githubUrl,
}) {
  return (
    <article className="project-card">
      <div className="project-preview">
        <span className="project-number">
          {number}
        </span>

        <span className="project-status">
          Personal Project
        </span>

        <div className={`project-visual project-visual-${preview || 'default'}`}>
          {preview === 'shop' && (
            <div className="preview-dashboard">
              <div className="preview-sidebar">
                <span />
                <span />
                <span />
                <span />
              </div>

              <div className="preview-main">
                <div className="preview-topbar" />

                <div className="preview-stat-grid">
                  <span />
                  <span />
                  <span />
                </div>

                <div className="preview-chart" />
              </div>
            </div>
          )}

          {preview === 'secure' && (
            <div className="preview-secure">
              <div className="preview-secure-card">
                <div className="preview-secure-icon">
                  🔒
                </div>

                <p className="preview-secure-title">
                  Secure Access
                </p>

                <div className="preview-secure-line" />
                <div className="preview-secure-line" />

                <div className="preview-secure-button" />
              </div>
            </div>
          )}

          {preview === 'portfolio' && (
            <div className="preview-portfolio">
              <div className="preview-portfolio-nav" />

              <div className="preview-portfolio-content">
                <p className="preview-portfolio-eyebrow">
                  FRONTEND DEVELOPER
                </p>

                <h4>Creative Digital Experiences</h4>

                <div className="preview-portfolio-button" />

                <div className="preview-portfolio-orb" />
              </div>
            </div>
          )}

          {(!preview ||
            !['shop', 'secure', 'portfolio'].includes(preview)) && (
            <div className="project-default-preview">
              <span>&lt;/&gt;</span>
            </div>
          )}
        </div>
      </div>

      <div className="project-details">
        {category && (
          <p className="project-category">
            {category}
          </p>
        )}

        <h3>{title}</h3>

        <p className="project-description">
          {description}
        </p>

        {technologies.length > 0 && (
          <div className="project-tags">
            {technologies.map((technology) => (
              <span key={technology}>
                {technology}
              </span>
            ))}
          </div>
        )}

        <div className="project-links">
          {liveUrl ? (
            <a
              href={liveUrl}
              target="_blank"
              rel="noreferrer"
            >
              Live Demo ↗
            </a>
          ) : (
            <span className="project-link-placeholder">
              Demo coming soon
            </span>
          )}

          {githubUrl ? (
            <a
              href={githubUrl}
              target="_blank"
              rel="noreferrer"
            >
              Source Code ↗
            </a>
          ) : (
            <span className="project-link-placeholder">
              Source coming soon
            </span>
          )}
        </div>
      </div>
    </article>
  )
}

export default ProjectCard