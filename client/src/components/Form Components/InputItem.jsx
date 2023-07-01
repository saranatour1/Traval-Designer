

// eslint-disable-next-line react/prop-types
function InputItem({onChangeProp , type, elId , labelText , placeholderText }) {
  // type , id + htmlFor , LabelText, type if needed 
  const onChangeFunction =(text)=>{
    onChangeProp(text);
  }

  return (
    <div className="mb-6">
      <label htmlFor={elId} className="block mb-2 text-sm text-gray-600 dark:text-gray-400">{labelText}</label>
      <input type={type} name={elId} id={elId} placeholder={placeholderText} className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500" onChange={(e)=> onChangeFunction(e.target.value)} />
    </div>
  )
}

export default InputItem;