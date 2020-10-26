import React, { useEffect, useState } from 'react'
import Music from '../Music/Music'
import classes from './Navbar.module.css'
import MusicNoteIcon from '@material-ui/icons/MusicNote'

function Navbar({ data, handleMuicNow, selectMusic }) {
    const [selected, setSelected] = useState(0)
    const [showNav, setShowNav] = useState(false)

    const handleSelect = (num) => {
        setSelected(+num)
    }

    useEffect(() => {
        setSelected(selectMusic)
    }, [selectMusic])

    useEffect(() => {
        handleMuicNow(selected)
    }, [selected])

    return (
        <div className={classes.all}>
            {showNav && <div className={classes.backdrop} onClick={() => setShowNav(false)} />}
            <div className={`${classes.navbar} ${!showNav && classes.leftNavbar}`}>
                <h2 className={classes.navbar__head}>Library</h2>
                <div className={classes.navbar__musics}>
                    {data?.map((music, i) => (
                        <Music
                            key={music?.id}
                            i={i}
                            data={music}
                            clicked={handleSelect}
                            selected={selected === i ? true : false}
                        />
                    ))}
                </div>
            </div>


            <div className={classes.home__header}>
                <h1>Music App</h1>
                <h1 className={classes.home__Lib} onClick={() => setShowNav(!showNav)}>
                    <MusicNoteIcon />
                    Library
                </h1>
            </div>
        </div >
    )
}

export default Navbar
