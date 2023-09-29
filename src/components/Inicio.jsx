import React from 'react'
import { useMovieContext } from '../context/MovieContext';
import './Peliculas.css';

const Inicio = () => {
    const { peliculas } = useMovieContext();

    // Tomar los 8 ultimos elementos
    const peliculasRevertidas = peliculas.slice(-8).reverse();
    
    return (
        <div className='container mt-3'>
                <h2 className='text-center'>Recientes</h2>
                {peliculasRevertidas.length === 0 ? (
                <h5 class="text-danger">No hay películas</h5>
                ) : (
                <div className="row mt-4">
                    {peliculasRevertidas.map((p, index) => (
                        <div key={index} className="col-md-3">
                            <div className="card mb-4 shadow zoom-on-hover">
                                <div className="card-body">
                                    <div className='d-flex justify-content-between mb-3'>
                                        <h5 className="card-title fw-bold mb-0 border-bottom border-secondary">{p.nombre}</h5>
                                        <p className='mb-0'>{p.anoProduccion}</p>
                                    </div>
                                    <div className=''>
                                        <p className="card-text m-0 fw-bold">Descripcion:</p>
                                        <div className="card-text " style={{ maxHeight: '70px', overflowY: 'auto' }}>
                                            {p.descripcion}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

export default Inicio