import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import About from './components/test';
import Contact from './components/Sam';
import Projects from './components/Kaam';
import Footer from './components/Footer';
import Home from './components/Home';
import Experience from './components/Experience';

function App() {
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
    </div>
  )
}

export default App;
