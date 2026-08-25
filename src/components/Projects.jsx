
const ExternalLinkIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
    <polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>
  </svg>
)

const projects = [
  {
    title:    'Vulnerability Radar',
    desc:     "Designed a full-stack package dependency vulnerability scanner that aggregates CVE data from NVD, OSV, and CISA's KEV feed, matches it against installed packages, and scores risk from CVSS, exploit status, and patch availability. Shipped with Alembic-managed migrations, authenticated and rate-limited endpoints, and Postgres-advisory-lock leader election for the background sync scheduler.",
    tech:     ['FastAPI', 'React', 'PostgreSQL'],
    github:   'https://github.com/lakskanumuri/vulnerability_radar',
  },
  {
    title:  'Portfolio Performance Analyzer',
    desc:   'Built an interactive investment analytics dashboard with real-time market data (Yahoo Finance API), risk metrics (Sharpe, Sortino, etc.), and valuation screening tools. Enabled users to select and compare any combination of stocks, generating automated performance diagnostics, sector breakdowns, and optimization recommendations.',
    tech:   ['Python', 'Streamlit', 'Git'],
    github: 'https://github.com/lakskanumuri/portfolio-performance-analyzer',
  }
]

function Projects() {
  return (
    <section id="projects">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-label">03 — Projects</span>
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
