import React from 'react';
import {Route, Switch, BrowserRouter as Router} from 'react-router-dom'
import Header from './components/Header';
import About from './components/About';
import Contact from './components/Contact';
import Projects from './components/Projects';
import Footer from './components/Footer';

function App() {
  return (
    <div className='App'>
    <Router>
      

      
          <Header/> 
           <Switch>
            <Route exact path="/" component={About}/>
            <Route exact path="/about" component={About}/>
            <Route exact path="/contact" component={Contact}/>
            <Route exact path="/projects" component={Projects}/>
            </Switch>
            <Footer/>
            
          
    </Router>
    </div>
  )
}

export default App;
