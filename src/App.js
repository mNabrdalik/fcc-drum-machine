import React from 'react';
import DrumPad from './component/DrumPad';
import './App.css';

import sampleData from './sampleData';

function App() {

  const [nowPlayed, setNowPlayed] = React.useState("Hit the Pad!");

  const Pads = sampleData.map(item => {
    
    let audioFilePath = process.env.PUBLIC_URL + item.audioSrc;
    
    return (
      <DrumPad
        key={item.id}
        padId={item.title}
        keyLetter={item.keyboardLetter}
        soundSrc={audioFilePath }
      />
    )
  })

  React.useEffect(() => {
      document.addEventListener('keydown', handleKeyDown)

      document.querySelectorAll(".drum-pad").forEach(pad => {
        pad.addEventListener("click", () => {
          clearStylePad()
          setNowPlayed(pad.getAttribute('id'))
          pad.style.backgroundColor = "#F6AC3C"
        })
      })

      return () => {
        document.removeEventListener('keydown', handleKeyDown)
      }
  }, [])

  function clearStylePad() {
    document.querySelectorAll(".drum-pad").forEach(pad => {
      pad.style.backgroundColor = "#CA67F8"
    })
  }

  function handleKeyDown(event) {

    let typed = event.key.toUpperCase()
    let padId = document.getElementById(typed)

    if(padId) {
      padId.play()
      clearStylePad()
      setNowPlayed(padId.parentElement.getAttribute('id'))
      padId.parentElement.style.backgroundColor = "#F6AC3C"
    }
  }

  return (
    <div className="App">
      <div className="drum-machine" id="drum-machine">
        <div id="display">{nowPlayed}</div>
        <div className="pads">
          {Pads}  
        </div>
      </div>
    </div>
  );
}

export default App;
