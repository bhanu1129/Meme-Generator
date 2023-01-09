import React from "react"
import troll from "../images/troll-face.png"

export default function Header(){
    return (
        <header>
            <img src={troll} className="header-img"/>
            <h1 className="header-title">Meme Generator</h1>
            <h3 className="header-project">React Course - Project 3</h3>
        </header>
    )
}