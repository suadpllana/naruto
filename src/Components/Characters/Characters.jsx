import React from 'react'
import "./Characters.css"

import { useRef, useState } from 'react';


const Characters = () => {

  const inputRef = useRef(null);
  const inputRef2 = useRef(null)
  const [narutoData, setNarutoData] = useState("")
  const [narutoJutsu, setNarutoJutsu] = useState("")
  const [ jutsuError , setJutsuError] = useState("")
  const [error , setError] = useState("")


  async function searchCharacter(){
    try{
      if(inputRef.current.value){
        const url = `https://dattebayo-api.onrender.com/characters?name=${encodeURIComponent(inputRef.current.value)}`;
        const response = await fetch(url);
        const data = await response.json();
        console.log(data)
        if(data.characters.length <= 0 ){
          setError("Couldn't find the character");
          setNarutoData("")
          inputRef.current.value = ``
          return
        }
        setNarutoData(data)
        inputRef.current.value = ``
        setError("")
      }
      else{
        setNarutoData("")
        setError("Couldn't find the character");
        inputRef.current.value = ``
      }
    }
    catch(err){
      console.error(err)
      
    }
   
    
  }
  async function searchCharacterJutsu(){
    try{
      if(inputRef2.current.value){
        const url = `https://dattebayo-api.onrender.com/characters?name=${encodeURIComponent(inputRef2.current.value)}`;
        const response = await fetch(url);
        const data = await response.json();
        if(data.characters.length <= 0){
          setJutsuError("Couldn't find the character");
          setNarutoJutsu("");
          inputRef2.current.value = ``
          return
        }
       setNarutoJutsu(data)
       inputRef2.current.value = ``;
       setError("")
      }
      else{
       setNarutoJutsu("")
       setJutsuError("Couldn't find the character")
       inputRef2.current.value = ``
      }
      
    }
    catch(err){
      console.error(err)
    }
  
  }

  function enterCommand(e){
    if(e.key === "Enter"){
      searchCharacter()
    }
  }
  function enterCommandJutsu(e){
    if(e.key === "Enter"){
      searchCharacterJutsu()
    }
  }


  function reset(){
    setNarutoData("")
    inputRef.current.value = ``
  }
  function resetJutsu(){
    setJutsuError("")
    setNarutoJutsu("");
    inputRef2.current.value = ``
  }

  return (
    <div className="charactersContainer">
      <h1>Here you can get the details for every Naruto character just by searching their name!🦊</h1>
      <h2>Character's Details</h2>
      <div className="charactersDetailsContainer">
        <input onKeyDown={(e) => enterCommand(e)} ref={inputRef} type="text" placeholder="ex. Naruto" />
        <button onClick={searchCharacter} id="searchButton">
          Search
        </button>
        {narutoData ? <>

            {narutoData.characters[0].name ? <p><strong>Full Name:</strong> {narutoData.characters[0].name}</p> : <></>}
            {narutoData.characters[0].natureType ? <p><strong>Nature Type:</strong> {narutoData.characters[0].natureType[0]} </p> : <></>}
            {narutoData.characters[0].personal.clan ? <p><strong>Clan:</strong> {narutoData.characters[0].personal.clan} </p> : <></>}
            {narutoData.characters[0].personal.occupation ? <p><strong>Occupation:</strong> {narutoData.characters[0].personal.occupation} </p> : <></>}
            {narutoData.characters[0].personal.affiliation   ? <p><strong>Village/s:</strong> {narutoData.characters[0].personal.affiliation} </p> : <></>}
            {narutoData.characters[0].rank 
              && narutoData.characters[0].rank.ninjaRank &&
                  narutoData.characters[0].rank.ninjaRank["Part I"]   ? <p><strong>Rank/s:</strong> {narutoData.characters[0].rank.ninjaRank["Part I"] } </p> : <></>}
                  {narutoData.characters[0].personal.birthdate   ? <p><strong>Birthday:</strong> {narutoData.characters[0].personal.birthdate} </p> : <></>}
                  {narutoData.characters[0].personal.sex   ? <p><strong>Gender:</strong> {narutoData.characters[0].personal.sex} </p> : <></>}
                  {narutoData.characters[0].personal.age && 
              narutoData.characters[0].personal.age["Part II"]  ? <p><strong>Age:</strong> {narutoData.characters[0].personal.age["Part II"]} </p> : <></>}
              {narutoData.characters[0].personal.classification   ? <p><strong>Classification:</strong> {narutoData.characters[0].personal.classification} </p> : <></>}
            {narutoData.characters[0].family.father ? <p><strong>Father:</strong> {narutoData.characters[0].family.father}</p> : <></>}
            {narutoData.characters[0].family.mother ? <p><strong>Mother:</strong> {narutoData.characters[0].family.mother}</p> : <></>}
            {narutoData.characters[0].family.son ? <p><strong>Son:</strong> {narutoData.characters[0].family.son}</p> : <></>}
            {narutoData.characters[0].family.daughter ? <p><strong>Daughter: </strong>{narutoData.characters[0].family.daughter}</p> : <></>}
            {narutoData.characters[0].family.sister ? <p><strong>Sister:</strong> {narutoData.characters[0].family.sister}</p> : <></>}
            {narutoData.characters[0].family.brother ? <p> <strong>Brother:</strong>{narutoData.characters[0].family.brother}</p> : <></>}
            {narutoData.characters[0].family.wife ? <p><strong>Wife: </strong>{narutoData.characters[0].family.wife}</p> : <></>}
            {narutoData.characters[0].family.husband ? <p><strong>Husband:</strong> {narutoData.characters[0].family.husband}</p> : <></>}
            {narutoData.characters[0].debut.anime   ? <p><strong>Anime Debut:</strong> {narutoData.characters[0].debut.anime} </p> : <></>}
            {narutoData.characters[0].debut.manga   ? <p><strong>Manga Debut:</strong> {narutoData.characters[0].debut.manga} </p> : <></>}
            { narutoData.characters[0].voiceActors && 
              narutoData.characters[0].voiceActors.japanese && 
              narutoData.characters[0].voiceActors.japanese[0] ? <p><strong>Voice Actor:</strong> {narutoData.characters[0].voiceActors.japanese} </p> : <></>}
              
              <button className="resetButton" onClick={reset}>Reset</button>
            
              
             
       

                      </> 
          : <p>{error}</p>}
  
      </div>
      <h2 className="jutsuMargin">Character's Jutsus</h2>

      <div className="jutsuContainer">
              <input onKeyDown={(e) => enterCommandJutsu(e)} ref={inputRef2} type="text" placeholder="ex. Naruto" />
              <button onClick={searchCharacterJutsu} id="searchJutsu">Search</button>
              {narutoJutsu ? <>
                <p>
    { narutoJutsu.characters[0].jutsu.map((j, index) => (
      <em key={index}>{j} <br /><br /></em>
    ))

    }
  </p> 
    <button onClick={resetJutsu} className="resetButton">Reset</button>
                            </>

  : <p>{jutsuError}</p>
      
}
           
      </div>
    </div>
  )
}

export default Characters
