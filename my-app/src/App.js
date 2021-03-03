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
      {
        idioma === "en" ? <p>Hello</p> : <p>Hola</p>
      }
    </div>
  )
}

const nombres = [
  'Gustavo',
  'Marisol',
  'Estefania',
]

/*
//Ciclo For
function getNombres(){
  const elementosLista = [];
  for(let i=0; i < nombres.length; i++){
    elementosLista.push(<li key={nombres[i].toString()}>{nombres[i]}</li>);
  }
  return elementosLista;
}
*/

//Usando Map
const Nombres = () => {
  //return <ul>{getNombres()}</ul>
  return <ul>{
      nombres.map((nombre, index) => <li key={index}>{nombre}</li>)
    }</ul>
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Saludo/>
        <Nombres/>
      </header>
    </div>
  );
}

export default App;
