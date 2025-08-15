import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Home from './pages/Home/Home'
import Unidades from './pages/Unidades'

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/> 
        <Route path="/sobre" element={""}/> 
        <Route path="/unidades" element={<Unidades />}/> 
      </Routes>
      <Footer />
    </>
  )
}

export default App
