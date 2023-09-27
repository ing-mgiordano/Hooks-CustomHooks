import { useEffect, useReducer } from "react"
import { todoReducer } from "../08-useReducer/todoReducer"


export const useTodos = () => {

    const initialState = []

    const init = () => {
        return JSON.parse( localStorage.getItem('todos') ) || []
    }

    const [ todos, dispatch ] = useReducer( todoReducer, initialState, init )

    useEffect(() => {
      localStorage.setItem('todos', JSON.stringify( todos ))
    }, [todos])

    const handleNewTodo = (newTodo) => {
        const action = {
            type: '[TODO] Add Todo',
            payload: newTodo
        }
        dispatch( action )
    }
    const handleDeleteTodo = ( id ) => {
        const action = {
            type: '[TODO] Remove Todo',
            payload: id
        }
        dispatch( action )
    }
    const handleToggleTodo = ( id ) => {
        const action = {
            type: '[TODO] Toggle Todo',
            payload: id
        }
        dispatch( action )
    }

    const todoCount = todos.length

    const pendingTodoCount = todos.filter(todo => !todo.done).length

    return {
        todos,
        todoCount,
        pendingTodoCount,
        handleNewTodo,
        handleDeleteTodo,
        handleToggleTodo,
    }
}