import { useState } from 'react'
import { Route, Routes, useNavigate } from "react-router-dom";


function HallOfFame() {

    const [games, setGames] = useState([])
    // state variable to disp[lay the details
    const [selectedGame, setSelectedGame] = useState(null);
  
    const getGames = async () => {
      const { data, error } = await supabase.from("halloffame").select().order("user_review",{ascending:false})
      if (data) {
        console.log("The data is here! ", data);
        setGames(data);
      } else {
        console.log(error)
      }
    }
  return (
    <>
    <div className=''></div>
    
    </>
  )
}

export default HallOfFame