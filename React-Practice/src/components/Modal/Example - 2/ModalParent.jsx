import React, { useState } from 'react';
import Modal from './Modal';

const ModalParent = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (
        <div className="text-center mt-11 text-black">
            <button className='py-3 px-5 cursor-pointer text-white border-2 border-white' onClick={openModal}>Open Modal</button>
            <Modal isOpen={isModalOpen} onClose={closeModal}>
                <h2>Modal Title</h2>
                <p>This is the modal content.</p>
                <button onClick={closeModal}>Close</button>
            </Modal>
        </div>
    );
};

export default ModalParent;
