import React, { useCallback, useState } from 'react'
import { ShowIncrement } from './ShowIncrement'

export const CallbackHook = () => {

    const [counter, setCounter] = useState( 10 )

    //useCalback sirve para memorizar funciones, esta funcion memorizada solo se volvera a ejecutar cuando la dependencia cambie
    const increment = useCallback(
      ( value) => {
        setCounter( (c) => c + value )
      },
      [],
    )
    

    /* const increment = () => {
        setCounter( counter + 1 )
    }
 */
    return (
        <>
            <h1>
                useCallback Hook: { counter }
            </h1>
            <hr />

            <ShowIncrement 
                increment={ increment }
            />


        </>
    )
}
