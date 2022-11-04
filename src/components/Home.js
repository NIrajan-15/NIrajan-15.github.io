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

        // set timeout function to set enter to true which redirects to about page 1500ms after component loads.
        const enterTimer = setTimeout(() => console.log("works"), 500);
        clearTimeout(enterTimer)
        setKidMsg(true)
        
        //set timeour function to set kidmsg to true which loads "just kidding" messsage 500ms after component loads.
        const kidTimer = setTimeout(()=>console.log('works again'),1000);
        clearTimeout(kidTimer)
        setEnter(true)


        // if the state variable enter is true redirect to path "/about/"
        if(enter===true){

            return <Redirect to="/about"/>
        }
      
    },[enter],[kidMsg]);

    

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