import { useState } from 'react'
import { LockKeyhole } from 'lucide-react'

export default function Login() {
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')

  const handleLogin = (e) => {
    e.preventDefault()
    console.log('Login:', email, senha)
    // Aqui você coloca a lógica real de autenticação com a API
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-gray-100">
      <div className="bg-white shadow-xl rounded-2xl p-10 max-w-md w-full text-center space-y-4">
        <div className="text-5xl">💰</div>
        <h1 className="text-2xl font-bold text-gray-800">MRG IA PLUS</h1>
        <p className="text-gray-500 text-sm">Acesse seu painel de controle</p>

        <form onSubmit={handleLogin} className="space-y-4 mt-4 text-left">
          <div>
            <label className="block text-sm text-gray-600">Usuário ou Email</label>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Digite seu e-mail ou login"
              required
            />
          </div>
          <div>
            <label className="block text-sm text-gray-600">Senha</label>
            <input
              type="password"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Digite sua senha"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 rounded-lg flex items-center justify-center gap-2"
          >
            <LockKeyhole className="w-5 h-5" />
            Entrar
          </button>
        </form>
      </div>
    </div>
  )
}
