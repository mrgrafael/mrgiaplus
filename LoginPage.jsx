import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import CRM from './CRM';

const LoginPage = () => {
  const [loginInput, setLoginInput] = useState('');
  const [senhaInput, setSenhaInput] = useState('');
  const [error, setError] = useState('');
  const { user, login } = useAuth();

  const handleLogin = () => {
    if (!login(loginInput, senhaInput)) setError('Login ou senha incorretos!');
    else setError('');
  };

  if (user) return <CRM />;

  return (
    <div className="flex items-center justify-center min-h-screen bg-green-100">
      <div className="bg-white shadow-lg rounded-lg p-8 w-96">
        <h2 className="text-2xl font-bold mb-6 text-center text-green-700">Login MRG IA PLUS</h2>
        {error && <p className="text-red-500 text-sm mb-4 text-center">{error}</p>}
        <input type="text" placeholder="Login" value={loginInput} onChange={(e) => setLoginInput(e.target.value)} className="border border-green-300 p-2 rounded w-full mb-4" />
        <input type="password" placeholder="Senha" value={senhaInput} onChange={(e) => setSenhaInput(e.target.value)} className="border border-green-300 p-2 rounded w-full mb-4" />
        <button onClick={handleLogin} className="bg-green-600 text-white w-full p-2 rounded">Entrar</button>
      </div>
    </div>
  );
};

export default LoginPage;