import React from 'react';
import {
  Box,
  Container,
  Paper,
  Typography,
  Grid,
  Avatar,
  Divider,
} from '@mui/material';
import { Timeline, TimelineItem, TimelineSeparator, TimelineDot, TimelineConnector, TimelineContent } from '@mui/lab';
import { keyframes } from '@mui/system';
import { styled } from '@mui/system';
import dxc from './Images/dxc.png';
import ulm from './Images/ulm.png';
import django from './Images/django.png';
import postgre from './Images/postgresql.png';

const slideIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-20%);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const ExperienceContainer = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  borderRadius: theme.spacing(2),
  boxShadow: '0px 5px 15px rgba(0, 0, 0, 0.2)',
  animation: `${slideIn} 0.5s ease-in-out`,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center', // Center horizontally
  justifyContent: 'center', // Center vertically
  gap: theme.spacing(3), // Space between items
}));

const experiences = [
  {
    companyLogo: dxc, // Replace with actual URL
    companyName: 'DXC Technology',
    jobTitle: 'Cloud Engineering Intern',
    dateWorked: 'Jun 2023 – Present',
    location: 'New Orleans, LA',
  },
  {
    companyLogo: ulm, // Replace with actual URL
    companyName: 'IBM Technology',
    jobTitle: 'Software Developer',
    dateWorked: 'Aug 2021 – Jun 2023',
    location: 'Monroe, LA',
  },
  {
    companyLogo: dxc, // Replace with actual URL
    companyName: 'DXC Technology',
    jobTitle: 'Technical Intern',
    dateWorked: 'Jun 2022 - Aug 2022',
    location: 'New Orleans, LA',
  },
  {
    companyLogo: ulm, // Replace with actual URL
    companyName: 'University of Louisiana Monroe',
    jobTitle: 'Undergraduate Teaching Assistant',
    dateWorked: 'Feb 2022 - Nov 2022',
    location: 'Monroe, LA',
  },
  // Add more experiences here
];


const Experience = () => {
  return (
    
      <Box  minHeight='90vh' paddingTop={16}  backgroundColor='white'>
        <Grid container >

          <Grid item>
          </Grid>          
          <Grid item xs={12} sm={12} md={8.5} lg={8}  sx={{ justifyContent: 'center', display: 'flex' }}>
    <Timeline>
    {experiences.map((experience, index) => (
      <TimelineItem key={index}>
        <TimelineSeparator>
          <TimelineDot>
            <Avatar
              src={experience.companyLogo}
              sx={{ width: 50, height: 50 }}
            />
          </TimelineDot>
          {index < experiences.length - 1 && <TimelineConnector />}
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} sx={{ p: 2 }}  backgroundColor='#f0f0f0'>
            <Box display="flex" alignItems="center" width={170}>
              <Typography variant="body1">
                {experience.companyName}
              </Typography>
            </Box>
            <Typography variant="body1">
              <strong>{experience.jobTitle}</strong>
              <br />
              <span>
                {experience.dateWorked} <br /> {experience.location}
              </span>
            </Typography>
            <Divider sx={{ my: 2 }} />
           
          </Paper>
        </TimelineContent>
      </TimelineItem>
    ))}
  </Timeline>
</Grid>

          
          </Grid>
        
      </Box>
  );
};

export default Experience;
