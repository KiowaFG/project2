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
      {
        games.map((game) => {
          return (
            <div className="card">
              <img className="cardImage" src={game.image_url} alt="" />
              <h2>{game.name}</h2>
              <p>{game.user_review}</p>
            </div>



          )

        })
      }

    </>
  )

}

export default Games