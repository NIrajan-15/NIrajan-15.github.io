import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Contact from './components/Contact';
import Projects from './components/Projects';
import Footer from './components/Footer';
import Experience from './components/Experience';
import './css/Scroller.css';
import './App.css'
function App(){


  return (
    
    <div className='App'>
      <Header/>
      <div id="about">
        <About/>
      </div>
      <div id="experience">
        <Experience/>
      </div>
      <div id="projects">
        <Projects/>
      </div>
      <div id="contact">
        <Contact/>
      </div>
      <Footer />
    </div>
  )
}

export default App;
