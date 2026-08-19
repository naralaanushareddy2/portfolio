import React from 'react'
import '../styles/project.css'
import { Link } from 'react-router-dom'

const Project = () => {
  return (
    <section className="projects" id="projects">

      <div className="projects-container container-fluid">

        {/* ================= HEADING ================= */}

        <div className="projects-heading">

          <p className="projects-subtitle">
            What I've Built
          </p>

          <h1>
            My Projects
          </h1>

          <p className="projects-description">
            A collection of academic and personal projects that
            showcase my technical skills, problem-solving ability,
            and development experience.
          </p>

        </div>


        {/* ================= PROJECTS ================= */}

        <div className="projects-grid">


          {/* 1. PORTFOLIO */}

          <div className="project-card">

            <div className="project-content">

              <p className="project-type">
                Personal Project
              </p>

              <h2>
                Portfolio Website
              </h2>

              <p className="project-description">
                A responsive personal portfolio website developed
                to showcase my skills, projects, education, resume,
                and professional profile.
              </p>


              <div className="technology-list">

                <span>React.js</span>
                <span>React Router</span>
                <span>JavaScript</span>
                <span>HTML5</span>
                <span>CSS3</span>
                <span>Bootstrap</span>

              </div>


              <div className="project-buttons">

                <Link
                  to="/project/portfolio"
                  className="project-btn"
                >
                  About Project
                </Link>

                {/* Add your GitHub URL later */}
                <a
                  href="#"
                  className="project-btn github-project-btn"
                >
                  GitHub
                </a>

              </div>

            </div>

          </div>



          {/* 2. TEMPLE WEBSITE */}

          <div className="project-card">

            <div className="project-content">

              <p className="project-type">
                Web Development Project
              </p>

              <h2>
                Temple Website
              </h2>

              <p className="project-description">
                A responsive temple website created to present
                information about the temple, architecture,
                sculptures, history, and cultural significance.
              </p>


              <div className="technology-list">

                <span>HTML5</span>
                <span>CSS3</span>
                <span>Bootstrap</span>

              </div>


              <div className="project-buttons">

                <Link
                  to="/project/temple"
                  className="project-btn"
                >
                  About Project
                </Link>

                {/* Add your GitHub URL later */}
                <a
                  href="#"
                  className="project-btn github-project-btn"
                >
                  GitHub
                </a>

              </div>

            </div>

          </div>



          {/* 3. TIEO */}

          <div className="project-card">

            <div className="project-content">

              <p className="project-type">
                Academic Major Project
              </p>

              <h2>
                Multi-Objective Cloud Task Scheduling
              </h2>

              <p className="project-description">
                A multi-objective cloud task scheduling system
                designed to optimize task allocation by minimizing
                cost, energy consumption, and makespan while
                improving resource utilization using TIEO.
              </p>


              <div className="technology-list">

                <span>Python</span>
                <span>SimPy</span>
                <span>NumPy</span>
                <span>Matplotlib</span>

              </div>


              <div className="project-buttons">

                <Link
                  to="/project/tieo"
                  className="project-btn"
                >
                  About Project
                </Link>


                <a
                  href="https://github.com/naralaanushareddy2/Major-Project"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-btn github-project-btn"
                >
                  GitHub
                </a>

              </div>

            </div>

          </div>



          {/* 4. CHILD PSYCHOLOGY CHATBOT */}

          <div className="project-card">

            <div className="project-content">

              <p className="project-type">
                Academic Project
              </p>

              <h2>
                Child Psychology Insights Through Chatbot Interaction
              </h2>

              <p className="project-description">
                An interactive chatbot application designed to
                provide information related to child psychology
                through text and voice-based interaction.
              </p>


              <div className="technology-list">

                <span>Python</span>
                <span>Gradio</span>
                <span>Pandas</span>
                <span>NLTK</span>
                <span>SpeechRecognition</span>

              </div>


              <div className="project-buttons">

                <Link
                  to="/project/chatbot"
                  className="project-btn"
                >
                  About Project
                </Link>


                <a
                  href="https://github.com/naralaanushareddy2/child-pyschology-insights-through-chatbot-interaction"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-btn github-project-btn"
                >
                  GitHub
                </a>

              </div>

            </div>

          </div>


        </div>

      </div>

    </section>
  )
}

export default Project