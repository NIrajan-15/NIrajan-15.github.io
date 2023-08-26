import React from 'react';
import Box from '@mui/system/Box';
import Paper from '@mui/material/Paper';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import Typography from '@mui/material/Typography';

const Experience = () => {
    const experiences = [
        {
          companyLogo: 'logo-url-1.png', // Replace with actual URL
          companyName: 'DXC Technology',
          jobTitle: 'Cloud Engineering Intern',
          dateWorked: 'Jun 2023 – Present',
          location: 'New Orleans, LA',
        },
        {
          companyLogo: 'logo-url-2.png', // Replace with actual URL
          companyName: 'IBM Technology',
          jobTitle: 'Software Developer',
          dateWorked: 'Aug 2021 – Jun 2023',
          location: 'Monroe, LA',
        },
        {
          companyLogo: 'logo-url-1.png', // Replace with actual URL
          companyName: 'DXC Technology',
          jobTitle: 'Technical Intern',
          dateWorked: 'Jun 2022 - Aug 2022',
          location: 'New Orleans, LA',
          
        },
        {
          companyLogo: 'logo-url-3.png', // Replace with actual URL
          companyName: 'University of Louisiana Monroe',
          jobTitle: 'Undergraduate Teaching Assistant',
          dateWorked: 'Feb 2022 - Nov 2022',
          location: 'Monroe, LA',

        },
        // Add more experiences here
      ];

  return (
    <Box p={0} bgcolor="white" color="black" minHeight="95vh">
         <Box p={0} bgcolor="white" color="black" minHeight="100vh">
            <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                minHeight="10vh"
                bgcolor="darkgray"
                marginBottom='6vh'
                color='white'
            >
            <Typography variant="h4">Work Experience</Typography>
            </Box>
            
          <Timeline position="alternate">
            {experiences.map((experience, index) => (
              <TimelineItem key={index}>
                <TimelineSeparator>
                  <TimelineDot color="primary" />
                  {index < experiences.length - 1 && <TimelineConnector />}
                </TimelineSeparator>
                <TimelineContent>
                  <Paper
                    elevation={3}
                    sx={{
                      p: 1,
                      background: 'lightblue',
                      color: 'white',
                    }}
                  >
                    <Box display="flex" alignItems="left" marginBottom={2}>
                      <Avatar
                        src={experience.companyLogo}
                        sx={{ width: 40, height: 40, marginRight: 2 }}
                      />
                      <Typography variant="subtitle1" fontweight='100'>
                        {experience.companyName}
                      </Typography>
                    </Box>
                    <Typography variant="body1">
                      <strong>{experience.jobTitle}</strong>
                      <br />
                      <span>
                        {experience.dateWorked} <br></br> {experience.location}
                      </span>
                    </Typography>
                    <Divider sx={{ my: 2, backgroundColor: '#EFEFEF' }} />
                  </Paper>
                </TimelineContent>
              </TimelineItem>
            ))}
          </Timeline>
    </Box>
    </Box>
  );
};

export default Experience;
