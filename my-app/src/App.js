import logo from './logo.svg';
import './App.css';
import Templates from './curso/Jsx-templates'
import Test from './curso/Componentes';

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
