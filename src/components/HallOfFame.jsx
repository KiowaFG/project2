import { useState } from 'react'
import { Route, Routes, useNavigate } from "react-router-dom"; // this imports are not used


function HallOfFame() {

    const [games, setGames] = useState([])
    // state variable to disp[lay the details
    // you can remove this state variable since it is not used
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
    <div className=''></div> {/* this div is empty, the component returns nothing */}
    
    </>
  )
}

export default HallOfFame