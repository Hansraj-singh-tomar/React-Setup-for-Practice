import React, { useEffect, useState } from 'react'
import { commentsData } from './CommentsData'
import CommentCmp from './CommentCmp'
import useComment from './useComment'

const Nested = () => {

    const [comments, setComments] = useState(commentsData);
    const { addComment } = useComment();

    function handleAddComment(commentId, newComment) {
        const updatedTree = addComment(comments, commentId, newComment);
        setComments(updatedTree);
    }

    return (
        <div className='w-11/12 mx-auto my-4'>
            <>
                <CommentCmp key={comments.id} comments={comments} handleAddComment={handleAddComment} />
            </>
        </div>
    )
}

export default Nested
