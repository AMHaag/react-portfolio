import React from 'react';

function Line(){

    return (
      <>
        <svg
          width='5'
          id='timeline-canvas'
          height='100%'
          xmlns='http://www.w3.org/2000/svg'
        >
          <linearGradient id='Gradient1' x1='0.5' y1='0' x2='0.5' y2='1'>
            <stop offset='0%' stop-color='rgba(255, 255, 255, 0)' />
            <stop offset='1.67%' stop-color='rgba(187, 187, 187, 0.33)' />
            <stop offset='5%' stop-color='#404040' />
            <stop offset='7.33%' stop-color='#2c2c2c' />
            <stop offset='12%' stop-color='#000000' />
            <stop offset='24%' stop-color='#000000' />
            <stop offset='48%' stop-color='#000000' />
            <stop offset='61.67%' stop-color='#000000' />
            <stop offset='89%' stop-color='#000000' />
            <stop offset='91%' stop-color='#1a1a1a' />
            <stop offset='95%' stop-color='#404040' />
            <stop offset='98.67%' stop-color='rgba(122, 122, 122, 0.67)' />
            <stop offset='100%' stop-color='rgba(255, 255, 255, 0)' />
          </linearGradient>
          <rect
            id='timeline'
            width='5'
            height='100%'
            x='0'
            y='0'
            fill='url(#Gradient1)'
          >
            <animate
              attributeName='height'
              values='1%;105%;100%'
              dur='5s'
              repeatCount={1}
            />
          </rect>
        </svg>
      </>
    );
}

function Dot(props){
let delay=props.delay
    return (
      <>
        <svg width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'>
          <circle fill='black' r='0%' cx='50%' cy='50%'>
            <animate
              attributeName='r'
              from='3%'
              to='10%'
              fill='freeze'
              begin={delay}
              dur='0.5s'
              repeatCount={1}
            />
          </circle>
            
        </svg>
      </>
    );
}

export {Line, Dot}