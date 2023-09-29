import React, { useState} from 'react'
import { useMovieContext } from '../context/MovieContext';
import { useNavigate } from 'react-router-dom';

const Formulario = () => {
    const { addMovie } = useMovieContext();
    const navigate = useNavigate();

    const [pelicula, setPelicula] = useState({
        nombre: '',
        genero: '',
        categoria: '',
        director: '',
        protagonistas: '',
        anoProduccion: '',
        descripcion: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setPelicula({
        ...pelicula,
        [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        addMovie(pelicula);
        setPelicula({
        nombre: '',
        genero: '',
        categoria: '',
        director: '',
        protagonistas: '',
        anoProduccion: '',
        descripcion: '',
        });

        navigate('/peliculas');
    };

    return (
        <div className='container mt-3'>
            <h2 className='text-center'>Agregar Peliculas</h2>
            <form onSubmit={handleSubmit} className='mt-4'>
                <div className="row g-3 mb-3">
                    <div class="col">
                        <label className="form-label">Nombre de la Película</label>
                        <input
                            type="text"
                            className="form-control"
                            name="nombre"
                            value={pelicula.nombre}
                            onChange={handleChange}
                        />
                    </div>

                    <div class="col">
                        <label className="form-label">Año de Producción</label>
                        <input
                            type="number"
                            className="form-control"
                            name="anoProduccion"
                            value={pelicula.anoProduccion}
                            onChange={handleChange}
                        />
                    </div>
                </div>

                <div className="row g-3 mb-3">
                    <div class="col">
                        <label className="form-label">Género</label>
                        <input
                            type="text"
                            className="form-control"
                            name="genero"
                            value={pelicula.genero}
                            onChange={handleChange}
                        />
                    </div>    

                    <div class="col">
                        <label className="form-label">Categoría</label>
                        <input
                            type="text"
                            className="form-control"
                            name="categoria"
                            value={pelicula.categoria}
                            onChange={handleChange}
                        />
                    </div>
                </div>

                <div className="row g-3 mb-3">
                    <div class="col">
                        <label className="form-label">Director:</label>
                        <input
                            type="text"
                            className="form-control"
                            name="director"
                            value={pelicula.director}
                            onChange={handleChange}
                        />
                    </div>
                    
                    <div class="col">
                        <label className="form-label">Protagonistas:</label>
                        <input
                            type="text"
                            className="form-control"
                            name="protagonistas"
                            value={pelicula.protagonistas}
                            onChange={handleChange}
                        />
                    </div>
                </div>

                <div className='mb-3'>
                    <label>Descripción de la Película</label>
                    <textarea
                        name="descripcion"
                        className="form-control"
                        value={pelicula.descripcion}
                        onChange={handleChange}
                    />
                </div>

                <div class="d-grid gap-2 col-6 mx-auto">
                    <button type="submit" className='btn btn-success mt-3'>Agregar Película</button>
                </div>
            </form>
        </div>
    )
}

export default Formulario