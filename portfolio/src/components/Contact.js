import React,{useState} from 'react';
import emailjs from 'emailjs-com';
import "./Contact.css"
import validator from 'validator';


function Contact(){

    const[error, setError] = useState("")
    const[sub, setSub] = useState(false)

    const valildateEmail = (e) =>{

    var email = e.target.value    

        if(!(validator.isEmail(email))){
            setError("Error! Please enter a valid email.")
            setSub(false)

        }
        else{
            setError("")
            setSub(true)
        }
        
    }

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
            

            
            <div clas="col">
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
                <input type="hidden" name="subject" />
                <div class="row Message">
                    <label>
                    <h5>Message</h5>
                    </label>
                    <input type="text" class="messageInput" name="message"></input>
                </div>
                <div class="error" id="error">
                    {error}
                </div>
                {sub===true && (
                        <div class="row submit">
                        <input type="submit" class="submitButon"  value="Send Message"/>
                    </div>
                )}
                
                </form>
                </div> 
                   
        </div>
    );
}

export default Contact;