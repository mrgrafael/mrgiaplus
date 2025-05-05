
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import moeda from "../assets/moeda.png";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const handleLogin = () => {
    // Simulação de login. Substituir pela lógica real depois.
    if (email === "admin@admin.com" && senha === "1234") {
      navigate("/dashboard");
    } else {
      alert("Credenciais inválidas!");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-green-100 via-green-200 to-green-300">
      <div className="bg-white shadow-lg rounded-2xl p-10 w-full max-w-md text-center">
        <img src={moeda} alt="Mascote" className="w-16 h-16 mx-auto mb-4 animate-bounce" />
        <h1 className="text-2xl font-bold mb-6 text-green-600">MRG IA PLUS</h1>

        <input
          type="text"
          placeholder="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
        />
        <input
          type="password"
          placeholder="Senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          className="w-full px-4 py-2 mb-6 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
        />
        <button
          onClick={handleLogin}
          className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-2 rounded-xl transition"
        >
          Entrar
        </button>
      </div>
    </div>
  );
}
