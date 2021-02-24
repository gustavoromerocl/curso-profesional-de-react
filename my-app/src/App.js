import logo from './logo.svg';
import './App.css';

function SaludarEnIdiomas({idioma}) {
  if(idioma === "es"){return <span>Hola</span>;}
  if(idioma === "en"){return <span>Hello</span>;}
}

const Saludo = () => {
  const nombreES = "Mundo";
  const nombreEN = "World";
  const idioma = "en";
  return (
    <div>
      {
        idioma === "en" && <p><SaludarEnIdiomas idioma={idioma}/> { `${nombreEN}` } </p>
      }
      {
        idioma === "es" && <p><SaludarEnIdiomas idioma={idioma}/> { `${nombreES}` } </p>
      }
    </div>
  )
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
