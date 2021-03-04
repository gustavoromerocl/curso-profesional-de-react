/**
 Introducción a las props
Como menciona la documentación de React:

Conceptualmente, los componentes son como las funciones de JavaScript. Aceptan datos de entrada (llamados props) y returnan elementos de React que describen lo que debería aparecer en la pantalla.

Las props son la colección de datos que un componente recibe del contenedor padre, y que pueden usarse para definir los elementos de React que retornará el componente.

En términos prácticos, si un componente necesita recibir información para funcionar, la recibe vía props.

En términos técnicos, las props tienen ciertas características:

Son inmutables, que es el adjetivo para lo que no se puede modificar o cambiar. Una prop no se modifica.
Pueden tener un valor por defecto
Pueden marcarse como obligatorias, cuando un componenente no puede funcionar sin recibir una prop.
En JSX, las props se ven como los atributos de los elementos HTML:

<Btn value=”Enviar” />
Estas props pueden recibir un string o el resultado de una expresión de JavaScript, usando la sintaxis de llaves:

<Saludo value={` Hola ${nombre} `} />
En componentes funcionales, las props se reciben como argumentos de la función. En clases se pueden leer vía la propiedad props del objeto:

const Btn = (props)=>{ return null; }

class Btn extends React.Component{
  render(){ console.log(this.props); return null; }
}
Continuemos aprendiendo sobre props en el siguiente tema, donde veremos valores por defecto.
 */