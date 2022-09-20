import React,{useEffect,useState} from 'react';
import { Redirect } from 'react-router';
import './Home.css'

function Home(){

    const[enter, setEnter] = useState(false);
    
    const[kid, setKid] = useState("");

    useEffect(() => {
        const thanksTimer = setTimeout(() => setEnter(true), 3000);
        return () => clearTimeout(thanksTimer);
        
    }, [enter]);

    

    useEffect(()=>{
        const kidTimer = setTimeout(()=>setKid("Just kidding !"),1000);
        return () => clearTimeout(kidTimer)
    },[kid]);

    if(enter===true){
        return <Redirect to="/about"/>
    }

    return(
        <>
        <div class='main'>
            
            
                
                <error class="welmsg">
                <h2> Error 404: Page not Found!</h2><br/><br/>
                <h2>{kid}</h2>
                </error>
             
            
          
        </div>
        
        </>
    );

}

export default Home;