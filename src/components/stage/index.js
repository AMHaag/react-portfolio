import React from 'react';
import AboutMe from '../content/AboutMe';
import Projects from '../content/ProjectGroup';
import Resume from '../content/Resume';
import Contact from '../content/Contact';


function Stage(props) {
const currentContent=props.currentContent
const isMobile = props.isMobile;
console.log(props)
if (currentContent === 'about') {return <AboutMe isMobile={isMobile}/>};
if(currentContent==='resume'){return <Resume isMobile={isMobile} />;};
if(currentContent==='contact'){return <Contact isMobile={isMobile} />;};
if (currentContent === 'projects') {return <Projects isMobile={isMobile} />;}
}
export default Stage
