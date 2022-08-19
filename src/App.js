// import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
import Navbar from './components/navbar';
import Stage from './components/stage';

function App() {
  document.title = `Aaron Haag's portfolio`;
  const [content] = useState(['about', 'resume', 'contact', 'projects']);
  const [currentContent, setContent] = useState(content[0]);

  return (
    <div className='App'>
      <nav>
        <Navbar currentContent={currentContent} setContent={setContent} />
      </nav>
      <div>
        <Stage currentContent={currentContent} />
      </div>
      {/* <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
