import logo from './logo.svg';
import './App.css';
//import Templates from './curso/jsx-templates/Jsx-templates'
//import Test from './curso/componentes/Componentes';
//import ExampleState from './curso/componentes/State'
//import ExampleLifecycle from './curso/componentes/Ciclo-de-vida-de-un-componente'
//import {Eventos} from './curso/componentes/Eventos'
//import Surprise from './curso/code-splitting/Surprise'
import React, { Suspense, useState } from 'react';

function App() {
  const [showSurprise, setShowSurprise] = useState(false);

  //React Lazy suspende la descarga de un componente hasta que este es llamado, el componente debe estar anidado en un Suspense
  const Surprise = React.lazy(() => import('./curso/code-splitting/Surprise'))

  return (
    <div className="App">
      <Suspense fallback={<p>Cargando...x|</p>}>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button onClick={() => setShowSurprise(!showSurprise)}>Show surprise</button>
        {
          showSurprise  &&  <Surprise/> 
        }
          
      </header>
      </Suspense>
    </div>
  );
}

export default App;
