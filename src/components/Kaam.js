import React from 'react';
import Box from '@mui/system/Box';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
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
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import {SiDjango, SiSqlite } from 'react-icons/si';
import { FaHtml5, FaCss3, FaReact, FaBootstrap } from 'react-icons/fa';
import { DiPostgresql } from 'react-icons/di';

const Kaam = () => {
  const projects = [
    {
      id: 1,
      name: 'ACM ULM Website',
      description: "A full-stack website for the University of Louisiana Monroe's ACM Chapter. I worked on the backend part.",
      images: [acma, acmb, acmc], // Replace with actual image URLs
      skills: [{skill:<SiDjango />,tag:'Django'}, {skill:<DiPostgresql />,tag:'PostgreSQL'}, {skill:<FaReact />,tag:'React'}],
      Link: 'https://acm-website-qqfi.vercel.app/#/', 
      color: "#B81818"
    },
    {
      id: 2,
      name: 'Blue Collar',
      description: 'An easy-to-use web application to find or create blue-collar jobs in a few steps.',
      images: [blue1, blue2, blue3], // Replace with actual image URLs
      skills: [{skill:<FaHtml5 />,tag:'html'}, {skill:<FaCss3 />,tag:'css'},{skill:<SiDjango />,tag:'django'}, {skill:<FaBootstrap />,tag:'bootstrap'}, {skill:<DiPostgresql />,tag:'postgreSQL'}],
      Link: 'https://github.com/NIrajan-15/Blue-Collar', 
      color: 'teal'
    },
    {
      id: 3,
      name: 'TO-DO',
      description: 'A simple web application with CRUD functionality to track your to-do.',
      images: [todoa, todob, todoc], // Replace with actual image URLs
      skills: [{skill:<FaHtml5 />,tag:'html'},{skill:<FaCss3 />,tag:'css'},{skill:<SiDjango />,tag:'django'},{skill:<SiSqlite />,tag:'sqlite'}],
      Link: 'https://github.com/NIrajan-15/To-do',
      color: '#6cafe6'
    },
    
    // Add more projects here
  ];

  return (
    <Box  minHeight='94vh'  backgroundColor='$F5FEFD' >
      
      <Grid container spacing={{ lg:2, md:1, xs:8 }} justifyContent='center' paddingTop={8} paddingBottom={8} paddingLeft={2}>
        {projects.map((project) => (
          
          <Grid item xs={11} sm={12} md={11} lg={10} key={project.id} sx={{padding:{md:2,lg:6}}} >
            <Paper elevation={3} sx={{ borderRadius:'8px', padding:'16px' }}>
            <Grid container>
            <Grid item xs={12} sm={6} md={6} lg={6} sx={{paddingTop:{md:3.1}}}>
            <Carousel
              // hide thumbnails  
              showThumbs={false}
              //show arrows
              showStatus={false}
              //show buttons
              showIndicators={true}
              
            >
                {project.images.map((image, imageIndex) => (
                  <div key={imageIndex}>
                    <img src={image} alt=""/>
                  </div>
                ))}
              </Carousel>
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={6} >
              <Paper elevation={0} sx={{ p: 3 }}>
                <Typography  variant="h5" alignItems='center'>
                  {project.name} <a color='teal' href={project.Link}><OpenInNewIcon color='teal' /></a>
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
                <Grid container spacing={3}>
                  {project.skills.map((skill, skillIndex) => (
                    <Grid item key={skillIndex} >
                      <Typography fontSize='3rem' color='lightblack'>
                        {skill.skill}
                      </Typography>
    
                      <Paper elevation={0} borderStyle='double'>
                      <Typography variant="subtitle2" align='center'>
                        {skill.tag}
                      </Typography>

                      </Paper>
                    </Grid>
                  ))}
                </Grid>

                
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
