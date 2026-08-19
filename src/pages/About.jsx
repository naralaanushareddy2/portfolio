import React from 'react'
import '../styles/about.css'

const About = () => {
  return (
    <section className="about" id="about">

      <div className="about-container">

        {/* Section Heading */}
        <div className="about-heading">
          <p className="section-subtitle">Get to Know Me</p>
          <h1>About Me</h1>
        </div>

        {/* About Content */}
        <div className="about-content">

          <div className="about-text">

            <p>
              I'm <strong>Anusha Narala</strong>, a passionate Full-Stack
              Developer who enjoys building responsive, user-friendly, and
              scalable web applications.
            </p>

            <p>
              I focus on creating clean frontend interfaces, developing
              reliable backend systems, and connecting both to deliver
              seamless digital experiences. I enjoy turning ideas into
              functional and meaningful applications.
            </p>

            <p>
              I continuously improve my skills by working on real-world
              projects, solving programming problems, and exploring modern
              web technologies. I'm passionate about writing clean,
              maintainable code and creating applications that provide a
              smooth user experience.
            </p>

            {/* <p>
              I'm looking forward to opportunities where I can contribute
              to meaningful projects, collaborate with teams, and continue
              growing as a Full-Stack Developer.
            </p> */}

             {/* Resume Button */}
            <div className="resume-btn-container">
              <a
                href="/Resume.pdf"
                download="Resume.pdf"
                className="resume-btn"
              >
                Download Resume
              </a>
            </div>

          </div>

          {/* Developer Details */}
          <div className="about-details">

            <div className="detail-box">
              <h3>Frontend</h3>
              <p>
                HTML, CSS, JavaScript, React.js, Bootstrap
              </p>
            </div>

            <div className="detail-box">
              <h3>Backend</h3>
              <p>
              Python, Django
              </p>
            </div>

            <div className="detail-box">
              <h3>Database</h3>
              <p>
                SQL
              </p>
            </div>

            <div className="detail-box">
              <h3>Tools</h3>
              <p>
                Git, GitHub, VS Code
              </p>
            </div>

          </div>

        </div>

      </div>

    </section>
  )
}

export default About