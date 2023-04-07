import React from 'react';
import './contentStyle.css';
import profilePic from '../../images/Ahaag-Photo.jpg';
import {motion} from 'framer-motion'

function AboutMe() {
  return (
    <div>
      <div className='boxContainer'>
        <motion.div
          className='boxLeft'
          initial={{ x: '-300%' }}
          animate={{ x: 0 }}
          transition={{
            duration: 0.85,
            delay: 0.335,
            type: 'spring',
            bounce: 0.1,
          }}
        >
          <img
            src={profilePic}
            id='profilePicture'
            alt='selfie of Aaron Haag'
          ></img>
        </motion.div>
        <motion.div
          className='boxRight'
          initial={{ x: '300%' }}
          animate={{ x: 0 }}
          transition={{
            duration: 0.85,
            delay: 0.335,
            type: 'spring',
            bounce: 0.1,
          }}
        >
          <h2 className='about-title'>Who is Aaron Haag</h2>
          <p className='about-me-text'>
            I'm a full stack developer leveraging experience in finding solutions
            and reducing repetitive tasks. I earned a certificate in Full Stack
            Web Development from the University of Connecticut. I'm a dedicated puzzle
            solver who is passionate about the user experience. My Strengths are in creativity,
            process improvements, robust code and defining goals.
          </p>
          <p className='about-me-text'>
            Areas of expereince: Javascript, CSS, React, Node.js, Git, MySQL, Python, Pandas, Tkinter and
            Express.js
          </p>
        </motion.div>
      </div>
    </div>
  );
}

export default AboutMe;
