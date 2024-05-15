import supabase from "../supabase/config"
import { useEffect, useState } from "react";
import "./Games.css"
import GameDetails from "./Details";



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

  }
  const hideDetailsModal = () => {
    setSelectedGame(null)

  }

  useEffect(() => {
    getGames()
  }, [])

  return (
    <>
      <div className="spacingNavbar">
        <div className="cardContainer">
          {


            games.map((game) => {
              return (

                <div key={game.id} onClick={() => {
                  setSelectedGame(game)
                  displayDetailsModal()
                }
                } className="card">
                  <img className="cardImage" src={game.image_url} alt="" />
                  <p className="gameName">{game.name}</p>
                  <div className="reviewCircle">
                    <p className="review">{game.user_review}</p>
                  </div>
                  <img src="" alt="" />
                </div>

              )

            })

          }
        </div>
        <div className="cardBlur">
        {selectedGame && <div className="details-modal" onClick={hideDetailsModal}><GameDetails getGames={getGames} selectedGame={selectedGame} />  </div>}
        </div>
      </div>

    </>
  )

}

export default Games