import React from 'react'
import { Link } from 'react-router-dom'

import {
  FaArrowLeft,
  FaGithub,
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaLandmark,
  FaImages,
  FaHistory,
  FaPalette,
  FaMobileAlt,
  FaCheckCircle,
  FaBars
} from 'react-icons/fa'

import '../../styles/project-details.css'


const TempleProject = () => {

  return (
    <section className="project-details">

      <div className="project-details-container">


        {/* ================= PROJECT HEADER ================= */}

        <div className="project-top">

          <span className="project-type">
            Web Development Project
          </span>

          <h1>
            Temple Website
          </h1>

          <p className="project-intro">
            A responsive temple website developed to present information
            about the temple, its history, architecture, sculptures,
            cultural significance, and heritage through a visually
            structured web interface.
          </p>


          <div className="project-actions">

            {/* Replace # with your GitHub repository later */}

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

          <h2>
            <FaLandmark />
            Project Overview
          </h2>


          <div className="highlight-grid">

            <div className="highlight-card">

              <FaLandmark className="highlight-icon" />

              <h3>Temple Heritage</h3>

              <p>
                Presented the historical and cultural importance
                of the temple.
              </p>

            </div>


            <div className="highlight-card">

              <FaPalette className="highlight-icon" />

              <h3>Architecture</h3>

              <p>
                Showcased architectural elements, sculptures,
                and artistic details.
              </p>

            </div>


            <div className="highlight-card">

              <FaMobileAlt className="highlight-icon" />

              <h3>Responsive Design</h3>

              <p>
                Developed the layout to adapt across different
                screen sizes.
              </p>

            </div>

          </div>

        </div>



        {/* ================= TECHNOLOGIES ================= */}

        <div className="project-section">

          <h2>
            Technologies Used
          </h2>


          <div className="tech-grid">

            <span className="tech-card">
              <FaHtml5 />
              HTML5
            </span>

            <span className="tech-card">
              <FaCss3Alt />
              CSS3
            </span>

            <span className="tech-card">
              <FaBootstrap />
              Bootstrap
            </span>

            <span className="tech-card">
              Bootstrap Icons
            </span>

          </div>

        </div>



        {/* ================= WHAT I BUILT ================= */}

        <div className="project-section">

          <h2>
            What I Built
          </h2>


          <div className="development-content">


            <div className="development-item">

              <h3>
                Structured Temple Information
              </h3>

              <p>
                Developed a structured website to present information
                about the temple in an accessible and visually
                organized manner.
              </p>

            </div>


            <div className="development-item">

              <h3>
                Heritage and Architecture Sections
              </h3>

              <p>
                Created dedicated content areas to present the
                temple's heritage, history, architecture, sculptures,
                and cultural significance.
              </p>

            </div>


            <div className="development-item">

              <h3>
                Image-Based Presentation
              </h3>

              <p>
                Used temple and sculpture images to make the
                information more engaging and provide visual
                context for the content.
              </p>

            </div>


            <div className="development-item">

              <h3>
                Responsive Web Layout
              </h3>

              <p>
                Implemented responsive layouts using Bootstrap
                containers, rows, columns, cards, and navigation
                components.
              </p>

            </div>

          </div>

        </div>



        {/* ================= WEBSITE NAVIGATION ================= */}

        <div className="project-section">

          <h2>
            <FaBars />
            Website Sections
          </h2>


          <div className="feature-list">

            <div className="feature-item">

              <FaCheckCircle />

              <div>

                <h3>Home</h3>

                <p>
                  Introduces the temple and provides the main
                  entry point to the website.
                </p>

              </div>

            </div>


            <div className="feature-item">

              <FaCheckCircle />

              <div>

                <h3>About</h3>

                <p>
                  Provides an introduction to the temple and
                  its significance.
                </p>

              </div>

            </div>


            <div className="feature-item">

              <FaCheckCircle />

              <div>

                <h3>Architecture</h3>

                <p>
                  Presents the architectural characteristics,
                  sculptures, and artistic details of the temple.
                </p>

              </div>

            </div>


            <div className="feature-item">

              <FaCheckCircle />

              <div>

                <h3>History</h3>

                <p>
                  Provides historical information and explains
                  the cultural legacy associated with the temple.
                </p>

              </div>

            </div>


            <div className="feature-item">

              <FaCheckCircle />

              <div>

                <h3>Gallery</h3>

                <p>
                  Displays temple-related images to provide
                  a visual representation of the site.
                </p>

              </div>

            </div>


            {/* Future Section */}

            <div className="feature-item future-section">

              <FaImages />

              <div>

                <h3>More Sections</h3>

                <p>
                  Additional sections can be added here as the
                  website continues to be developed.
                </p>

              </div>

            </div>

          </div>

        </div>



        {/* ================= DESIGN AND IMPLEMENTATION ================= */}

        <div className="project-section">

          <h2>
            Design and Implementation
          </h2>


          <div className="contribution-content">

            <p>
              I designed the website using HTML and CSS and used
              Bootstrap to create responsive layouts and organize
              the content into structured sections.
            </p>

            <p>
              The website uses Bootstrap navigation, containers,
              rows, columns, cards, and responsive components to
              maintain a consistent layout across different screen
              sizes.
            </p>

            <p>
              I also incorporated visual elements such as temple
              images, sculpture images, icons, and content cards
              to create a more engaging presentation of the
              temple's heritage and architecture.
            </p>

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

                <h3>Responsive Layout</h3>

                <p>
                  Bootstrap-based layouts allow the website
                  to adapt to different screen sizes.
                </p>

              </div>

            </div>


            <div className="feature-item">

              <FaCheckCircle />

              <div>

                <h3>Navigation</h3>

                <p>
                  A structured navigation bar provides access
                  to the major sections of the website.
                </p>

              </div>

            </div>


            <div className="feature-item">

              <FaCheckCircle />

              <div>

                <h3>Visual Content</h3>

                <p>
                  Temple and sculpture imagery is used to
                  strengthen the visual presentation.
                </p>

              </div>

            </div>


            <div className="feature-item">

              <FaCheckCircle />

              <div>

                <h3>Bootstrap Components</h3>

                <p>
                  Containers, rows, columns, cards and other
                  Bootstrap utilities are used throughout the site.
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
              I designed and developed the temple website,
              including its overall page structure, navigation,
              content sections, visual presentation, and responsive
              layouts.
            </p>

            <p>
              I implemented the website using HTML and CSS and
              integrated Bootstrap to create structured and
              responsive layouts.
            </p>

            <p>
              I also worked on the presentation of temple
              architecture, sculptures, history, and cultural
              information using images, cards, icons, and
              organized content sections.
            </p>

          </div>

        </div>



        {/* ================= FUTURE DEVELOPMENT ================= */}

        <div className="project-section">

          <h2>
            Future Development
          </h2>


          <div className="learning-list">

            <div className="learning-item">

              <FaCheckCircle />

              <p>
                Additional temple information sections can be
                incorporated as the website is expanded.
              </p>

            </div>


            <div className="learning-item">

              <FaCheckCircle />

              <p>
                More gallery and visual content can be added
                to improve the presentation.
              </p>

            </div>


            <div className="learning-item">

              <FaCheckCircle />

              <p>
                Additional navigation pages can be developed
                for more detailed temple information.
              </p>

            </div>

          </div>

        </div>



        {/* ================= OUTCOME ================= */}

        <div className="project-section outcome-section">

          <h2>
            Project Outcome
          </h2>

          <p>
            The project resulted in a responsive informational
            website that presents the temple's heritage,
            architecture, history, sculptures, and cultural
            significance through a structured and visually
            engaging interface.
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


export default TempleProject