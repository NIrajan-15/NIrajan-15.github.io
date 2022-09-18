import React from 'react';
import {Route, Switch, BrowserRouter as Router} from 'react-router-dom'
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Contacts from './components/Contacts';

function App() {
  return (
    <div className='App'>
    <Router>
      

      
          <Header/> 
           <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/home" component={Home}/>
            <Route exact path="/about" component={About}/>
            <Route exact path="/contacts" component={Contacts}/>
            </Switch>
            
          
    </Router>
    </div>
  )
}

export default App;
