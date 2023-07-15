import React from "react";
import {Card} from "semantic-ui-react"
import {useEffect, useState} from "react"
import ProjectCard from "./ProjectCard";

function Projects() {

    const [projects, setProjects] = useState([])

    useEffect(() => {
        fetch("http://localhost:3001/projects")
        .then(r => r.json())
        .then(data => setProjects(data))
    } ,[])

    const eachProject = projects.map((project) => ( 
        <ProjectCard key = {project.id}
                    id = {project.id}
                    name = {project.name}
                    image = {project.image}
                    description = {project.description}
                    />
    ));
    
    return ( 
        <div className="project-list">
            <h1 className="project-header">Projects Title</h1>
            <Card.Group itemsPerRow={4} stackable className="card-group centered">
                {eachProject}
            </Card.Group>  
        </div>
    )
}

export default Projects;