import React from 'react';
import Box from '@mui/system/Box';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import todoa from './Images/todoa.PNG';
import todob from './Images/todo2.PNG';
import todoc from './Images/todo3.PNG';
import acma from './Images/acm1.png';
import acmb from './Images/acm2.png';
import acmc from './Images/acm3.png';
import blue1 from './Images/blue1.PNG';
import blue2 from './Images/blue2.PNG';
import blue3 from './Images/blue3.PNG';

const Kaam = () => {
    const projects = [
        {
          id: 1,
          name: 'Blue Collar',
          description: 'An easy-to-use web application to find or create blue-collar jobs in a few steps.',
          images: [blue1, blue2, blue3], // Replace with actual image URLs
          tools_used: ['Django', 'PostgreSQL', 'HTML', 'Bootstrap', 'CSS'],
          Link: 'https://github.com/NIrajan-15/Blue-Collar', // Replace with actual project link
        },
        {
          id: 2,
          name: 'ACM ULM Website',
          description: "A full-stack website for the University of Louisiana Monroe's ACM Chapter. I worked on the backend part.",
          images: [acma, acmb, acmc], // Replace with actual image URLs
          tools_used: ['Django', 'S3', 'PostgreSQL'],
          Link: 'https://acm-website-qqfi.vercel.app/#/', // Replace with actual project link
        },
        {
          id: 3,
          name: 'TO-DO',
          description: 'A simple web application with CRUD functionality to track your to-do.',
          images: [todoa, todob, todoc], // Replace with actual image URLs
          tools_used: ['Django', 'Bootstrap', 'HTML', 'CSS', 'sqlite3'],
          Link: 'https://github.com/NIrajan-15/To-do', // Replace with actual project link
        },
        // Add more projects here
      ];
      

  return (
    <Box p={1}  paddingBottom='10vh' sx={{ marginLeft: {lg: '12vw'} }}>
      <Grid container spacing={3} justifyContent='center'>
        {projects.map((project, index) => (
          <Grid container item xs={12} md={12} lg={12} key={index} marginBottom='3vh' backgroundColor="lightgray">
            <Grid item xs={12} md={6} lg={6}>
              <Carousel showArrows={true} showStatus={false} showThumbs={false}>
                {project.images.map((image, imageIndex) => (
                  <div key={imageIndex}>
                    <img src={image} alt="" />
                  </div>
                ))}
              </Carousel>
            </Grid>
            <Grid item xs={12} md={6} lg={6} sx={{ paddingTop: { md: "15vh", lg: 4 } }}>
              <Paper elevation={0} sx={{ p: 3 }}>
                <Typography variant="h5">
                  {project.name}
                </Typography>
                <Typography variant="subtitle1">
                  {project.description}
                </Typography>
                <Divider sx={{ my: 2 }} />
                <Typography variant="subtitle1">
                  Tools Used: {project.tools_used.join(', ')}
                </Typography>
                {project.Link && (
                  <Typography variant="subtitle2">
                    Source Code: <a href={project.Link} target="_blank" rel="noopener noreferrer">GitHub</a>
                  </Typography>
                )}
              </Paper>
            </Grid>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Kaam;
