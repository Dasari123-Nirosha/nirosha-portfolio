function SectionHeading({
  eyebrow,
  title,
  highlight,
  description,
  align = 'left',
}) {
  return (
    <div
      className={`section-heading section-heading-${align}`}
    >
      {eyebrow && (
        <p className="section-label">
          {eyebrow}
        </p>
      )}

      <h2 className="section-title">
        {title}{' '}
        {highlight && (
          <span className="gradient-text">
            {highlight}
          </span>
        )}
      </h2>

      {description && (
        <p className="section-description">
          {description}
        </p>
      )}
    </div>
  )
}

export default SectionHeading