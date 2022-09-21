import React,{useState,useEffect} from 'react';
import './Header.css';
import {Link} from 'react-router-dom';


// Function to return the header component
function Header(){

    const[active,setActive] = useState(1);

    
    const handleClick1 = () => setActive(1);
    const handleClick2 = () => setActive(2);
    const handleClick3 = () => setActive(3);

    useEffect(() => {
        
            for(let i=1;i<4;i++)
            {
                if(active===i)
                {
                    document.getElementById("nav-link"+i.toString()).style.color = " rgb(0, 175, 202)";
                }
                else{
                    document.getElementById("nav-link"+i.toString()).style.color = "white";
                }
            }
        
    },[active])
    

    return(
        
            
            <div class ='main_container'>
                <div class="row header_box">
                    <div class="col links">
                    <Link id="nav-link1"  class="nav-link1"  onClick={handleClick1} activeClassName="active" to='/about'>About</Link>

                    
                        
                    </div>
                    <div class="col links" >
                    
                        <Link id="nav-link2" class="passive" onClick={handleClick2}  activeClassName="active" to='/projects'>Projects</Link>
                        
                        
                    </div>
                    <div class="col links" >
                    
                        <Link id="nav-link3" class="passive"  onClick={handleClick3} activeClassName="active" to='/contact'>Contact</Link>
                        
                        
                    </div>
                    
                    
                </div>
            </div>
            
        
    );
}

export default Header;
