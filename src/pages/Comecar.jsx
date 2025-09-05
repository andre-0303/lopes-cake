import { useNavigate } from "react-router-dom";
import Button from "../components/Button";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col min-h-screen">
      <div className="bg-pink-300 relative">
        <div className="max-w-md mx-auto text-center py-10">
          <img src="img.png" alt="Ilustração" className="mx-auto w-80" />
        </div>

        <svg
          className="absolute bottom-0 left-0 w-full"
          viewBox="0 0 1440 320"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#ffffff"
            d="M0,224 C480,320 960,128 1440,224 L1440,320 L0,320 Z"
          />
        </svg>
      </div>

      <div className="bg-white flex-1 flex flex-col items-center justify-center px-2 mt-[-100px]">
        <h1 className="text-2xl font-bold">Bem Vindo!</h1>
        <p className="text-gray-600 text-center mt-2">
          Seu app de encomendas para todos os momentos
        </p>
        <Button to="/app">Começar</Button>
      </div>
    </div>
  );
}
