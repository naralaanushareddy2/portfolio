import React from 'react'
import '../styles/nav.css'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <nav className="nav">
      <div className="container-fluid">
        <div className="row w-100 align-items-center justify-content-center">

          <Link className="nav-link" to="/">
            Home
          </Link>

          <Link className="nav-link" to="/about">
            About Me
          </Link>

          <Link className="nav-link" to="/skills">
            Skills
          </Link>

          <Link className="nav-link" to="/project">
            Projects
          </Link>

          <Link className="nav-link" to="/education">
            Education
          </Link>

          <Link className="nav-link contact-btn" to="/contact">
            Contact
          </Link>

        </div>
      </div>
    </nav>
  )
}

export default Nav