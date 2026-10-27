function Button({
  children,
  href,
  variant = 'primary',
  className = '',
  type = 'button',
  onClick,
  download,
  target,
  rel,
  disabled = false,
}) {
  const buttonClass = `btn btn-${variant} ${className}`.trim()

  if (href) {
    return (
      <a
        href={href}
        className={buttonClass}
        download={download}
        target={target}
        rel={rel}
        onClick={onClick}
        aria-disabled={disabled}
      >
        {children}
      </a>
    )
  }

  return (
    <button
      type={type}
      className={buttonClass}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  )
}

export default Button