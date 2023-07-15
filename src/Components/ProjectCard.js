import React from "react";
import { Card } from "semantic-ui-react";

function ProjectCard({id, name, image, description}) {

    return (
        
        <Card style={{
                boxShadow: "5px 3px 3px rgb(54, 29, 29)",
                width: "20%",
                }}
                className="card">
            <div className="project-card">
                <div className="image-container">
                    <img src = {image} alt={name} 
                    style={{
                        width: "50%", 
                        height: "auto",
                        }}/>
                </div>
                <div className="card-content">
                    <div className="card-header">{name}</div>
                    <p className="card__text">{description}</p>
                    <button className="go-button">Go to Project</button>
                </div>
            </div>
        </Card>
    )
}

export default ProjectCard;