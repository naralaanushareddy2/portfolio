import React from 'react'
import { Link } from 'react-router-dom'
import {
  FaArrowLeft,
  FaCloud,
  FaPython,
  FaBolt,
  FaDollarSign,
  FaClock,
  FaServer,
  FaChartLine,
  FaCheckCircle,
  FaGithub
} from 'react-icons/fa'

import '../../styles/project-details.css'

const TIEOProject = () => {
  return (
    <section className="project-details">

      <div className="project-details-container">

        {/* Back to Projects */}
        <Link to="/project" className="back-projects">
          <FaArrowLeft />
          Back to Projects
        </Link>


        {/* Project Header */}
        <div className="project-top">

          <span className="project-type">
            Academic Major Project
          </span>

          <h1>
            Multi-Objective Metaheuristic Scheduling
            <br />
            in Cloud Computing
          </h1>

          <p className="project-intro">
            A cloud task scheduling system developed to minimize
            cost and energy consumption while improving makespan,
            response time, and resource utilization using the
            Tribal Intelligent Evolution Optimization (TIEO) algorithm.
          </p>

          <div className="project-actions">

            <a
              href="https://github.com/naralaanushareddy2/Major-Project"
              target="_blank"
              rel="noopener noreferrer"
              className="project-action-btn github-btn"
            >
              <FaGithub />
              View on GitHub
            </a>

          </div>

        </div>


        {/* Project Overview */}
        <div className="project-section">

          <h2>Project Overview</h2>

          <div className="highlight-grid">

            <div className="highlight-card">
              <FaCloud className="highlight-icon" />
              <h3>Cloud Scheduling</h3>
              <p>
                Intelligent task-to-VM allocation
              </p>
            </div>

            <div className="highlight-card">
              <FaChartLine className="highlight-icon" />
              <h3>Multi-Objective</h3>
              <p>
                Cost, energy and performance optimization
              </p>
            </div>

            <div className="highlight-card">
              <FaServer className="highlight-icon" />
              <h3>TIEO Algorithm</h3>
              <p>
                Adaptive metaheuristic scheduling
              </p>
            </div>

          </div>

        </div>


        {/* Technologies */}
        <div className="project-section">

          <h2>Technologies Used</h2>

          <div className="tech-grid">

            <div className="tech-card">
              <FaPython />
              Python
            </div>

            <div className="tech-card">
              <FaCloud />
              SimPy
            </div>

            <div className="tech-card">
              NumPy
            </div>

            <div className="tech-card">
              Matplotlib
            </div>

          </div>

        </div>


        {/* What I Built */}
        <div className="project-section">

          <h2>What I Built</h2>

          <div className="implementation-list">

            <div className="implementation-item">
              <FaCheckCircle className="check-icon" />
              Task-to-VM scheduling system
            </div>

            <div className="implementation-item">
              <FaCheckCircle className="check-icon" />
              TIEO optimization algorithm
            </div>

            <div className="implementation-item">
              <FaCheckCircle className="check-icon" />
              Energy-aware scheduling
            </div>

            <div className="implementation-item">
              <FaCheckCircle className="check-icon" />
              Cost-aware resource allocation
            </div>

            <div className="implementation-item">
              <FaCheckCircle className="check-icon" />
              Makespan and response-time evaluation
            </div>

            <div className="implementation-item">
              <FaCheckCircle className="check-icon" />
              Performance comparison with baseline algorithms
            </div>

          </div>

        </div>


        {/* Optimization Objectives */}
        <div className="project-section">

          <h2>Optimization Objectives</h2>

          <div className="stats-grid">

            <div className="stat-card">
              <FaDollarSign className="stat-icon" />
              <h3>Cost</h3>
              <p>Reduce cloud execution cost</p>
            </div>

            <div className="stat-card">
              <FaBolt className="stat-icon" />
              <h3>Energy</h3>
              <p>Improve energy efficiency</p>
            </div>

            <div className="stat-card">
              <FaClock className="stat-icon" />
              <h3>Makespan</h3>
              <p>Reduce overall execution time</p>
            </div>

            <div className="stat-card">
              <FaChartLine className="stat-icon" />
              <h3>Response Time</h3>
              <p>Improve task responsiveness</p>
            </div>

            <div className="stat-card">
              <FaServer className="stat-icon" />
              <h3>Utilization</h3>
              <p>Improve resource utilization</p>
            </div>

          </div>

        </div>


        {/* Performance Improvement */}
        <div className="project-section">

          <h2>Performance Improvement</h2>

          <p className="section-description">
            The proposed TIEO-based scheduling approach was evaluated
            against conventional scheduling and optimization approaches
            using multiple performance metrics.
          </p>

          <div className="comparison-grid">

            <div className="comparison-card">
              <span className="comparison-label">
                Makespan
              </span>
              <strong>17.8%</strong>
              <p>Reduction</p>
            </div>

            <div className="comparison-card">
              <span className="comparison-label">
                Energy Efficiency
              </span>
              <strong>19.4%</strong>
              <p>Improvement</p>
            </div>

            <div className="comparison-card">
              <span className="comparison-label">
                Resource Utilization
              </span>
              <strong>22.1%</strong>
              <p>Improvement</p>
            </div>

            <div className="comparison-card">
              <span className="comparison-label">
                Response Time
              </span>
              <strong>14%</strong>
              <p>Reduction</p>
            </div>

          </div>

        </div>


        {/* My Contribution */}
        <div className="project-section">

          <h2>My Contribution</h2>

          <p>
            I designed and implemented the TIEO-based scheduling
            approach, developed the task allocation and optimization
            workflow, configured the simulation environment, evaluated
            the scheduling performance, and analyzed the results using
            cost, energy, makespan, response time, and resource
            utilization metrics.
          </p>

        </div>


        {/* Outcome */}
        <div className="project-section project-outcome">

          <h2>Project Outcome</h2>

          <p>
            The project demonstrates an adaptive multi-objective
            scheduling approach for cloud environments that balances
            computational performance, energy consumption, cost,
            and resource utilization.
          </p>

        </div>


        {/* Bottom navigation */}
        <div className="project-end">

          <Link to="/project" className="back-projects bottom-back">
            <FaArrowLeft />
            Back to Projects
          </Link>

        </div>

      </div>

    </section>
  )
}

export default TIEOProject