import React, {useState, useRef} from 'react';
import { styled } from '@mui/material/styles';
import { Container, Typography, TextField, Button, Grid } from '@mui/material';
import validator from 'validator';
import emailjs from 'emailjs-com';
import { Send } from '@mui/icons-material';

const FormContainer = styled('div')(({ theme }) => ({
  padding: theme.spacing(4),
  borderRadius: theme.spacing(2),
  textAlign: 'center',
  '& .MuiTextField-root': {
    margin: theme.spacing(1),
  },
  '& .MuiButton-root': {
    marginTop: theme.spacing(2),
  },
}));

const Contact = () => {
  const [error, setError] = useState(false);
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const form = useRef();
  
  const validateEmail = (email) => {
    setError(!validator.isEmail(email));
  };

  const handleEmailChange = (e) => {
    const newEmail = e.target.value;
    setEmail(newEmail);

    if(!validateEmail(newEmail))
    {
      setMessage("Please enter a Valid Email Address")
    }
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
    
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '91vh'}}>
      <Container maxWidth="sm">
        <FormContainer>
          <Typography variant="h4" gutterBottom>
            
          </Typography>
          <form onSubmit={sendEmail}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField label="Name" required fullWidth />
              </Grid>
              <Grid item xs={12}>
                <TextField label="Email" onChange={handleEmailChange} required fullWidth />
              </Grid>
              <Grid item xs={12}>
                <TextField label="Message" required multiline fullWidth rows={4} />
              </Grid>

              <Grid item xs={12}>
              <Typography  variant="body1" color="error" id="error">
                {message}
              </Typography>
                
              <Button
              variant="contained"
              color="primary"
              startIcon={<Send />}
              disabled={error}
            >
              Send Message
            </Button>
              </Grid>
            </Grid>
          </form>
        </FormContainer>
      </Container>
    </div>
      
  );
};

export default Contact;
