import React from 'react'
import {Link} from 'react-router-dom'
import "../styles/navbar.css"
import logo_pic from "../assets/logo.png"

function navbar() {
  return (
    <div className="navbar">
        <div className="leftside">
            <img src = {logo_pic} alt = "logo" className = "logo_image"/>
        </div>
        <div className="rightside">
            <Link to="/" className="navbar_button">Home</Link>
            <Link to="about" className="navbar_button">about</Link>
        </div>
    </div>
  )
}

export default navbar