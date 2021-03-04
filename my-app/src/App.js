import logo from './logo.svg';
import './App.css';
import Templates from './curso/jsx-templates/Jsx-templates'
import Test from './curso/componentes/Componentes';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
          <Templates/>
          <Test/>
      </header>
    </div>
  );
}

export default App;
