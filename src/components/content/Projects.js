import React from 'react';
import './contentStyle.css';
import dinosThumb from '../../images/DAB-300-300.png';
import noteTakerThumb from '../../images/Note-Taker-300-300.png';
import weatherThumb from '../../images/Weather-App-300-300.png'
import pwGenThumb from '../../images/Password-Generator-300-300.png'
import { FaHtml5, FaSass, FaNode } from 'react-icons/fa';
import {
  SiCss3,
  SiJavascript,
  SiMysql,
  SiExpress,
  SiSequelize,
  SiHeroku,
} from 'react-icons/si';

function Projects() {

  return (
    <div>
      <div className='project-container'>
        <div className='project-card' id='project-1'>
          <img
            src={dinosThumb}
            alt='A game about birds'
            id='project-thumb'
          ></img>
          <div className='project-title'>Dinos Are Birds</div>
          <div className='project-description'>
            A chrome inspired game about the descendents of dinosaurs
          </div>
          <div className='project-tech-container'>
            <div className='tech-title'>Technologies used:</div>
            <div className='tech-icons'>
              <FaHtml5 /> <SiCss3 /> <SiJavascript /> <SiMysql /> <FaNode />
              <br></br> <SiExpress /> <FaSass /> <SiSequelize /> <SiHeroku />
            </div>
            <div className='ext-links'>
              <a href='http://www.dinos-are-birds.fun/'>
                Visit www.dinos-are-birds.fun
              </a>
              <br />
              <a href='https://github.com/AMHaag/dinos-are-birds'>
                View GitHub repo
              </a>
            </div>
          </div>
        </div>
        <div className='project-card' id='project-2'>
          <img
            src={noteTakerThumb}
            alt='A game about birds'
            id='project-thumb'
          ></img>
          <div className='project-title'>Note Taker</div>
          <div className='project-description'>
            A web app for taking meeting notes, built with express.js
          </div>
          <div className='project-tech-container'>
            <div className='tech-title'>Technologies used:</div>
            <div className='tech-icons'>
              <FaHtml5 /> <SiCss3 /> <SiJavascript /> <br></br>
              <SiExpress /> <SiHeroku /> <FaNode />
            </div>
            <div className='ext-links'>
              <a href='https://whispering-scrubland-18262.herokuapp.com/ '>
                View live deployment on Heroku
              </a>
              <br />
              <a href='https://github.com/AMHaag/little-shrimp-king'>
                View GitHub repo
              </a>
            </div>
          </div>
        </div>
        <div className='project-card' id='project-3'>
          <img src={weatherThumb} alt='A weather app' id='project-thumb'></img>
          <div className='project-title'>Weather App</div>
          <div className='project-description'>
            A weather app using Open Weather's REST api.
          </div>
          <div className='project-tech-container'>
            <div className='tech-title'>Technologies used:</div>
            <div className='tech-icons'>
              <FaHtml5 /> <SiCss3 /> <SiJavascript /> <FaNode />
            </div>
            <div className='ext-links'>
              <a href='https://amhaag.github.io/Weather-App/'>
                View on GitHub Pages
              </a>
              <br />
              <a href='https://github.com/AMHaag/Weather-App'>
                View GitHub repo
              </a>
            </div>
          </div>
        </div>
        <div className='project-card' id='project-4'>
          <img
            src={pwGenThumb}
            alt='A simple password generation tool'
            id='project-thumb'
          ></img>
          <div className='project-title'>Password Generator</div>
          <div className='project-description'>
            A simple password generation tool.
          </div>
          <div className='project-tech-container'>
            <div className='tech-title'>Technologies used:</div>
            <div className='tech-icons'>
              <FaHtml5 /> <SiCss3 /> <SiJavascript />
            </div>
            <div className='ext-links'>
              <a href='https://amhaag.github.io/'>View on GitHub Pages</a>
              <br />
              <a href='https://github.com/AMHaag/amhaag.github.io'>
                View GitHub repo
              </a>
            </div>
          </div>
        </div>
        <div className='project-card' id='project-5'>
          <img
            src='https://dummyimage.com/300x300/db37db/fff.png&text=in+development'
            alt='A game about birds'
            id='project-thumb'
          ></img>
          <div className='project-title'>Untitled Project</div>
          <div className='project-description'>
            It's real hush hush, ya know?
          </div>
          <div className='project-tech-container'>
            <div className='tech-title'>???</div>
            <div className='tech-icons'></div>
          </div>
        </div>
        <div className='project-card' id='project-6'>
          <img
            src='https://dummyimage.com/300x300/38d966/fff.png&text=in+development'
            alt='A game about birds'
            id='project-thumb'
          ></img>
          <div className='project-title'>Untitled Project</div>
          <div className='project-description'>
            It's real hush hush, ya know?
          </div>
          <div className='project-tech-container'>
            <div className='tech-title'>???</div>
            <div className='tech-icons'></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
