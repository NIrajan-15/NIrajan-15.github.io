import React from 'react';
import Box from '@mui/system/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { LinkedIn, GitHub, Description } from '@mui/icons-material';
import { useSpring, animated } from 'react-spring';
import Experience from './Experience';
import Kaam from './Kaam';
import Contact from './Contact';
import Sam from './Sam';
import profile from './Images/profile.png';

const Test = () => {
  const imageAnimation = useSpring({
    opacity: 1,
    transform: 'translateX(0)',
    from: { opacity: 0.1, transform: 'translateX(-100px)' },
  });

  const nameAnimation = useSpring({
    opacity: 1,
    transform: 'translateX(0)',
    from: { opacity: 0.1, transform: 'translateX(100px)' },
  });

  return (
    <>
      <Box
        p={1}
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight='90vh'
        backgroundColor='white'
      >
        <Box
          width="100vw"
          p={1}
          boxShadow={4}
          bgcolorbackgroundColor='#f0f0f0'
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <Grid container spacing={4}>
            <Grid lg={2}></Grid>
            
            <Grid item xs={12} sm={6} md={6} lg={4} p={1} minHeight="40vh" >
              <animated.div style={nameAnimation}>
                <Typography variant="h4" >
                  Hi, I'm Nirajan Sangraula.
                </Typography>
              
              <Typography variant="body1" sx={{ mb: 3 }}>
                I'm a passionate full-stack developer with an appetite for learning and exploring.
              </Typography>
              <Typography variant="body1" sx={{ mb: 3 }}>
                Let's Connect
              </Typography>
              <Box
                display="flex"
                flexDirection="column"
                alignItems="center"
                mt={2}
                width="100%"
              >
                <Button
                  variant="contained"
                  color="primary"
                  startIcon={<LinkedIn />}
                  href="https://www.linkedin.com/in/your-linkedin-profile"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{ mb: 2, width: '100%' }}
                >
                  LinkedIn
                </Button>
                <Button
                  variant="contained"
                  color="secondary"
                  startIcon={<GitHub />}
                  href="https://github.com/your-github-profile"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{ mb: 2, width: '100%' }}
                >
                  GitHub
                </Button>
                <Button
                  variant="outlined"
                  startIcon={<Description />}
                  href="link-to-your-resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{ width: '100%' }}
                >
                  Resume
                </Button>
              </Box>
              </animated.div>
            </Grid>
            <Grid item xs={0} sm={0} md={6} lg={4} textAlign="center">
              <animated.img
                src="https://thumbs.gfycat.com/ExemplaryFairFeline-size_restricted.gif"
                alt="Profile"
                style={{
                  borderRadius: '50%',
                  width: '90%',
                  height: '90%',
                  ...imageAnimation,
                }}
              />
              
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Experience />
      <Kaam />
      <Sam />
    </>
  );
}

export default Test;
