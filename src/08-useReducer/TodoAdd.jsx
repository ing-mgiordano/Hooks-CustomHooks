import React, { useState } from 'react'
import { useForm } from '../hooks'

export const TodoAdd = ({ handleNewTodo }) => {

    const { description, handleChange, handleResetForm} = useForm({
        description: ''
    })

    const handleFormSubmit = (e) => {
        e.preventDefault()
        if(description.length <= 1) return

        const newTodo = {
            id: new Date().getTime()*3,
            description: description,
            done: false,
        }

        handleNewTodo(newTodo)
        handleResetForm()
    }

  return (
    <form onSubmit={ handleFormSubmit }>
        <input 
            type="text" 
            className='form-control'
            placeholder='Que hay que hacer?'
            value={ description }
            name='description'
            onChange={ handleChange }
        />
        <button
            type='submit'
            className='btn btn-outline-primary mt-2'
        >
            Agregar
        </button>
    </form>
  )
}
