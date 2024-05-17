import supabase from "../supabase/config"
import "./HomePage.css"

function HomePage() {
const handleButton = async () => { // this function is not used
  const {data, error} = await supabase.from("games").select()
  // the error is not handled here
  console.log(data)
}
// I noticed your pages and components are in the same folder, I would suggest you to create a folder for pages and another for components

// Try to format the code to make  it more readable 
    return (
<>
      <div className="backgroundImage">
        <h1 className="Title">GameQuest</h1>
        <h3 className="Title">The videogameHub</h3>
        <div className="perks">

        </div>

  {/* 
    Please format the code to make it more readable
  */}
        </div>
      
    </>
    )
  }
  
  export default HomePage