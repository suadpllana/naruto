import React from 'react'
import {Link} from "react-router-dom"
import homePic from "../assets/homeNaruto.png"


const Nav = () => {
  return (
    <div>
          <nav className="navContainer">
        <Link to="/narutoReact"><img className="home" src={homePic} alt="" /></Link>
        <Link to="/narutoReact/characters">Characters</Link>
        <Link to="/narutoReact/teams">Teams & FanArt</Link>
        <Link to="/narutoReact/animes">Other Animes</Link>
      </nav>
    </div>
  )
}

export default Nav
