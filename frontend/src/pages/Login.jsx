import React from 'react';
function Login() {
  return (
    <div className="min-h-screen bg-green-50 flex flex-col items-center justify-center">
      <img src="/src/assets/logo.png" alt="MRG IA PLUS" className="w-24 mb-4" />
      <h1 className="text-3xl font-bold text-green-700 mb-4">Bem-vindo ao MRG IA PLUS</h1>
      <form className="bg-white p-6 rounded shadow-md w-80">
        <input type="text" placeholder="Usuário" className="w-full p-2 mb-4 border rounded" />
        <input type="password" placeholder="Senha" className="w-full p-2 mb-4 border rounded" />
        <button type="submit" className="w-full bg-green-600 text-white p-2 rounded hover:bg-green-700">Entrar</button>
      </form>
    </div>
  );
}
export default Login;