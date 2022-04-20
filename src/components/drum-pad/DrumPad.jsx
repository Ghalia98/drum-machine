import React, { useEffect } from 'react'
import Audio from '../audio/Audio'

function DrumPad({ el }) {
    const playAudio = () => {
        const audioTag = document.getElementById(el.key)
        audioTag.play();
    }


    useEffect(() => {
        window.addEventListener('keypress', (e) => {
            const audioTag = document.getElementById(e.key.toUpperCase())
            audioTag.play()
        })

    }, [])

    return (
        <button onClick={playAudio} id={el.key + '-Key'} className='drum-pad'>{el.key}
            <Audio el={el} />
        </button>
    )
}

export default DrumPad