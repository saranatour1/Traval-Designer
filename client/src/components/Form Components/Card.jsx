//Out of Pure Boredom, I am Dividing Each Place in the Form into smaller pieces
// Mainly Becasue I want To Resuse these 
// and second I need to track my moves so that the people I am Collaborating with
// won't have a terrible time Tracking My steps 
// These Components Are Only Styled Components. 



// eslint-disable-next-line react/prop-types
function Card({children}) {
  return (
    <div className="flex items-center min-h-screen bg-white dark:bg-gray-900  justify-center">
      <div className="container mx-auto">
      <div className="max-w-md mx-auto my-10">
        {children}
      </div>
      </div>
    </div>
  )
}

export default Card