import { useEffect, useState } from "react"
import { Message } from "./Message"

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        username: 'strider',
        email: 'email@gmail.com'
    })

    const { username, email } = formState

    const handleChange = ({ target }) => {  //desestrcturo target desde event y del target savo el name y value
        const { name, value } = target
        //console.log({ name, value })
        setFormState({
            ...formState,
            //propiedades computadas de los objetos
            [ name ]: value
        })
    }

    useEffect(() => {
      
    }, [])

    useEffect(() => {
      
    }, [formState])

    useEffect(() => {
      
    }, [email])
    
 
  return (
    <> 
        <h1>Simple Form</h1>
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

        {
            (username === 'strider2') && <Message />
        }
    </>
  )
}
