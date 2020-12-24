import React, { useState } from 'react'
import './Home.css'

import Player from '../Player/Player'
import Navbar from '../Navbar/Navbar'
import file from '../../musics.json'

const Home = () => {
    const musics = file.musics
    const [musicNow, setMusicNow] = useState(0)
    const [data, setData] = useState(musics[0])
    const [show, setShow] = useState()

    const handleMuicNow = (num) => {
        setData(musics[num])
        setMusicNow(num)
    }

    const getShowNav = (b) => {
        setShow(b)
    }

    return (
        <div className={`home ${show && 'homeLeft'}`}>
            <Navbar
                data={musics}
                handleMuicNow={handleMuicNow}
                selectMusic={musicNow}
                getShowNav={getShowNav}
            />
            <Player
                data={data}
                handleMuicNow={handleMuicNow}
                selectMusic={musicNow}
                leng={musics.length}
                toLeft={show}
            />

        </div>
    )
}

export default Home
