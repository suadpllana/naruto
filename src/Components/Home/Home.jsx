import React from "react";
import "./Home.css";
import narutoBackground from "../../assets/narutoBackground.png";
import minato from "../../assets/minato.png";
import hiruzen from "../../assets/hiruzen.png";
import tobirama from "../../assets/tobirama.png";
import hashirama from "../../assets/hashirama.png";
import darui from "../../assets/darui.png";
import terumi from "../../assets/terumi.png";
import gaara from "../../assets/gaara.png";
import orumi from "../../assets/orumi.png";
import narutoPopularity from "../../assets/narutoPopularity.png";
import popularityPoll from "../../assets/popularityPoll.png";
import minatoP from "../../assets/minatoPopularity.png";
import itachi from "../../assets/itachi.png";
import sakura from "../../assets/sakura.png";
import shisui from "../../assets/shisui.png";
import kakashi from "../../assets/kakashi.png";
import naruto from "../../assets/naruto.png";
import sakuno from "../../assets/sakuno.png";
import sasuke from "../../assets/sasuke.png";
import madara from "../../assets/madara.png";
import hinata from "../../assets/hinata.png";

const Home = () => {
  return (
    <div className="homeContainer">
      <div className="overlayText">
        <img src={narutoBackground} alt="" />
        <div className="overlay">
          <h1 id="top">Naruto🍥</h1>
          <h2 className="responsive">
            Here you can find everything covering the anime Naruto
          </h2>
        </div>
      </div>

      <div className="navBar">
        <a href="#storyline">Storyline📖</a>
        <a href="#episode-guide">Episode Guide🎞️</a>
        <a href="#hokages">Hokages🍃</a>
        <a href="#kages">Kages☯</a>
        <a href="#animePopularity">Anime Popularity㊙</a>
        <a href="#characterPopularity">Character Popularity🥷</a>
      </div>

      <h1 id="storyline">Storyline📖</h1>
      <div className="storyline">
        <div className="naruto">
          <h1>Naruto🍥</h1>
          <p className="storyline-desc">
            In this series it first introduces us to Naruto , his dream about
            being hokage and also the bullying he got from the village as an
            orphan
          </p>
        </div>
        <div className="naruto-shippuden">
          <h1>Naruto Shippuden🦊</h1>
          <p className="storyline-desc">
            In this series Naruto completed his training with Jiraya and is
            ready for the big battles. Will he be able to achieve his dream of
            being hokage with all the obstacles?
          </p>
        </div>
      </div>

      <h1 id="episode-guide">Episode Guide🎞️</h1>
      <h2>Naruto🍥</h2>
      <div className="episodeGuide">
        <div className="fillers">
          <h3>Fillers🌸</h3>
          <button>26</button>
          <button>97</button>
          <button>101-106</button>
          <button>136-140</button>
          <button>144-219</button>
        </div>
        <div className="manga">
          <h3>Manga Canon⛩️</h3>
          <button>1-25</button>
          <button>27-96</button>
          <button>98-100</button>
          <button>107-135</button>
          <button>141-143</button>
          <button>220</button>
        </div>
      </div>

      <h2>Naruto Shippuden🦊</h2>
      <div className="episodeGuide">
        <div className="fillers">
          <h3>Fillers🌸</h3>
          <button>57-71</button>
          <button>91-112</button>
          <button>144-151</button>
          <button>170-171</button>
          <button>176-196</button>
          <button>176-196</button>
          <br />
          <br />
          <button>223-242</button>
          <button>257-260</button>
          <button>271</button>
          <button>279-281</button>
          <button>284-295</button>
          <button>303-320</button>
          <br />
          <br />
          <button>347-361</button>
          <button>376-377</button>
          <button>388-390</button>
          <button>394-413</button>
          <button>416-417</button>
          <button>422-423</button>
          <br />
          <br />
          <button>427-450</button>
          <button>464-468</button>
          <button>480-483</button>
        </div>
        <div className="manga">
          <h3>Manga Canon⛩️</h3>
          <button>1-56</button>
          <button>72-90</button>
          <button>113-143</button>
          <button>152-169</button>
          <button>172-175</button>
          <button>197-222</button>
          <br />
          <br />
          <button>243-256</button>
          <button>261-270</button>
          <button>272-278</button>
          <button>282-283</button>
          <button>296-302</button>
          <button>321-346</button>
          <br />
          <br />
          <button>362-375</button>
          <button>378-387</button>
          <button>391-393</button>
          <button>414-415</button>
          <button>418-421</button>
          <button>424-426</button>
          <br />
          <br />
          <button>451-463</button>
          <button>469-479</button>
          <button>484-500</button>
        </div>
      </div>
      <h2 className="fillerExplanationMargin">
        Difference between filler and manga canon episodes꩜
      </h2>
      <div className="explanation">
        <div className="fillerExplanation">
          <h3>What are filler episodes?</h3>
          <p className="explanationDescription">
            Filler episodes arent related to the main story , just some random
            episodes. They made filler episodes to let the manga creator catch
            up to the anime because the anime was releasing weekly while the
            manga was not.
          </p>
        </div>
        <div className="mangaExplanation">
          <h3>What are manga canon episodes?</h3>
          <p className="explanationDescription">
            Manga canon episodes are the actual main story of the anime. They
            are based on the manga which the main story is based to.
          </p>
        </div>
      </div>

      <h1 id="hokages">Hokages🍃</h1>
      <div className="hokageContainer">
        <h2>First Hokage</h2>
        <div className="hokages">
          <div>
            <img className="hokageImage" src={hashirama} alt="" />
          </div>
          <div>
            <h3>
              Name: <br />
              <br />
              Hashirama Senju
            </h3>
          </div>
          <div>
            <h3>
              Summary: <br />
              <br />
              He was the creator of the leaf village and the inventor of many
              jutsus
            </h3>
          </div>
          <div>
            <h3>
              Nickname: <br />
              <br />
              God of Shinobi
            </h3>
          </div>
        </div>
        <h2 className="hokageMargin">Second Hokage</h2>
        <div className="hokages">
          <div>
            <img className="hokageImage" src={tobirama} alt="" />
          </div>
          <div>
            <h3>
              Name: <br />
              <br />
              Tobirama Senju
            </h3>
          </div>
          <div>
            <h3>
              Summary: <br />
              <br />
              Throughout his lifetime, Tobirama would work tirelessly to achieve
              political stability and implement the institutions that made the
              village system work. After his brother's death, he would earn the
              title of Second Hokage
            </h3>
          </div>
          <div>
            <h3>
              Nickname: <br />
              <br />
              Second Fire Shadow
            </h3>
          </div>
        </div>
        <h2 className="hokageMargin">Third Hokage</h2>
        <div className="hokages">
          <div>
            <img className="hokageImage" src={hiruzen} alt="" />
          </div>
          <div>
            <h3>
              Name: <br />
              <br />
              Hiruzen Sarutobi
            </h3>
          </div>
          <div>
            <h3>
              Summary: <br />
              <br />A disciple of the village's two previous Hokage, Hiruzen was
              a powerful ninja, Though he was only ever directly the teacher of
              the Sannin, generations of Konoha shinobi benefited from his
              wisdom during his lifetime.
            </h3>
          </div>
          <div>
            <h3>
              Nickname: <br />
              <br />
              Third Fire Shadow
            </h3>
          </div>
        </div>
        <h2 className="hokageMargin">Fourth Hokage</h2>
        <div className="hokages">
          <div>
            <img className="hokageImage" src={minato} alt="" />
          </div>
          <div>
            <h3>
              Name: <br />
              <br />
              Minato Namikaze
            </h3>
          </div>
          <div>
            <h3>
              Summary: <br />
              <br />
              He was the father of Naruto who sacrificed himself to seal the
              nine tails fox within Naruto. He trusted third hokage to raise his
              son. Minato was known for his speed.
            </h3>
          </div>
          <div>
            <h3>
              Nickname: <br />
              <br />
              Yellow flash ninja
            </h3>
          </div>
        </div>
      </div>

      <h1 id="kages">Kages☯</h1>
      <div className="kages">
        <div>
          <img className="kageImage" src={gaara} alt="" />
          <h2>
            Gaara <br />
            the Fifth Kazekage
          </h2>
        </div>
        <div>
          <img className="kageImage" src={darui} alt="" />
          <h2>
            Darui <br />
            the Fourth Raikage
          </h2>
        </div>
        <div>
          <img className="kageImage" src={terumi} alt="" />
          <h2>
            Terumi <br />
            the Fourth Mizukage
          </h2>
        </div>
        <div>
          <img className="kageImage" src={orumi} alt="" />
          <h2>
            Orumi
            <br />
            the Third Tsuchikage
          </h2>
        </div>
      </div>

      <div className="popularity">
        <h1 id="anime-popularity">Anime Popularity㊙</h1>
        <h2>
          Naruto is the most popular anime of All time with 250 millions copies
          sold <br />
          The creator of Naruto is Masashi Kishimoto{" "}
        </h2>
        <div className="popularityImages">
          <div>
            <img className="popularCover" src={narutoPopularity} alt="" />
          </div>
          <div>
            <img className="poll" src={popularityPoll} alt="" />
          </div>
        </div>
      </div>

      <div className="character-popularity">
        <h1 id="character-popularity">Character Popularity🥷</h1>
        <h2>
          According to the biggest voting poll for Naruto, here are the top 10
          most liked Naruto characters
        </h2>
        <div className="character-popularity-container">
          <div>
            <img className="popularityImages" src={minatoP} alt="" />
            <h2>
              #1 Minato Kamikaze
              <br />
              792,257 votes
            </h2>
          </div>
          <div>
            <img className="popularityImages" src={itachi} alt="" />
            <h2>
              #2 Itachi Uchiha
              <br />
              505,014 votes
            </h2>
          </div>
          <div>
            <img className="popularityImages" src={sakura} alt="" />
            <h2>
              #3 Sakura Haruno
              <br />
              489,619 votes
            </h2>
          </div>
          <div>
            <img className="popularityImages" src={shisui} alt="" />
            <h2>
              #4 Shisui Uchiha
              <br />
              279,062 votes
            </h2>
          </div>
          <div>
            <img className="popularityImages" src={kakashi} alt="" />
            <h2>
              #5 Kakashi Hatake
              <br />
              212,403 votes
            </h2>
          </div>
          <div>
            <img className="popularityImages" src={naruto} alt="" />
            <h2>
              #6 Naruto Uzumaki
              <br />
              182,911 votes
            </h2>
          </div>
          <div>
            <img className="popularityImages" src={sakuno} alt="" />
            <h2>
              #7 Sakumo Hatake
              <br />
              170,940 votes
            </h2>
          </div>
          <div>
            <img className="popularityImages" src={sasuke} alt="" />
            <h2>
              #8 Sasuke Uchiha
              <br />
              170,665 votes
            </h2>
          </div>
          <div>
            <img className="popularityImages" src={madara} alt="" />
            <h2>
              #9 Madara Uchiha
              <br />
              144,947 votes
            </h2>
          </div>
          <div>
            <img className="popularityImages" src={hinata} alt="" />
            <h2>
              #10 Hinata Hjuga
              <br />
              144,484 votes
            </h2>
          </div>
          <div className="narutop99">
            <h2>
              visit{" "}
              <a
                className="top100"
                href="https://narutop99.naruto-official.com/en"
                target="_blank"
              >
                NARUTOP99
              </a>{" "}
              for the full top 100
            </h2>
          </div>
          <a href="#top">Go on top</a>
        </div>
      </div>

      <footer>-Created by Suad Pllana-</footer>
    </div>
  );
};

export default Home;
