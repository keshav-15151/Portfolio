import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img.svg'
const  Hero = () => {
  return (
    <div id = 'hero' className='hero'>
        <img src = {profile_img} alt = ""/>
        <h1>Hey! I'm Keshav</h1>
        <p>I am a fourth year computer science student in VIT Vellore </p>
        <div className="hero-action">
        <a href="https://www.linkedin.com/in/keshav-sharma-549195249" target="_blank" rel="noopener noreferrer">
                <div className="hero-connect">
                    Connect
                </div>
            </a>
        <a href="https://drive.google.com/file/d/1Cc1VFA1j65KrD8TUZm14pwXh8-7GOd9n/view?usp=drive_link" target="_blank" rel="noopener noreferrer">
        <div className="hero-resume" >My Resume</div>
        </a>
            
        </div>
    </div>
  )
}

export default Hero
