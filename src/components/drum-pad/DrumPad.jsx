import React from 'react'
import Audio from '../audio/Audio'

function DrumPad({ el }) {
    const playAudio = () => {
        const audioTag = document.getElementById(el.key)
        audioTag.play();
    }

    return (
        <button onClick={playAudio} id={el.key + '-Key'} className='drum-pad'>{el.key}
            <Audio el={el} />
        </button>
    )
}

export default DrumPad