import React from 'react'
import './css/Project.css'

import 'react-gallery-carousel/dist/index.css';
import coder from './Images/bgimage.png';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import {Carousel} from 'react-responsive-carousel';


// Projects 
const projects = [

    {
        "id":3,
        "name":"Blue Collar ",
        "image_url":"./Images/project2",
        "descriptioin":"A Web Application to find and post blue collar Jobs.",

        "tools_used": [' Django, ', ' PostgreSQL, ', ' HTML, ', ' CSS, ',  ' Bootstrap ']
    },

    
    {
        "id":2,
        "name":"ACM ULM Website",
        "image_url":"./Images/project2",
        "descriptioin":"A full-stack website for University of Louisiana Monroe's ACM Chapter. I personally worked on backend part.",
        "tools_used": [' Django, ',' PostgreSQL, ',' AWS ECS, ',' S3, ',' Docker, ']
    },

    {
        "id":1,
        "name":"TO-DO",
        "image_url":"./Images/project1",
        "descriptioin":"A simple to-do application with CURD functionality created to learn Django.",
        "tools_used": ['Django, ','Bootstrap, ','HTML, ','CSS, ','sqlite3']
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

                                    <div>
                                        <img src={coder} alt="images" />
                                    </div>
                                    <div>
                                        <img src={coder} alt="images"/>
                                    </div>
                                    <div>
                                        <img src={coder} alt="images"/>
                                    </div>
            
                                
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
                            Github: <a href="https://github.com/NIrajan-15/To-do" to="_blank">GithubLink</a>
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