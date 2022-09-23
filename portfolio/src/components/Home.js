import React,{useEffect,useState} from 'react';
import { Redirect } from 'react-router';
import './Home.css'

function Home(){

    const[enter, setEnter] = useState(false);
    
    const[kid, setKid] = useState(false);

    useEffect(() => {
        const thanksTimer = setTimeout(() => setEnter(true), 1500);
        
        return () => clearTimeout(thanksTimer);
        
    }, [enter]);

    

    useEffect(()=>{
        const kidTimer = setTimeout(()=>setKid(true),500);
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
                {(kid === true &&
                    <kid>
                        <h2><p>Just Kidding! &#128513; </p></h2>
                    </kid>
                    )}
                </error>
             
            
          
        </div>
        
        </>
    );

}

export default Home;