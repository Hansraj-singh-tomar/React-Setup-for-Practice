import React from 'react'

const useNode = () => {
    function addComment(tree, commentId, newComment) {
        if (tree.id === commentId) {
            tree.replies.unshift(newComment);
            return tree;
        }

        const updatedReplies = tree.replies.map((el) => addComment(el, commentId, newComment))

        return { ...tree, replies: updatedReplies }
    }

    function editComment(tree, commentId, commentText) {
        if (tree.id === commentId) {
            tree.text = commentText;
            return tree;
        }

        tree.replies.map((el) => editComment(el, commentId, commentText))

        return { ...tree }
    }

    function deleteComment(tree, commentId) {

        if (tree?.id === commentId) {
            return tree?.replies?.filter((el) => el?.id !== commentId)
        }

        const updatedReplies = tree.replies.map((el) => deleteComment(el, commentId))

        return { ...tree, replies: updatedReplies }
    }

    return { addComment, editComment, deleteComment }
}

export default useNode;