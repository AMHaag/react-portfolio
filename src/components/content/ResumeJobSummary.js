import React from 'react';

function JobSummary(props) {
  let data = props.job;

  return (
    <div className='event-summary'>
      <p>{data.title}</p>
      <ul>
        <li>{data.list1}</li>
        <li>{data.list2}</li>
        <li>{data.list3}</li>
        <li>{data.list4}</li>
      </ul>
    </div>
  );
}

function JobTitle(props){
    let data = props.job
    return (
      <div className='event-title'>
        <p id='company'>
          {data.company}
        </p>
        <div className={props.isMobile ? 'disappear' : ''}>
          {data.icon}
        </div>
      </div>
    );
}

function JobYear(props){
  let data=props.job
  return (
    <div className='event-year'>
      <p>
        {data.start} <br /> {data.end}
      </p>
    </div>
  );
}
export {JobSummary,JobTitle,JobYear}