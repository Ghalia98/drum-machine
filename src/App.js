import './App.css';
import DrumPad from './components/drum-pad/DrumPad';

function App() {
  const drumKeys = [{
    key: 'Q',
    audio: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3',
    clip: 'Heater-1'
  }, {
    key: 'W',
    audio: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3',
    clip: 'Heater-2'
  }, {
    key: 'E',
    audio: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3',
    clip: 'Heater-3'
  },
  {
    key: 'A',
    audio: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3',
    clip: 'Heater-4_1'
  },
  {
    key: 'S',
    audio: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3',
    clip: 'Heater-6'
  },
  {
    key: 'D',
    audio: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3',
    clip: 'Dsc_Oh'
  },
  {
    key: 'Z',
    audio: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3',
    clip: 'Kick_n_Hat'
  },
  {
    key: 'X',
    audio: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3',
    clip: 'RP4_KICK_1'
  },
  {
    key: 'C',
    audio: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3',
    clip: 'Cev_H2'
  }
  ]
  return (
    <div id='drum-machine'>
      <div id='display'>
      </div>
      {drumKeys.map((el, index) => (<DrumPad key={index} el={el} drumKeys={drumKeys} />))
      }
    </div>
  );
}

export default App;
