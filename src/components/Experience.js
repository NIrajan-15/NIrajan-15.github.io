import React from 'react';
import { Box, Grid, Avatar, Divider, Paper, Typography } from '@mui/material';
import { Timeline, TimelineItem, TimelineSeparator, TimelineDot, TimelineConnector, TimelineContent } from '@mui/lab';
import ExperienceData from '../Data/ExperienceData';


const Experience = () => {

  const experiences = ExperienceData();

  return (
    <Box minHeight='95vh'  paddingTop={20} backgroundcolor='white' justifyContent={'center'}>
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
                      backgroundcolor= 'white'

                    />
                  </TimelineDot>
                  {index < experiences.length - 1 && <TimelineConnector />}
                </TimelineSeparator>
                <TimelineContent >
                  <Paper elevation={3} sx={{ p: 2 }} backgroundcolor='#f0f0f0'>
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
