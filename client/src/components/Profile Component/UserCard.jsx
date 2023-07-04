import React from 'react';
import { AiOutlineEdit } from 'react-icons/ai';

function UserCard({user }) {
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
            <button className="text-white text-lg focus:outline-none" onClick={() => console.log('hello')}>
                edit
            </button>
          </div>

          <div className="bg-white h-1/2 w-full rounded-3xl flex flex-col justify-around items-center">
            <div className="w-full h-1/2 flex justify-between items-center px-3 pt-2">
              <div className="flex flex-col justify-center items-center">
                <h1 className="text-gray-500 text-xs">Orders</h1>
                <h1 className="text-gray-600 text-sm">340</h1>
              </div>
              <div className="flex flex-col justify-center items-center">
                <h1 className="text-gray-500 text-xs">Spent</h1>
                <h1 className="text-gray-600 text-sm">$2,004</h1>
              </div>
            </div>
            <div className="w-full h-1/2 flex flex-col justify-center items-center">
              <h1 className="text-gray-700 font-bold text-xl tracking-wide">{user.firstName} {user.lastName}</h1>
              <h1 className="text-gray-500 text-sm">New York, USA</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserCard;
