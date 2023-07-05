import React from 'react';
import Comment from './Comment';

function CommentDisplay({ comments }) {
  // comments need to be sorted by updatedAt
  return (
    <>
    {comments.length > 0 ?  comments.map((comment , idx) => <Comment key={idx} comment={comment}/>)  : <p> No Comments To show</p>}
    </>
  );
}

export default CommentDisplay;
