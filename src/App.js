import logo from './logo.svg';
import './App.css';
import GreetingStyled from './components/pure/greetingStyled';
// import Ejemplo4 from './hooks/Ejemplo4';
// import Ejemplo5 from './hooks/Ejemplo5';
// import MiComponenteConContexto from './hooks/Ejemplo3';
// import Ejemplo2 from './hooks/Ejemplo2';
// import Ejempo1 from './hooks/Ejempo1';
// import  Greeting from './components/pure/greeting';
// import GreetingF from './components/pure/greetingF';
// import TaskListComponent from './components/container/task_list';
// import ContactListComponent  from './components/container/contact';

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
          {/* <ContactListComponent></ContactListComponent> */}
          {/* Ejemplos de uso de hooks */}
          {/* <Ejempo1></Ejempo1> */}
          {/* <Ejemplo2></Ejemplo2> */}
          {/* <MiComponenteConContexto></MiComponenteConContexto> */}
          {/* <Ejemplo4 nombre={ 'martin' }>
          todo lo que hay aqui adentro es tratado como props.children
            <h3>
              Contenido del props.children
            </h3>
          </Ejemplo4> */}
          {/* <Ejemplo5/> */}
          <GreetingStyled name={'Armando'}></GreetingStyled>
      </header>
    </div>
  );
}

export default App;
