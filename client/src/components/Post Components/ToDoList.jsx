import React from 'react'
import { useState } from 'react';

// eslint-disable-next-line react/prop-types
function ToDoList({onAddProp }) {
  const [toDoList, setToDoList] = useState([]);
  const[toDoText, setDoText] = useState('');
// console.log(toDoList);

const handleTodoCheckbox = (index) => {
  const updatedList = [...toDoList];
  updatedList[index].checked = !updatedList[index].checked;
  setToDoList(updatedList);
  onAddProp(updatedList); 
};

const handleRemoveTodo = (index) => {
  const updatedList = [...toDoList];
  updatedList.splice(index, 1);
  setToDoList(updatedList);
  onAddProp(updatedList); 
};


  return (
  <div className="h-100 w-full flex items-center justify-center bg-teal-lightest font-sans">
        <div className="bg-white rounded shadow p-6 m-4 w-full lg:w-3/4 lg:max-w-lg">
          <div className="mb-4">
              <h1 className="text-grey-darkest"> add Todo List</h1>
              <div className="flex mt-4">
                <input className="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-grey-darker" placeholder="Add Todo" onChange={(e)=>setDoText(e.target.value)} value={toDoText}/>
                <button className="flex-no-shrink p-2 border-2 rounded text-teal border-teal hover:text-white hover:bg-teal" onClick={()=> {setToDoList([...toDoList , {content: toDoText , checked:false}]); onAddProp(toDoList); setDoText('') }}>Add</button>
            </div>
        </div>
        <div>
      {toDoList.map((item, idx) => (
        <div className="flex mb-4 items-center" key={idx}>
          <input type="checkbox" checked={item.checked} onChange={() => handleTodoCheckbox(idx)} />
          <p className={item.checked ? "w-full text-grey-darkest line-through" : "w-full text-grey-darkest"}>{item.content}</p>
          <button className="flex-no-shrink p-2 ml-2 border-2 rounded text-red border-red hover:text-white hover:bg-red"  onClick={() => handleRemoveTodo(idx)}>Remove</button>
        </div>
      ))}


      
    </div>
    </div>
</div>
  )
}

export default ToDoList;