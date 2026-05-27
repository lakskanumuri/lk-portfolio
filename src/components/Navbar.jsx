import { useState, useEffect } from 'react'

function Navbar() {
  const [scrolled, setScrolled]   = useState(false)
  const [menuOpen, setMenuOpen]   = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
  }, [menuOpen])

  const closeMenu = () => setMenuOpen(false)

  return (
    <nav id="navbar" className={scrolled ? 'scrolled' : ''}>
      <div className="nav-container">
        <a href="#hero" className="nav-logo">LK</a>

        <ul className={`nav-links${menuOpen ? ' open' : ''}`}>
          <li><a href="#about"      className="nav-link" onClick={closeMenu}>About</a></li>
          <li><a href="#experience" className="nav-link" onClick={closeMenu}>Experience</a></li>
          <li><a href="#contact"    className="nav-link" onClick={closeMenu}>Contact</a></li>
        </ul>

        <button
          className={`nav-toggle${menuOpen ? ' open' : ''}`}
          onClick={() => setMenuOpen(prev => !prev)}
          aria-label="Toggle menu"
        >
          <span></span><span></span><span></span>
        </button>
      </div>
    </nav>
  )
}

export default Navbar
