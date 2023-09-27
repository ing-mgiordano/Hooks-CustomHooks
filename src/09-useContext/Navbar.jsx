import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark rounded-3">
        <div className="container-fluid">
            <Link className="navbar-brand" to="/">useContext</Link>
    
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <NavLink
                        className={ ({ isActive }) => `nav-link ${ isActive ? 'activ' : ''}`} /* isActive proviene de la desestructuracion de args, si a la funcion le paso arg y hago un console.log veo esa propiedad */
                        to='/'
                    >
                        Home
                    </NavLink>
                    <NavLink
                        className={ ({ isActive }) => `nav-link ${ isActive ? 'activ' : ''}`}
                        to='/about'
                    >
                        About
                    </NavLink>
                    <NavLink
                        className={ ({ isActive }) => `nav-link ${ isActive ? 'activ' : ''}`}
                        to='/login'
                    >
                        Login
                    </NavLink>
                </ul>
            </div>
        </div>
    </nav>
  )
}
