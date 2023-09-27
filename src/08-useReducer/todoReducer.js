
export const todoReducer = ( initialState = [], action ) => {


    switch ( action.type ) {
        case '[TODO] Add Todo':
            return [ ...initialState, action.payload ]
            /* throw new Error('Action.type = ABC no esta implementada'); //si se que tengo que implementar esta funcion pero todavia no la tengo especificada puedo usar el throw error como aviso */
        
        case '[TODO] Remove Todo':
            return  initialState.filter( todo => todo.id !== action.payload ) //payload = id

        case '[TODO] Toggle Todo':
            return initialState.map( todo => {
                if ( todo.id === action.payload ) { //id
                    return {
                        ...todo,
                        done: !todo.done
                    }
                }
                return todo
            })

        default:
            return initialState;
    }
}