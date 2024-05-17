import React, { useState } from "react";
import "./AddGame.css"
import supabase from "../supabase/config";
import "./UpdateGame.css"
import closeBtn from "../assets/borrar.png"
import GameDetails from "./Details"; // you are not using this component here
import Games from "./Games"; // neither this one

function UpdateGame({ setEditMode, selectedGame, getGames, hideDetailsModal }) {
    const [formData, setFormData] = useState({
        name: selectedGame.name,
        platform: selectedGame.platform,
        release_date: selectedGame.release_date,
        summary: selectedGame.summary,
        meta_score: selectedGame.meta_score,
        user_review: selectedGame.user_review,
        image_url: selectedGame.image_url,
    });
    const [successMessage, setSuccesMessage] = useState(null)

    const [formModified, setFormModified] = useState(false)

    const handleChange = (e) => {
        setFormModified(true)
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (formModified) {

            const { data, error } = await supabase.from("games").update(formData).eq('id', selectedGame.id)
            if (error) {
                console.log(error)
                return

            }
            else {
                console.log("game created")
                // setEditMode(false)
                setSuccesMessage("The game has been updated!")
                getGames()
                setFormData({
                    name: "",
                    platform: "",
                    release_date: "",
                    summary: "",
                    meta_score: "",
                    user_review: "",
                    image_url: "",
                })
            }
        } else{
            setSuccesMessage("Please modify a field")
        }

    };

    return (
        <form className="formEdit" onSubmit={handleSubmit}>
            <img onClick={hideDetailsModal} className="closeBtnForm" src={closeBtn} alt="" />
            <div className="formColumn">
                <div>
                    <label>
                        Name:
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                        />
                    </label>
                    <label>
                        Platform:
                        <input
                            type="text"
                            name="platform"
                            value={formData.platform}
                            onChange={handleChange}
                        />
                    </label>
                    <label>
                        Release Date:
                        <input
                            type="text"
                            name="release_date"
                            value={formData.release_date}
                            onChange={handleChange}
                        />
                    </label>
                    <label>
                        Summary:
                        <textarea
                            name="summary"
                            value={formData.summary}
                            onChange={handleChange}
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Meta Score:
                        <input
                            type="number"
                            name="meta_score"
                            value={formData.meta_score}
                            onChange={handleChange}
                        />
                    </label>
                    <label>
                        User Review:
                        <input
                            type="text"
                            name="user_review"
                            value={formData.user_review}
                            onChange={handleChange}
                        />
                    </label>
                    <label>
                        Image URL:
                        <input
                            type="text"
                            name="image_url"
                            value={formData.image_url}
                            onChange={handleChange}


                        />
                    </label>
                    <button className="formSubmit editSubmit" type="submit">Submit</button>
                    <p>{successMessage}</p>
                </div>
            </div>

        </form>
    );
}

export default UpdateGame;