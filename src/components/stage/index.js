import React from 'react';
import AboutMe from '../content/AboutMe';
// import Projects from '../content/ProjectGroup';
import ProjectsV2 from '../content/ProjectsV2';
import Resume from '../content/Resume';
import Contact from '../content/Contact';


function Stage(props) {
const currentContent=props.currentContent
const isMobile = props.isMobile;
console.log(props)
if (currentContent === 'about') {return <AboutMe isMobile={isMobile}/>};
if(currentContent==='resume'){return <Resume isMobile={isMobile} />;};
if(currentContent==='contact'){return <Contact isMobile={isMobile} />;};
if (currentContent === 'projects') {return <ProjectsV2 isMobile={isMobile} />;}
}
export default Stage
