import React, { useEffect, useState, useContext } from 'react'
import Audio from '../audio/Audio'
import { VolumeContext } from '../../App'
import './DrumPad.scss'


function DrumPad({ el }) {
    const [active, setActive] = useState(false)
    const [volume] = useContext(VolumeContext)
    const playAudio = () => {
        setActive(true)
        const displayScreen = document.getElementById('display')
        const audioTag = document.getElementById(el.key)
        audioTag.currentTime = 0
        audioTag.volume = volume
        audioTag.play();
        console.log(volume)
        displayScreen.innerText = el.clip

        setTimeout(() => {
            setActive(false)
            displayScreen.innerText = ''
        }, 200);

    }

    useEffect(() => {
        window.addEventListener('keypress', handlePress)
        return () => {
            window.removeEventListener('keypress', handlePress)
        }
    }, [el])

    const handlePress = (e) => {
        if (el.key === e.key.toUpperCase()) {
            playAudio()
        }
    }

    return (
        <button onClick={playAudio} id={el.key + '-Key'} className='drum-pad' style={active ? { backgroundColor: '#ffe66d' } : { backgroundColor: '#cacfd6' }}>{el.key}
            <Audio el={el} />
        </button>
    )
}

export default DrumPad