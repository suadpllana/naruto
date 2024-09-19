import React from 'react'
import {Link} from "react-router-dom"
import homePic from "../assets/homeNaruto.png"


const Nav = () => {
  return (
    <div>
          <nav className="navContainer">
        <Link to="/narutoo"><img className="home" src={homePic} alt="" /></Link>
        <Link to="/narutoo/characters">Characters</Link>
        <Link to="/narutoo/teams">Teams & FanArt</Link>
        <Link to="/narutoo/animes">Other Animes</Link>
      </nav>
    </div>
  )
}

export default Nav
