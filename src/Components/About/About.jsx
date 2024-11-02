import React from 'react'
import './About.css'
import DP from '../../assets/DP.jpg'

const About = () => {
  return (
    <div className='about'>
        <div className="about-title"><h1>About me</h1></div>
        <div className="about-sections">
            <div className="about-left"><img src={DP} alt="Profile" /></div>
            <div className="about-right">
              <div className="about-para"><p>Hi! I'm Keshav Sharma, a passionate software developer with experience in DSA, web development, and more.
              I’m currently preparing for a software engineering internship and building projects to enhance my portfolio.
              </p></div>
              <div className="about-skills">
                <div className="about-skill"><p>HTML, CSS</p><hr style={{width:"50%"}}/></div>
                <div className="about-skill"><p>Javascript</p><hr style={{width:"70%"}}/></div>
                <div className="about-skill"><p>React JS</p><hr style={{width:"60%"}}/></div>
                <div className="about-skill"><p>JAVA</p><hr style={{width:"50%"}}/></div>
              </div>

              <div className="about-achievements">
                <div className="about-achievement">
                  <h1></h1>
                  <p></p>
                </div>
              </div>
            </div>

            
        </div>
    </div>
  )
}

export default About