import React from "react";
import './FooterStyle.css';

import github from './github.png';
import gmail from './gmail.png';
import linkedin from './linkedin.png';
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-title">Angel Santoyo </div>
      <div className="footer-subtitle">Feel free to check out my other projects or contact me below</div>
    <div className="socials">
                
      <a href="mailto:santoyox714@gmail.com"><img src={github} alt="git" width="65px" /> </a>
      <a href="mailto:santoyox714@gmail.com"><img src={gmail} alt="git" width="65px" /> </a>
      <a href="mailto:santoyox714@gmail.com"><img src={linkedin} alt="git" width="65px" /> </a>
    </div>
  </div>
  );
};
export default Footer;