import React from 'react';
import './navbar.css';
import {
  FaUserAstronaut,
  FaAddressCard,
  FaDog,
  FaRegEnvelope,
  FaGithub,
} from 'react-icons/fa';
import { CSSTransition } from 'react-transition-group';

function Navbar(props) {
  const iconStyle = { fontSize: '40px', margin: '0px', padding: '0px' };
  const { currentContent, setContent } = props;
  console.log(currentContent);

  return (
    <div className='base'>
      <CSSTransition in={false} timeout={250} classNames='slide'>
        <h1>Aaron Haag</h1>
      </CSSTransition>

      <div className='nav-container'>
        <div className='hexagonArea first'>
          <div
            className={`hexagon ${
              currentContent === 'about' ? 'selected' : ''
            }`}
            key={'about'}
            onClick={() => {
              setContent('about');
            }}
          >
            <FaUserAstronaut style={iconStyle} />
            <h3>About Me</h3>
          </div>
          <div
            className={`hexagon ${
              currentContent === 'projects' ? 'selected' : ''
            }`}
            key={'projects'}
            onClick={() => {
              setContent('projects');
            }}
          >
            <FaDog style={iconStyle} />
            <h3>Projects</h3>
          </div>
          <div
            className={`hexagon ${
              currentContent === 'resume' ? 'selected' : ''
            }`}
            key='resume'
            onClick={() => {
              setContent('resume');
            }}
          >
            <FaAddressCard style={iconStyle} />
            <h3>Resume</h3>
          </div>
        </div>
        <div className='hexagonArea last'>
          <div
            className={`hexagon ${
              currentContent === 'contact' ? 'selected' : ''
            }`}
            onClick={() => {
              setContent('contact');
            }}
          >
            <FaRegEnvelope style={iconStyle} />
            <h3>Contact</h3>
          </div>
          <a href='https://github.com/AMHaag/react-portfolio'>
            <div className='hexagon github-link'>
              <FaGithub style={iconStyle} />
              <h3>GitHub</h3>
            </div>
          </a>
          {/* <div className='hexagon'>
            <FaAddressCard style={iconStyle} />
            <h3>Resume</h3>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
