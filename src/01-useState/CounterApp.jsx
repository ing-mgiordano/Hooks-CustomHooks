import React from 'react'
import { useState } from 'react'

export const CounterApp = () => {

    const [{counter1, counter2, counter3}, setCounter] = useState({
        counter1: 10,
        counter2: 20,
        counter3: 30,
    })

    // esta es otra forma de escribir lo anterior, desestructurando el objeto state
    /* const [ state, setCounter] = useState({
        counter1: 10,
        counter2: 20,
        counter3: 30,
    })
    const {counter1, counter2, counter3} = state */

    const handleCounter = () => {
        setCounter(prevState => ({
            ...prevState,
            counter1: prevState.counter1 + 1,
        }))
    }

  return (
    <>
        <h1>Counter1: { counter1 }</h1>
        <h1>Counter2: { counter2 }</h1>
        <h1>Counter3: { counter3 }</h1>
        <hr />
        <button
            className='btncounter1'
            onClick={handleCounter}
        >
            +1
        </button>
    </>
  )
}
