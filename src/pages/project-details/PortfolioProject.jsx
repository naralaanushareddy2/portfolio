import React from 'react'
import { Link } from 'react-router-dom'

import {
  FaArrowLeft,
  FaReact,
  FaCode,
  FaMobileAlt,
  FaGithub,
  FaCheckCircle,
  FaLayerGroup,
  FaFileDownload,
  FaLinkedin,
  FaGraduationCap
} from 'react-icons/fa'

import '../../styles/project-details.css'


const PortfolioProject = () => {

  return (
    <section className="project-details">

      <div className="project-details-container">


        {/* ================= PROJECT HEADER ================= */}

        <div className="project-top">

          <span className="project-type">
            Personal Project
          </span>

          <h1>
            Personal Portfolio Website
          </h1>

          <p className="project-intro">
            A responsive personal portfolio website developed using
            React.js to present my technical skills, academic projects,
            education, resume, and professional profile in a clear and
            structured manner.
          </p>

          <div className="project-actions">

            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="project-action-btn github-btn"
            >
              <FaGithub />
              View on GitHub
            </a>

          </div>

        </div>



        {/* ================= PROJECT OVERVIEW ================= */}

        <div className="project-section">

          <h2>Project Overview</h2>

          <div className="highlight-grid">

            <div className="highlight-card">

              <FaReact className="highlight-icon" />

              <h3>React.js</h3>

              <p>
                Developed using reusable React components
                and structured pages.
              </p>

            </div>


            <div className="highlight-card">

              <FaCode className="highlight-icon" />

              <h3>Modern Interface</h3>

              <p>
                Designed a clean and structured interface
                for professional presentation.
              </p>

            </div>


            <div className="highlight-card">

              <FaMobileAlt className="highlight-icon" />

              <h3>Responsive Design</h3>

              <p>
                Designed layouts that adapt to different
                screen sizes and devices.
              </p>

            </div>

          </div>

        </div>



        {/* ================= TECHNOLOGIES ================= */}

        <div className="project-section">

          <h2>
            <FaCode />
            Technologies Used
          </h2>

          <div className="tech-grid">

            <span className="tech-card">
              <FaReact />
              React.js
            </span>

            <span className="tech-card">
              JavaScript
            </span>

            <span className="tech-card">
              HTML5
            </span>

            <span className="tech-card">
              CSS3
            </span>

            <span className="tech-card">
              Bootstrap
            </span>

            <span className="tech-card">
              React Router
            </span>

          </div>

        </div>



        {/* ================= PROJECT DEVELOPMENT ================= */}

        <div className="project-section">

          <h2>
            <FaLayerGroup />
            Project Development
          </h2>

          <div className="development-content">


            <div className="development-item">

              <h3>
                Component-Based Development
              </h3>

              <p>
                Developed the portfolio using reusable React components
                and organized the application into separate pages and
                components to maintain a structured and scalable project
                architecture.
              </p>

            </div>


            <div className="development-item">

              <h3>
                Responsive User Interface
              </h3>

              <p>
                Created responsive layouts using CSS and Bootstrap,
                ensuring that the portfolio provides a consistent
                browsing experience across different screen sizes.
              </p>

            </div>


            <div className="development-item">

              <h3>
                Professional Project Presentation
              </h3>

              <p>
                Designed a dedicated projects section where recruiters
                can review my academic and personal projects, explore
                the technologies used, and access detailed project
                information.
              </p>

            </div>


            <div className="development-item">

              <h3>
                Professional Profile Integration
              </h3>

              <p>
                Integrated links to my GitHub, LinkedIn, and HackerRank
                profiles along with a resume download option to provide
                recruiters with convenient access to my professional
                information.
              </p>

            </div>

          </div>

        </div>



        {/* ================= KEY FEATURES ================= */}

        <div className="project-section">

          <h2>
            Key Features
          </h2>

          <div className="feature-list">

            <div className="feature-item">

              <FaCheckCircle />

              <div>
                <h3>Responsive Portfolio</h3>

                <p>
                  The interface is designed to adapt to different
                  screen sizes while maintaining a clean layout.
                </p>
              </div>

            </div>


            <div className="feature-item">

              <FaCheckCircle />

              <div>
                <h3>Project Showcase</h3>

                <p>
                  Academic and personal projects are presented with
                  their technologies, descriptions, and repository links.
                </p>
              </div>

            </div>


            <div className="feature-item">

              <FaCheckCircle />

              <div>
                <h3>Dedicated Project Details</h3>

                <p>
                  Individual project pages provide recruiters with
                  additional information about each project.
                </p>
              </div>

            </div>


            <div className="feature-item">

              <FaCheckCircle />

              <div>
                <h3>Professional Profile Links</h3>

                <p>
                  GitHub, LinkedIn, and HackerRank profiles are
                  directly accessible from the portfolio.
                </p>
              </div>

            </div>


            <div className="feature-item">

              <FaCheckCircle />

              <div>
                <h3>Resume Access</h3>

                <p>
                  A dedicated resume download option allows recruiters
                  to access my resume directly.
                </p>
              </div>

            </div>


            <div className="feature-item">

              <FaCheckCircle />

              <div>
                <h3>Structured Navigation</h3>

                <p>
                  The portfolio is organized into clearly defined
                  sections for easy navigation and information access.
                </p>
              </div>

            </div>

          </div>

        </div>



        {/* ================= MY CONTRIBUTION ================= */}

        <div className="project-section">

          <h2>
            My Contribution
          </h2>

          <div className="contribution-content">

            <p>
              I designed and developed the overall structure of the
              portfolio website and organized the application into
              reusable React components and individual pages.
            </p>

            <p>
              I implemented responsive layouts using CSS and Bootstrap,
              created the project showcase, and developed dedicated
              pages for presenting detailed project information.
            </p>

            <p>
              I also implemented application navigation using React
              Router and integrated GitHub, LinkedIn, HackerRank, and
              resume access to make the portfolio more useful for
              recruiters.
            </p>

          </div>

        </div>



        {/* ================= WHAT I LEARNED ================= */}

        <div className="project-section">

          <h2>
            What I Learned
          </h2>

          <div className="learning-list">

            <div className="learning-item">

              <FaCheckCircle />

              <p>
                Developing reusable and maintainable React components.
              </p>

            </div>


            <div className="learning-item">

              <FaCheckCircle />

              <p>
                Structuring a multi-page React application using
                React Router.
              </p>

            </div>


            <div className="learning-item">

              <FaCheckCircle />

              <p>
                Creating responsive layouts using CSS and Bootstrap.
              </p>

            </div>


            <div className="learning-item">

              <FaCheckCircle />

              <p>
                Presenting technical projects in a clear and
                recruiter-friendly format.
              </p>

            </div>

          </div>

        </div>



        {/* ================= PROJECT OUTCOME ================= */}

        <div className="project-section outcome-section">

          <h2>
            Project Outcome
          </h2>

          <p>
            The completed portfolio provides a structured platform
            for presenting my technical background, projects,
            education, and professional information while allowing
            recruiters to easily explore my work and professional
            profiles.
          </p>

        </div>



        {/* ================= BACK TO PROJECTS ================= */}

        <div className="project-end">

          <Link
            to="/project"
            className="project-action-btn back-btn"
          >

            <FaArrowLeft />

            Back to Projects

          </Link>

        </div>


      </div>

    </section>
  )
}


export default PortfolioProject