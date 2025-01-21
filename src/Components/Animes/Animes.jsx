import React, { useState, useEffect } from "react";
import "./Animes.scss";
import GetAnimeBySearch from "./GetAnimeBySearch";
import { TbXboxX } from "react-icons/tb";
const Animes = () => {
  const [animeData, setAnimeData] = useState([]);
  const [page, setPage] = useState(1);
  const [filteredAnime, setFilteredAnime] = useState([]);
  const [storedAnimeData, setStoredAnimeData] = useState([]);

  async function getAnime() {
    try {
      const url = `https://api.jikan.moe/v4/top/anime?filter=bypopularity&page=${page}`;
      const response = await fetch(url);
      const data = await response.json();
      console.log(data.data);
      setAnimeData((prev) => [...prev, ...data.data]);
      setStoredAnimeData((prev) => [...prev, ...data.data]);
    } catch (err) {
      alert("please slow down with the search");
    }
  }

  useEffect(() => {
    getAnime();
  }, [page]);

  function getAnimeById(id) {
    const filteredAnime = animeData.filter((anime) => anime.mal_id === id);
    console.log(filteredAnime.slice(0,1));
    setFilteredAnime(filteredAnime.slice(0,1));
  }

  return (
    <div className="other-animes-container">
      <h1 className="other-animes">Other Animes</h1>
      <GetAnimeBySearch
        setAnimeData={setAnimeData}
        storedData={storedAnimeData}
        setFilteredAnime={setFilteredAnime}
      />
      <div className="animeContainer">
        {animeData.length > 0 ? (
          <>
            {animeData.map((anime, index) => (
              <div onClick={() => getAnimeById(anime.mal_id)}>
                <img src={anime.images.jpg.large_image_url} />
                <h2>{anime.title_english || anime.title}</h2>
              </div>
            ))}
          </>
        ) : (
          <h1>No animes found</h1>
        )}
      </div>

      {filteredAnime.length > 0 && (
        <div
          className="overlay-search-anime"
          onClick={() => setFilteredAnime([])}
        >
          <div className="modal" onClick={(e) => e.stopPropagation()}>
          <TbXboxX onClick={() => setFilteredAnime([])} className="icon"/>
            {filteredAnime.map((anime) => (
              <>
                <h1>
                  {anime.title_english || anime.title}{" "}
               
                </h1>
                <div className="modal-content-container">
                  <div>
                    <img src={anime.images.jpg.large_image_url} alt="" />
                  </div>
                  <div>
                    <div className="plot">
                      <p>
                        <strong>Plot: </strong> {anime.synopsis}
                      </p>
                    </div>
                    <p>
                      <strong>Number of episodes: </strong>{" "}
                      {anime?.episodes || "Still Airing"}
                    </p>
                    <p>
                      <strong>Duration:</strong> {anime?.duration}
                    </p>
                    <p>
                      <strong>Number of fans' favorite:</strong>{" "}
                      {anime.favorites.toLocaleString()}
                    </p>
                    <p>
                      <strong>Rating: </strong> {anime?.score}⭐
                    </p>
                    <p>
                      <strong>Genre/s:</strong>{" "}
                      {anime?.genres?.map((genre) => (
                        <span> {genre?.name} </span>
                      ))}
                    </p>

                    <p>
                      <strong>Watch trailer:</strong>{" "}
                      <a target="_blank" href={anime?.trailer?.url}>
                        here
                      </a>
                    </p>
                    <p>
                      <strong>Rank: </strong> {anime?.rank}
                    </p>
                  </div>
                </div>
              </>
            ))}
          </div>
        </div>
      )}
      {animeData.length > 10 ? (
        <button
          className="animeSearchButton"
          onClick={() => setPage((prev) => prev + 1)}
        >
          More Animes
        </button>
      ) : (
        <button
          onClick={() => setAnimeData(storedAnimeData)}
          className="animeSearchButton"
        >
          Go Back
        </button>
      )}
    </div>
  );
};

export default Animes;
