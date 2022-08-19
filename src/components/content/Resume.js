import React from 'react';
import './contentStyle.css';
import profilePic from '../../images/Ahaag-Photo.jpg';

function Resume() {
  return (
    <div>
      <div className='boxContainer'>
        <div className='boxLeft'>
          <img
            src={profilePic}
            id='profilePicture'
            alt='selfie of Aaron Haag'
          ></img>
        </div>
        <div className='boxRight'>
          <div className='download-box'>
            <div className='headlineBox'>
              <h1 className='headline'>Resume</h1>
            </div>
            <div className='download-container'>
              <a href={profilePic} download className='download-link'>
                Click here to download .pdf
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resume;
