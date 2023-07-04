// eslint-disable-next-line no-unused-vars
import React from "react";

import { useState } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import ToDoList from "./ToDoList";
import Collab from "./Collab";
import { useEffect } from "react";
import VerticalLinearStepper from "./VerticalLinearStepper";

function PostForm({ onClickProp ,users }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [labels, setLabels] = useState([]);
  const [label, setLabel] = useState("");
  const [toDoList, setToDoList] = useState([]);
  const [collab, setCollab] = useState([]);



console.log(title , content)

const steps = [
  {
    label: 'add title and content',
    description: <>
    <input
      className="title bg-gray-100 border border-gray-300 p-2 mb-4 outline-none"
      spellCheck="false"
      placeholder="Title"
      type="text"
      value={title}
      onChange={(e)=>setTitle(e.target.value)}
    />
    <textarea
      className="description bg-gray-100 sec p-3 h-60 border border-gray-300 outline-none"
      spellCheck="false"
      placeholder="Describe everything about this post here"
      value={content}
      onChange={(e)=>setContent(e.target.value)}
    ></textarea>
    </>,
  },
  {
    label: 'add labels',
    description:
    <div>
    <label htmlFor="labels" className="text-gray-800 font-semibold">
      Add Label:
    </label>
    <div className="my-6 flex items-center">
      <input
        type="text"
        className="w-1/2 px-3 py-2 border border-gray-300 rounded-lg bg-slate-200 text-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        onChange={(e) => setLabel(e.target.value)}
        value={label}
      />
      <button
        onClick={() => {
          setLabels([...labels, label]);
          setLabel("");
        }}
        className="ml-4 px-4 py-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600"
      >
        Add
      </button>
      <div className="ml-4">
        {labels.map((item, idx) => (
          <span
            key={idx}
            className="inline-block px-3 py-1 text-sm font-semibold bg-gray-200 text-gray-800 rounded-full mr-2"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  </div>,
  },
  {
    label: 'add to do items',
    description: <div>
    <ToDoList onAddProp={(items) => setToDoList(items)} />
  </div>,

  },
  {
    label: 'add collaborators',
    description: <div>
    <Collab users={users}/>
  </div>
,

  },
  

];

  return (
    <>


      <form
        onSubmit={(e) => e.preventDefault()}
        className="transition duration-150 ease-in-out overflow-y-auto"
      >
        <div className="fixed inset-0 flex items-center justify-center bg-opacity-75 bg-gray-900 overflow-y-auto h-100">
          <div className="bg-white w-11/12 md:w-8/12 lg:w-6/12 xl:w-4/12 rounded-lg shadow-lg overflow-y-auto">
            <div className="flex flex-col items-center justify-center m-5">
              <div className="flex items-center justify-between w-full">
                <div className="text-center font-bold text-2xl text-gray-800">
                  New Post
                </div>
                <button onClick={() => onClickProp()} className="text-red-500">
                  <AiOutlineCloseCircle />
                </button>
              </div>
            </div>

            <div className="editor mx-auto flex flex-col text-gray-800 border border-gray-300 p-4">
              <VerticalLinearStepper steps={steps} />
              <div className="buttons flex my-10">
                <div
                  className="btn border border-gray-300 p-1 px-4 font-semibold cursor-pointer text-gray-500 ml-auto"
                  onClick={() => onClickProp()}
                >
                  Cancel
                </div>
                <div className="btn border border-indigo-500 p-1 px-4 font-semibold cursor-pointer text-gray-200 ml-2 bg-indigo-500">
                  Post
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}

export default PostForm;
