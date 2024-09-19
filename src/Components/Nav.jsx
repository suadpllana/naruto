import React from 'react'
import {Link} from "react-router-dom"
import homePic from "../assets/homeNaruto.png"


const Nav = () => {
  return (
    <div>
          <nav className="navContainer">
        <Link to="/naruto"><img className="home" src={homePic} alt="" /></Link>
        <Link to="/naruto/characters">Characters</Link>
        <Link to="/naruto/teams">Teams & FanArt</Link>
        <Link to="/naruto/animes">Other Animes</Link>
      </nav>
    </div>
  )
}

export default Nav
