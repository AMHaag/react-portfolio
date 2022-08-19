import React from 'react';
import './contentStyle.css';
import profilePic from '../../images/Ahaag-Photo.jpg';

function Contact() {
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
              <h1 className='headline'>Contact Me</h1>
            </div>
            <div className='contact-box'>
                <div className='subject-box'></div>
                <div className='message-box'>
                    <input>Please leave you message</input>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
