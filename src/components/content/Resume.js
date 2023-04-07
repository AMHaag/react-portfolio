import React from 'react';
import './contentStyle.css';
import resumePdf from '../../pdf/Aaron-Haag-Resume.pdf';
import { Line, Dot } from '../../SVGs/TimelineShapes';
import { motion } from 'framer-motion';
import ResumeInformation from './ResumeInformation';
import { JobSummary, JobTitle, JobYear } from './ResumeJobSummary';
import { GrDocumentPdf } from 'react-icons/gr';

function Resume(props) {
  return (
    <div>
      <div className='timeline-grid-container'>
        <div className='tl-title-box '>
          <h1>Experience</h1>
        </div>
        <div className='tl-options-box '>
          <a href={resumePdf}>
            <p>Downloadable Pdf Resume:</p>
          </a>
          <a href={resumePdf} alt='downloadable resume'>
            <GrDocumentPdf size={'2rem'} />
          </a>
        </div>
        <div className='timeline'>
          <Line />
        </div>
        <div className='tl-point-1'>
          <Dot delay='372ms' />
        </div>
        <motion.div
          className='tl-year-1 year'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.372 }}
        >
          <div className='event-year year'>
            <JobYear job={ResumeInformation[0]} />
          </div>
        </motion.div>
        <motion.div
          className='tl-event-1 event'
          initial={{ x: '125%' }}
          animate={{ x: 0 }}
          transition={{ duration: 1, delay: 0.372 }}
        >
          <JobTitle job={ResumeInformation[0]} />
          <JobSummary job={ResumeInformation[0]} />
        </motion.div>
        <div className='tl-point-2'>
          <Dot delay='950ms' />
        </div>
        <motion.div
          className='tl-year-2 year'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.95 }}
        >
          <JobYear job={ResumeInformation[1]} />
        </motion.div>
        <motion.div
          className='tl-event-2 event'
          initial={{ x: '125%' }}
          animate={{ x: 0 }}
          transition={{ duration: 1, delay: 0.95 }}
        >
          <JobTitle job={ResumeInformation[1]} />
          <JobSummary job={ResumeInformation[1]} />
        </motion.div>
        <div className='tl-point-3'>
          <Dot delay='1528ms' />
        </div>
        <motion.div
          className='tl-year-3 year'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.528 }}
        >
          <JobYear job={ResumeInformation[2]} />
        </motion.div>
        <motion.div
          className='tl-event-3 event'
          initial={{ x: '125%' }}
          animate={{ x: 0 }}
          transition={{ duration: 1, delay: 1.528 }}
        >
          <JobTitle job={ResumeInformation[2]} />
          <JobSummary job={ResumeInformation[2]} />
        </motion.div>
        <div className='tl-point-4'>
          <Dot delay='2106ms' />
        </div>
        <motion.div
          className='tl-year-4 year'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 2.106 }}
        >
          <JobYear job={ResumeInformation[3]} />
        </motion.div>
        <motion.div
          className='tl-event-4 event'
          initial={{ x: '125%' }}
          animate={{ x: 0 }}
          transition={{ duration: 1, delay: 2.106 }}
        >
          <JobTitle job={ResumeInformation[3]} />
          <JobSummary job={ResumeInformation[3]} />
        </motion.div>
      </div>
    </div>
  );
}

export default Resume;
