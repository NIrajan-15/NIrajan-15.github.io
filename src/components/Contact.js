
import React, { useState, useRef } from 'react';
import { TextField, Button, Container, Grid } from '@mui/material';
import { Send } from '@mui/icons-material';
import validator from 'validator';
import emailjs from 'emailjs-com';


function MaterialUIContact() {
  const [error, setError] = useState(false);
  const [email, setEmail] = useState('');
  const form = useRef();
  
  const validateEmail = (email) => {
    setError(!validator.isEmail(email));
  };

  const handleEmailChange = (e) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
    validateEmail(newEmail);
  };

  // Function to send email to nirajan according to template setup on emailjs
  const sendEmail = (e) => {
        
        
    //to cancel once changes is made on email field  
    e.preventDefault();

    console.log("HI")

    // send from to emailjs 
    emailjs.sendForm(process.env.REACT_APP_SERVICE_ID,process.env.REACT_APP_TEMPLATE_ID, form.current, process.env.REACT_APP_PUBLIC_KEY)
    .then(() => {

        window.alert("message sent")
        window.location.reload()
      
    // if error occurs then Error message is displayed
    },(error) => {
        document.getElementById("error").innerHTML = "Error Sending Message!"
    })

}

  return (
    <Container maxWidth="sm">
      <form>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField
              label="Name"
              variant="outlined"
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Email"
              variant="outlined"
              fullWidth
              required
              error={error}
              helperText={error ? 'Please enter a valid email address' : ''}
              value={email}
              onChange={handleEmailChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Message"
              variant="outlined"
              multiline
              rows={4}
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              variant="contained"
              color="primary"
              startIcon={<Send />}
              onClick={sendEmail}
              disabled={error}
            >
              Submit
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
}

export default MaterialUIContact;
