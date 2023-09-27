import { useState } from "react"


export const useForm = ( initialForm = {} ) => {

    const [ formState, setFormState ] = useState( initialForm )

    const handleChange = ({ target }) => {  //desestrcturo target desde event y del target saco el name y value
        const { name, value } = target
        //console.log({ name, value })
        setFormState({
            ...formState,
            //propiedades computadas de los objetos
            [ name ]: value
        })
    }

    const handleResetForm = () => {
        setFormState( initialForm )
    }

    return {
        ...formState, //desestructuro las propiedades que le voy a pasar a formState para poder usaralas directaente (username, password contraseña)
        formState,
        handleChange,
        handleResetForm
    }
}
