import { useFetch, useCounter  } from "../hooks"
import { Quote, Loading } from "../03-examples"


export const Layout = () => {

  const { counter, handleIncrement, handleDecrement } = useCounter(1)
 

  const { data, isLoading, hasError } = useFetch(`https://pokeapi.co/api/v2/pokemon/${counter}`)

  const {id, name, types} = data || {} //si data tiene valor entonces toma la data
  /* console.log({id, name, types}) */

  return (
    <>
      <h1>Pokemons</h1>
      <hr />

      { 
        isLoading 
        ? <Loading /> 
        : <Quote 
            id={ id } 
            name={ name } 
            types={ types }
          /> 
        }

      <div className="d-flex justify-content-between">
        <button className="btn btn-primary" onClick={ () => handleDecrement() }>
          Previous pokemon
        </button>
        <button className="btn btn-primary " onClick={ () => handleIncrement() }>
          Next pokemon
        </button>
      </div>
    </>
  )
}
