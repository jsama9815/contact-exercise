import logo from './logo.svg';
import './App.css';
// import  Greeting from './components/pure/greeting';
// import GreetingF from './components/pure/greetingF';
// import TaskListComponent from './components/container/task_list';
import ContactListComponent  from './components/container/contact';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* Componente propio Greeting.jsx  */}
          {/* <Greeting name="Martin"></Greeting> */}
          {/* componente de ejemplo funcional */}
          {/* <GreetingF name={ "Martin" }></GreetingF> */}
          {/* componente de listado de tareas */}
          {/* <TaskListComponent></TaskListComponent> */}
          {/* Primer ejercicio de prueba */}
          <ContactListComponent></ContactListComponent>
      </header>
    </div>
  );
}

export default App;
