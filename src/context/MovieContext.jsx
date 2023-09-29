import React, { createContext, useContext, useState } from 'react';

const MovieContext = createContext();

export function useMovieContext() {
  return useContext(MovieContext);
}

export function MovieProvider({ children }) {
  const [peliculas, setPeliculas] = useState([]);

  const addMovie = (movie) => {
    setPeliculas([...peliculas, movie]);
  };

  return (
    <MovieContext.Provider value={{ peliculas, addMovie }}>
      {children}
    </MovieContext.Provider>
  );
}