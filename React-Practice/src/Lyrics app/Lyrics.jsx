import React, { useState } from "react";
import Axios from 'axios';
import './lyrics.css'
const Lyrics = () => {
    const [artist, setArtist] = useState("");
    const [song, setSong] = useState("");
    const [lyrics, setLyrics] = useState("");

    // console.log(artist, song);

    const searchLyrics = () => {
        Axios.get(`https://api.lyrics.ovh/v1/{artist}/{song}`)
        .then(res => {
                        console.log(res.data.lyrics);
                        setLyrics(res.data.lyrics);
                    })
    }

    return (
        <>
            <div className="lyrics">
                <h1>Lyrics Finder App</h1>
                <input className="inp" type="text" placeholder="Enter Artist Name" onChange={(e) => {setArtist(e.target.value)}}/>
                <input className="inp" type="text" placeholder="Enter Song Name" onChange={(e) => {setSong(e.target.value)}}/>
                <button className="btn" onClick={() => searchLyrics()}>Search Lyrics</button>
                <hr />
                <pre>{lyrics}</pre>
            </div>
        </>
    )
}

export default Lyrics


// artist, song, lyrics
// https://api.lyrics.ovh/v1/${artist}/${song}
// here we need two input and one button for that
// in that button we use searchLyrics function to call our api
