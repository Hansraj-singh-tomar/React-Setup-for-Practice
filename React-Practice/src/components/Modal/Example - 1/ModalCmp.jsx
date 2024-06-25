import React, { useState } from 'react'
import Modal from './Modal'

const ModalCmp = () => {
    const [showModal, setShowModal] = useState(false);
    return (
        <>
            <div className={`w-11/12 mx-auto h-screen ${showModal && "overflow-hidden"}`}>
                <div className='text-center my-3'>
                    <button onClick={() => setShowModal(true)} className='bg-red-400 p-2 rounded-lg'>Open Modal</button>
                </div>
                <div>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque omnis delectus impedit reiciendis! Quae sit eaque magni repellendus ducimus eius modi animi accusamus consectetur natus quaerat commodi quidem, iusto nulla!</p>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque omnis delectus impedit reiciendis! Quae sit eaque magni repellendus ducimus eius modi animi accusamus consectetur natus quaerat commodi quidem, iusto nulla!</p>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque omnis delectus impedit reiciendis! Quae sit eaque magni repellendus ducimus eius modi animi accusamus consectetur natus quaerat commodi quidem, iusto nulla!</p>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque omnis delectus impedit reiciendis! Quae sit eaque magni repellendus ducimus eius modi animi accusamus consectetur natus quaerat commodi quidem, iusto nulla!</p>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque omnis delectus impedit reiciendis! Quae sit eaque magni repellendus ducimus eius modi animi accusamus consectetur natus quaerat commodi quidem, iusto nulla!</p>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque omnis delectus impedit reiciendis! Quae sit eaque magni repellendus ducimus eius modi animi accusamus consectetur natus quaerat commodi quidem, iusto nulla!</p>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque omnis delectus impedit reiciendis! Quae sit eaque magni repellendus ducimus eius modi animi accusamus consectetur natus quaerat commodi quidem, iusto nulla!</p>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque omnis delectus impedit reiciendis! Quae sit eaque magni repellendus ducimus eius modi animi accusamus consectetur natus quaerat commodi quidem, iusto nulla!</p>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque omnis delectus impedit reiciendis! Quae sit eaque magni repellendus ducimus eius modi animi accusamus consectetur natus quaerat commodi quidem, iusto nulla!</p>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque omnis delectus impedit reiciendis! Quae sit eaque magni repellendus ducimus eius modi animi accusamus consectetur natus quaerat commodi quidem, iusto nulla!</p>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque omnis delectus impedit reiciendis! Quae sit eaque magni repellendus ducimus eius modi animi accusamus consectetur natus quaerat commodi quidem, iusto nulla!</p>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque omnis delectus impedit reiciendis! Quae sit eaque magni repellendus ducimus eius modi animi accusamus consectetur natus quaerat commodi quidem, iusto nulla!</p>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque omnis delectus impedit reiciendis! Quae sit eaque magni repellendus ducimus eius modi animi accusamus consectetur natus quaerat commodi quidem, iusto nulla!</p>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque omnis delectus impedit reiciendis! Quae sit eaque magni repellendus ducimus eius modi animi accusamus consectetur natus quaerat commodi quidem, iusto nulla!</p>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque omnis delectus impedit reiciendis! Quae sit eaque magni repellendus ducimus eius modi animi accusamus consectetur natus quaerat commodi quidem, iusto nulla!</p>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque omnis delectus impedit reiciendis! Quae sit eaque magni repellendus ducimus eius modi animi accusamus consectetur natus quaerat commodi quidem, iusto nulla!</p>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque omnis delectus impedit reiciendis! Quae sit eaque magni repellendus ducimus eius modi animi accusamus consectetur natus quaerat commodi quidem, iusto nulla!</p>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque omnis delectus impedit reiciendis! Quae sit eaque magni repellendus ducimus eius modi animi accusamus consectetur natus quaerat commodi quidem, iusto nulla!</p>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque omnis delectus impedit reiciendis! Quae sit eaque magni repellendus ducimus eius modi animi accusamus consectetur natus quaerat commodi quidem, iusto nulla!</p>
                </div>
            </div>
            {
                showModal && <Modal handleClick={() => setShowModal(false)} />
            }

        </>
    )
}

export default ModalCmp