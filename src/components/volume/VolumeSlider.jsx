import React, { useContext } from 'react';
import { VolumeContext } from '../../App'

function VolumeSlider() {
    const [volume, setVolume] = useContext(VolumeContext)

    const handleVolume = (e) => {
        setVolume(e.target.value)
    }


    return (
        <>
            <label htmlFor="volume-control">Volume</label>
            <input type="range" id='volume-control' min="0" max="1" step='0.05' onChange={handleVolume} value={volume} />
        </>
    )
}

export default VolumeSlider