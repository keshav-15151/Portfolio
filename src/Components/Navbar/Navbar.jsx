import React, { useState } from 'react'
import './Navbar.css'
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Navbar = () => {
  const [menu, setMenu] = useState("home")
  return (
    <div className='navbar'>
        <ul className='nav-menu'>
            <li><AnchorLink className='anchor-link' href='#home'><p onClick={() => setMenu("home")}>Home</p></AnchorLink></li>
            <li><AnchorLink className='anchor-link' offset={50} href='#about'><p onClick={() => setMenu("about")}>About Me</p></AnchorLink></li>
            <li><AnchorLink className='anchor-link' offset={50} href='#skill'><p onClick={() => setMenu("skill")}>Skills</p></AnchorLink></li>
            <li><AnchorLink className='anchor-link' offset={50} href='#education'><p onClick={() => setMenu("education")}>Education</p></AnchorLink></li>
            <li><AnchorLink className='anchor-link' offset={50} href='#contact'><p onClick={() => setMenu("contact")}>Contact</p></AnchorLink></li>
        </ul>
        <div className="nav-connect">
          <AnchorLink className='anchor-link' offset={50} href='#connect'><p onClick={() => setMenu("connect")}>Connect with me</p></AnchorLink>
        </div>
    </div>
  )
}

export default Navbar