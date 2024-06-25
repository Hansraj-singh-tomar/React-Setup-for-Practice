import React, { useState } from 'react'
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';

let data = [
    { id: 1, name: "Hansraj singh tomar", age: 26 },
    { id: 2, name: "Arvind singh tomar", age: 26 },
    { id: 3, name: "Hemendra singh tomar", age: 26 },
    { id: 4, name: "Kamendra singh tomar", age: 26 },
    { id: 5, name: "Rohit singh tomar", age: 26 },
]

const Project = () => {
    const [projects, setProjects] = useState(data);

    const [selectedProject, setSelectedProject] = useState(null);

    const closeModal = () => {
        setSelectedProject(null);
    }

    return (
        <>
            <div>
                {
                    projects.map((project) => {
                        return (
                            <ProjectCard
                                key={project.id}
                                project={project}
                                onCardClick={() => setSelectedProject(project)}
                            />
                        )
                    })
                }
            </div>
            {
                selectedProject && (
                    <ProjectModal onClose={closeModal} selectedProject={selectedProject} />
                )
            }

        </>
    )
}

export default Project

