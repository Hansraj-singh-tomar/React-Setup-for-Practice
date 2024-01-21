import React, { useState } from 'react'
import { commentsData } from './CommentsData';
import Comments from './Comments';
import useNode from './useNode';

const Main = () => {
    const [comments, setComments] = useState(commentsData);
    const { addComment, editComment, deleteComment } = useNode();

    function handleAddComment(commentId, newComment) {
        const updatedTree = addComment(comments, commentId, newComment);
        setComments(updatedTree)
    }

    function handleEditComment(commentId, commentText) {
        const updatedTree = editComment(comments, commentId, commentText);
        setComments(updatedTree);
    }

    function handleDeleteComment(commentId) {
        const updatedTree = deleteComment(comments, commentId);
        setComments(updatedTree);
    }

    return (
        <div>
            <Comments
                key={comments?.id}
                comments={comments}
                handleAddComment={handleAddComment}
                handleEditComment={handleEditComment}
                handleDeleteComment={handleDeleteComment}
            />
        </div>
    )
}

export default Main