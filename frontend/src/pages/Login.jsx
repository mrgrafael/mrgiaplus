import React from 'react'

export default function Login() {
  return (
    <div className='flex items-center justify-center h-screen bg-gray-100'>
      <div className='p-10 bg-white rounded-2xl shadow-xl w-96 text-center'>
        <div className='flex justify-center mb-4'>
          <img src='/logo-moeda.png' alt='MRG Logo' className='w-20 h-20' />
        </div>
        <h2 className='text-2xl font-bold mb-6 text-gray-800'>Bem-vindo ao MRG IA PLUS</h2>
        <input type='text' placeholder='Usuário' className='w-full p-3 mb-4 border rounded-lg'/>
        <input type='password' placeholder='Senha' className='w-full p-3 mb-6 border rounded-lg'/>
        <button className='bg-green-600 text-white px-6 py-3 rounded-xl w-full hover:bg-green-700 transition'>Entrar</button>
      </div>
    </div>
  )
}