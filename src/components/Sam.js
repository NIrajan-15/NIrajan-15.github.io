import React, { useState, useRef, useEffect } from 'react';
import emailjs from 'emailjs-com';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { LinkedIn, GitHub } from '@mui/icons-material';
import validator from 'validator';

const Sam = () => {
  const [error, setError] = useState(null);
  const form = useRef();

  useEffect(() => {}, [error]);

  const validateEmail = (e) => {
    let email = e.target.value;

    if (validator.isEmail(email)) {
      setError(false);
    } else {
      setError(true);
    }
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_PUBLIC_KEY
      )
      .then(
        () => {
          window.alert('Message sent');
          window.location.reload();
        },
        (error) => {
          document.getElementById('error').innerHTML = 'Error Sending Message!';
        }
      );
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
      bgcolor="rgba(0, 0, 0, 0.8)"
      color="#EFEFEF"
      flexDirection="column"
      p={4}
    >
      <Box
        width="100vw"
        height="5vh"
        p={1}
        bgcolor="rgba(0, 0, 0, 0.5)"
        display="flex"
        justifyContent="center"
        alignItems="center"
        marginBottom={4}
      >
        <Typography variant="h6">Contact</Typography>
      </Box>
      <Box
        width="100vw"
        p={4}
        boxShadow={4}
        bgcolor="rgba(0, 0, 0, 0.5)"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        {/* Rest of your form and content here */}
      </Box>
    </Box>
  );
};

export default Sam;
