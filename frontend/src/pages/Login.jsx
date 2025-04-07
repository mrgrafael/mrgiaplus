import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { LogIn } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export default function Login() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <Card className="w-full max-w-md shadow-2xl p-6 rounded-2xl">
        <CardContent className="space-y-6">
          <div className="flex justify-center">
            <img src="/moeda.png" alt="MRG IA Plus Logo" className="h-20" />
          </div>
          <h2 className="text-2xl font-bold text-center">Acesso ao Sistema</h2>
          <Input placeholder="Usuário" />
          <Input type="password" placeholder="Senha" />
          <Button className="w-full">
            <LogIn className="mr-2 h-4 w-4" /> Entrar
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}