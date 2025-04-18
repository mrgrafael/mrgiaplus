import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Relatorios from './pages/Relatorios';
import ConsultaMargem from './pages/ConsultaMargem';
import UploadLeads from './pages/UploadLeads';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/relatorios' element={<Relatorios />} />
        <Route path='/consulta' element={<ConsultaMargem />} />
        <Route path='/upload' element={<UploadLeads />} />
      </Routes>
    </BrowserRouter>
  );
}
