import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    if (usuario && senha) {
      navigate('/dashboard');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-white">
      <h1 className="text-2xl font-bold mb-4">Bem-vindo ao MRG IA PLUS</h1>
      <input placeholder="Usuário" onChange={e => setUsuario(e.target.value)} className="border p-2 mb-2" />
      <input placeholder="Senha" type="password" onChange={e => setSenha(e.target.value)} className="border p-2 mb-2" />
      <button onClick={handleLogin} className="bg-green-500 text-white px-4 py-2 rounded">Entrar</button>
    </div>
  );
}

export default Login;
