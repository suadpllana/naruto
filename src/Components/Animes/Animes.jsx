import React, { useState } from "react";
import "./Animes.css";

const Animes = () => {
  const [animeData, setAnimeData] = useState("");
  const [count, setCount] = useState(0); 
  const [page, setPage] = useState(1); 
  const [changePage, setChangePage] = useState(0);

  async function getAnime() {
    try {
      const url = `https://api.jikan.moe/v4/top/anime?filter=bypopularity&page=${page}`;
      const response = await fetch(url);
      const data = await response.json();

      if (data.data && data.data.length > 0) {
      
        setChangePage((prev) => prev + 1);
        console.log(changePage , data)

        if (changePage >= data.data.length - 1) {
          setPage((prevPage) => prevPage + 1); 
          setChangePage(0); 
        }
       

        setCount(changePage);
        setAnimeData(data);
      }
    }
     catch (err) {
      alert("please slow down with the search");
    }
  }

  return (
    <div className="animeContainer">
      <h1>Here you can find the best anime recommendation</h1>
      <button onClick={getAnime} className="animeSearchButton">
        Search
      </button>
      {animeData ? (
        <>
          <p>
            <strong>Title: </strong>
            {animeData.data[count].title.english ||
              animeData.data[count].title}
          </p>
          <p className="plot">
            <strong>Plot: </strong> {animeData.data[count].synopsis.slice(0, 250)}...
          </p>
          <p>
            <strong>Number of episodes: </strong> {animeData.data[count].episodes}
          </p>
          <p>
            <strong>Popularity: </strong>#{animeData.data[count].popularity}
          </p>
          <p>
            <strong>Rating: </strong>{animeData.data[count].score}⭐
          </p>
          {animeData.data[count].year ? (
            <p>
              <strong>Release Year: </strong>
              {animeData.data[count].year}
            </p>
          ) : (
            <></>
          )}
          <p>
            <strong>Watch the YT trailer: </strong>
            <a
              className="trailer"
              target="_blank"
              href={animeData.data[count].trailer.embed_url}
              rel="noopener noreferrer"
            >
              Official Trailer
            </a>
          </p>
          <img src={animeData.data[count].images.jpg.image_url} alt="" />
        </>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Animes;
