import React from 'react';
import './style.css';

function Project({ title, description, imageUrl, projectUrl, repoUrl }) {
    return (
        <div className="project">
            <h3 className="project-title">{title}</h3>
            <img className="project-image" src={imageUrl} alt={title} />

            <p className="project-description">{description}</p>

            <div className="project-links">
                <a
                    className="project-link"
                    href={projectUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Visit Website
                </a>

                <a
                    className="project-link"
                    href={repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    GitHub Repository
                </a>
            </div>
        </div>
    );
}

export default Project;