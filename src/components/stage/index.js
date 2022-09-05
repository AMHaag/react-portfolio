import React from 'react';
import AboutMe from '../content/AboutMe';
import Projects from '../content/ProjectGroup';
import Resume from '../content/Resume';
import Contact from '../content/Contact';


function Stage(props) {
const {currentContent}=props
console.log(props)
if (currentContent === 'about') {return <AboutMe />};
if(currentContent==='resume'){return <Resume/>};
if(currentContent==='contact'){return <Contact/>};
if (currentContent === 'projects') {return <Projects />}
}
export default Stage
