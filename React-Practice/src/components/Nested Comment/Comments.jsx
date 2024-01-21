import React, { useState, useRef, useEffect } from 'react'

const Comments = ({ comments, handleAddComment, handleEditComment, handleDeleteComment }) => {
    const inputRef = useRef();
    const [commentBody, setCommentBody] = useState("");
    const [showInput, setShowInput] = useState(false);
    const [editMode, setEditMode] = useState(false);

    useEffect(() => {
        inputRef?.current?.focus();
    }, [editMode]);


    function handleAdd() {
        if (editMode) {
            setEditMode(false);
            handleEditComment(comments?.id, inputRef?.current?.innerText);
        } else {
            let newComment = {
                id: Date.now(),
                text: commentBody,
                replies: []
            }
            handleAddComment(comments?.id, newComment);
            setShowInput(false);
        }

        if (editMode) setEditMode(false)
    }

    function handleDelete() {
        handleDeleteComment(comments?.id)
    }

    return (
        <div>
            <div className='border-2 border-black mx-4 my-2 px-3 py-2' >
                <h1 contentEditable={editMode} suppressContentEditableWarning={editMode} ref={inputRef}>{comments?.text}</h1>
                {
                    showInput && <input onChange={(e) => setCommentBody(e.target.value)} type="text" autoFocus className='mt-2 px-1 py-1 rounded-lg outline-none text-black' />
                }
                <div className='mt-2'>
                    {
                        showInput || editMode ?
                            <>
                                <button onClick={handleAdd} className='px-4 py-1 border-2 border-black hover:text-black hover:border-white'>Add</button>
                                <button onClick={() => setShowInput(false)} className='px-4 py-1 border-2 border-black ml-2 hover:text-black hover:border-white'>Cancel</button>
                            </>
                            :
                            comments?.text ? (
                                <>
                                    <button onClick={() => setShowInput(true)} className='px-4 py-1 border-2 border-black hover:text-black hover:border-white'>Reply</button>
                                    <button onClick={() => setEditMode(true)} className='px-4 py-1 border-2 border-black ml-2 hover:text-black hover:border-white'>Edit</button>
                                    <button onClick={handleDelete} className='px-4 py-1 border-2 border-black ml-2 hover:text-black hover:border-white'>Delete</button>
                                </>
                            ) : ""
                    }
                </div>
            </div>
            <div className='ml-4'>
                {
                    comments?.replies?.map((elm) => {
                        return <Comments key={elm?.id} comments={elm} handleAddComment={handleAddComment} handleEditComment={handleEditComment} handleDeleteComment={handleDeleteComment} />
                    })
                }
            </div>
        </div>
    )
}

export default Comments