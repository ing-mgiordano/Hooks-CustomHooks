import { useCounter } from "../hooks/useCounter"

export const CounterWithCustomHook = () => {

    const { 
            counter,
            handleIncrement,
            handleDecrement,
            handleReset 
    } = useCounter()


  return (
    <>
        <h1>Couter with Hook: { counter }</h1>
        <hr />

        <button 
            className="btn btn-primary"
            onClick={ () => handleIncrement(2) }
        >+1</button>
        <button 
            className="btn btn-primary"
            onClick={ handleReset }
        >Reset</button>
        <button 
            className="btn btn-primary"
            onClick={ () => handleDecrement(2) }
        >-1</button>
    </>
  )
}
