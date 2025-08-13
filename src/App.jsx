import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/layout/NavBar'
import Footer from './components/layout/Footer'
import Home from './pages/Home/Home'

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/> 
        <Route path="/about" element={""}/> 
      </Routes>
      <Footer />
    </>
  )
}

export default App
