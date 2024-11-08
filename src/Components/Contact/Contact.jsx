import React from 'react'
import './Contact.css'
import Mail from '../../assets/mail.png'
import Location from '../../assets/location.png'
import contact from '../../assets/contact.jpg'
import github from '../../assets/github.png'
import twitter from '../../assets/twitter.png'
import instagram from '../../assets/instagram.jpeg'


export const Contact = () => {
  return (
    <div className='contact'> 
      <div className="contact-title">
        <h1>Get in Touch</h1>
      </div>
      <div className="contact-socials">
        <a href="https://github.com/keshav-15151" target="_blank">
        <div className="social">
          <img src={github} alt="" />
        </div>
        </a>
        <a href="https://x.com/Keshav_15151" target="_blank">
        <div className="social">
          <img src={twitter} alt="" />
        </div>
        </a>
        <a href="https://www.instagram.com/keshav_15151/" target="_blank" ><div className="social" >
          <img src={instagram} alt="" />
        </div>
        </a>
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's talk</h1>
          <div className="contact-details">
            <div className="contact-detail">
              <img src={Mail} alt="" />
              <p>keshavsharma.3001@gmail.com</p>
            </div>
            <div className="contact-detail">
              <img src={contact} alt="" />
              <p>+91 9810173604</p>
            </div>
            <div className="contact-detail">
              <img src={Location} alt="" />
              <p>Gurugram, Haryana, India</p>
            </div>
          </div>
        </div>
        <form className="contact-right">
          <label htmlFor="">Your Name</label>
          <input type="text"  placeholder='Enter your name' name='name'/>
          <label htmlFor="">Your Email</label>
          <input type="email" placeholder='Enter your email' name='email'/>
          <label htmlFor="">Write your message here</label>
          <textarea name="message" rows="8" placeholder='Enter your message'></textarea>
          <button type = "submit" className="contact-submit">Submit Now</button>
        </form>
      </div>
    </div>
  )
}

export default Contact
