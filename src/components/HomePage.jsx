import supabase from "../supabase/config"

function HomePage() {
const handleButton = async () => {
  const {data, error} = await supabase.from("games").select()
  console.log(data)
}


    return (
      <>
       <h1>Videogameeessssss!!!!!</h1>
       <button onClick={handleButton}>click me</button>
      </>
    )
  }
  
  export default HomePage