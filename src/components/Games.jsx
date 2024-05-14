import supabase from "../supabase/config"
import { useEffect, useState } from "react";
import "./Games.css"



function Games() {
  const [games, setGames] = useState([])
  // state variable to disp[lay the details
  const [selectedGame, setSelectedGame] = useState(null);

  const getGames = async () => {
    const { data, error } = await supabase.from("games").select()
    if (data) {
      console.log("The data is here! ", data);
      setGames(data);
    } else {
      console.log(error)
    }
  }

  const displayDetailsModal = () => {
    document.querySelector(".details-modal").style.visibility = "visible";
  }
  const hideDetailsModal = () => {
    document.querySelector(".details-modal").style.visibility = "hidden";
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
              <>
                <div key={game.id} onClick={() => {
                  setSelectedGame(game)
                  displayDetailsModal()
                }
                } className="card">
                  <img className="cardImage" src={game.image_url} alt="" />
                  <p>{game.name}</p>
                  <p>{game.user_review}</p>
                  <img src="" alt="" />
                </div>
                {selectedGame && <>{/* the component goes here with the props of the game */}</>}
              </>
            )

          })

        }
      </div>
      <div className="details-modal" onClick={hideDetailsModal}></div>
      

    </>
  )

}

export default Games