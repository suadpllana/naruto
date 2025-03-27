import React from 'react'
import {useState , useEffect} from "react"

const NarutoMovies = () => {
    const [animeData, setAnimeData] = useState([])

    useEffect(() => {
        async function getAnime(){
       
            const response = await fetch(`https://api.jikan.moe/v4/anime?q=naruto&limit=7`);
            const data = await response.json();
            console.log(data.data)
            setAnimeData(data.data)
    
        }
        getAnime()
    }, [])
   


  return (
    <div>
      <h1>
      Naruto Movies
      </h1>
      <div className="naruto-movies-container">
      {animeData.map((anime) => {
          return(
              <div>
                 
                  <img src={anime.images.jpg.image_url} alt=""/>
                   <h1>{anime.title}</h1>
              </div>
          )
      })}
      </div>
      
    </div>
  )
}

export default NarutoMovies
