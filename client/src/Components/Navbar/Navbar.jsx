import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <a className="navbar-brand" href="/">ANALYYZER</a>
        <ul className="navbar-nav">
          <li className="nav-item"><a href="/home">Home</a></li>
          <li className="nav-item"><a href="/about">About</a></li>
          <li className="nav-item"><a href="/services">Services</a></li>
          <li className="nav-item"><a href="/contact">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;

