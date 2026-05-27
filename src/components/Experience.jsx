const experience = [
  {
    role:    'Software Engineer',
    company: 'Capgemini',
    date:    'January 2026 — Present',
    bullets: [
      "Developing bespoke agentic AI solutions: end-to-end LLM pipelines, full-stack applications, and RAG systems to automate and accelerate internal financial services workflows",
      "Hands-on production experience with AWS (EC2, RDS), containerized infrastructure (Docker, Kubernetes); debugged live platform issues and built MCP integrations enabling complex multi-step reasoning in an internal agentic AI application"

    ],
  },
  {
    role:    'Software Engineer Intern - Data Science and Machine Learning Team',
    company: 'ASML',
    date:    'May 2024 - August 2024',
    bullets: [
      "Designed and implemented a Python-based computer vision pipeline to detect coordinates of fiducials,  reference markers used for alignment in manufacturing environments, from interferometric scan data",
      "Wrote clean, testable code following engineering standards and conducted thorough testing to achieve 100% detection accuracy on test images, reducing detection time by over 50% and improving overall throughput and process consistency.",
      "Analyzed data, identified trends, and collaborated cross-functionally to improve quality assurance decision-making, reducing manual intervention and aligning with stakeholder-defined operational goals"
    ],
  },
  {
    role:    'Clinical and Translational Science Research Assistant',
    company: 'Dongmei Li Lab, University of Rochester Medical Center',
    date:    'May 2023 - May 2024',
    bullets: [
      "Cleaned and structured large-scale Twitter datasets to analyze public sentiment surrounding nicotine products, enabling targeted insights for health policy research",
      "Applied NLP techniques (topic modeling, sentiment analysis), API integration, and fine-tuned a machine learning model to uncover key themes in public discourse around nicotine use and regulation",
      "Proactively identified and resolved technical issues in data processing pipelines to ensure data quality, integrity, and validation standards",
      "Created data visualizations and reports that distilled findings for use in academic publications",
    ],
  },
]

function Experience() {
  return (
    <section id="experience">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-label">02 — Experience</span>
          <h2 className="section-title">Where I've worked</h2>
        </div>

        <div className="timeline">
          {experience.map(({ role, company, date, bullets }) => (
            <div className="timeline-item reveal" key={role}>
              <div className="timeline-marker"></div>
              <div className="timeline-body">
                <div className="timeline-row">
                  <div>
                    <h3 className="timeline-role">{role}</h3>
                    <p className="timeline-company">{company}</p>
                  </div>
                  <span className="timeline-date">{date}</span>
                </div>
                <ul className="timeline-bullets">
                  {bullets.map(bullet => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
