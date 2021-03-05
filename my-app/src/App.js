import logo from './logo.svg';
import './App.css';
//import Templates from './curso/jsx-templates/Jsx-templates'
//import Test from './curso/componentes/Componentes';
//import ExampleState from './curso/componentes/State'
//import ExampleLifecycle from './curso/componentes/Ciclo-de-vida-de-un-componente'
//import {Eventos} from './curso/componentes/Eventos'
import Surprise from './curso/code-splitting/Surprise'
import { useState } from 'react';

function App() {
  const [showSurprise, setShowSurprise] = useState(false);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button onClick={() => setShowSurprise(!showSurprise)}>Show surprise</button>
        {
          showSurprise  && <Surprise/> 
        }
          
      </header>
    </div>
  );
}

export default App;
