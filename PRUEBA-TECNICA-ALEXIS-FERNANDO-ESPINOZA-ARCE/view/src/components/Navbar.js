import React from 'react'
import { Link, useLocation } from 'react-router-dom';
function Navbar({brand}) {
    return (
      <nav className="navbar navbar-dark bg-dark">
        <div className="container">
          <Link className="navbar-brand text-uppercase" to="/">{brand}</Link>
          <Link className="navbar-brand text-uppercase" to="/crudempleado">+ EMPLEADO</Link>
        </div>
      </nav>
    );
  }
  
  export default Navbar;