import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';      // ← aqui coloque a extensão
import './index.css';

const container = document.getElementById('root');
createRoot(container).render(<App />);
