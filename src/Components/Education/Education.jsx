import React from 'react'
import './Education.css'
import Education_data from '../../assets/education_data'

const Education = () => {
  return (
    <div className='education'>
        <div className="education-title">
            <h1>Education</h1>
        </div>
        <div className="education-container">
          {Education_data.map((education) => {
            return (
              <div key={education.E_no} className="education-format">
                <h3>{education.E_no}</h3>
                <h2>{education.E_degree}</h2>
                <h2>{education.E_ins}</h2>
                <h4>{education.E_duration}</h4>
                <h4>{education.E_grade}</h4>
              </div>
            )
          })}
        </div>
    </div>
  )
}

export default Education
