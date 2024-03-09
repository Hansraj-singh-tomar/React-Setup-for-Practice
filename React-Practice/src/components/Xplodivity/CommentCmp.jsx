import React, { useEffect, useState } from 'react'
import Button from './Button'

const CommentCmp = ({ comments, handleAddComment }) => {
    const [showInput, setShowInput] = useState(false);
    const [editMode, setEditMode] = useState(false);
    const [commentBody, setCommentBody] = useState("");

    function handleAdd() {
        let newComment = {
            id: Date.now(),
            text: commentBody,
            replies: []
        }
        handleAddComment(comments?.id, newComment);
        setShowInput(false);
    }

    function handleCancel() {
        setEditMode(false);
        setShowInput(false);
    }

    return (
        <div>

            {
                comments.id === "1" ? (
                    <>
                        <div className='mb-2 border-2 border-white p-2 rounded-lg'>
                            <input autoFocus value={commentBody} onChange={(e) => setCommentBody(e.target.value)} type="text" placeholder='Write Comment...' className='px-2 py-2 rounded-full w-80 mr-2 text-black' />
                            <Button text={"Comment"} handleClick={handleAdd} />
                        </div>
                    </>
                ) : (
                    <>
                        <div className='border-2 border-white p-3'>
                            <h1 contentEditable={String(editMode)} suppressContentEditableWarning={String(editMode)} className='px-2 py-1'>{comments?.text}</h1>
                            <div className='ml-2'>
                                {
                                    showInput && <input autoFocus onChange={(e) => setCommentBody(e.target.value)} type='text' placeholder='Reply' className='text-black mt-2 px-2 py-1 rounded-lg' />
                                }
                                <div className='mt-1'>
                                    {
                                        showInput || editMode ?
                                            <>
                                                <Button text={"Add"} handleClick={handleAdd} />
                                                <Button text={"Cancel"} handleClick={handleCancel} />
                                            </>
                                            :
                                            <>
                                                <Button text={"Reply"} handleClick={() => setShowInput(true)} />
                                                <Button text={"Edit"} handleClick={() => setEditMode(true)} />
                                                <Button text={"Delete"} />
                                            </>
                                    }
                                </div>
                            </div>
                        </div>
                    </>
                )
            }

            <div className='ml-4 mt-2'>
                {
                    comments?.replies?.map((elm) => {
                        return <CommentCmp key={elm?.id} comments={elm} handleAddComment={handleAddComment} />
                    })
                }
            </div>
        </div>
    )
}

export default CommentCmp


{/* {
                comments.text && <>
                    <div div className='border-2 border-white p-3'>
                        <h1 className='px-2 py-1'>{comments.text}</h1>
                        <div className='mt-2'>
                            <Button label={"Reply"} />
                            <Button label={"Edit"} />
                            <Button label={"Delete"} />
                        </div>
                    </div>
                </>
            } */}