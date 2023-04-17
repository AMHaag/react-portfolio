import { React, useEffect, useState } from 'react';
import './contentStyle.css';
import ProjectCard from './ProjectCard';
import { stagger, useAnimate } from 'framer-motion';
import { AiOutlineClose } from 'react-icons/ai';
import ProjectList from './Projects';

function ProjectsV2() {
  const [project, setProject] = useState(0);
  const [scope, animate] = useAnimate();
  // const iconStyle = {
  //   position: 'relative',
  //   fontSize: '40px',
  //   margin: '0px',
  //   padding: '0px',
  //   bottom: '70px',
  //   left: '150px',
  // };

  useEffect(() => expandProject(), [project]);

  function expandProject() {
    console.log(project);
    if (project === 1) {
      animate(
        'div.project-one',
        { opacity: [1, 0, 0, 0, 0, 1] },
        { duration: 0.2 }
      );
      animate('div.project-two', { opacity: 0 }, { duration: 0.2 });
      animate('div.project-three', { opacity: 0 }, { duration: 0.2 });
      animate(
        'div.project-description',
        { display: 'flex', opacity: 1 },
        { delay: 0.3 }
      );
    }
    if (project === 2) {
      animate('div.project-one', { opacity: 0 }, { duration: 0.2 });
      animate('div.project-three', { opacity: 0 }, { duration: 0.2 });
      animate('div.project-two', {
        opacity: [1, 0, 0, 0, 0, 1],
        'grid-area': [
          '1/2/2/3',
          '1/2/2/3',
          '1/2/2/3',
          '1/1/2/2',
          '1/1/2/2',
          '1/1/2/2',
        ],
      });
      animate(
        'div.project-description',
        { display: 'flex', opacity: 1 },
        { delay: 0.3 }
      );
    }
    if (project === 3) {
      animate('div.project-one', { opacity: 0 }, { duration: 0.2 });
      animate('div.project-two', { opacity: 0 }, { duration: 0.2 });
      animate('div.project-three', {
        opacity: [1, 0, 0, 0, 0, 1],
        'grid-area': [
          '1/3/2/4',
          '1/3/2/4',
          '1/3/2/4',
          '1/1/2/2',
          '1/1/2/2',
          '1/1/2/2',
        ],
      });
      animate(
        'div.project-description',
        { display: 'flex', opacity: 1 },
        { delay: 0.3 }
      );
    }
  }

  function resetProject() {
    if (project===1){
      animate([
        [
          ['div.projects-container>div.project-one', 'div.project-description'],
          { opacity: [1, 0.33, 0.15, 0, 0] },
          { duration: 0.5 },
        ],
        ['div.project-description', { display: 'none' }],
        [
          'div.projects-container>div#card',
          { opacity: [0, 0.25, 0.5, 1] },
          { duration: 0.3, delay: 0.1 },
        ],
      ]);

    }
    if (project === 2) {
      animate([
        [
          ['div.projects-container>div.project-two', 'div.project-description'],
          { opacity: [1, 0.33, 0.15, 0, 0] },
          { duration: 0.5 },
        ],
        ['div.project-description', { display: 'none' }],
        [
          'div.projects-container>div.project-two',
          { 'grid-area': '1/2/2/3' },
          { at: 0.6 },
        ],
        [
          'div.projects-container>div#card',
          { opacity: [0, 0.25, 0.5, 1] },
          { duration: 0.3, delay: 0.1 },
        ],
      ]);
    }
        if (project === 3) {
          animate([
            [
              [
                'div.projects-container>div.project-three',
                'div.project-description',
              ],
              { opacity: [1, 0.33, 0.15, 0, 0] },
              { duration: 0.5 },
            ],
            ['div.project-description', { display: 'none' }],
            [
              'div.projects-container>div.project-three',
              { 'grid-area': '1/3/2/4' },
              { at: 0.6 },
            ],
            [
              'div.projects-container>div#card',
              { opacity: [0, 0.25, 0.5, 1] },
              { duration: 0.3, delay: 0.1 },
            ],
          ]);
        }
    setProject(0);
    // animate('div.project-two',{'grid-area':'1/2/2/3'},{delay:0.1})
    // animate('div.project-three',{'grid-area':'1/3/2/4'},{delay:0.1})
    // animate('div.projects-container>div#card',{opacity:1},{duration:0.5,delay:0.6})
  }
  function showProjectNumber() {
    console.log(`current project:${project}`);
  }
  function changeProject(num) {
    console.log(`You clicked Project# ${num}`);
    setProject(num);
  }

  function displayIcons(){
    return ProjectList[project-1].TechUsed.map((v)=>{return v})
  }

  return (
    <div className='projects-frame' ref={scope}>
      <h1
        className='projects-header'
        onClick={() => {
          showProjectNumber();
        }}
      >
        Projects
      </h1>
      <div className='projects-container'>
        <div className='project-one' id='card' onClick={() => changeProject(1)}>
          <ProjectCard
            selected={project === 1 ? true : false}
            resetProject={resetProject}
            projectData={ProjectList[0]}
          />
        </div>
        <div className='project-two' id='card' onClick={() => changeProject(2)}>
          <ProjectCard
            selected={project === 2 ? true : false}
            projectData={ProjectList[1]}
          />
        </div>
        <div
          className='project-three'
          id='card'
          onClick={() => changeProject(3)}
        >
          <ProjectCard
            selected={project === 3 ? true : false}
            projectData={ProjectList[2]}
          />
        </div>
        <div className='project-description'>
          <h2>About This Project</h2>

          <p className='project-desc-text'>
            {project !== 0 ? ProjectList[project - 1].ProjectDescription : ''}
          </p>
          {/* <h2>Technologies Used</h2>
          <div className='tech-icons'>
            {ProjectList[project - 1].TechUsed.map((v) => {return v
            })}
          </div> */}
          <div className='project-links'>
            <a
              href={
                project !== 0 ? ProjectList[project - 1].DeploymentLink : ''
              }
            >
              View Deployment
            </a>
            <a href={project !== 0 ? ProjectList[project - 1].RepoLink : ''}>
              View GitHub Repo
            </a>
          </div>
          <h3
            onClick={() => {
              resetProject();
            }}
          >
            {' '}
            Show all projects
          </h3>
        </div>
      </div>
    </div>
  );
}

export default ProjectsV2;
