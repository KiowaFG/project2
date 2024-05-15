import supabase from "../supabase/config"
import "./HomePage.css"

function HomePage() {
const handleButton = async () => {
  const {data, error} = await supabase.from("games").select()
  console.log(data)
}


    return (
<>
      <div className="backgroundImage">
        <h1 className="Title">GameQuest</h1>
        <h3 className="Title">The videogameHub</h3>
        <div className="perks">

        </div>

  
        </div>
      
    </>
    )
  }
  
  export default HomePage