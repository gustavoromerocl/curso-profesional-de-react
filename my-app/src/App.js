import logo from './logo.svg';
import './App.css';
//import Templates from './curso/jsx-templates/Jsx-templates'
//import Test from './curso/componentes/Componentes';
//import ExampleState from './curso/componentes/State'
import ExampleLifecycle from './curso/componentes/Ciclo-de-vida-de-un-componente'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
          <ExampleLifecycle/>
      </header>
    </div>
  );
}

export default App;
