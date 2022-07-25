import logo from './logo.svg';
import './App.css';
import Greetings from './components/pure/greetings';
import GreetingFunction from './components/pure/greetingFunction';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* My component greetings.jsx */}
        {/* <Greetings name="Pedro"></Greetings> */}
        <GreetingFunction name="Pedro"></GreetingFunction>
      </header>
    </div>
  );
}

export default App;
