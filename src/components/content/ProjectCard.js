import React from "react";



function ProjectCard(){


    return (
      <div className='project-card'>
        <img
          src=''
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
    );
}

export default ProjectCard