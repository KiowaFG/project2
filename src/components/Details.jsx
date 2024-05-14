import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import supabase from "../supabase/config";



function GameDetails(){
    const[gameData,setGameData] = useState([])

    const navigate = useNavigate();

    const {gameId} = useParams()

const getGames =   async ()=>{
    const response= supabase.from("games").select()
}

    return(
        <div></div>
    )
}

export default GameDetails