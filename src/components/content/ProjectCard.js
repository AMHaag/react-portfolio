import React from "react";



function ProjectCard(){


    return (
      <div className='project-card-frame'>
        <img
          src='https://placehold.co/500x800.jpeg'
          alt='placeholder'
          className='project-image'
        />
        <h3 className='project-name'>Sudoku Solver</h3>
        <p className='project-one-liner'>
          A recursive backtracking algorithm that can solve even extreme difficulty puzzles lightning fast.
        </p>
      </div>
    );}

export default ProjectCard