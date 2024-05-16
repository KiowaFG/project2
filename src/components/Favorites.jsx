import { useState, useEffect} from "react";
import supabase from "../supabase/config";
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

    useEffect(() => {
      getFavorites()
    }, [])
  

    return (
      <>

       <h1>Favorites!!!!!</h1>

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
                  <img src="" alt="" />
                </div>

              )

            })
          }
       </div>
      </>
    )
  }
  
  export default Favorites