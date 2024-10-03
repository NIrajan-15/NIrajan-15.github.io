import React from 'react';
import { Grid, Paper, Typography } from '@mui/material';
import {
  
  DiJava,
  DiJavascript1,
  DiHtml5,
  DiCss3,
  DiGit,
  DiLinux,  
} from 'react-icons/di'; // Import icons from 'react-icons/di' package

import {SiYaml, SiDjango, SiMysql,SiAzuredevops,SiMicrosoftazure, SiGithubactions, SiPostman, SiSpringboot } from 'react-icons/si';
import {FaPython, FaReact, FaNodeJs, FaDocker, FaAws, FaJira} from 'react-icons/fa';
import {BiLogoFlask, BiLogoMongodb, BiLogoPostgresql} from 'react-icons/bi';


const skillsData = [
  { name: 'Python', icon: <FaPython />, bgColor: '#FF5733' },
  { name: 'Java', icon: <DiJava />, bgColor: '#42A5F5' },
  { name: 'JavaScript', icon: <DiJavascript1 />, bgColor: '#66BB6A' },
  { name: 'HTML', icon: <DiHtml5 />, bgColor: '#FFB74D' },
  { name: 'CSS', icon: <DiCss3 />, bgColor: '#FFCA28' },
  { name: 'YAML', icon: <SiYaml />, bgColor: '#7E57C2' }, // No direct YAML icon, use a suitable alternative
  {name: 'Spring boot', icon: <SiSpringboot/>, bgColor: "#08cc7a"},
  { name: 'React', icon: <FaReact />, bgColor: '#26A69A' },
  { name: 'Node.js', icon: <FaNodeJs />, bgColor: '#8D6E63' },
  { name: 'Django', icon: <SiDjango />, bgColor: '#78909C' },
  { name: 'Flask', icon: <BiLogoFlask />, bgColor: '#EF5350' },
  { name: 'MySQL', icon: <SiMysql />, bgColor: '#4DB6AC' },
  { name: 'MongoDB', icon: <BiLogoMongodb />, bgColor: '#26C6DA' },
  { name: 'PostgreSQL', icon: <BiLogoPostgresql />, bgColor: '#5C6BC0' },
  { name: 'Git', icon: <DiGit />, bgColor: '#546E7A' },
  { name: 'Linux', icon: <DiLinux />, bgColor: '#8E24AA' },
  { name: 'Docker', icon: <FaDocker />, bgColor: '#FF7043' },
  { name: 'GitHub Actions', icon: <SiGithubactions />, bgColor: '#29B6F6' },
  { name: 'Azure Devops', icon: <SiAzuredevops />, bgColor: '#29B6F6' },
  { name: 'Azure Cloud', icon: <SiMicrosoftazure />, bgColor: '#0288D1' },
  { name: 'AWS', icon: <FaAws />, bgColor: '#FFA726' },
  { name: 'JIRA', icon: <FaJira />, bgColor: '#7B1FA2' },
  { name: 'Postman', icon: <SiPostman />, bgColor: '#D32F2F' },
];

const Skills = () => {
  return (
    <>
    <Paper paddingleft={2} >
    <Typography width='100%' textAlign='center' fontFamily={'roboto'} fontSize={{xs:'1rem',sm:'1.5rem'}}  mb={4}>  
      Learning these so far
    </Typography>
    <Grid container spacing={2} p={4} justifyContent={'center'} >
      {skillsData.map((skill) => (
        <Grid item xs={2} sm={1.5} md={1.5} lg={1} key={skill.name}>
          
          <Typography fontSize={{xs:'2rem',sm:'3rem'}} color={skill.bgColor}>
                {skill.icon}
          </Typography>
          <Typography fontSize={{xs:'0.5rem',sm:''}}>
            {skill.name}
          </Typography>
        </Grid>
      ))}
    </Grid>
    </Paper>
    </>
  );
};

export default Skills;
