import supabase from "../supabase/config"
import { useEffect, useState } from "react";
import "./Games.css"



function Games() {
  const [games, setGames] = useState([])

  const getGames = async () => {
    const { data, error } = await supabase.from("games").select()
    if (data) {
      console.log("The data is here! ", data);
      setGames(data);
    } else {
      console.log(error)
    }
  }



  useEffect(() => {
    getGames()
  }, [])



  return (
    <>
    <div className="cardContainer">
      {
        
          
        games.map((game) => {
          return (
            
            <div className="card">
              <img className="cardImage" src={game.image_url} alt="" />
              <p>{game.name}</p>
              <p>{game.user_review}</p>
              <img src="" alt="" />
            </div>
          )

        })
        
      }
      </div>

    </>
  )

}

export default Games