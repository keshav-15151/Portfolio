import React, { useState } from 'react';
import './Navbar.css';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import menu_open from '../../assets/menu_open.png';  
import menu_close from '../../assets/menu_close.svg';  

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className='navbar'>
      <img
        src={menu_open}
        alt="Menu Open"
        className={`nav-mob-open ${menuOpen ? 'hide' : ''}`}
        onClick={handleMenuToggle}
      />

      <div className={`left-navbar ${menuOpen ? 'show' : ''}`}>
        <img
          src={menu_close}
          alt="Menu Close"
          className={`nav-mob-close ${menuOpen ? '' : 'hide'}`}
          onClick={handleMenuToggle}
        />
        <ul className="nav-links">
          <li><AnchorLink className='anchor-link' href='#home'>Home</AnchorLink></li>
          <li><AnchorLink className='anchor-link' href='#about'>About Me</AnchorLink></li>
          <li><AnchorLink className='anchor-link' href='#skills'>Skills</AnchorLink></li>
          <li><AnchorLink className='anchor-link' href='#education'>Education</AnchorLink></li>
          <li><AnchorLink className='anchor-link' href='#contact'>Contact</AnchorLink></li>
        </ul>
      </div>

      {/* Regular Navbar for Desktop */}
      <div className="desktop-navbar">
        <ul className='nav-menu'>
          <li><AnchorLink className='anchor-link' href='#home'>Home</AnchorLink></li>
          <li><AnchorLink className='anchor-link' href='#about'>About Me</AnchorLink></li>
          <li><AnchorLink className='anchor-link' href='#skills'>Skills</AnchorLink></li>
          <li><AnchorLink className='anchor-link' href='#education'>Education</AnchorLink></li>
          <li><AnchorLink className='anchor-link' href='#contact'>Contact</AnchorLink></li>
        </ul>
      </div>

      {/* Connect Button */}
      <div className="nav-connect">
        <AnchorLink className='anchor-link' href='#connect'>Connect with me</AnchorLink>
      </div>
    </div>
  );
};

export default Navbar;
