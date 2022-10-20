import React, { } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// import {BrowserRouter as Router, Routes, Route, Await} from 'react-router-dom'
import LoginP from '../auth/LoginP'
import CrearCuenta from '../auth/CrearCuenta'
import Receta from '../Receta/Receta'
import Home from "../home/Home"
import ApiConsumo from '../dashboard/ApiConsumo'


export default function RouterPage() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginP />} />
          <Route path="/creacuenta" element={<CrearCuenta />} />
          <Route path="/receta/:recetaId" element={<Receta />} />
          <Route path="/apiconsume" element={<ApiConsumo />} />
        </Routes>
      </Router>
    </div>
  )
}
