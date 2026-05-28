function Hero() {
  return (
    <section id="hero">
      <div className="hero-blob blob-1"></div>
      <div className="hero-blob blob-2"></div>

      <div className="hero-content fade-in visible">
        <p className="hero-greeting">Hi, I'm</p>
        <h1 className="hero-name">Lakshmi<br />Kanumuri</h1>
        <p className="hero-tagline">Software Engineer interested in building things that matter.</p>
        <div className="hero-cta">
          <a href="#experience" className="btn btn-primary">View Experience</a>
          <a href="#contact"  className="btn btn-ghost">Get in Touch</a>
        </div>
      </div>
      <div className="hero-image fade-in visible">
        <img src="/lakshmi_kanumuri_headshot.png" className="headshot" />
      </div>
      <div className="hero-scroll-hint">
        <span>Scroll</span>
        <div className="scroll-line"></div>
      </div>
    </section>
  )
}

export default Hero
