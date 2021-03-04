import React, { useEffect, useState } from 'react';

const Boton = () => {
  const [counter, setCounter] = useState(0);
  /**
  //Se ejecuta cada vez que se actualiza el componente.

  useEffect(() => {
    console.log("Me ejecute")
  })
   */

/**
  //Si se le pasa un arreglo vacio al final de la sintaxis, se ejecuta solo una vez cuando el componente se renderiza.

  useEffect(() => {
    console.log("Me ejecute")
  },[]);
 */

 //Si se agrega un return, se ejecuta cuando el componente es eliminado del dom
  useEffect(() => {
    console.log("Me ejecute")
    return () => {
      console.log("Me eliminaron")
    }
  },[]);

  return(
  <div> 
    <p>presionado: {counter}</p> 
    <button onClick={() => setCounter(counter + 1)}>click me</button>
  </div>
  )
}
const ExampleLifecycle = () => {
  const [showButton, setShowButton] = useState(true);
  return(
    <div>
      <button onClick={() => setShowButton(false)}>Eliminar</button>
      <div>
        {
          showButton && <Boton/>
        }
      </div>
      
    </div>
  );
}

export default ExampleLifecycle;