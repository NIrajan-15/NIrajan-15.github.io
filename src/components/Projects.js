import React from 'react'
import './css/Project.css'

import 'react-gallery-carousel/dist/index.css';
import todoa from './Images/todoa.PNG';
import todob from './Images/todo2.PNG';
import todoc from './Images/todo3.PNG';
import acma from './Images/acm1.png';
import acmb from './Images/acm2.png';
import acmc from './Images/acm3.png';
import blue1 from './Images/blue1.PNG';
import blue2 from './Images/blue2.PNG';
import blue3 from './Images/blue3.PNG';


import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import {Carousel} from 'react-responsive-carousel';


// Projects 
export const projects = [

    {
        "id":3,
        "name":"Blue Collar ",
        "descriptioin":"A Web Application to find and post blue collar Jobs.",
        'images' : [blue1,blue2,blue3],
        "tools_used": ['Django,', ' PostgreSQL,', ' HTML,', ' Bootstrap,',  ' CSS'],
        'source_code':"https://github.com/NIrajan-15/Blue-Collar",
    },

    
    {
        "id":2,
        "name":"ACM ULM Website",
        
        "descriptioin":"A full-stack website for University of Louisiana Monroe's ACM Chapter. I personally worked on backend part.",
        'images' : [acma,acmc,acmb],
        "tools_used": ['Django, ','S3, ','PostgreSQL'],
        'source_code': '',
    },

    {
        "id":1,
        "name":"TO-DO",
        "descriptioin":"A simple to-do application with CURD functionality created to learn Django.",
        'images' : [todoa,todob,todoc],
        "tools_used": ['Django, ','Bootstrap, ','HTML, ','CSS, ','sqlite3'],
        'source_code':'https://github.com/NIrajan-15/To-do',
    },
    
]

// Function that returns projects section
function Projects(){

    

    return(
        <>
        
        <div class="Container">

        <div class="projectCol">
        
            {/* Map projects in below format */}
            {projects.map(project => {
                return (
                
                <div class="projRow" key={project.id}>
                    <br></br>
                    <div class="row topBox">
                        <div class="col imageBox">
                            {/* Carousel with arrow and no status and thumbnail */}
                            <Carousel showArrows={true} showStatus={false} showThumbs={false} >
                                    {project.images.map(image => {
                                        return(
                                            <div>
                                                <img src={image} alt="images" />
                                            </div>
                                        )
                                    })}
                                    
                            </Carousel>
                        </div>
                        <div class="col despBox">
                        <h3>{project.name}</h3> 
                          <div class="maindesp">
                          {project.descriptioin}
                          
                          <div class="toolsBox">
                            
                            <b>Tools: {project.tools_used}</b>
                            
                         </div>  
                        </div>
                        <div class="maindesp">
                             <button class="btn-btn-danger"><a href={project.source_code} to="_blank">Source Code</a></button>
                        </div>
                    </div>
                    
                </div>
                </div>
                
                )
            })}
            
        </div>
        </div>  
    </>
    );
   
}
export default Projects;