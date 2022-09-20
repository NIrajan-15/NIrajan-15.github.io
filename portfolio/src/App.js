import React, { Fragment } from 'react';
import {Route, Switch, BrowserRouter as Router} from 'react-router-dom'
import Header from './components/Header';
import About from './components/About';
import Contact from './components/Contact';
import Projects from './components/Projects';
import Footer from './components/Footer';
import Home from './components/Home';

function App() {
  return (
    <>
    <div className='App'>
    <Router>
      

      
           
           <Switch>
              <Route exact path="/" component={Home}/>
              <Fragment>
                <Header/>
                  <Route exact path="/about" component={About}/>
                  <Route exact path="/contact" component={Contact}/>
                  <Route exact path="/projects" component={Projects}/>
                <Footer/>

              </Fragment>
            
            </Switch>
            

            
            
          
    </Router>
    </div>
    
    </>
  )
}

export default App;
