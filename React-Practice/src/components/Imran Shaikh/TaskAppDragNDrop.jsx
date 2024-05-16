import React, { useState } from 'react'

//  ✏️ 🗑️

const TaskAppDragNDrop = () => {

    const TODO = 'TODO';
    const DOING = 'DOING';
    const DONE = 'DONE';

    const [value, setValue] = useState('');
    const [tasks, setTasks] = useState([]);
    const [updateItem, setUpdateItem] = useState(null);
    const [dragTask, setDragTask] = useState(null);

    function handleChange(e) {
        // console.log(e.target.value);
        setValue(e.target.value);
    }

    function handleKeyDown(e) {
        // console.log(e.keyCode); // 13
        if (e.keyCode === 13) {
            if (updateItem) {
                const obj = {
                    title: value,
                    id: updateItem.id,
                    status: updateItem.status
                }
                const copyTasks = [...tasks];
                const tasksWhichNotToUpdate = copyTasks.filter((item) => item.id !== updateItem.id);
                setTasks([...tasksWhichNotToUpdate, obj]);
                setUpdateItem(null);
            } else {
                let obj = {
                    id: Date.now(),
                    status: 'TODO',
                    title: value
                }
                setTasks([...tasks, obj])
            }
            setValue('')
        }
    }

    function deleteTask(item) {
        let copyTasks = [...tasks];
        copyTasks = copyTasks.filter((task) => task.id !== item.id)
        setTasks(copyTasks);
    }

    function updateTask(task) {
        setUpdateItem(task);
        setValue(task.title);
    }

    function onDrag(e, task) {
        setDragTask(task);
    }

    function onDragOver(e) {
        e.preventDefault();
    }

    function handleDragNDrop(status) {
        let copyTask = [...tasks];
        copyTask = copyTask.map((item) => {
            if (dragTask.id === item.id) {
                item.status = status;
            }
            return item;
        });
        setTasks(copyTask);
        setDragTask(null)
    }

    function onDrop(e) {
        const status = e.target.getAttribute('data-status');
        if (status === TODO) {
            handleDragNDrop(TODO)
        } else if (status === DOING) {
            handleDragNDrop(DOING)
        } else if (status === DONE) {
            handleDragNDrop(DONE)
        }
    }

    return (
        <div className='flex justify-center h-screen w-full'>
            <div className='space-y-6 mt-20 text-center'>
                <h1 className='text-center font-bold text-2xl'>Task Manager</h1>
                <input value={value} onKeyDown={handleKeyDown} onChange={handleChange} type="text" placeholder='enter your task and press enter' className='w-64 border-2 border-black p-2 rounded-lg' />
                <div className='flex justify-between gap-4'>
                    {/* Todo */}
                    <div
                        data-status={TODO}
                        onDrop={onDrop}
                        onDragOver={onDragOver}
                        className='w-60 h-60'
                    >
                        <h2 className='bg-yellow-200 p-2 rounded-lg font-bold'>Todo</h2>
                        {
                            tasks.length > 0 && tasks?.map((task, id) => {
                                return task.status === TODO && (
                                    <div
                                        key={task.id}
                                        draggable
                                        onDrag={(e) => onDrag(e, task)}
                                    >
                                        <div className='cursor-grab mt-2 w-[90%] mx-auto bg-slate-300 p-2 rounded-md flex justify-between'>
                                            <p className=''>{task.title}</p>
                                            <div>
                                                <span onClick={() => updateTask(task)} className='cursor-pointer'> ✏️ </span>
                                                <span onClick={() => deleteTask(task)} className='cursor-pointer'> 🗑️ </span>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>

                    {/* Doing */}
                    <div
                        data-status={DOING}
                        onDrop={onDrop}
                        onDragOver={onDragOver}
                        className='w-60 h-60'
                    >
                        <h2 className='bg-lime-300 p-2 rounded-lg font-bold'>Doing</h2>
                        {
                            tasks.length > 0 && tasks?.map((task, id) => {
                                return task.status === DOING && (
                                    <div
                                        key={task.id}
                                        draggable
                                        onDrag={(e) => handleDrag(e, task)}
                                    >
                                        <div className='cursor-grab mt-2 w-[90%] mx-auto bg-slate-300 p-2 rounded-md flex justify-between'>
                                            <p className=''>{task.title}</p>
                                            <div>
                                                <span onClick={() => updateTask(task)} className='cursor-pointer'> ✏️ </span>
                                                <span onClick={() => deleteTask(task)} className='cursor-pointer'> 🗑️ </span>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>

                    {/* Done */}
                    <div
                        data-status={DONE}
                        onDrop={onDrop}
                        onDragOver={onDragOver}
                        className='w-60 h-60'
                    >
                        <h2 className='bg-cyan-400 p-2 rounded-lg font-bold'>Done</h2>
                        {
                            tasks.length > 0 && tasks?.map((task, id) => {
                                return task.status === DONE && (
                                    <div
                                        key={task.id}
                                        draggable
                                        onDrag={(e) => handleDrag(e, task)}
                                    >
                                        <div className='cursor-grab mt-2 w-[90%] mx-auto bg-slate-300 p-2 rounded-md flex justify-between'>
                                            <p className=''>{task.title}</p>
                                            <div>
                                                <span onClick={() => updateTask(task)} className='cursor-pointer'> ✏️ </span>
                                                <span onClick={() => deleteTask(task)} className='cursor-pointer'> 🗑️ </span>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TaskAppDragNDrop

