import React, { useState, useRef } from 'react'
import Toast from './Toast';
import Button from './Button';


const btnData = [
    { btnText: "Success Toast", color: 'bg-green-400' },
    { btnText: "Warning Toast", color: 'bg-yellow-400' },
    { btnText: "Info Toast", color: 'bg-cyan-400' },
    { btnText: "Error Toast", color: 'bg-red-400' },
]

const ReactToast = () => {
    const [toasts, setToasts] = useState([]);

    const timerRef = useRef({});

    function handleClose(id) {
        clearTimeout(timerRef.current[id]);
        delete timerRef.current[id]; // we are deleting timerRef property to save memory;

        setToasts((preToasts) => {
            let newToasts = preToasts.filter((toast) => toast.id !== id);
            return newToasts;
        })
    }

    function handleAddToast(msg, color) {
        let id = new Date().getTime();
        setToasts((preToasts) => {
            let newToasts = [...preToasts, { id, msg, color }];
            return newToasts;
        })

        timerRef.current[id] = setTimeout(() => {
            handleClose(id);
        }, 5000)
    }

    return (
        <div className='w-full h-screen flex justify-center items-center'>
            <div>
                {
                    btnData.map((data, id) => <Button key={id} data={data} handleAddToast={handleAddToast} />)
                }
            </div>

            <div className='absolute right-5 top-4'>
                {
                    toasts?.map((toast, id) => {
                        return <Toast key={id} toast={toast} />
                    })
                }
            </div>
        </div>
    )
}

export default ReactToast
