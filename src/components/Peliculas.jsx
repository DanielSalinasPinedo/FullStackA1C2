import React from 'react'
import { useMovieContext } from '../context/MovieContext';
import './Peliculas.css';

const Peliculas = () => {
    const { peliculas } = useMovieContext();

    return (
        <div className='container mt-3'>
            <h2 className='text-center'>Listado de Películas</h2>
            {peliculas.length === 0 ? (
            <h5 class="text-danger mt-4">No hay películas</h5>
            ) : (
            <div className="row mt-4">
                {peliculas.map((p, index) => (
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
                                <p className="card-text mt-3 fw-bold">Género: <span className='fw-normal'>{p.genero}</span></p>
                                <p className="card-text fw-bold">Categoría: <span className='fw-normal'>{p.categoria}</span></p>
                                <p className="card-text fw-bold">Protagonistas: <span className='fw-normal'>{p.protagonistas}</span></p>
                                <p className="card-text fw-bold">Director: <span className='fw-normal'>{p.director}</span></p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        )}
        </div>
    )
}

export default Peliculas