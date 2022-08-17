import React from 'react';
import './contentStyle.css';

function Projects(){

    return (
      <div className='projectBox'>
        <div className='projectRowOne'>
          <div className='project p1 hexagon'>#1</div>
          <div className='project p2 hexagon'>#2</div>
        </div>
        <div className='projectRowTwo'>
          <div className='project p3 hexagon'>#3</div>
          <div className='titleTile hexagon'>My Projects</div>
          <div className='project p4 hexagon'>#4</div>
        </div>
        <div className='projectRowThree'>
          <div className='project p5 hexagon'>#5</div>
          <div className='project p6 hexagon'>#6</div>
        </div>
      </div>
    );
}

export default Projects;