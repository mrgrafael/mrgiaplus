import React from "react";

export default function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
        <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">MRG IA PLUS</h1>
        <form>
          <div className="mb-4">
            <label htmlFor="usuario" className="block text-gray-700 mb-1">
              Usuário
            </label>
            <input
              type="text"
              id="usuario"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Digite seu usuário"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="senha" className="block text-gray-700 mb-1">
              Senha
            </label>
            <input
              type="password"
              id="senha"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Digite sua senha"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-green-600 text-white p-3 rounded-lg hover:bg-green-700 transition-all"
          >
            Entrar
          </button>
        </form>
      </div>
    </div>
  );
}
