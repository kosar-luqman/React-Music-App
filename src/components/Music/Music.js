import React from 'react'
import classes from './Music.module.css'

function Music({ data, i, clicked, selected }) {
    const handleClicked = (e) => {
        clicked(e.currentTarget.dataset.id)
    }
    return (
        <div onClick={handleClicked} data-id={i} style={{ backgroundColor: `${selected ? "#c0cefe" : "transparent"}` }} className={classes.navbar__music}>
            <img alt="poster" src={data.img} />
            <div className={classes.navbar__content}>
                <h3>{data?.name}</h3>
                <p>{data?.artist}</p>
            </div>
        </div>
    )
}

export default Music
