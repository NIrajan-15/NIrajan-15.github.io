import React from 'react';
import Box from '@mui/system/Box';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import { Carousel } from 'react-responsive-carousel';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import ProjectData from '../Data/ProjectData';

const Project = () => {
  const projects = ProjectData();
  return (
    <Box  minHeight='94vh' width='98vw' justifyContent={'center'} paddingTop={10} backgroundColor='$F5FEFD' >
      
      <Grid container spacing={{ lg:2, md:1, xs:2, sm:2 }} justifyContent='center' paddingLeft={{xs:1,sm:5,md:6,lg:8 }} paddingTop={8}>
        {projects.map((project) => (
          
          <Grid item xs={12} sm={10} md={12} lg={8} key={project.id} sx={{padding:{xs:1,sm:2,md:2,lg:6}}} >
            <Paper elevation={3} sx={{ borderRadius:'8px', padding:'16px' }}>
            <Grid container justifyContent={'center'}>
            <Grid item xs={12} sm={12} md={7} lg={6} sx={{paddingTop:{md:3.1}}}>
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
            <Grid item xs={12} sm={12} md={5} lg={6} >
              <Paper elevation={0} sx={{ p: 3 }}>
                <Typography  variant="h5" alignItems='center'>
                  {project.name} <a color='teal' href={project.Link}><OpenInNewIcon color='teal' /></a>
                </Typography>
                <hr></hr>
                <Typography variant="subtitle1" textAlign={'align'}>
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
                      <Typography fontSize='1.5rem' color='lightblack'>
                        {skill.skill}
                      </Typography>
    
                      <Paper elevation={0}>
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

export default Project;
