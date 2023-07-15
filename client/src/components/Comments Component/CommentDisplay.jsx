import React from 'react';
import Comment from './Comment';

function CommentDisplay({ comments ,deleteComment ,postId}) {
  // comments need to be sorted by updatedAt
  return (
    <>
    {Object.entries(comments).length > 0 ?  comments.map((comment , idx) => <Comment key={idx} postId={postId} comment={comment} deleteComment={deleteComment}/>)  : <p> No Comments To show</p>}
    </>
  );
}

export default CommentDisplay;
