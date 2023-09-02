import React from 'react';
import { Box, Grid, Avatar, Divider, Paper, Typography } from '@mui/material';
import { Timeline, TimelineItem, TimelineSeparator, TimelineDot, TimelineConnector, TimelineContent } from '@mui/lab';
import dxc from './Images/dxc.png';
import ulm from './Images/ulm.png';
import lsbdc from './Images/lsbdc.png';

const experiences = [
  {
    companyLogo: dxc,
    companyName: 'DXC Technology',
    jobTitle: 'Software Engineering Intern',
    dateWorked: 'Jun 2023 – Present',
    location: 'New Orleans, LA',
  },
  {
    companyLogo: lsbdc,
    companyName: 'IBM Technology LED Grant',
    jobTitle: 'Software Developer',
    dateWorked: 'Aug 2021 – Aug 2023',
    location: 'Monroe, LA',
  },
  {
    companyLogo: dxc,
    companyName: 'DXC Technology',
    jobTitle: 'Technical Intern',
    dateWorked: 'Jun 2022 - Aug 2022',
    location: 'New Orleans, LA',
  },
  {
    companyLogo: ulm,
    companyName: 'University of Louisiana Monroe',
    jobTitle: 'Undergraduate Teaching Assistant',
    dateWorked: 'Feb 2022 - Nov 2022',
    location: 'Monroe, LA',
  },
  // Add more experiences here
];

const Experience = () => {
  return (
    <Box minHeight='94vh'  paddingTop={20} backgroundColor='white' justifyContent={'center'}>
      <Grid container >
        <Grid
          item xs={11.5} sm={9} md={8.5} lg={8} sx={{ justifyContent: 'center', display: 'flex' }}>
          <Timeline>
            {experiences.map((experience, index) => (
              <TimelineItem key={index}>
                <TimelineSeparator>
                  <TimelineDot>
                    <Avatar
                      src={experience.companyLogo}
                      sx={{ width: 50, height: 50 }}
                      backgroundColor= 'white'

                    />
                  </TimelineDot>
                  {index < experiences.length - 1 && <TimelineConnector />}
                </TimelineSeparator>
                <TimelineContent >
                  <Paper elevation={3} sx={{ p: 2 }} backgroundColor='#f0f0f0'>
                    <Box display="flex" alignItems="center" width={250}>
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
                    {/* Additional content here */}
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
