import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import LogInview from './components/LogIn/LogInview'
import MachinesSelect from "./components/machine-selection/MachinesSelect";
import './StyleCss/LogInview.css'
import './StyleCss/MachinesSelect.css';  
import './StyleCss/ButtonSSH.css';
import './StyleCss/ButtonCLI.css';
import './StyleCss/ButtonTELNET.css';
import MachinA from './components/Machins/MachinA';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LogInview />} />
        <Route path='/products' element={<MachinesSelect />} />
        <Route path='/products/machin_a' element={<MachinA/>} />
      </Routes>
    </BrowserRouter> 
  )
}

export default AppRouter