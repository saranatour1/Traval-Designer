// eslint-disable-next-line no-unused-vars
import React from "react";

import { useEffect, useState } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import Collab from "./Collab";
import ToDoList from "./ToDoList";
import VerticalLinearStepper from "./VerticalLinearStepper";

function PostForm({ onClickProp, users, onSubmitProp, item, editMode }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [labels, setLabels] = useState([]);
  const [label, setLabel] = useState("");
  const [toDoList, setToDoList] = useState([]);
  const [collab, setCollab] = useState([]);
  const [loggedInUser, setLoggedInUser] = useState("");

  // const navigate = useNavigate();

  useEffect(() => {
    const userId = localStorage.getItem("userId");
    setLoggedInUser(userId);
  }, []);

  useEffect(() => {
    const userId = localStorage.getItem("userId");
    setLoggedInUser(userId);

    if (editMode && item) {
      // Populate the form fields with the data from the object being edited
      setTitle(item.title);
      setContent(item.content);
      setLabels(item.labels);
      setToDoList(item.toDoList);
      setCollab(item.collab);
    }
  }, [editMode, item]);

  // console.log('this is the title in the post form' , title);
  // console.log('this is the content in the post form' , content);
  // console.log('these are the labels' , labels);
  // console.log('toDoList' , toDoList );
  // console.log('collab' , collab);

  console.log("on Submit");

  const handleSubmit = () => {
    // post fetch request
    if (editMode && item) {
      fetch(`http://localhost:8000/api/trips/${item._id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title, content, toDoList, collab, labels }),
      })
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          console.log(data);
          // console.log(data, 'in the post form');
          onSubmitProp(data);
          onClickProp();
        })
        .catch((error) => {
          console.error(error);
        });
    } else {
      fetch(`http://localhost:8000/api/trips/${loggedInUser}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title, content, toDoList, collab, labels }),
      })
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          console.log(data);
          // console.log(data, 'in the post form');
          onSubmitProp(data);
          onClickProp();
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };

  const steps = [
    {
      label: "add title and content",
      description: (
        <>
          <input
            className="title bg-gray-100 border border-gray-300 p-2 mb-4 outline-none"
            spellCheck="false"
            placeholder="Title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            className="description bg-gray-100 sec p-3 h-60 border border-gray-300 outline-none"
            spellCheck="false"
            placeholder="Describe everything about this post here"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          ></textarea>
        </>
      ),
    },
    {
      label: "add labels",
      description: (
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
                  <button className="ml-1 text-gray-600" onClick={()=> removeLabel(item)}>x</button>
                </span>
              ))}
            </div>
          </div>
        </div>
      ),
    },
    {
      label: "add to do items",
      description: (
        <div>
          <ToDoList onAddProp={(items) => setToDoList(items)} />
        </div>
      ),
    },
    {
      label: "add collaborators",
      description: (
        <div>
          <Collab users={users} onChangeProp={(item) => setCollab(item)} />
        </div>
      ),
    },
  ];

  const removeLabel = (label) => {
  const indexToDelete = labels.indexOf(label);
  if (indexToDelete !== -1) {
    const updatedLabels = [...labels]; 
    updatedLabels.splice(indexToDelete, 1);
    setLabels(updatedLabels); 
  }
}

  return (
    <>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="transition  duration-75 ease-in-out overflow-y-auto"
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
                <button
                  className="btn border border-gray-300 p-1 px-4 font-semibold cursor-pointer text-gray-500 ml-auto"
                  onClick={() => onClickProp()}
                >
                  Cancel
                </button>
                <button
                  className="btn border border-indigo-500 p-1 px-4 font-semibold cursor-pointer text-gray-200 ml-2 bg-indigo-500"
                  onClick={() => handleSubmit()}
                >
                  Post
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}

export default PostForm;
