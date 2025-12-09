import React from 'react';
import './contentStyle.css';
import profilePic from '../../images/Ahaag-Photo.jpg';
import {motion} from 'framer-motion'

function AboutMe() {
  return (
    <div>
      <div className="boxContainer">
        <motion.div
          className="boxLeft"
          initial={{x: '-300%'}}
          animate={{x: 0}}
          transition={{
            duration: 0.85,
            delay: 0.335,
            type: 'spring',
            bounce: 0.1
          }}>
          <img
            src={profilePic}
            id="profilePicture"
            alt="selfie of Aaron Haag"></img>
        </motion.div>
        <motion.div
          className="boxRight"
          initial={{x: '300%'}}
          animate={{x: 0}}
          transition={{
            duration: 0.85,
            delay: 0.335,
            type: 'spring',
            bounce: 0.1
          }}>
          <h2 className="about-title">Who is Aaron Haag </h2>
          <p className="about-me-text">
            Pragmatic programmer with a love for discovery, not ego. I excel at
            rapid iteration and lean prototyping; make it, break it then build
            it.
          </p>
          <p className="about-me-text">
            Areas of expereince: Javascript, CSS, React, Node.js, Git, MySQL,
            Python, Pandas, C# and ASP.NET
          </p>
        </motion.div>
      </div>
    </div>
  );
}

export default AboutMe;
