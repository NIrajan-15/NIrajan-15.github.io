import React from 'react'
import './Project.css'
import Carousel from 'react-gallery-carousel';
import 'react-gallery-carousel/dist/index.css';
import coder from './Images/coder.gif';
import bg from './Images/bgimg.jpg';



const projects = [
    {
        "id":1,
        "name":"TO-DO",
        "image_url":"./Images/project1",
        "descriptioin":"A simple to-do application with CURD functionality created to learn Django.",
        "tools_used": ['Django','Bootstrap','HTML','CSS','sqlite3']
    },
    {
        "id":2,
        "name":"ACM ULM Website",
        "image_url":"./Images/project2",
        "descriptioin":"A full-stack website for University of Louisiana Monroe's ACM Chapter. I personally worked on backend part.",
        "tools_used": ['Django','PostgreSQL','AWS ECS','Docker','AWS S3']
    },
    {
        "id":3,
        "name":"Convenient ",
        "image_url":"./Images/project2",
        "descriptioin":"A Web Application to order products from nearby convenience stores.",

        "tools_used": ['Django','PostgreSQL','AWS ECS','Docker','AWS S3']
    }
]

function Projects(){

    

    return(
        <>
        
        <div class="projectContainer">

        <div class="projectCol">
        
            
            {projects.map(project => {
                return (
                
                <div class="projRow" key={project.id}>
                    <br></br>
                    <div class="row topBox">
                        <div class="col imageBox">
                            <Carousel>
                                
                                    <img src={coder} alt="images"/>
                                
                                
                                    <img src={bg} alt="a"/>
                                
                                    <img src="./Images/coder.gif" alt="i"/>
                                
                            </Carousel>
                        </div>
                        <div class="col despBox">
                        <h3>{project.name}</h3> 
                          <div class="maindesp">
                          {project.descriptioin}
                          
                          <div class="toolsBox">
                            Tools :  Django, HTML, CSS, sqlite3
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