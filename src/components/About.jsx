const skills = [
  { category: 'Languages',     items: ['Python', 'SQL', 'JavaScript','R' ,'Java', 'C++'] },
  { category: 'AI/ML',    items: ['LLMs', 'RAG', 'TensorFlow', 'PyTorch', 'LangChain', 'LangGraph', 'MCP'] },
  { category: 'Data & Cloud', items: ['PostgreSQL','ETL', 'Data Warehousing', 'AWS', 'Tableau', 'PowerBI'] },
  {category: 'Infrastructure', items: ['Docker', 'Kubernetes', 'Git', 'Linux'] },
  {category: 'Web & Frameworks', items: ['HTML/CSS','React', 'Node.js', 'FastAPI'] },
]

function About() {
  return (
    <section id="about">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-label">01 — About</span>
          <h2 className="section-title">A Bit About Me</h2>
        </div>

        <div className="about-grid">
          <div className="about-text reveal">
            <p>
              I'm a Software Engineer currently working in New York City. My work sits at the intersection of machine learning
              engineering, data pipelines, and applied AI — from designing RAG architectures
              and agentic workflows to wiring up the APIs and infrastructure that make them
              production-ready.
            </p>
            <p>
              When I'm not building, you'll find me running, reading, or listening to music.
              I'm currently deepening my cloud expertise through the AWS Solutions Architect
              certification (expected June 2026).
            </p>
            {/* <a href="/Lakshmi_Kanumuri_Resume_2026.pdf" download className="btn btn-outline">Download Resume</a> */}
          </div>

          <div className="skills-grid reveal">
            {skills.map(({ category, items }) => (
              <div className="skill-category" key={category}>
                <h4>{category}</h4>
                <ul>
                  {items.map(item => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
