import React from 'react'
import {BrowserRouter,Routes, Route, Navigate } from 'react-router-dom'
import LogInview from './components/LogIn/LogInview'

const AppRouter = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<LogInview/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default AppRouter