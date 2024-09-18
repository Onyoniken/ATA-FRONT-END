import React from 'react'
import './App.css'
import Footer from './components/Footer/FooterComponent'
import Home from './pages/Home/Home'
import Contact from './pages/Contact/Contact'
import Login from './pages/Login/Login'
import Blogspace from './pages/Blogspace/BlogSpace'
import { Route, Routes } from 'react-router-dom'
import Register from './pages/Register/Register'
import NavbarComponent from './components/Navbar/NavbarComponent'


function App() {
  return (
    <>

      <NavbarComponent />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/blogspace" element={<Blogspace />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App
