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
        <h1 className="Title mainTitle">The videogameHub</h1>
        <div className="perks">

        </div>

  
        </div>
      
    </>
    )
  }
  
  export default HomePage