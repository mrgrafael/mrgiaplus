
import React from 'react';
import Sidebar from '../components/Sidebar';
import CardKanban from '../components/CardKanban';
import Mascote from '../components/Mascote';

const Dashboard = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />

      <main className="flex-1 p-4 overflow-auto">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold text-green-700">Painel de Controle - MRG IA PLUS</h1>
          <Mascote />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <CardKanban title="Em Atendimento" />
          <CardKanban title="Novo" />
          <CardKanban title="Finalizado" />
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
