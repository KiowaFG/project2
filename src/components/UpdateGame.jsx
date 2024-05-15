import React, { useState } from "react";
import "./AddGame.css"
import supabase from "../supabase/config";

function UpdateGame() {
  const [formData, setFormData] = useState({
    name: "",
    platform: "",
    release_date: "",
    summary: "",
    meta_score: "",
    user_review: "",
    image_url: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const {data,error} = await supabase.from("games").insert([formData])
    if (error){
        console.log(error)
        return
        
    }
    else{
        console.log("game created")
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
 
  };

  return (
    <form onSubmit={handleSubmit}>
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
          type="date"
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
      <button className="formSubmit" type="submit">Submit</button>
    </form>
  );
}

export default UpdateGame;