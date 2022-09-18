import React from 'react';
import './Header.css';
import {Link} from 'react-router-dom';

function Header(){
    return(
        
            <div>
            <div class ='main_container'>
                <div class="row header_box">
                    <div class="col links">
                    <Link class="nav-link" to='/home'>Home</Link>
                        
                    </div>
                    <div class="col links">
                        <Link class="nav-link" to='/about'>About</Link>
                    </div>
                    <div  class="col links">
                    <Link class="nav-link" to='/contacts'>Contacts</Link>
                    </div>
                    
                    
                </div>
            </div>
            </div>
        
    );
}

export default Header;
