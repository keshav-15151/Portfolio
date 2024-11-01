import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img.svg'
const  Hero = () => {
  return (
    <div className='hero'>
        <img src = {profile_img} alt = ""/>
        <h1>Hey! I'm Keshav</h1>
        <p>I am a 3rd year computer science student in VIT Vellore </p>
        <div className="hero-action">
            <div className="hero-connect">Connect</div>
            <div className="hero-resume">My Resume</div>
        </div>
    </div>
  )
}

export default Hero