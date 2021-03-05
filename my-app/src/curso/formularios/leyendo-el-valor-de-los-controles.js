import React, { useEffect, useRef, useState } from 'react'

const Formulario = ({showed}) => {
  const [title, setTitle] =  useState("");
  const [body, setBody] = useState("");

  //REferencia al nodo del DOM que queremos manipular
  const inputRef = useRef();

  useEffect(() => {
    //Actualzia el DOM
    if(inputRef){
      console.log(inputRef);
      //use ref retorna current, que corresponde la objeto o nodo que queremos manipular
      inputRef.current.focus();
    }
    return () => {
      console.log("no visible")
    }
  }, [showed])
  
  //Font: https://jsonplaceholder.typicode.com/guide/
  const sendForm = (ev) => {
    ev.preventDefault();
    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify({
        title: title,
        body: body,
        userId: 1,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
      setTitle("");
      setBody("");
  }

  return (
    <form onSubmit={(ev) => sendForm(ev)}>
      <div>
        <label htmlFor="title">Título</label>
        <input type="text" id="title" value={title} onChange={(ev)=>setTitle(ev.target.value)} ref={inputRef}/>
      </div>
      <div>
        <label htmlFor="body">Publicación</label>
        <textarea id="body" value={body} onChange={(ev)=>setBody(ev.target.value)}/>
      </div>
      <input type="submit" value="Enviar"/>
    </form>
  )
}

export default Formulario
