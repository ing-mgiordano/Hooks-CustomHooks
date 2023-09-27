import React, { useState } from 'react'
import { UserContext } from './UserContext'

/* const user = {
    name: "Fernando",
    id: 123,
    email: "email@email.com",
} */

export const UserProvider = ({ children }) => {

    const [user, setUser] = useState()

  return (
    <UserContext.Provider 
        value={{
            hola: 'Mundo',
            user: user,
            setUser
        }}
    
    >
        { children }
    </UserContext.Provider>
  )
}
