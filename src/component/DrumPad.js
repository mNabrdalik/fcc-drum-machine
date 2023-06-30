import React from 'react';

import "../component/DrumPad.css"

export default function DrumPad(props) {
    const padRef = React.useRef(null)

    function playSound() {
        const audio = padRef.current
        audio.play()
        
    }

    return (
        <button className="drum-pad" id={props.padId} onClick={playSound}>
            {props.keyLetter}
            <audio ref={padRef} className="clip" id={props.keyLetter} src={props.soundSrc}>
                Your browser does not support the audio element.
            </audio>
        </button>
    )
}