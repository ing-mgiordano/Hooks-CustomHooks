import React from 'react'
import { TodoItem } from './TodoItem'

export const TodoList = ({ todos = [], handleDeleteTodo, handleToggleTodo }) => {
  return (
    <ul className='list-group'>
        {
            todos.map( todo => (
                <TodoItem 
                    todo={ todo }
                    key= { todo.id }
                    handleDeleteTodo={ handleDeleteTodo }
                    handleToggleTodo={ handleToggleTodo }
                />
            ))
        }
    </ul>
  )
}
