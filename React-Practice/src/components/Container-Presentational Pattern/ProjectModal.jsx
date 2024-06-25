import React from 'react'

const ProjectModal = ({ onClose, selectedProject }) => {
    return (
        <div onClick={() => onClose()} className='fixed top-0 left-0 right-0 bottom-0 bg-slate-400 flex justify-center items-center z-0'>
            <div className='bg-white p-5 rounded-lg shadow-md z-10'>
                <div className='text-black'>
                    <h1>Id - {selectedProject.id}.</h1>
                    <h1>Name - {selectedProject.name}</h1>
                    <h1>Age - {selectedProject.age}</h1>
                </div>
            </div>
        </div>
    )
}

export default ProjectModal

