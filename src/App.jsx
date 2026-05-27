import { useEffect } from 'react'
import './App.css'

import Navbar     from './components/Navbar'
import Hero       from './components/Hero'
import About      from './components/About'
/*import Projects   from './components/Projects'*/
import Experience from './components/Experience'
import Contact    from './components/Contact'
import Footer     from './components/Footer'

function App() {
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
          observer.unobserve(entry.target)
        }
      })
    }, { threshold: 0.12 })

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Contact />
      <Footer />
    </>
  )
}

export default App
