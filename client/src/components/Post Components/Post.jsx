import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
function Post({ item}) {
  // use state for the number of comments and number of likes
  const [likes, setLikes] = useState(item.likes.like || 0);
  const [comments, setComments] = useState(item.comments.length || 0);
  const [likers ,setLikers] = useState(item.likes.likedBy?.map((item, idx) => item._id) || null);



  useEffect(() => {
    const userId = localStorage.getItem('userId');
    // console.log(userId);
  }, []);

  // console.log(item.likedBy.map((item, idx) => item._id))
  
  const addOrDelete = (postId) => {
    const userId = localStorage.getItem('userId');
  
    fetch(`http://localhost:8000/api/addlike/${postId}/${userId}/add`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (likers.includes(userId)) {
          setLikes(likes - 1);
          setLikers(likers.filter((likerId) => likerId !== userId));
        } else {
          setLikes(likes + 1);
          setLikers([...likers, userId]);
        }
  
        console.log(data);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  
    
  // console.log(likes)




  return (
    <>
      {/* Make it into a component later */}
      <div className="rounded-xl border p-5 shadow-md w-full sm:w-6/12 bg-white mx-auto mt-3">
        <div className="flex flex-col sm:flex-row items-center justify-between border-b pb-3">
          <div className="flex items-center space-x-3">
            <div className="h-8 w-8 rounded-full bg-slate-400" style={{ backgroundImage: `url('https://i.pravatar.cc/32')` }}></div>
            <Link to={`/user/${item.author._id}`} className="text-lg font-bold text-slate-700">{`${item.author.firstName} ${item.author.lastName}`}</Link>
          </div>
          <div className="flex items-center space-x-4 sm:space-x-8 mt-2 sm:mt-0">
            {item.labels.map((label, idx) => (
              <button key={idx} className="rounded-2xl border bg-neutral-100 px-3 py-1 text-xs font-semibold">{label}</button>
            ))}
            <div className="text-xs text-neutral-500">{item.updatedAt.toLocaleString()}</div>
          </div>
        </div>

        <div className="mt-4 mb-6">
          <div className="mb-3 text-xl font-bold"> <Link to={`/post/${item._id}`}>{item.title}</Link> </div>
          <div className="text-sm text-neutral-600 text-clip">{item.content}</div>
        </div>
     
        <div>
          <div className="flex items-center justify-between text-slate-500">
            <div className="flex space-x-4 sm:space-x-8">
              <div className="flex cursor-pointer items-center transition hover:text-slate-600">
                <svg xmlns="http://www.w3.org/2000/svg" className="mr-1.5 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                </svg>
                <span>{item.comments.length}</span>
              </div>
              <div className="flex cursor-pointer items-center transition hover:text-slate-600">
                <button onClick={()=> addOrDelete(item._id)}>
                <svg xmlns="http://www.w3.org/2000/svg" className="mr-1.5 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                </svg>
                </button>
                <span >{likes}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </>
  );
}

export default Post;
