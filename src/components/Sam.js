import React, {useState, useRef} from 'react';
import { styled } from '@mui/material/styles';
import { Container, Typography, TextField, Button, Grid } from '@mui/material';
import validator from 'validator';
import emailjs from 'emailjs-com';
import { Send } from '@mui/icons-material';
import Box from '@mui/material/Box';

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
  const [error, setError] = useState(true);
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const form = useRef();
  
  const validateEmail = (email) => {
    if(!validator.isEmail(email))
    {
      setMessage('Please enter a valid email address');
      setError(true);
    }
    else
    {
      setMessage('');
      setError(false);
    }
  };

  const handleEmailChange = (e) => {
    let Email = e.target.value;
    setEmail(Email);
    validateEmail(Email);

  };

  // Function to send email to nirajan according to template setup on emailjs
  const sendEmail = (e) => {
    //to cancel once changes is made on email field  
    e.preventDefault();

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
      <Box minHeight='91vh' paddingTop={16}>
      <Container maxWidth="sm">
        <FormContainer>
          <Typography variant="h4" gutterBottom>
            
          </Typography>
          <form ref={form} onSubmit={sendEmail}>
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
              type="submit"
              fullWidth
            >
              Send Message
            </Button>
              </Grid>
            </Grid>
          </form>
        </FormContainer>
      </Container>
    </Box>
      
  );
};

export default Contact;
