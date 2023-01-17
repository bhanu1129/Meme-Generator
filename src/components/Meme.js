import React, { useState } from "react"
import memesData from "../data"

export default function Meme(){

    const [meme, setMeme] = useState({
        topText : "",
        bottomText : "",
        randomImage : "http://i.imgflip.com/1bij.jpg"
    })

    const [allMemeImages, setAllMemeImages] = useState(memesData)

    function getMemeImage(){
        const memesArray = allMemeImages.data.memes
        const randomNumber = Math.floor(Math.random()*memesArray.length)
        const url = memesArray[randomNumber].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage : url
        }))
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

            <img src={meme.randomImage} className="meme-image" />
        </main>
    )
}