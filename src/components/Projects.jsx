const GithubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35
      6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65
      16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5
      4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0
      9 18.13V22"/>
  </svg>
)

const ExternalLinkIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
    <polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>
  </svg>
)

const projects = [
  {
    title:    'Project Title Here',
    desc:     'A concise description of what this project does, the problem it solves, and the impact it had. Make it outcomes-focused and punchy.',
    tech:     ['React', 'Node.js', 'PostgreSQL', 'AWS'],
    github:   '#',
    live:     '#',
    featured: true,
  },
  {
    title:  'Second Project',
    desc:   'Description of your second project. What does it do and why does it matter?',
    tech:   ['Python', 'FastAPI', 'Docker'],
    github: '#',
  },
  {
    title:  'Third Project',
    desc:   'Description of your third project. Keep it outcome-oriented.',
    tech:   ['TypeScript', 'GraphQL', 'Redis'],
    github: '#',
  },
  {
    title:  'Fourth Project',
    desc:   'Description of your fourth project.',
    tech:   ['Go', 'Kubernetes', 'Terraform'],
    github: '#',
  },
]

function Projects() {
  return (
    <section id="projects">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-label">02 — Projects</span>
          <h2 className="section-title">Things I've built</h2>
        </div>

        <div className="projects-grid">
          {projects.map(({ title, desc, tech, github, live, featured }) => (
            <article
              key={title}
              className={`project-card reveal${featured ? ' featured' : ''}`}
            >
              <div className="project-top">
                {featured && <span className="project-badge">Featured</span>}
                <div className="project-links">
                  {github && (
                    <a href={github} aria-label="GitHub repository" className="icon-link">
                      <GithubIcon />
                    </a>
                  )}
                  {live && (
                    <a href={live} aria-label="Live demo" className="icon-link">
                      <ExternalLinkIcon />
                    </a>
                  )}
                </div>
              </div>

              <h3 className="project-title">{title}</h3>
              <p className="project-desc">{desc}</p>

              <div className="project-tech">
                {tech.map(tag => <span key={tag}>{tag}</span>)}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
