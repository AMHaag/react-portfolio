import { React } from 'react';

function ProjectCard(props) {
  const data = props.projectData;



  return (
    <div className='project-box'>
      <div className='project-card-frame'>
        <img
          src={data.ProjectImage}
          alt={data.altText}
          className='project-image'
        />
        <h3 className='project-name'>{data.ProjectName}</h3>
        <p className='project-one-liner'>{data.oneLiner}</p>
      </div>

    </div>
  );
}

export default ProjectCard;
