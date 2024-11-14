import React, { useState } from 'react';
import './Navbar.css';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import menu_open from '../../assets/menu_open.png';
import menu_close from '../../assets/menu_close.svg';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [topNavbarVisible, setTopNavbarVisible] = useState(true); // State to control visibility of top navbar

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
    setTopNavbarVisible(!topNavbarVisible); // Toggle the visibility of the top navbar
  };

  return (
    <div className='navbar'>
      {/* Left Open Image (Hamburger Icon) */}
      <img
        src={menu_open}
        alt="Menu Open"
        className={`nav-mob-open ${menuOpen ? 'hide' : ''}`}
        onClick={handleMenuToggle}
      />

      {/* Top Navbar Content - Conditionally Rendered */}
      {topNavbarVisible && (
        <div className="desktop-navbar">
          <ul className="nav-menu">
            <li><AnchorLink className="anchor-link" href="#hero">Home</AnchorLink></li>
            <li><AnchorLink className="anchor-link" href="#about">About Me</AnchorLink></li>
            <li><AnchorLink className="anchor-link" href="#skill">Skills</AnchorLink></li>
            <li><AnchorLink className="anchor-link" href="#education">Education</AnchorLink></li>
            <li><AnchorLink className="anchor-link" href="#contact">Contact</AnchorLink></li>
          </ul>
        </div>
      )}

      <div className={`left-navbar ${menuOpen ? 'show' : ''}`}>
        <img
          src={menu_close}
          alt="Menu Close"
          className={`nav-mob-close ${menuOpen ? '' : 'hide'}`}
          onClick={handleMenuToggle}
        />
        <ul className="nav-links">
          <li><AnchorLink className="anchor-link" href="#hero">Home</AnchorLink></li>
          <li><AnchorLink className="anchor-link" href="#about">About Me</AnchorLink></li>
          <li><AnchorLink className="anchor-link" href="#skill">Skills</AnchorLink></li>
          <li><AnchorLink className="anchor-link" href="#education">Education</AnchorLink></li>
          <li><AnchorLink className="anchor-link" href="#contact">Contact</AnchorLink></li>
        </ul>
      </div>

      {/* Connect Button */}
      <div className="nav-connect">
        <AnchorLink className="anchor-link" href="#connect">Connect with me</AnchorLink>
      </div>
    </div>
  );
};

export default Navbar;
