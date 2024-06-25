
import React, { useEffect, useRef } from 'react';

const Modal = ({ isOpen, onClose, children }) => {
    const modalRef = useRef(null);

    const handleClickOutside = (event) => {
        if (modalRef.current && !modalRef.current.contains(event.target)) {
            onClose();
        }
        // onClose();
    };

    useEffect(() => {
        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen]);

    if (!isOpen) {
        return null;
    }

    return (
        <div className='fixed top-0 left-0 right-0 bottom-0 bg-slate-400 flex justify-center items-center z-0'>
            <div className='bg-white p-5 rounded-lg shadow-md z-10' ref={modalRef}>
                {children}
            </div>
        </div>
    );
};

export default Modal;
