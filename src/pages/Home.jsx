import React from "react";
import "../styles/home.css";
import { Link } from "react-router-dom";

import { FaLinkedin, FaGithub } from "react-icons/fa";
import { SiHackerrank } from "react-icons/si";

import profile from "../assets/profile.jpg";

const Home = () => {
  return (
    <section className="hero">

      {/* Left Side */}
      <div className="hero-content">

        <p>Hello, I'm</p>

        <h1>Anusha Narala</h1>

        <h2>Full-Stack Developer</h2>

        <p className="hero-description">
          I develop responsive and user-focused web applications with clean
          interfaces, reliable backend systems, and seamless functionality.
        </p>

        {/* Buttons */}
        <div className="hero-btn">

          <Link to="/project" className="btn primary-btn">
            View Projects
          </Link>

          <Link to="/contact" className="btn secondary-btn">
            Contact Me
          </Link>

        </div>

        {/* Social Links */}
        <div className="social-links">

          <a
            href="https://www.linkedin.com/in/anushanarala/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>

          <a
            href="https://github.com/naralaanushareddy2"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.hackerrank.com/profile/anushanarala12"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="HackerRank"
          >
            <SiHackerrank />
          </a>

        </div>

      </div>

      {/* Right Side - Profile */}
      <div className="hero-image">

        <div className="profile-background"></div>

        <img
          src={profile}
          alt="Anusha Narala"
        />

      </div>

    </section>
  );
};

export default Home;