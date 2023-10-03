import { useState } from "react"


export const useCounter = ( initialValue = 10) => {

    const [ counter, setCounter ] = useState( initialValue )

    const handleIncrement = ( value = 1 ) => { //por defecto el value es 1, pero si en el evento onclick le paso otro valor, toma ese ultimo
        setCounter( (current) => current + value )
    }

    const handleDecrement = ( value = 1 ) => {
        if( counter === 1 ) return
        setCounter( (current) => current - value )
    }

    const handleReset = () => {
        setCounter( initialValue )
    }

    return {
        counter,
        handleIncrement,
        handleDecrement,
        handleReset
    }
}