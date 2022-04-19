import React from 'react'

function Audio({ el }) {
    return (
        <audio src={el.audio} className='clip' id={el.key}></audio>
    )
}

export default Audio