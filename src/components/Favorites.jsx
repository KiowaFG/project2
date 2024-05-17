import supabase from "../supabase/config"
import { useEffect, useState } from "react";
import "./Games.css"
import GameDetails from "./Details";
import estrella from "../assets/estrellablanca.png"

import yellowStar from "../assets/estrella1.png"


  function Favorites() {
    const [games, setGames] = useState([])
    // state variable to disp[lay the details
    const [selectedGame, setSelectedGame] = useState(null);

    const handleFavorite = async (e,id, Favorite)=>{
      e.stopPropagation()
      const { data, error } = await supabase.from("games").update({Favorite: !Favorite}).eq('id', id)
      if(error)
      console.log(error)
      getFavorites()
    }
  
    const getFavorites = async () => {
      const { data, error } = await supabase.from("games").select().eq("Favorite", true)
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
      getFavorites()
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
                    <img  onClick={(e)=>handleFavorite (e,game.id, game.Favorite)} className="starImage" src={(game.Favorite) ? yellowStar : estrella} alt="" />
                    <img className="cardImage" src={game.image_url} alt="" />
                    <p className="gameName">{game.name}</p>
                    <div className="reviewCircle">
                      <p className="review">{game.user_review}</p>
                    </div>
                    <img src="" alt="" /> {/* this image is empty */}
                  </div>
  
                )
  
              })
            }
          </div>
  
          {selectedGame && <>
            <div className="cardBlur" onClick={hideDetailsModal}>
            </div>
            
            <div className="details-modal" ><GameDetails hideDetailsModal={hideDetailsModal} getGames={getFavorites} selectedGame={selectedGame} />
            </div>
            
          </>
          }
  
        </div>
  
      </>
    )
  }
  
  export default Favorites