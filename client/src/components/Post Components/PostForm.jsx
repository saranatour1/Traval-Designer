// eslint-disable-next-line no-unused-vars
import React from 'react'

import {AiOutlineCloseCircle} from 'react-icons/ai';
function PostForm({onClickProp}) {
  return (
<>
<div className="fixed inset-0 flex items-center justify-center bg-opacity-75 bg-gray-900" >
  <div className="bg-white w-11/12 md:w-8/12 lg:w-6/12 xl:w-4/12 rounded-lg shadow-lg">
  <div className="flex items-center justify-between m-5">
  <div className="text-center font-bold text-2xl text-gray-800">New Post</div>
  <button onClick={() => onClickProp()} className="text-red-500">
    <AiOutlineCloseCircle />
  </button>
</div>


    <div className="editor mx-auto flex flex-col text-gray-800 border border-gray-300 p-4">
      <input className="title bg-gray-100 border border-gray-300 p-2 mb-4 outline-none" spellCheck="false" placeholder="Title" type="text" />
      <textarea className="description bg-gray-100 sec p-3 h-60 border border-gray-300 outline-none" spellCheck="false" placeholder="Describe everything about this post here"></textarea>



      <div className="buttons flex my-10">
        <div className="btn border border-gray-300 p-1 px-4 font-semibold cursor-pointer text-gray-500 ml-auto" onClick={() => onClickProp()}>Cancel</div>
        <div className="btn border border-indigo-500 p-1 px-4 font-semibold cursor-pointer text-gray-200 ml-2 bg-indigo-500">Post</div>
      </div>
    </div>
  </div>
</div>

</>

  )
}

export default PostForm;