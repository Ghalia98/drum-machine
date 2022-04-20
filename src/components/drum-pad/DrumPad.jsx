import React, { useEffect } from 'react'
import Audio from '../audio/Audio'

function DrumPad({ el, drumKeys }) {
    // refactor code
    const playAudio = () => {
        const displayScreen = document.getElementById('display')
        displayScreen.innerText = '';
        const audioTag = document.getElementById(el.key)
        audioTag.play();
        displayScreen.innerText = el.clip
    }


    useEffect(() => {
        window.addEventListener('keypress', (e) => {
            if (el.key === e.key.toUpperCase()) {
                playAudio()
            }
            // const displayScreen = document.getElementById('display')
            // const audioTag = document.getElementById(e.key.toUpperCase());
            // const pressedElement = drumKeys.find(el => el.key === e.key.toUpperCase())
            // displayScreen.innerText = pressedElement.clip
            // audioTag.play();

        })

    }, [])

    return (
        <button onClick={playAudio} id={el.key + '-Key'} className='drum-pad'>{el.key}
            <Audio el={el} />
        </button>
    )
}

export default DrumPad