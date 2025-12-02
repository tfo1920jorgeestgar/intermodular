import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './pages/Home.jsx'
import { BrowserRouter, Routes, Route } from 'react-router'
import ReactDOM from "react-dom/client"

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/reservas' element={<Reservas />} />
      <Route path='/productos' element={<Market />} />
      <Route path='/registro' element={<SignUp />} />
      <Route path='/sobre-nosotros' element={<About />} />
    </Routes>
  </BrowserRouter>,
)
