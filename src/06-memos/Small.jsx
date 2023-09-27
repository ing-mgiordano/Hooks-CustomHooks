import React from 'react'

export const Small = React.memo(( {value} ) => {
    //memo se usa para componentes muy grandes o hay una tarea muy pesada. Hace que no se renderize si no hubo cambios en el componente
    console.log("me volvi a dibujar")

  return (
    <small>{ value }</small>
  )
})
