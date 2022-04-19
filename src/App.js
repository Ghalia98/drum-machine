import './App.css';
import DrumPads from './components/drum-pads/DrumPads';

function App() {

  return (
    <div id='drum-machine'>
      <div id='display'></div>
      <DrumPads />
    </div>
  );
}

export default App;
