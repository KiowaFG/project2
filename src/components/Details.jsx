import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useEffect } from "react";



function GameDetails(){
    const[gameData,setGameData] = useState([])

    const navigate = useNavigate();

    const {gameId} = useParams()

    useEffect(()=>{
        fetch
    })
}