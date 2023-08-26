import React, { Fragment } from 'react';
import BrowserRouter  from 'react-router-dom/BrowserRouter'
import {Route, Switch} from 'react-router-dom'
import Header from './components/Header';
import About from './components/About';
import Contact from './components/Contact';
import Projects from './components/Projects';
import Footer from './components/Footer';
import Home from './components/Home';
import Test from './components/test';

function App() {
  return (
    <>
    <div className='App'>
    <BrowserRouter basename="/Nirajan-Sangraula/">
      <Switch>
        <Route exact path="/" component={Home}/>
        
        <Fragment>
          <Header/>
            <Route exact path="/about" component={About}/>
            <Route exact path="/contact" component={Contact}/>
            <Route exact path="/projects" component={Projects}/>
            <Route exact path="/test" component={Test}/>
          <Footer/>

        </Fragment>
      
      </Switch>   
    </BrowserRouter>
    </div>
    
    </>
  )
}

export default App;
