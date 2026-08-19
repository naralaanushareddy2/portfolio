import React from 'react'
import '../styles/education.css'

import {
  FaGraduationCap,
  FaUniversity,
  FaSchool,
  FaCalendarAlt,
  FaAward
} from 'react-icons/fa'

const Education = () => {
  return (
    <section className="education" id="education">

      <div className="education-container container-fluid">

        {/* Heading */}
        <div className="education-heading">

          <p className="education-subtitle">
            Academic Journey
          </p>

          <h1>
            Education
          </h1>

          <p className="education-description">
            My academic background and educational journey.
          </p>

        </div>


        {/* Timeline */}
        <div className="education-timeline">


          {/* Bachelor's Degree */}
          <div className="education-item">

            <div className="timeline-icon">
              <FaGraduationCap />
            </div>

            <div className="education-card">

              <div className="education-card-header">

                <div>
                  <p className="education-level">
                    Bachelor's Degree
                  </p>

                  <h2>
                    B.Tech / Bachelor's Degree
                  </h2>
                </div>

                <span className="education-year">
                  <FaCalendarAlt />
                  2022 – 2026
                </span>

              </div>


              <div className="education-institution">

                <FaUniversity />

                <span>
                  Nalla Narasimha Reddy
                </span>

              </div>


              <div className="education-result">

                <FaAward />

                <span>
                  Percentage: 77
                </span>

              </div>

            </div>

          </div>


          {/* Intermediate */}
          <div className="education-item">

            <div className="timeline-icon">
              <FaUniversity />
            </div>

            <div className="education-card">

              <div className="education-card-header">

                <div>
                  <p className="education-level">
                    Higher Secondary
                  </p>

                  <h2>
                    Intermediate
                  </h2>
                </div>

                <span className="education-year">
                  <FaCalendarAlt />
                  2020 – 2022
                </span>

              </div>


              <div className="education-institution">

                <FaUniversity />

                <span>
                  GDMM Junior College
                </span>

              </div>


              <div className="education-result">

                <FaAward />

                <span>
                  Percentage: 92
                </span>

              </div>

            </div>

          </div>


          {/* Secondary School */}
          <div className="education-item">

            <div className="timeline-icon">
              <FaSchool />
            </div>

            <div className="education-card">

              <div className="education-card-header">

                <div>
                  <p className="education-level">
                    Secondary Education
                  </p>

                  <h2>
                    SSC
                  </h2>
                </div>

                <span className="education-year">
                  <FaCalendarAlt />
                  2020
                </span>

              </div>


              <div className="education-institution">

                <FaSchool />

                <span>
                  Nagarjuna High School
                </span>

              </div>


              <div className="education-result">

                <FaAward />

                <span>
                  Percentage: 92
                </span>

              </div>

            </div>

          </div>


        </div>

      </div>

    </section>
  )
}

export default Education