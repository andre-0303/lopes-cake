import { useNavigate } from "react-router-dom";

export default function Comecar() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-pink-100 text-center px-6">
      <h1 className="text-3xl font-bold mb-4">Bem-vindo!</h1>
      <p className="text-gray-700 mb-6">
        Seu app de encomendas para todos os momentos
      </p>
      <button
        onClick={() => navigate("/app")}
        className="bg-pink-500 text-white px-6 py-2 rounded-lg shadow-md hover:bg-pink-600"
      >
        Começar
      </button>
    </div>
  );
}
