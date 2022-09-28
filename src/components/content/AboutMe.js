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
            Full stack developer leveraging a background in finding solutions
            and reducing repetitive tasks . Earned a certificate in Full Stack
            Web Development from the University of Connecticut. Dedicated puzzle
            solver who is passionate about developing apps with a focus on
            mobile-first design and good testing. Strengths in creativity,
            process improvements, and defining goals.
          </p>
        </motion.div>
      </div>
    </div>
  );
}

export default AboutMe;
