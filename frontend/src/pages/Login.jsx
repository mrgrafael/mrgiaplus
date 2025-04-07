import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Lock, LogIn } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (user === "admin" && pass === "123456") {
      localStorage.setItem("auth", "true");
      navigate("/dashboard");
    } else {
      alert("Credenciais inválidas");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 p-4">
      <Card className="w-full max-w-md shadow-2xl rounded-2xl bg-white">
        <CardContent className="flex flex-col items-center gap-6 p-6">
          <img
            src="/moeda.png"
            alt="MRG IA PLUS"
            className="w-24 h-24 mx-auto mt-4 rounded-full border-4 border-primary shadow"
          />
          <h1 className="text-2xl font-bold text-center text-gray-800">MRG IA PLUS</h1>
          <form onSubmit={handleLogin} className="w-full flex flex-col gap-4">
            <Input
              type="text"
              placeholder="Usuário"
              value={user}
              onChange={(e) => setUser(e.target.value)}
            />
            <Input
              type="password"
              placeholder="Senha"
              value={pass}
              onChange={(e) => setPass(e.target.value)}
            />
            <Button type="submit" className="w-full gap-2">
              <LogIn className="w-4 h-4" />
              Entrar
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}