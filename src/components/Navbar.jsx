import React from 'react';
import {Link} from 'react-router-dom'

function Navbar() {

  return (
    <div className="bg-dark text-white py-3">
      <div className="container">
        <div className='btn-group d-flex justify-content-center'>
          <Link to='/' className='btn btn-dark'>Inicio</Link>
          <Link to='/formulario' className='btn btn-dark'>Agregar Peliculas</Link>
          <Link to='/peliculas' className='btn btn-dark'>Lista de Peliculas</Link>
      </div>
      </div>
    </div>
  );
}

export default Navbar;