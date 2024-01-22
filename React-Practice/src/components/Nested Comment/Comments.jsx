import React, { useState, useRef, useEffect } from 'react'
import Button from './Button';

const Comments = ({ comments, handleAddComment, handleEditComment, handleDeleteComment }) => {
    const inputRef = useRef();
    const [commentBody, setCommentBody] = useState("");
    const [showInput, setShowInput] = useState(false);
    const [editMode, setEditMode] = useState(false);

    useEffect(() => {
        inputRef?.current?.focus();
    }, [editMode]);


    function handleAdd() {
        if (commentBody === "") {
            alert("No Changes Accured");
            return;
        };

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

    function handleCancel() {
        setEditMode(false);
        setShowInput(false);
        inputRef.current.innerText = comments.text;
    }

    return (
        <div>
            {
                comments?.text && (
                    <div className='border-2 border-black mx-4 my-2 px-3 py-2' >
                        <h1 contentEditable={editMode} suppressContentEditableWarning={editMode} ref={inputRef} className='p-2'>{comments?.text}</h1>
                        <div className='mt-2'>
                            {
                                showInput && <input onChange={(e) => setCommentBody(e.target.value)} type="text" autoFocus className='mt-2 px-2 py-1 rounded-lg bg-black outline-none text-white' placeholder='Write Comment...' />
                            }
                            <div className='mt-2'>

                                {
                                    showInput || editMode ?
                                        <>
                                            <Button type={"Add"} action={handleAdd} />
                                            <Button type={"Cancel"} action={handleCancel} />
                                        </>
                                        :
                                        <>
                                            <Button type={"Reply"} action={() => setShowInput(true)} />
                                            <Button type={"Edit"} action={() => setEditMode(true)} />
                                            <Button type={"Delete"} action={handleDelete} />
                                        </>
                                }
                            </div>
                        </div>
                    </div>
                )
            }
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

{/* comments?.text ? (
                                    ) : "" */}