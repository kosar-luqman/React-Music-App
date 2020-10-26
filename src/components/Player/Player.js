import React, { useEffect, useState } from 'react';
import useAudio from '../UseAudio/UseAudio';
import classes from './Player.module.css'
import Progress from '../Progress/Progress'

import Slider from "@material-ui/core/Slider";
import VolumeDown from "@material-ui/icons/VolumeDown";
import VolumeUp from "@material-ui/icons/VolumeUp";
import VolumeMute from '@material-ui/icons/VolumeMute';
import VolumeOff from '@material-ui/icons/VolumeOff';

import PauseIcon from '@material-ui/icons/Pause';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import Forward10 from '@material-ui/icons/Forward10';
import Bakward from '@material-ui/icons/SettingsBackupRestore';

const Player = ({ data, handleMuicNow, selectMusic, leng }) => {
    const [vol, setVol] = useState(0.6)
    const [volIsOff, setVolIsOff] = useState(false)

    const { element, state, controls } = useAudio({
        src: data?.music
    });

    const next = () => {
        if (selectMusic < leng - 1) {
            handleMuicNow(selectMusic + 1)
        }
    }

    const back = () => {
        if (selectMusic > 0) {
            handleMuicNow(selectMusic - 1)
        }
    }

    useEffect(() => {
        controls.volume(vol)
    }, [vol])

    useEffect(() => {
        if (state.time > 0 && state.time === state.duration && selectMusic < leng - 1) {
            handleMuicNow(selectMusic + 1)
        }
    }, [state.time, state.duration])

    const handleChangeVol = (event, newValue) => {
        setVol(newValue);
        if (volIsOff) {
            handleMute(newValue)
        }
    };

    const handleMute = (val) => {
        if (volIsOff) {
            setVolIsOff(false)
            setVol(val)
        } else {
            setVolIsOff(true)
            setVol(0)
        }
    };

    return (
        <div className={classes.player}>
            <img alt="poster" src={data?.img} className={`${classes.poster} ${!state.paused && classes.posterPLay}`} />
            <h1 className={classes.player__name}>{data?.name}</h1>
            <p className={classes.player__sub}>{data?.artist}</p>

            <div className={classes.player__times}>
                <span>{(state.time / 60).toFixed(2)}</span>
                <Progress
                    now={state.time}
                    max={state.duration}
                />
                <span>{(state.duration / 60).toFixed(2)}</span>
            </div>

            {element}

            <div className={classes.player__btns}>
                <button className={`${classes.player__button}`} onClick={() => controls.seek(state.time - 10)}>
                    <Bakward />
                </button>

                <button className={classes.player__button} onClick={back}>
                    <ChevronLeftIcon />
                </button>

                <button
                    className={classes.player__button}
                    onClick={() => {
                        state.paused ? controls.play() : controls.pause();
                    }}
                >
                    {state.paused ?
                        <PlayArrowIcon />
                        :
                        <PauseIcon />
                    }
                </button>

                <button className={classes.player__button} onClick={next}>
                    <ChevronRightIcon />
                </button>
                <button className={`${classes.player__button} `} onClick={() => controls.seek(state.time + 10)}>
                    <Forward10 />
                </button>
            </div>

            <div className={classes.player__btns}>

                <div className={`${classes.player__button} ${classes.player__volume}`}>
                    <div onClick={() => handleMute(0.5)}>
                        {
                            volIsOff ?
                                <VolumeOff />
                                :
                                state.volume === 0 ?
                                    <VolumeMute />
                                    :
                                    state.volume > 0.5 ?
                                        <VolumeUp />
                                        :
                                        <VolumeDown />
                        }
                    </div>
                    <Slider
                        value={vol}
                        onChange={handleChangeVol}
                        step={0.1}
                        min={0}
                        max={1}
                    />
                </div>

            </div>

        </div>
    );
};

export default Player