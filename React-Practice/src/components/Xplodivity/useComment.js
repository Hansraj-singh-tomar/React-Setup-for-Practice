import React from "react";

const useComment = () => {
    function addComment(tree, commentId, newComment) {
        if (tree?.id == commentId) {
            tree?.replies?.push(newComment);
            return tree;
        }

        const updatedReplies = tree.replies.map((el) => addComment(el, commentId, newComment))

        return { ...tree, replies: updatedReplies }
    }

    return { addComment }
}

export default useComment;