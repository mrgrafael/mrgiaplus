import { useEffect, useState } from "react";
import { Home, Settings, BarChart, LogOut } from "lucide-react";
import { useNavigate } from "react-router-dom";
import moeda from "../assets/moeda.png";

export default function Sidebar() {
  const navigate = useNavigate();
  const [user, setUser] = useState("");

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("user"));
    if (userData) setUser(userData.name);
  }, []);

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/");
  };

  return (
    <div className="w-64 h-screen bg-gray-800 text-white flex flex-col justify-between p-4 rounded-r-2xl shadow-xl">
      <div>
        <div className="flex items-center gap-2 mb-6">
          <img src={moeda} alt="Mascote" className="w-10 h-10" />
          <h1 className="text-2xl font-bold">MRG IA PLUS</h1>
        </div>
        <nav className="flex flex-col gap-4">
          <button onClick={() => navigate("/dashboard")} className="flex items-center gap-2 hover:text-green-400">
            <Home size={20} /> Dashboard
          </button>
          <button onClick={() => navigate("/relatorios")} className="flex items-center gap-2 hover:text-green-400">
            <BarChart size={20} /> Relatórios
          </button>
          <button onClick={() => navigate("/config")} className="flex items-center gap-2 hover:text-green-400">
            <Settings size={20} /> Configurações
          </button>
        </nav>
      </div>
      <div className="text-sm text-gray-400">
        <p className="mb-2">Bem-vindo, {user}</p>
        <button onClick={logout} className="flex items-center gap-2 hover:text-red-400">
          <LogOut size={20} /> Sair
        </button>
      </div>
    </div>
  );
}