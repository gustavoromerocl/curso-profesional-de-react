import logo from './logo.svg';
import './App.css';

const Saludo = () => {
  const nombre = "Mundo";
  return <p>Hola {nombre}</p>;
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
