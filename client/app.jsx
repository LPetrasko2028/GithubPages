
import React from 'react';

function Portfolio() {
    const projects = [
        {
            title: "Project 1",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            image: "project1.jpg"
        },
        {
            title: "Project 2",
            description: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            image: "project2.jpg"
        },
        {
            title: "Project 3",
            description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            image: "project3.jpg"
        }
    ];

    return (
        <div>
            <h1>My Portfolio</h1>
            <div className="gallery">
                {projects.map((project, index) => (
                    <div key={index} className="project">
                        <img src={project.image} alt={project.title} />
                        <h2>{project.title}</h2>
                        <p>{project.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Portfolio;
