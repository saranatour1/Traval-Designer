// eslint-disable-next-line no-unused-vars
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
// import { AiOutlineEdit } from 'react-icons/ai';

// eslint-disable-next-line react/prop-types
function UserCard({user, otherUser , collab ,normalPosts }) {
  const [isLogged , setIsLogged]=useState(false);

  useEffect(() => {
    user ===otherUser._id ? setIsLogged(true):setIsLogged(false);
  }, [otherUser._id, user]);



  return (
    <>
      <div className="w-full flex justify-center items-center">
        <div className=" w-72 absolute flex justify-center items-center ">
          <img
            className="object-cover h-20 w-20 rounded-full"
            src="https://i.pravatar.cc/256"
            alt=""
          />
        </div>
        <div className="h-56 mx-4 w-5/6 bg-blue-400 rounded-3xl shadow-md sm:w-80 sm:mx-0">
          <div className="h-1/2 w-full flex justify-between items-baseline px-3 py-5">
            <h1 className="text-white text-xl font-bold tracking-wide">Profile</h1>


          </div>
          <div className="bg-white h-1/2 w-full rounded-3xl flex flex-col justify-around items-center">
            <div className="w-full h-1/2 flex justify-between items-center px-3 pt-2">
              <div className="flex flex-col justify-center items-center">
                <h1 className="text-gray-500 text-xs">Posts</h1>
                <h1 className="text-gray-600 text-sm">{normalPosts}</h1>
              </div>
              <div className="flex flex-col justify-center items-center">
                <h1 className="text-gray-500 text-xs">Collaborating</h1>
                <h1 className="text-gray-600 text-sm">{collab}</h1>
              </div>
            </div>
            <div className="w-full h-1/2 flex flex-col justify-center items-center">
              <h1 className="text-gray-700 font-bold text-xl tracking-wide">{otherUser.firstName} {otherUser.lastName}</h1>
              <h1 className="text-gray-500 text-sm">New York, USA</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserCard;

// UserCard.propTypes = {
//   firstname: PropTypes.string.isRequired
// }