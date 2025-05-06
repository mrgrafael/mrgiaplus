import moeda from "../assets/moeda.png";

export default function Mascote({ mensagem }) {
  return (
    <div className="absolute bottom-4 right-4 w-32 h-32 flex flex-col items-center text-center text-xs text-white bg-green-600 rounded-full shadow-lg animate-bounce">
      <img src={moeda} alt="Mascote" className="w-20 h-20 mt-2" />
      <p className="px-2">{mensagem}</p>
    </div>
  );
}