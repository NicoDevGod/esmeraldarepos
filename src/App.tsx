import { useState } from 'react'
import Nav from './components/nav/Nav'
import Footer from './components/footer/Footer'
import Home from './components/home/Home'
import Catalogo from './components/cat/Catalogo'
import './css/base.css'
import './css/sandbox.css'
import './css/embla.css'
import { Route, Routes } from 'react-router-dom'


function App() {

  return (
    <>
    <Nav/>
    <div className="bg-[url('./images/fondo.jpg')] w-full h-full z-1">
      
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/catalogo' element={<Catalogo />}/>
        <Route path='*' element={<h1>Pagina no encontrada.</h1>}/>
      </Routes>

      <Footer/>
    </div>
    </>
  )
}

export default App
