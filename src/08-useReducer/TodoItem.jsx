import React from 'react'

export const TodoItem = ({ todo, handleDeleteTodo, handleToggleTodo }) => {
  
  const { id, description, done } = todo

  return (
    <li 
        className='list-group-item d-flex justify-content-between'
    >
        <span 
          className={`align-self-center ${ (done) ? 'text-decoration-line-through' : '' }`}
          onClick={ () => handleToggleTodo( id ) }
        >
          { description }
        </span>
        <button 
          className='btn btn-danger'
          onClick={ () => handleDeleteTodo( id ) }
        >X</button>
    </li>
  )
}
