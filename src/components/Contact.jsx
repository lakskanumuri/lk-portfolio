function Contact() {
  return (
    <section id="contact">
      <div className="container">
        <div className="contact-inner reveal">
          <span className="section-label">03 — Contact</span>
          <h2 className="section-title">Let's Connect!</h2>
          <p className="contact-text">
            Whether you have a project in mind, a question, or just want to say
            hello, please feel free to reach out. I'm always open to discussing new opportunities!
          </p>
          <a href="mailto:lakskanumuri@gmail.com" className="btn btn-primary btn-lg">
            Say Hello
          </a>
          <div className="social-links">
            <a href="https://github.com/lakskanumuri"    target="_blank" rel="noopener noreferrer" className="social-link">GitHub</a>
            <a href="https://linkedin.com/in/lakshmi-kanumuri"  target="_blank" rel="noopener noreferrer" className="social-link">LinkedIn</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
