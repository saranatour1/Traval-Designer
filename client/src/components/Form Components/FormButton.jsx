
// eslint-disable-next-line react/prop-types
function FormButton({onClickProp , btnText}) {
  return (
  <div className="mb-6">
    <button type="button" className="w-full px-3 py-4 text-white bg-indigo-500 rounded-md focus:bg-indigo-600 focus:outline-none" onClick={() => onClickProp()}>{btnText}</button>
  </div>
  )
}

export default FormButton