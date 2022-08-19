import React from 'react';
import './footer.css';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

function Footer() {
  let iconStyle = {
    fontSize: '70px',
    margin: '15px',
    padding: '0px',
    color: 'white',
  };
  return (
    <footer>
      <div className='footer-container'>
        <div className='find-me'>
          <h2>Additonal ways to find me:</h2>
        </div>
        <div className='link-icons'>
          <a href='https://github.com/AMHaag/'>
            <FaGithub style={iconStyle} />
          </a>
          <a href='https://www.linkedin.com/in/aaron-haag/'>
            <FaLinkedin style={iconStyle} />
          </a>
          <a href='https://twitter.com/aaronmhaag'>
            <FaTwitter style={iconStyle} />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
