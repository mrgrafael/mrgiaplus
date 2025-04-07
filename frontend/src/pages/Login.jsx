
import { useState } from 'react';

export default function Login() {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    alert(`Usuário: ${user}\nSenha: ${password}`);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-4">
      <div className="bg-white shadow-md rounded-2xl p-8 w-full max-w-sm">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">MRG IA PLUS</h2>
        
        <div className="mb-4">
          <label className="block text-gray-600 mb-1">Usuário</label>
          <input
            type="text"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            value={user}
            onChange={(e) => setUser(e.target.value)}
            placeholder="Digite seu usuário"
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-600 mb-1">Senha</label>
          <input
            type="password"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Digite sua senha"
          />
        </div>

        <button
          onClick={handleLogin}
          className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-xl transition duration-200"
        >
          Entrar
        </button>
      </div>
    </div>
  );
}
