import React from 'react';


const Templates = () => {
  function SaludarEnIdiomas({idioma}) {
      if(idioma === "es"){return <span>Hola</span>;}
      if(idioma === "en"){return <span>Hello</span>;}
    }
  //Se puede asignar le valor por defecto a la propiedad
  const Saludo = ({idioma = "es"}) => {
    const nombreES = "Mundo";
    const nombreEN = "World";

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
  return (
    <div>
      <Saludo idioma="es"/>
      <Nombres/>
    </div>
  );
}

export default Templates;
