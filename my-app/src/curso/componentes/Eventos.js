import React, { useState } from 'react'

export const Eventos = () => {
  const [name, setName] = useState();
  return (
    <div>
      <input type="text" onChange={(ev) => setName(ev.target.value)}></input>
      <p>Hola {name}</p>
    </div>
  )
}
