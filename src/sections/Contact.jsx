
import { useState } from 'react'

const contactMethods = [
  {
    icon: '✉',
    title: 'Email Me',
    description: 'For opportunities and collaboration',
    value: 'dnirosha0505@gmail.com',
    href: 'mailto:dnirosha0505@gmail.com',
  },
  {
    icon: '☎',
    title: 'Call Me',
    description: 'Get in touch by phone',
    value: '8008515277',
    href: 'tel:8008515277',
  },
  {
    icon: 'in',
    title: 'LinkedIn',
    description: 'Connect with me professionally',
    value: 'View LinkedIn Profile',
    href: 'https://www.linkedin.com/in/dasari-nirosha-38a3982a8',
  },
  {
    icon: '⌘',
    title: 'GitHub',
    description: 'Explore my development projects',
    value: 'View GitHub Profile',
    href: 'https://github.com/Dasari123-Nirosha',
  },
]

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('')

  const handleChange = (event) => {
    const { name, value } = event.target

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }))

    setErrors((previous) => ({
      ...previous,
      [name]: '',
    }))

    setStatus('')
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    const nextErrors = {}

    if (!formData.name.trim()) {
      nextErrors.name = 'Please enter your name.'
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      nextErrors.email = 'Please enter a valid email address.'
    }

    if (!formData.subject.trim()) {
      nextErrors.subject = 'Please enter a subject.'
    }

    if (!formData.message.trim()) {
      nextErrors.message = 'Please enter your message.'
    }

    setErrors(nextErrors)

    if (Object.keys(nextErrors).length > 0) {
      return
    }

    const recipient = 'dnirosha0505@gmail.com'
    const subject = encodeURIComponent(formData.subject.trim())
    const body = encodeURIComponent(
      `Name: ${formData.name.trim()}\nEmail: ${formData.email.trim()}\n\n${formData.message.trim()}`
    )

    setStatus(
      'Opening your email application. If it does not open, email me directly at dnirosha0505@gmail.com.'
    )

    window.location.href =
      `mailto:${recipient}?subject=${subject}&body=${body}`
  }

  return (
    <section id="contact" className="contact-section section">
      <div className="section-container">
        <div className="contact-heading">
          <p className="section-label">LET'S CONNECT</p>

          <h2 className="section-title">
            Let's create something <span>meaningful.</span>
          </h2>

          <p className="section-description">
            Have an opportunity, a project idea, or simply want to
            connect? I'd love to hear from you. Send me a message and
            let's start a conversation.
          </p>
        </div>

        <div className="contact-layout">
          <div className="contact-information">
            <div className="contact-info-heading">
              <h3>Get in touch</h3>
              <p>
                I'm open to discussing frontend development opportunities,
                projects, and professional connections.
              </p>
            </div>

            <div className="contact-methods">
              {contactMethods.map((method) => (
                <a
                  key={method.title}
                  href={method.href}
                  target={
                    method.href.startsWith('mailto:') ||
                    method.href.startsWith('tel:')
                      ? undefined
                      : '_blank'
                  }
                  rel={
                    method.href.startsWith('mailto:') ||
                    method.href.startsWith('tel:')
                      ? undefined
                      : 'noopener noreferrer'
                  }
                  className="contact-method glass-card"
                >
                  <span className="contact-method-icon" aria-hidden="true">
                    {method.icon}
                  </span>

                  <span className="contact-method-content">
                    <strong>{method.title}</strong>
                    <span>{method.description}</span>
                    <span className="contact-method-value">
                      {method.value}
                    </span>
                  </span>

                  <span className="contact-method-arrow" aria-hidden="true">
                    ↗
                  </span>
                </a>
              ))}
            </div>

            <div className="contact-availability">
              <span className="status-dot" />
              Open to new opportunities
            </div>
          </div>

          <form
            className="contact-form glass-card"
            onSubmit={handleSubmit}
            noValidate
          >
            <div className="contact-form-heading">
              <h3>Send me a message</h3>
              <p>Fill in the details below to get in touch.</p>
            </div>

            <div className="contact-form-row">
              <div className="form-group">
                <label htmlFor="contact-name">Your Name</label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleChange}
                  aria-invalid={Boolean(errors.name)}
                />
                {errors.name && (
                  <span className="form-error" role="alert">
                    {errors.name}
                  </span>
                )}
              </div>

              <div className="form-group">
                <label htmlFor="contact-email">Email Address</label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  aria-invalid={Boolean(errors.email)}
                />
                {errors.email && (
                  <span className="form-error" role="alert">
                    {errors.email}
                  </span>
                )}
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="contact-subject">Subject</label>
              <input
                id="contact-subject"
                name="subject"
                type="text"
                placeholder="What would you like to discuss?"
                value={formData.subject}
                onChange={handleChange}
                aria-invalid={Boolean(errors.subject)}
              />
              {errors.subject && (
                <span className="form-error" role="alert">
                  {errors.subject}
                </span>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="contact-message">Your Message</label>
              <textarea
                id="contact-message"
                name="message"
                rows="5"
                placeholder="Write your message here..."
                value={formData.message}
                onChange={handleChange}
                aria-invalid={Boolean(errors.message)}
              />
              {errors.message && (
                <span className="form-error" role="alert">
                  {errors.message}
                </span>
              )}
            </div>

            <button
              type="submit"
              className="btn btn-primary contact-submit"
            >
              Send Message <span aria-hidden="true">↗</span>
            </button>

            {status && (
              <p className="contact-form-note" role="status">
                {status}
              </p>
            )}

            {!status && (
              <p className="contact-form-note">
                Sending opens your default email application with your
                message prepared.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
