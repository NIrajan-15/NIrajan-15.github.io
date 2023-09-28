import todoa from '../Images/todoa.PNG';
import todob from '../Images/todo2.PNG';
import todoc from '../Images/todo3.PNG';
import acma from '../Images/acm1.png';
import acmb from '../Images/acm2.png';
import acmc from '../Images/acm3.png';
import blue1 from '../Images/blue1.PNG';
import blue2 from '../Images/blue2.PNG';
import blue3 from '../Images/blue3.PNG';
import narrow1 from '../Images/narrow1.PNG';
import narrow2 from '../Images/narrow2.PNG';
import narrow3 from '../Images/narrow3.PNG';
import {SiDjango, SiSqlite, SiAwslambda} from 'react-icons/si';
import { FaHtml5, FaCss3, FaReact, FaBootstrap, FaNodeJs } from 'react-icons/fa';
import { DiPostgresql } from 'react-icons/di';
import {BiLogoMongodb, BiLogoFirebase} from 'react-icons/bi';


function ProjectData()
{
    const projects = [
        {
          id: 1,
          name: 'Narrow URL',
          description: 'A URL shortening application with real-time stats for URL clicks. Utilized React, Nodejs, Aws Lambda, AWS S3,AWS CodePipeline, AWS CodeBuild for CI/CD pipelines, and Firebase for Authentication.',
          images: [narrow1, narrow3, narrow2], // Replace with actual image URLs
          skills: [{skill:<FaReact />,tag:'React'},{skill:<FaNodeJs />,tag:'NodeJs'},{skill:<BiLogoMongodb />,tag:'MongoDB'},{skill:<BiLogoFirebase />,tag:'Firebase'},{skill:<SiAwslambda />,tag:'AWS Lambda'}],
          Link: 'https://nrwurl.tech',
          color: '#6cafe6'
        },
        {
            id: 2,
            name: 'ACM ULM Website',
            description: "The ACM ULM Website is a central hub for students and tech enthusiasts, offering event updates, resources, and networking opportunities.",
            images: [acma, acmb, acmc], // Replace with actual image URLs
            skills: [{skill:<SiDjango />,tag:'Django'}, {skill:<DiPostgresql />,tag:'PostgreSQL'}, {skill:<FaReact />,tag:'React'}],
            Link: 'https://acm-website-qqfi.vercel.app/#/', 
            color: "#B81818"
          },
        {
          id: 3,
          name: 'Blue Collar',
          description: 'An easy-to-use web application to find or post  job applications in a few steps.',
          images: [blue1, blue2, blue3], // Replace with actual image URLs
          skills: [{skill:<FaHtml5 />,tag:'html'}, {skill:<FaCss3 />,tag:'css'},{skill:<SiDjango />,tag:'django'}, {skill:<FaBootstrap />,tag:'bootstrap'}, {skill:<DiPostgresql />,tag:'postgreSQL'}],
          Link: 'https://github.com/NIrajan-15/Blue-Collar', 
          color: 'teal'
        },
        {
          id: 4,
          name: 'TO-DO',
          description: 'A simple web application with CRUD functionality to track your to-do.',
          images: [todoa, todob, todoc], // Replace with actual image URLs
          skills: [{skill:<FaHtml5 />,tag:'html'},{skill:<FaCss3 />,tag:'css'},{skill:<SiDjango />,tag:'django'},{skill:<SiSqlite />,tag:'sqlite'}],
          Link: 'https://github.com/NIrajan-15/To-do',
          color: '#6cafe6'
        }
        
        // Add more projects here
      ];
      return projects;
}

export default ProjectData;