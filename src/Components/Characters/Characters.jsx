import React, { useRef, useState } from 'react';
import "./Characters.scss";
import { charactersImages } from '../Teams/images';

import placeholder from "../../assets/placeholder.png"

const Characters = () => {
  const inputRef = useRef(null);
  const [narutoData, setNarutoData] = useState(null);
  const [error, setError] = useState("");

  async function searchCharacter() {
    try {
      const query = inputRef.current.value.trim();
      if (!query) {
        setError("Please enter a character name");
        setNarutoData(null)
        return;
      }
      const normalizedQuery = query.normalize("NFC");
const url = `https://dattebayo-api.onrender.com/characters?name=${encodeURIComponent(normalizedQuery)}`;
    
      const response = await fetch(url);
      const data = await response.json();
        console.log(data)
      if (!data.characters?.length) {
        setError("Couldn't find the character");
        setNarutoData(null);
        return;
      }
      
      setNarutoData(data.characters[0]);
      console.log(data.characters[0])
      setError("");
    } catch (err) {
      console.error(err);
      setError("An error occurred while fetching data");
    }
    inputRef.current.value = "";
  }

  function handleKeyDown(e) {
    if (e.key === "Enter") searchCharacter();
  }

  function reset() {
    setNarutoData(null);
    setError("");
    inputRef.current.value = "";
  }

  return (
    <div className="charactersContainer">
      <h1>Search for Naruto characters and view their details! 🦊</h1>
      <input className="input-search" onKeyDown={handleKeyDown} ref={inputRef} type="text" placeholder="e.g., Naruto" />
      <button id="searchButton" onClick={searchCharacter}>Search</button>
      <div className="charactersDetailsContainer">
       
        
        {error && <p>{error}</p>}
        {narutoData && (
          <div className="data-container">
{narutoData?.images[0] && (
  <img
    className="character-image"
    src={narutoData.images[0]}
    alt="Character"
    onError={(e) => {
      e.target.onerror = null;
      e.target.src =  placeholder;
    }}
  />
)}

            <p><strong>Full Name:</strong> {narutoData.name}</p>
            {narutoData.natureType && <p><strong>Nature Type:</strong> {narutoData.natureType.join(", ")}</p>}
            {narutoData.personal?.clan && <p><strong>Clan:</strong> {narutoData.personal.clan}</p>}
            {narutoData.personal?.occupation && <p><strong>Occupation:</strong> {narutoData.personal.occupation.join(", ")}</p>}
            {narutoData.personal?.affiliation && <p><strong>Village:</strong> {narutoData.personal.affiliation.join(", ")}</p>}
            {narutoData.rank?.ninjaRank?.["Part I"] && <p><strong>Rank:</strong> {narutoData.rank.ninjaRank["Part I"]}</p>}
            {narutoData.personal?.birthdate && <p><strong>Birthday:</strong> {narutoData.personal.birthdate}</p>}
            {narutoData.personal?.sex && <p><strong>Gender:</strong> {narutoData.personal.sex}</p>}
            {narutoData.personal?.age?.["Part II"] && <p><strong>Age:</strong> {narutoData.personal.age["Part II"]}</p>}
            {narutoData.personal?.classification && <p><strong>Classification:</strong> {narutoData.personal.classification.join(", ")}</p>}
            {narutoData.family && Object.entries(narutoData.family).map(([key, value]) => (
              <p key={key}><strong>{key.charAt(0).toUpperCase() + key.slice(1)}:</strong> {value}</p>
            ))}
            {narutoData.debut?.anime && <p><strong>Anime Debut:</strong> {narutoData.debut.anime}</p>}
            {narutoData.debut?.manga && <p><strong>Manga Debut:</strong> {narutoData.debut.manga}</p>}
{narutoData?.voiceActors?.japanese && (
  <p>
    <strong>Voice Actor:</strong>{" "}
    {Array.isArray(narutoData?.voiceActors?.japanese)
      ? narutoData?.voiceActors?.japanese?.join(", ")
      : narutoData?.voiceActors?.japanese}
  </p>
)}
            {narutoData.jutsu && (
              <div>
                <p><strong>Jutsus:</strong></p>
                {narutoData.jutsu.map((jutsu, index) => <p key={index}>{jutsu}</p>)}
              </div>
            )}
            <button className="resetButton" onClick={reset}>Reset</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Characters;