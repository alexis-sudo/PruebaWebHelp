import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';


import Home from './pages/Home'
import NotFound from './pages/NotFound'
import CrudsEmpleado from "./pages/CrudEmpleado";

function App() {

  return (
    <BrowserRouter>
      {/* <NavComponent/> */}
      <div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/crudempleado' element={<CrudsEmpleado />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
