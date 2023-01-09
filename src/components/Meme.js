import React, { useState } from "react"
import memesData from "../data"

export default function Meme(){

    const [memeImage, setMemeImage] = useState("")

    function getMemeImage(){
        const memesArray = memesData.data.memes
        const randomNumber = Math.floor(Math.random()*memesArray.length)
        const url = memesArray[randomNumber].url
        setMemeImage(url)
    }

    return (
        <main>
            <div className="form">
                <input
                    type="text"
                    placeholder="Top Text" 
                    className="form-input1"
                />
                <input 
                    type="text"
                    placeholder="Bottom Text"
                    className="form-input2"
                />
                <button className="form-button" onClick={getMemeImage}>Get a new meme image 🌁</button>
            </div>

            <img src={memeImage} className="meme-image" />
        </main>
    )
}