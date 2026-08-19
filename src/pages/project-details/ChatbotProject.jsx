import React from 'react'
import '../../styles/project-details.css'

import {
  FaArrowLeft,
  FaGithub,
  FaPython,
  FaRobot,
  FaMicrophone,
  FaComments,
  FaDatabase,
  FaBrain,
  FaCheckCircle,
  FaCode,
  FaLightbulb,
  FaChartLine
} from 'react-icons/fa'

import { Link } from 'react-router-dom'

const ChatbotProject = () => {
  return (
    <section className="project-details">

      <div className="project-details-container">

        {/* ================= TOP SECTION ================= */}

        <div className="project-top">

          <p className="project-type">
            Academic Project
          </p>

          <h1>
            Child Psychology Insights Through Chatbot Interaction
          </h1>

          <p className="project-intro">
            An interactive chatbot designed to provide accessible
            information related to child development and psychology
            through text and voice-based interaction.
          </p>

          <div className="project-actions">

            <a
              href="https://github.com/naralaanushareddy2/child-pyschology-insights-through-chatbot-interaction"
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
            <FaRobot className="section-icon" />
            Project Overview
          </h2>

          <div className="highlight-grid">

            <div className="highlight-card">

              <FaComments className="highlight-icon" />

              <h3>Text Interaction</h3>

              <p>
                Users can enter questions and receive
                relevant responses.
              </p>

            </div>


            <div className="highlight-card">

              <FaMicrophone className="highlight-icon" />

              <h3>Voice Interaction</h3>

              <p>
                Voice input is converted into text
                for chatbot processing.
              </p>

            </div>


            <div className="highlight-card">

              <FaBrain className="highlight-icon" />

              <h3>NLP Processing</h3>

              <p>
                User queries are processed using
                NLP techniques.
              </p>

            </div>

          </div>

        </div>


        {/* ================= TECHNOLOGIES ================= */}

        <div className="project-section">

          <h2>
            <FaCode className="section-icon" />
            Technologies Used
          </h2>

          <div className="tech-grid">

            <div className="tech-card">
              <FaPython />
              Python
            </div>

            <div className="tech-card">
              <FaRobot />
              Gradio
            </div>

            <div className="tech-card">
              <FaDatabase />
              Pandas
            </div>

            <div className="tech-card">
              <FaBrain />
              NLTK
            </div>

            <div className="tech-card">
              <FaMicrophone />
              SpeechRecognition
            </div>

          </div>

        </div>


        {/* ================= WHAT I BUILT ================= */}

        <div className="project-section">

          <h2>
            <FaLightbulb className="section-icon" />
            What I Built
          </h2>

          <div className="implementation-list">

            <div className="implementation-item">

              <FaCheckCircle className="check-icon" />

              <span>
                Built a chatbot interface using Gradio
              </span>

            </div>


            <div className="implementation-item">

              <FaCheckCircle className="check-icon" />

              <span>
                Created a structured question-and-answer dataset
              </span>

            </div>


            <div className="implementation-item">

              <FaCheckCircle className="check-icon" />

              <span>
                Implemented NLP-based query processing
              </span>

            </div>


            <div className="implementation-item">

              <FaCheckCircle className="check-icon" />

              <span>
                Added text and voice interaction
              </span>

            </div>


            <div className="implementation-item">

              <FaCheckCircle className="check-icon" />

              <span>
                Implemented query matching and response generation
              </span>

            </div>


            <div className="implementation-item">

              <FaCheckCircle className="check-icon" />

              <span>
                Added intent recognition for user queries
              </span>

            </div>

          </div>

        </div>


        {/* ================= HOW IT WORKS ================= */}

        <div className="project-section">

          <h2>
            <FaChartLine className="section-icon" />
            How It Works
          </h2>

          <div className="stats-grid">

            <div className="stat-card">
              <span className="workflow-number">01</span>
              <h3>User Input</h3>
              <p>Text or voice query is provided.</p>
            </div>

            <div className="stat-card">
              <span className="workflow-number">02</span>
              <h3>Processing</h3>
              <p>NLP processes the user query.</p>
            </div>

            <div className="stat-card">
              <span className="workflow-number">03</span>
              <h3>Matching</h3>
              <p>Relevant information is identified.</p>
            </div>

            <div className="stat-card">
              <span className="workflow-number">04</span>
              <h3>Response</h3>
              <p>The appropriate answer is displayed.</p>
            </div>

          </div>

        </div>


        {/* ================= KEY FEATURES ================= */}

        <div className="project-section">

          <h2>
            <FaCheckCircle className="section-icon" />
            Key Features
          </h2>

          <div className="implementation-list">

            <div className="implementation-item">
              <FaCheckCircle className="check-icon" />
              Text-based chatbot interaction
            </div>

            <div className="implementation-item">
              <FaCheckCircle className="check-icon" />
              Voice-based interaction
            </div>

            <div className="implementation-item">
              <FaCheckCircle className="check-icon" />
              NLP-based query processing
            </div>

            <div className="implementation-item">
              <FaCheckCircle className="check-icon" />
              Dataset-based responses
            </div>

            <div className="implementation-item">
              <FaCheckCircle className="check-icon" />
              Intent recognition
            </div>

            <div className="implementation-item">
              <FaCheckCircle className="check-icon" />
              Gradio user interface
            </div>

          </div>

        </div>


        {/* ================= MY CONTRIBUTION ================= */}

        <div className="project-two-column">

          <div className="project-section">

            <h2>
              <FaCode className="section-icon" />
              My Contribution
            </h2>

            <p>
              I developed the chatbot interface, prepared the
              structured dataset, implemented NLP-based query
              processing, integrated voice interaction, and
              connected the processed queries with relevant
              responses.
            </p>

          </div>


          <div className="project-section">

            <h2>
              <FaLightbulb className="section-icon" />
              Project Outcome
            </h2>

            <p>
              The project provides an accessible interface for
              obtaining child-psychology-related information through
              both text and voice interaction.
            </p>

          </div>

        </div>


        {/* ================= LEARNING ================= */}

        <div className="project-section">

          <h2>
            <FaBrain className="section-icon" />
            Technical Learning
          </h2>

          <div className="tech-grid">

            <div className="tech-card">
              <FaPython />
              Python Application Development
            </div>

            <div className="tech-card">
              <FaBrain />
              Natural Language Processing
            </div>

            <div className="tech-card">
              <FaMicrophone />
              Speech Recognition
            </div>

            <div className="tech-card">
              <FaRobot />
              Interactive UI Development
            </div>

          </div>

        </div>


        {/* ================= PROJECT REPOSITORY ================= */}
{/* 
        <div className="project-end">

          <FaGithub className="project-end-icon" />

          <h2>
            Project Repository
          </h2>

          <p>
            Explore the complete implementation and source code.
          </p>

          <a
            href="https://github.com/naralaanushareddy2/child-pyschology-insights-through-chatbot-interaction"
            target="_blank"
            rel="noopener noreferrer"
            className="project-action-btn github-btn"
          >
            <FaGithub />
            View GitHub Repository
          </a>

        </div>
 */}

        {/* ================= BACK TO PROJECTS ================= */}

        <div className="-projects-backcontainer">

          <Link
            to="/project"
            className="back-projects-btn"
          >
            <FaArrowLeft />
            Back to Projects
          </Link>

        </div>

      </div>

    </section>
  )
}

export default ChatbotProject