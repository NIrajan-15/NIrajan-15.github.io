import React,{useState,useEffect} from 'react';
import emailjs from 'emailjs-com';
import "./Contact.css"
import validator from 'validator';


function Contact(){

    const[error, setError] = useState(false)
    const[sub, setSub] = useState(false)

    const valildateEmail = (e) =>{

    var email = e.target.value    

        if(!(validator.isEmail(email))){
            setError(true)
            setSub(false)

        }
        else{
            setError("")
            setSub(true)
        }
        
    }

    useEffect(()=> {
        if(sub===false)
        {
            document.getElementById("form").style.padding = "2vh";
        }
    },[sub])

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_8nh9s5f','template_mibfd6s', e.target, 'TTwPNGNMykYNtWO5C')
        .then((result) => {
            window.location.reload()
        },(error) => {
            document.getElementById("error").innerHTML = "Error Sending Message!"
        })

    }

    return(
        <div class="col contactContainer">
            

            
            <div clas="col form" id="form">
                <form className="contact-form" onSubmit={sendEmail}>
                <input type="hidden" name="contact-form"/>
                <div class="row nameBox">
                   <label><h5>Name</h5></label>
                   <input type="text" class="top" name="name"/>
                   
                </div>
                <div class="row emailBox">
                    <label>
                    <h5>Email </h5>
                    </label>
                    <input type="text" class="top" name="email"  onChange={(e) => valildateEmail(e)}></input>
                </div>
                {error===true &&(
                    <div class="error" id="error">
                    Error! Please Enter valid Email Address.
                </div>
                )}
                <input type="hidden" name="subject" />
                <div class="row Message">
                    <label>
                    <h5>Message</h5>
                    </label>
                    <input type="text" class="messageInput" name="message" required></input>
                </div>
                
                {sub===true && (
                        
                        <button type="button" class="btn btn-success subButton"><input type="submit" class="submitButon"  value="Send Message"/></button>
                    
                )}
                {sub===false &&(
                        <div class="buttonContainer">
                                <button type="button" class="btn btn-danger subButton">Submit</button>
                        
                        </div>
                        
                )}
                
                </form>
                </div> 
                   
        </div>
    );
}

export default Contact;