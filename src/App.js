import logo from './logo.svg';
import './App.css';
import Greetings from './components/pure/greetings';
import GreetingFunction from './components/pure/greetingFunction';
import TaskListComponent from './components/container/task_list';
import { Ejemplo1 } from './hooks/Ejemplo1';
import Ejemplo2 from './hooks/Ejemplo2';
import MiComponenteConContexto from './hooks/Ejemplo3';
import Ejemplo4 from './hooks/Ejemplo4';

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
        {/* <TaskListComponent></TaskListComponent> */}
        {/* Ejemplo de uso de HOOKS */}
        {/* <Ejemplo1></Ejemplo1> */}
        {/* <Ejemplo2></Ejemplo2> */}
        {/* <MiComponenteConContexto></MiComponenteConContexto> */}
        <Ejemplo4 nombre="Martín">
          {/* Todo lo que hay aquí, es tratado como props.children */}
          <h3>
            Contenido del props.children
          </h3>
        </Ejemplo4>
      </header>
    </div>
  );
}

export default App;
