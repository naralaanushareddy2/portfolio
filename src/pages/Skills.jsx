import React from 'react'
import '../styles/skills.css'

const Skills = () => {
  return (
    <section className="skills" id="skills">

      <div className="skills-container">

        {/* Heading */}
        <div className="skills-heading">
          <p className="skills-subtitle">What I Work With</p>
          <h1>My Skills</h1>
          <p className="skills-description">
            Technologies and tools I use to build responsive and
            user-friendly web applications.
          </p>
        </div>

        {/* Skills Cards */}
        <div className="skills-grid">

          {/* Frontend */}
          <div className="skill-card">
            <h2>Frontend Development</h2>

            <div className="skill-list">
              <span>HTML5</span>
              <span>CSS3</span>
              <span>JavaScript</span>
              <span>React.js</span>
              <span>Bootstrap</span>
            </div>
          </div>


          {/* Backend */}
          <div className="skill-card">
            <h2>Backend Development</h2>

            <div className="skill-list">
              <span>Python</span>
              <span>Django</span>
            </div>
          </div>


          {/* Database */}
          <div className="skill-card">
            <h2>Database</h2>

            <div className="skill-list">
              <span>SQL</span>
            </div>
          </div>


          {/* Tools */}
          <div className="skill-card">
            <h2>Tools & Technologies</h2>

            <div className="skill-list">
              <span>Git</span>
              <span>GitHub</span>
              <span>VS Code</span>
            </div>
          </div>


          {/* Programming */}
          <div className="skill-card">
            <h2>Programming</h2>

            <div className="skill-list">
              <span>Python</span>
              <span>JavaScript</span>
              <span>Problem Solving</span>
              <span>OOP Concepts</span>
            </div>
          </div>


          {/* Development */}
          <div className="skill-card">
            <h2>Development Skills</h2>

            <div className="skill-list">
              <span>Responsive Design</span>
              <span>REST APIs</span>
              <span>Web Development</span>
              <span>Clean Code</span>
            </div>
          </div>

        </div>

      </div>

    </section>
  )
}

export default Skills