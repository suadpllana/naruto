import React from 'react'
import {Link} from "react-router-dom"
import homePic from "../assets/homeNaruto.png"
  import {useState} from "react"
  import { MdOutlineMenu } from "react-icons/md";

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <div>
          <nav className={!menuOpen ? "navContainer" : "hamburgerContainer"}>
        <Link to="/"><img className="home" src={homePic} alt="" /></Link>
        <Link to="/characters">Characters</Link>
        <Link to="/animes">Other Animes</Link>
        <Link to="/teams">Teams & FanArt</Link>
    
        <MdOutlineMenu onClick={() => setMenuOpen(true)} className="hamburgerMenu"/>
      </nav>
  
    </div>
  )
}

export default Nav
