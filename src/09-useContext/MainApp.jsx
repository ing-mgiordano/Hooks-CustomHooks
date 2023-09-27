import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { HomePage } from './HomePage'
import { LoginPage } from './LoginPage'
import { AboutPage } from './AboutPage'
import { Navbar } from './Navbar'

export const MainApp = () => {
  return (
    <>
        <Navbar />
        <hr />
        
        <Routes>
            <Route path="/" element={ <HomePage /> }/>
            <Route path="login" element={ <LoginPage /> }/>
            <Route path="about" element={ <AboutPage /> }/>

            <Route path='/*' element={ <Navigate to='/login' />} /> {/* Si el usuario ingresa un path que no existe se redirige a login */}
        </Routes>

    </>
  )
}
