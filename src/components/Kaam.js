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
import django from './Images/django.png';
import postgre from './Images/postgresql.png';
import react from './Images/react.png';
import node from './Images/nodejs.png';
import lambda from './Images/lambda.png';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

const Kaam = () => {
  const projects = [
    {
      id: 1,
      name: 'Blue Collar',
      description: 'An easy-to-use web application to find or create blue-collar jobs in a few steps.',
      images: [blue1, blue2, blue3], // Replace with actual image URLs
      skills: [django,postgre,postgre],
      Link: 'https://github.com/NIrajan-15/Blue-Collar', // Replace with actual project link
    },
    {
      id: 2,
      name: 'ACM ULM Website',
      description: "A full-stack website for the University of Louisiana Monroe's ACM Chapter. I worked on the backend part.",
      images: [acma, acmb, acmc], // Replace with actual image URLs
      skills: [django,react, postgre],
      Link: 'https://acm-website-qqfi.vercel.app/#/', // Replace with actual project link
    },
    {
      id: 3,
      name: 'TO-DO',
      description: 'A simple web application with CRUD functionality to track your to-do.',
      images: [todoa, todob, todoc], // Replace with actual image URLs
      skills: [react,node, lambda, postgre],
      Link: 'https://github.com/NIrajan-15/To-do', // Replace with actual project link
    },
    
    // Add more projects here
  ];

  return (
    <Box p={3} minHeight='94vh'  backgroundColor='$F5FEFD' >
      
      <Grid  spacing={1} justifyContent='center' paddingTop={8}>
        {projects.map((project) => (
          
          <Grid item xs={12} md={12} lg={6} key={project.id} sx={{padding:{md:2,lg:6}}} >
            <Paper elevation={3} sx={{ borderRadius:'8px', padding:'16px' }}>
            <Grid container>
            <Grid item xs={12} md={6} lg={6}>
            <Carousel
              autoPlay
              infiniteLoop
              showStatus={false}
              showThumbs={false}
              emulateTouch
              stopOnHover
              interval={3000}
              transitionTime={500}
              dynamicHeight
              showArrows={true}
              showIndicators={true}
              showIndicatorsThumbs={true}
              useKeyboardArrows={true}
              swipeable={true}
              centerMode={false}
              selectedItem={0}
              axis="horizontal"
              onChange={() => {}}
              onClickItem={() => {}}
              onClickThumb={() => {}}
              color="black"
              
            >
                {project.images.map((image, imageIndex) => (
                  <div key={imageIndex}>
                    <img src={image} alt="" />
                  </div>
                ))}
              </Carousel>
            </Grid>
            <Grid item xs={12} md={6} lg={6} >
              <Paper elevation={0} sx={{ p: 3 }}>
                <Typography  variant="h5" alignItems='center'>
                  {project.name} <a href={project.Link}><OpenInNewIcon /></a>
                </Typography>
                <hr></hr>
                <Typography variant="subtitle1">
                  {project.description}
                </Typography>
                <Divider sx={{ my: 2 }} />
                <Typography variant="h6">
                  Tools
                </Typography>
                <hr />
                <Typography variant="subtitle1">
                   
                  {project.skills.map((skill, index) => (
                    <img key={index} src={skill} alt="" style={{ width: '40px', height: '40px', marginRight: '5px' }} />
                  ))}
                </Typography>
                
              </Paper>
            </Grid>
            </Grid>
            </Paper>
          </Grid>
          
        ))}
      </Grid>
    </Box>
  );
}

export default Kaam;
