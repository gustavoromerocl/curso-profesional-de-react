import React, { useState } from 'react';


const ExampleState = () => {
  const [counter, setCounter] = useState(0);
  return (
    <div> 
      <p>presionado: {counter}</p> 
      <button onClick={() => setCounter(counter + 1)}>click me</button>
    </div>
  );
}

export default ExampleState;