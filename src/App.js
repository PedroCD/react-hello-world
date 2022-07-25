import logo from './logo.svg';
import './App.css';
import Greetings from './components/pure/greetings';
import GreetingFunction from './components/pure/greetingFunction';
import TaskListComponent from './components/container/task_list';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* My component greetings.jsx */}
        {/* <Greetings name="Pedro"></Greetings> */}
        {/* Functional component example */}
        {/* <GreetingFunction name="Pedro"></GreetingFunction> */}
        {/* Task listing component */}
        <TaskListComponent></TaskListComponent>
      </header>
    </div>
  );
}

export default App;
