import React from 'react';
import './Navbar.css';
import logo from '../images/navbarglen.png';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <a href="">
          <img src={logo} alt="Logo" className="navbar-logo-image" />
        </a>
      </div>
      <ul className="navbar-links">
        <li>
          <a href="https://shopee.co.id/akibantara" target="_blank" rel="noopener noreferrer">
            Akibantara Collection
          </a>
        </li>
        <li>
          <a href="https://forms.gle/vxBs9AcLyU4niNsh6" target="_blank" rel="noopener noreferrer">
            Akibantara x Eija Cafe (Exclusively)
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
