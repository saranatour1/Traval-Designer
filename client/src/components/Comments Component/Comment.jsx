import React from 'react'
import { Link } from 'react-router-dom';

import {MdDeleteOutline} from 'react-icons/md';
import {AiOutlineEdit} from 'react-icons/ai';
function Comment({comment}) {

  // add the update comment 
  const editComment =() =>{};
  // add the delete comment 
  const deleteComment =() => {}; 

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
                <button className="text-gray-500 text-xl" onClick={() => deleteComment()}>

                  <MdDeleteOutline />
                </button>
                <button className='text-gray-500 text-xl' onClick={()=> editComment()}>
                  <AiOutlineEdit />
                </button>


              </div>
              <p className="text-gray-400 text-sm">{comment.updatedAt}</p>
            </div>
          </div>
          <p className="-mt-4 text-gray-500">
          {comment.content}
          </p>
        </div>
      </div>
  )
}

export default Comment;