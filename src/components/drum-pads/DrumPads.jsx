import React from 'react'
import Audio from '../audio/Audio'

function DrumPads() {
    const drumKeys = [{
        key: 'Q',
        audio: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
    }, {
        key: 'W',
        audio: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"
    }, {
        key: 'E',
        audio: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"
    },
    {
        key: 'A',
        audio: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"
    },
    {
        key: 'S',
        audio: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"
    },
    {
        key: 'D',
        audio: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"
    },
    {
        key: 'Z',
        audio: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"
    },
    {
        key: 'X',
        audio: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"
    },
    {
        key: 'C',
        audio: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"
    }
    ]

    return (
        drumKeys.map((el, index) => <button id={el.key + '-Key'} className='drum-pad' key={index}>{el.key}
            <Audio el={el} />
        </button>)
    )
}

export default DrumPads