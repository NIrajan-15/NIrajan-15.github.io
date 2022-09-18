import React from 'react';
import './Header.css';

function Header(){
    return(
        <div>
            <div class ='col main_container'>
                <div class="row header_box">
                    <div class="col">
                        <a  class="nav-link" href="none">
                            Home
                        </a>
                        
                    </div>
                    <div class="col">
                        <a class="nav-link anc" href="none">About</a>
                    </div>
                    <div  class="col">
                        <a class="nav-link" href="none">Contacts</a>
                    </div>
                    
                    
                </div>
            </div>
        </div>
    );
}

export default Header;
