import React,{useState,useEffect} from 'react';
import emailjs from 'emailjs-com';
import "./css/Contact.css"
import validator from 'validator';

// Function that returns the contact section of the website
function Contact(){

    // Declare state variable "error" with initail value false
    const[error, setError] = useState(null)
    
    
    // Function to validate the email using validator package
    const valildateEmail = (e) =>{

    
    // Set email to value inside message box
    let email = e.target.value    

        // if email in invalid then error and sub are set to false
        if((validator.isEmail(email))){
            setError(false)
            
        } 
        else{
            setError(true)    
        }   
    }


    // Function to send email to nirajan according to template setup on emailjs
    function sendEmail(e) {
        
        
        //to cancel once changes is made on email field  
        e.preventDefault();

        // send from to emailjs 
        emailjs.sendForm(process.env.REACT_APP_SERVICE_ID,process.env.REACT_APP_TEMPLATE_ID, e.target, process.env.REACT_APP_PUBLIC_KEY)
        .then((result) => {

            window.alert("message sent")
            window.location.reload()
          
        // if error occurs then Error message is displayed
        },(error) => {
            document.getElementById("error").innerHTML = "Error Sending Message!"
        })

    }

    return(
        <div class="col contactContainer">
            
            <div clas="col form" id="form">

                {/* Form to send email message to Nirajan on submitting  */}
                <form className="contact-form" onSubmit={sendEmail}>

                <input type="hidden" name="contact-form"/>

                {/* Name of the sender*/}
                <div class="row nameBox">
                    <label> <h5>Name</h5> </label>
                    <input type="text" class="top" name="name" required/>
                </div>

                {/* Email of the sender*/}
                <div class="row emailBox">
                    <label> <h5>Email</h5> </label>
                    <input type="text" class="top" name="email" required  onChange={(e) => valildateEmail(e)}></input>
                </div>

                {/* if email is not in validator package validating pattern then dispaly error message */}
                {error===true &&(
                    <div class="error" id="error">
                    Error! Please Enter valid Email Address.
                </div>
                )}

                <input type="hidden" name="subject" />

                {/* Message of the sender */}
                <div class="row Message">
                    <label> <h5>Message</h5> </label>
                    <input type="text" class="messageInput" name="message" required></input>
                </div>

                {error===false &&(
                    <div>
                    <button class="btn btn-danger subButton">Submit</button>
                    </div>
                )}
                      
                </form>
                {(error===null|| error===true )&&(
                    <div>
                    <button class="btn btn-danger subButton">Submit</button>
                    </div>
                )}

            </div> 
                   
        </div>
    );
}

// export function contact to access in other files
export default Contact;