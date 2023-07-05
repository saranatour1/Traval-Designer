import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { MdDeleteOutline } from 'react-icons/md';
import { AiOutlineEdit } from 'react-icons/ai';
import axios from 'axios';

function Comment({ comment, deleteComment, postId }) {
  const [loggedInUser, setLoggedInUser] = useState('');
  const [comments,setComment]=useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const userId = localStorage.getItem('userId');
    setLoggedInUser(userId);
  }, []);

  // console.log(loggedInUser);
  // console.log(comment.commentBy._id)

  // add the update comment
  const editComment = () => {
    
    axios
    .put(`http://localhost:8000/api/trips/comments/${comment._id}`)
    .then((res) => {
      console.log(res.data);
      setComment(res.data);
      navigate(`/post/${postId}`);

    })
    .catch((err) => console.log(err));
};

  // add the delete comment
  const deleteComments = () => {
    axios
      .delete(`http://localhost:8000/api/trips/comments/${comment._id}`)
      .then((res) => {
        console.log(res.data);
        deleteComment(res.data);
        navigate(`/post/${postId}`);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="flex justify-center relative top-1/3 mt-2 w-full">
      <div className="relative grid grid-cols-1 gap-4 p-4 mb-8 border rounded-lg bg-white shadow-lg">
        <div className="relative flex gap-4 w-full mx-auto">
          <img
            src="https://icons.iconarchive.com/icons/diversity-avatars/avatars/256/charlie-chaplin-icon.png"
            className="relative rounded-lg -top-8 -mb-4 bg-white border h-20 w-20"
            alt=""
            loading="lazy"
          />
          <div className="flex flex-col">
            <div className="flex flex-row justify-between">
              <Link to={`/user/${comment.commentBy._id}`} className="relative text-xl whitespace-nowrap truncate overflow-hidden">
                {comment.commentBy.firstName} {comment.commentBy.lastName}
              </Link>
              {loggedInUser === comment.commentBy._id ? (
                <>
                  <button className="text-gray-500 text-xl" onClick={deleteComments}>
                    <MdDeleteOutline />
                  </button>
                  <button className="text-gray-500 text-xl" onClick={editComment}>
                    <AiOutlineEdit  />
                  </button>
                </>
              ) : null}
            </div>
            <p className="text-gray-400 text-sm">{comment.updatedAt}</p>
          </div>
        </div>
        <p className="-mt-4 text-gray-500">{comment.content}</p>
      </div>
    </div>
    
  );
}

export default Comment;
