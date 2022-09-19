import React from 'react';
import './Header.css';
import {NavLink} from 'react-router-dom';

// Function to return the header component
function Header(){
    return(
        
            
            <div class ='main_container'>
                <div class="row header_box">
                    <div class="col links">
                    <NavLink  exact  class="nav-link" activeClassName="active" to='/about'>About</NavLink>
                        
                    </div>
                    <div class="col links">
                        <NavLink  class="nav-link" activeClassName="active" to='/projects'>Projects</NavLink>
                    </div>
                    <div  class="col links">
                    <NavLink eaxct class="nav-link"  activeClassName="active" to='/contact'>Contact</NavLink>
                    </div>
                    
                    
                </div>
            </div>
            
        
    );
}

export default Header;
