export default function CardKanban({ cliente }) {
  return (
    <div className="bg-white p-4 rounded-2xl shadow mb-4 text-gray-800">
      <p className="font-bold">{cliente.nome}</p>
      <p className="text-sm">CPF: {cliente.cpf}</p>
      <p className="text-sm">Telefone: {cliente.telefone}</p>
    </div>
  );
}