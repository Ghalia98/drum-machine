import React, { useEffect, useState } from 'react'
import Audio from '../audio/Audio'


function DrumPad({ el }) {
    const [active, setActive] = useState(false)

    const playAudio = () => {
        setActive(true)
        const displayScreen = document.getElementById('display')
        const audioTag = document.getElementById(el.key)
        audioTag.play();

        displayScreen.innerText = el.clip

        setTimeout(() => {
            setActive(false)
            displayScreen.innerText = ''
        }, 200);

    }

    useEffect(() => {
        window.addEventListener('keypress', (e) => {
            if (el.key === e.key.toUpperCase()) {
                playAudio()
            }
        })
    }, [])

    return (
        <button onClick={playAudio} id={el.key + '-Key'} className='drum-pad' style={active ? { color: 'red' } : { color: 'black' }}>{el.key}
            <Audio el={el} />
        </button>
    )
}

export default DrumPad