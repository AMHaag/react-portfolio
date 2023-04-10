import React from 'react';
import './contentStyle.css';
import ProjectCard from './ProjectCard';


function ProjectsV2(){


    return (
      <div className='projects-frame'>
        <h1 className='projects-header'>Projects</h1>
        <div className='projects-container'>
          <ProjectCard />
          <ProjectCard />
          <ProjectCard/>
        </div>
      </div>
    );
}

export default ProjectsV2