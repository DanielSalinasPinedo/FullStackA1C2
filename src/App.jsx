import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Inicio from './components/Inicio';
import Formulario from './components/Formulario';
import Peliculas from './components/Peliculas';
import { MovieProvider } from './context/MovieContext';

function App() {
  
  return (
    <MovieProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Inicio/>}/>
          <Route path='formulario' element={<Formulario/>}/>
          <Route path='peliculas' element={<Peliculas/>}/>
        </Routes>
      </Router>
    </MovieProvider>
  )
}

export default App
