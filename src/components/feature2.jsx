

import React from 'react';

const Project = ({ title, description, technologies, link }) => {
    return (
        <div className="project-container">
            <h3>{title}</h3>
            <p>{description}</p>
            <p><strong>Technologies:</strong> {technologies.join(', ')}</p>
            {link && <a href={link} target="_blank" rel="noopener noreferrer">View Project</a>}
        </div>
    );
};

export default Project;
