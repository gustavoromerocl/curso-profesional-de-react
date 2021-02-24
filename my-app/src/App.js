import logo from './logo.svg';
import './App.css';

const Saludo = () => {
  return <p>Hola Mundo</p>;
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Saludo/>
      </header>
    </div>
  );
}

export default App;
