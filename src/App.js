// import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
import Navbar from './components/navbar';
import Stage from './components/stage';
import Footer from './components/footer';

function App() {
  document.title = `Aaron Haag's portfolio`;
  const [content] = useState(['about', 'resume', 'contact', 'projects']);
  const [currentContent, setContent] = useState(content[1]);

  return (
    <div className='App'>
        <nav>
          
          <Navbar currentContent={currentContent} setContent={setContent} />
        </nav>

      <div>
        <Stage currentContent={currentContent} />
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
