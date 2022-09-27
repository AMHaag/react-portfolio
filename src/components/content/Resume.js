import React from 'react';
import './contentStyle.css';
// import resumePdf from '../../pdf/Aaron-Haag-Resume.pdf';
import { Line, Dot } from '../../SVGs/TimelineShapes';
import { motion } from 'framer-motion';

function Resume() {
  return (
    <div>
      <div className='timeline-grid-container'>
        <div className='tl-title-box resume-content'>title </div>
        <div className='tl-options-box '>options</div>
        <div className='timeline'>
          <Line />
        </div>
        <div className='tl-point-1'>
          <Dot delay='335ms' />
        </div>
        <motion.div className='tl-year-1'>2022</motion.div>
        <div className='tl-event-1'>Bootcamp </div>
        <div className='tl-point-2'>
          <Dot />
        </div>
        <div className='tl-year-2'>2017</div>
        <div className='tl-event-2'>Starr</div>
        <div className='tl-point-3'>
          <Dot /> 
        </div>
        <div className='tl-year-3'>2016</div>
        <div className='tl-event-3'>Epic</div>
        <div className='tl-point-4'>
          <Dot delay='335ms' />
        </div>
        <div className='tl-year-4'></div>
        <div className='tl-event-4'></div>
        <div className='tl-point-5'>
          <Dot delay='335ms' />
        </div>
        <div className='tl-year-5'></div>
        <div className='tl-event-5'></div>
        <div className='tl-point-6'>
          <Dot delay='335ms' />
        </div>
        <div className='tl-year-6'></div>
        <div className='tl-event-6'></div>
        <div className='tl-point-7'>
          <Dot delay='335ms' />
        </div>
        <div className='tl-year-7'></div>
        <div className='tl-event-7'></div>
      </div>
    </div>
  );
}

export default Resume;
