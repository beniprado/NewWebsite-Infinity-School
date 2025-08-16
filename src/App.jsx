import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Home from './pages/Home/Home'
import Unidades from './pages/Unidades'
import Cursos from './pages/Cursos/Cursos'
import Login from './admin/login'
import Privacidade from './pages/Privacidade'
import Sobre from './pages/Sobre/Sobre'

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/> 
        <Route path="/sobre" element={<Sobre />}/> 
        <Route path="/cursos" element={<Cursos />}/> 
        <Route path="/unidades" element={<Unidades />}/> 
        <Route path="/privacidade" element={<Privacidade />}/> 
        <Route path="/login" element={<Login />}/> 
      </Routes>
      <Footer />
    </>
  )
}

export default App
