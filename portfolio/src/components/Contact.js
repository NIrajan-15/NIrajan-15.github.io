import React from 'react';
import "./Contact.css"


function Contact(){
    return(
        <div class="col contactContainer">
            

            
            <div clas="col">
                <div class="row nameBox">
                   <h5>Name</h5>
                   <input type="text" class="top"></input>
                   
                </div>
                <div class="row emailBox">
                    <h5>Email </h5>
                    <input type="text" class="top"></input>
                </div>
                <div class="row Message">
                    <h5>Message</h5>
                    <input type="text" class="messageInput"></input>
                </div>
                <div class="row submit">
                    <input type="button" class="submitButon" value="Submit"/>
                </div>
                
                </div>    
        </div>
    );
}

export default Contact;