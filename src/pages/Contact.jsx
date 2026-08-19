import React from 'react'
import '../styles/contact.css'

import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaLinkedin,
  FaGithub,
  FaHackerrank,
  FaFileDownload,
  FaPaperPlane
} from 'react-icons/fa'

const Contact = () => {
  return (
    <section className="contact" id="contact">

      <div className="contact-container container-fluid">

        {/* Heading */}
        <div className="contact-heading">

          <p className="contact-subtitle">
            Get In Touch
          </p>

          <h1>
            Let's Connect
          </h1>

          <p className="contact-intro">
            I'm open to opportunities, collaborations, and discussions
            related to web development and software projects.
          </p>

        </div>


        {/* Contact Information */}
        <div className="contact-info">

          {/* Email */}
          <div className="contact-card">

            <div className="contact-icon">
              <FaEnvelope />
            </div>

            <div>
              <h3>Email</h3>

              <a href="mailto:your-email@example.com">
                anushanarala12@gmail.com
              </a>
            </div>

          </div>


          {/* Phone */}
          <div className="contact-card">

            <div className="contact-icon">
              <FaPhone />
            </div>

            <div>
              <h3>Phone</h3>

              <a href="tel:+91XXXXXXXXXX">
                +91 9160399083
              </a>
            </div>

          </div>


          {/* Location */}
          <div className="contact-card">

            <div className="contact-icon">
              <FaMapMarkerAlt />
            </div>

            <div>
              <h3>Location</h3>

              <p>
                Hyderabad, Telangana, India
              </p>
            </div>

          </div>

        </div>


        {/* Professional Profiles */}
        <div className="professional-section">

          <h2>
            Professional Profiles
          </h2>

          <p>
            Explore my professional profile, projects, and coding
            activities through the platforms below.
          </p>


          <div className="profile-links">

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/anushanarala/"
              target="_blank"
              rel="noopener noreferrer"
              className="profile-link"
            >
              <FaLinkedin />
              <span>LinkedIn</span>
            </a>


            {/* GitHub */}
            <a
              href="https://github.com/naralaanushareddy2"
              target="_blank"
              rel="noopener noreferrer"
              className="profile-link"
            >
              <FaGithub />
              <span>GitHub</span>
            </a>


            {/* HackerRank */}
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="profile-link"
            >
              <FaHackerrank />
              <span>HackerRank</span>
            </a>

          </div>

        </div>


        {/* Contact Actions */}
        <div className="contact-actions">

          {/* Send Email */}
          <a
            href="mailto:your-email@example.com"
            className="contact-btn primary-btn"
          >
            <FaPaperPlane />
            Send Email
          </a>


          {/* Resume */}
          <a
            href="/Anusha_Narala_Resume.pdf"
            download
            className="contact-btn secondary-btn"
          >
            <FaFileDownload />
            Download Resume
          </a>

        </div>


        {/* Final Message */}
        <div className="contact-message">

          <h2>
            Have an opportunity?
          </h2>

          <p>
            Feel free to reach out. I would be happy to discuss
            opportunities, projects, or potential collaborations.
          </p>

        </div>

      </div>

    </section>
  )
}

export default Contact