import React,{useState,useEffect} from 'react';
import './css/Header.css';
import {Link} from 'react-router-dom';


// Function to return the header section of the website.
function Header(){

    // declaring state variable active with initial state 1.
    // active variable indicates the active tab of the website with 1 - About, 2 - Projects, 3 - Contact.
    const[active,setActive] = useState(1);

    // fucntions to set tab 1,2, and 3 on clicking on the respective tab.
    const handleClick1 = () => setActive(1);
    const handleClick2 = () => setActive(2);
    const handleClick3 = () => setActive(3);


    // effect hook to set active tabs color to blue and other tabs to white.
    useEffect(() => {
        
            // looping from 1 through 4 to set and reset active tabs.
            for(let i=1;i<4;i++)
            {
                // set the active tab color to blue.
                if(active===i)
                {
                    document.getElementById("nav-link"+i.toString()).style.color = " rgb(0, 175, 202)";
                }
                // set non-active tab colors to white.
                else{
                    document.getElementById("nav-link"+i.toString()).style.color = "white";
                }
                
            }
    })
    

    return(
        
        <div class ='main_container'>

            <div class="row header_box">

                {/* hyperlinks to /about path */}
                <div class="col links">
                    <Link id="nav-link1"  class="nav-link1"  onClick={handleClick1} activeClassName="active" to='/about'>About</Link>
                </div>

                {/* hyperlinks to /about path */}
                <div class="col links" >
                    <Link id="nav-link2" class="passive" onClick={handleClick2}  activeClassName="active" to='/projects'>Projects</Link>
                </div>
                
                {/* hyperlinks to /about path */}
                <div class="col links" >
                    <Link id="nav-link3" class="passive"  onClick={handleClick3} activeClassName="active" to='/contact'>Contact</Link>
                </div>
                
                
            </div>
        </div>
            
        
    );
}

// export function header to access in other files
export default Header;
