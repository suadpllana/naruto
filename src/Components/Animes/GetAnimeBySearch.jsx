
import React from 'react'
import {useState} from "react"
const GetAnimeBySearch = ({storedData , setFilteredAnime, setAnimeData}) => {
    const [animeName, setAnimeName] = useState("")
     async function getAnime(){
        if(animeName === "")return;
        const response = await fetch(`https://api.jikan.moe/v4/anime?q=${animeName}&limit=7`);
        const data = await response.json();
        console.log(data.data)
        setAnimeData(data.data)
        setAnimeName("")
    }


function enter(e){
    if(e.key === "Enter"){
        getAnime()
    }
}

  return (
    <div className="anime-search">
          <input onKeyDown={(e) => enter(e)} placeholder="Search for an anime" type="text" value={animeName} onChange={(e) => setAnimeName(e.target.value)}/>
          <button onClick={getAnime}>Search</button>
    </div>
  )
}

export default GetAnimeBySearch
