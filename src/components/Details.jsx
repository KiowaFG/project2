import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import supabase from "../supabase/config";
import "./Details.css"
import UpdateGame from "./UpdateGame";





function GameDetails({ selectedGame, getGames, hideDetailsModal }) {

    const [editMode, setEditMode]= useState(false)



    const deleteGame = async () => {
        const { error } = await supabase
            .from("games")
            .delete()
            .eq('id', selectedGame.id)

        if (error) {
            console.log(error)
        }
        else {
            getGames()
        }

    }

    const updateGame = async () => {
        const { error } = await supabase
            .from("games")
            .update()
            .eq('id', selectedGame.id)

        if (error) {
            console.log(error)
        }


    }


    return (
        <>
            <div className="backgroundBlur">
                <div className="cardBorder">
                    <div></div>
                    <div className="gameDetailsCard">
                        { editMode ? <UpdateGame hideDetailsModal={hideDetailsModal} getGames={getGames} selectedGame={selectedGame} setEditMode={setEditMode}/> :

                            <>
                        <div className="halfCard1">
                            <img className="cardImg" src={selectedGame.image_url} alt="" />
                            <h3 className="cardtitle">{selectedGame.name}</h3>
                            <p className="cardPlatform">Platform: {selectedGame.platform}</p>
                            <p className="cardReleaseDate">Release date: {selectedGame.release_date}</p>
                            <p className="cardUserReview">User Review: {selectedGame.user_review}</p>
                        </div>
                        <div className="halfCard2">
                            <p className="cardSummary">Summary: {selectedGame.summary}</p>
                            <div className="buttons">
                                <button className="edit" onClick={()=>setEditMode(true)}>Edit</button>
                                <button onClick={()=>{
                                    deleteGame ()
                                    hideDetailsModal()
                                    
                                    } } className="delete">Delete</button>
                            </div>
                        </div>
                        </>

                        }
                        


                    </div>
                </div>
            </div>


        </>

    )
}

export default GameDetails

