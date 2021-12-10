import logo from './logo.svg';
import './App.css';
import React from 'react';
import Home from './components/home/Home';
import About from './components/about/About';
import Experience from './components/experience/Experience';
import Projects from './components/projects/Projects';
import Contact from './components/contact/Contact';


function App() {
  return (
    
    <div className="App">
      <Home/>
      <About />
      <Experience />
      <Blog />
      <Projects />
      <Contact />
    </div>


  );
}

export default App;
