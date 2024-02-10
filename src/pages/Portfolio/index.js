import React from 'react';
import Project from '../../components/Project';
import './style.css';

function Portfolio() {
    const projects = [
        {
            title: '',
            description:
                '',
            imageUrl: '',
            projectUrl: '',
            repoUrl: '',
        },
        {
            title: '',
            description:
                '',
            imageUrl: '',
            projectUrl:
                '',
            repoUrl: '',
        },
        {
            title: '',
            description: '',
            imageUrl: '',
            projectUrl: '',
            repoUrl: '',
        },
        {
            title: '',
            description:
                '',
            imageUrl: '',
            projectUrl: '',
            repoUrl: '',
        },
    ];

    return (
        <div className="portfolio">
            <h2>Portfolio</h2>
            <div className="projects">
                {projects.map((project, index) => (
                    <Project
                        key={index}
                        title={project.title}
                        description={project.description}
                        imageUrl={project.imageUrl}
                        projectUrl={project.projectUrl}
                        repoUrl={project.repoUrl}
                        className="project"
                    />
                ))}
            </div>
        </div>
    );
}

export default Portfolio;
