import logo from './logo.svg';
import './App.css';
//import Templates from './curso/jsx-templates/Jsx-templates'
//import Test from './curso/componentes/Componentes';
//import ExampleState from './curso/componentes/State'
//import ExampleLifecycle from './curso/componentes/Ciclo-de-vida-de-un-componente'
//import {Eventos} from './curso/componentes/Eventos'
import Formulario from './curso/formularios/leyendo-el-valor-de-los-controles'
import { useState } from 'react';

function App() {
  const [toggleForm, setToggleForm] = useState(false);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button onClick={() => setToggleForm(!toggleForm)}>ShowForm</button>
        {
          toggleForm  && <Formulario showed={toggleForm}/> 
        }
          
      </header>
    </div>
  );
}

export default App;
