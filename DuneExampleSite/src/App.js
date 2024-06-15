import logo from './logo.svg';
import './App.css';
import Button from './Button.js'
import IncrementButton from './IncrementButton.js'
import { Counter } from './Counter';
import { useSelector} from 'react-redux'

function App() {
  const count = useSelector((state) => 
    state.counter.value
)
  return (
    <div className="App">
      <header className="App-header">
        <h1>This is a React app! Dedicated to the Dune book series</h1>
        <p>Books are fun to read and can be very helpful for learning new stuff</p>
        <p>Rules of book reading are fairly self-explanatory</p>
    <p> new shinny value - {count}</p>
        <Button
          buttonText = "Output Dune message"
          appendMessage = ". They're great!"
        />
        <IncrementButton />
        <Counter />
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
