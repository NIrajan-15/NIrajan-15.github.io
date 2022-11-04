import React,{useEffect,useState} from 'react';
import { Redirect } from 'react-router';
import './css/Home.css'

function Home(){

    // declaring state variable enter with initial state false that redirects to about page if true.
    const[enter, setEnter] = useState(false);
    
    // declaring state variable kid with initial state false that loads "just kidding" message if true.
    const[kidMsg, setKidMsg] = useState(false);

    // use effect hook to load the joke and set variables to true and redirect to about  page.
    useEffect(() => {

        
        //set timeour function to set kidmsg to true which loads "just kidding" messsage 500ms after component loads.
        const enterTimer = setTimeout(()=>setEnter(true),1000);

        // set timeout function to set enter to true which redirects to about page 1500ms after component loads.
        const kidTimer = setTimeout(() => setKidMsg(true), 500);
        
        return () => {
            clearTimeout(kidTimer);
            clearTimeout(enterTimer);

            
        }
        
    },[enter]);

    // if the state variable enter is true redirect to path "/about/"
    
    if(enter===true){

        return <Redirect to="/about"/>
    }
    

    return(
        
        <div class='main'>
            
            <error class="welmsg">

            <h2> Error 404: Page not Found! </h2>  <br/><br/>

            {/* If kidsMsg is true then load just kidding message. */}
            {(kidMsg === true &&
                <kid>
                    <h2><p>Just Kidding! &#128513; </p></h2>
                </kid>
                )}

            </error>    
        </div>
        
        
    );

}

export default Home;