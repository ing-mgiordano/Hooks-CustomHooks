import { useMemo, useState } from "react"
import { useCounter } from "../hooks"


const heavyStuff = ( iterationNumber = 10 ) => {
    for (let i = 0; i < iterationNumber; i++) {
        console.log("contando...")
    }

    return `${ iterationNumber } iteraciones contadas`
}

export const MemoHook = () => {

    const { counter, handleIncrement} = useCounter(4000)
    const [show, setShow] = useState(true)

    const memorizeValue = useMemo(() => heavyStuff(counter), [counter])
    // useMemo se usa para memorizar el valor de un proceso pesado y que solo cambie cuando hay un cambio en las dependencias (counter)

  return (
    <>
        <h1>Counter: <small>{ counter }</small></h1>
        <hr />

        <h4>{ memorizeValue }</h4>

        <button
            className="btn btn-primary"
            onClick={ () => handleIncrement() }
        >
            +1
        </button>

        <button
            className="btn btn-outline-primary"
            onClick={ () => setShow(!show)}
        >
            Show/Hide { JSON.stringify(show) }
        </button>
    </>
  )
}
