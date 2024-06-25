import React from 'react'

const ProjectCard = ({ project, onCardClick }) => {
    return (
        <div onClick={() => onCardClick()} className='w-[50%] mx-auto cursor-pointer'>
            <div className='flex justify-between items-center border-2 my-2 p-2'>
                <p>{project.id}</p>
                <p>{project.name}</p>
                <p>{project.age}</p>
            </div>
        </div>
    )
}

export default ProjectCard