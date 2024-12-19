import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import LogInview from './components/LogIn/LogInview';
import MachinesSelect from "./components/machine-selection/MachinesSelect";
import './StyleCss/General.css';
import MachinA from './components/Machins/MachinA';
import MachinB from './components/Machins/MachinB';
import './StyleCss/LogInview.css';
import './StyleCss/MachinesSelect.css';  
import './StyleCss/ButtonSSH.css';
import './StyleCss/ButtonCLI.css';
import './StyleCss/ButtonTELNET.css';

const AppRouter = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path='/' element={<LogInview />} />
        <Route path='/products' element={<MachinesSelect />} />
        <Route path='/products/machin_a' element={<MachinA />} />
        <Route path='/products/machin_b' element={<MachinB />} />
      </Routes>
    </HashRouter> 
  );
};

export default AppRouter;
