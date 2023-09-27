import React from 'react'
import { TodoList } from './TodoList'
import { TodoAdd } from './TodoAdd'
import { useTodos } from '../hooks'



export const TodoApp = () => {

    const { 
        todos,
        todoCount,
        pendingTodoCount,
        handleNewTodo, 
        handleDeleteTodo, 
        handleToggleTodo 
    } = useTodos()
    
  return (
    <>
        <h1>
            TodoApp: { todoCount }, 
            <small>
                pendientes: { pendingTodoCount }
            </small>
        </h1>
        <hr />

        <div className='row'>
            <div className='col-7'>
                <TodoList 
                    todos={ todos }
                    handleDeleteTodo={ handleDeleteTodo }
                    handleToggleTodo={ handleToggleTodo }
                />
            </div>
            <div className='col'>
                <h4>Agregar TODO</h4>
                <hr />
                <TodoAdd handleNewTodo={ handleNewTodo }/>
            </div>
        </div>
    </>
  )
}
