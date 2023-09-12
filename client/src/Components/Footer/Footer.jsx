import React from 'react';
import './Footer.css';
import { BsFacebook, BsInstagram, BsTwitter } from 'react-icons/bs'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">Analyzer</div>
        <div className="footer-social">
          <a href="/">
            <BsFacebook size={25} />
          </a>
          <a href="/">
          <BsInstagram size={25} />
          </a>
          <a href="/">
          <BsTwitter size={25} />
          </a>
        </div>
        <div className="footer-bottom">
          &copy; 2023 Analyzer. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
