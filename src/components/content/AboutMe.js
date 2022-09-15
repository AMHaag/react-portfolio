import React from 'react';
import './contentStyle.css';
import profilePic from '../../images/Ahaag-Photo.jpg';

function AboutMe() {
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
          <h2 className='about-title'>Who is Aaron Haag</h2>
          <p className='about-me-text'>
            Aaron Haag is a full stack developer leveraging his background in
            cross system reporting to provide insight on curating data for
            end-users to make decisions and trace data flow. He earned a
            certificate in Full Stack Web Development from the University of
            Connecticut. Aaron is a dedicated puzzle solver who is passionate
            about developing apps with a focus on mobile-first design and good
            testing. His greatest strengths are in creativity, process
            improvements, and defining goals.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
