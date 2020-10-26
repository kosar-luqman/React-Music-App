import React, { useState } from 'react'

import Player from '../Player/Player'
import Navbar from '../Navbar/Navbar'
import file from '../../musics.json'

const Home = () => {
    const musics = file.musics
    const [musicNow, setMusicNow] = useState(0)
    const [data, setData] = useState(musics[0])

    const handleMuicNow = (num) => {
        setData(musics[num])
        setMusicNow(num)
    }

    return (
        <div>
            <Navbar
                data={musics}
                handleMuicNow={handleMuicNow}
                selectMusic={musicNow}
            />
            <Player
                data={data}
                handleMuicNow={handleMuicNow}
                selectMusic={musicNow}
                leng={musics.length}
            />

        </div>
    )
}

export default Home
