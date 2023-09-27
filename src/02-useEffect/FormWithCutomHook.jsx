import { useEffect, useState } from "react"
import { useForm } from "../hooks/useForm"

export const FormWithCutomHook = () => {

    const { formState, handleChange, handleResetForm, username, email, password } = useForm({
        username: '',
        email: '',
        password: ''
    })

    //const { username, email, password} = formState
 
  return (
    <> 
        <h1>Custom hook Form</h1>
        <hr />

        <input 
            type="text"
            className="form-control"
            placeholder="Username"
            name="username"
            value={ username } 
            onChange={ handleChange }
        />

        <input 
            type="email"
            className="form-control mt-2"
            placeholder="Email"
            name="email" 
            value={ email }
            onChange={ handleChange }
        />

        <input 
            type="password"
            className="form-control mt-2"
            placeholder="Contraseña"
            name="password" 
            value={ password }
            onChange={ handleChange }
        />

        <button 
            className="btn btn-primary mt-2"
            onClick={ handleResetForm }
        > Borrar </button>

    </>
  )
}
