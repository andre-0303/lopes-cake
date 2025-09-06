import { useState, useEffect } from "react";
import Logo from "../components/Logo";
import ComboCard from "../components/ComboCard";

interface Product {
  id: string;
  name: string;
  price: string;
  imageUrl: string;
  category: string;
}

export default function Home() {
  const [combos, setCombos] = useState<Product[]>([])
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:3000/api/products')
    .then((res) => res.json())
    .then((data: Product[]) => {
      const onlyCombos = data.filter((item) => item.category === 'combos')
      setCombos(onlyCombos)
    })
    .finally(() => setLoading(false))
  }, [])

  return (
    <div className="p-8">
      <Logo />
      <div className="mt-8">
        <img src="/bolo_cenoura_brigadeiro_zona_sul.jpg" alt="bolo de cenoura" className="rounded-xl " />
        <p className="mt-2 text-gray-600">Bem-vindo ao LopesCake! O seu app para pedir as melhores comidas da cidade!</p>
      </div>
      <div className="mt-4">
        <h3 className="text-2xl font-semibold">Combo de hoje</h3>

        {loading ? (
          <p className="text-pink-500 mt-4">Carregando...</p>
        ) : combos.length > 0 ? (
          <ComboCard {...combos[1]} />
        ) : (
          <p className="text-gray-500 mt-4">Nenhum combo disponível.</p>
        )}

      </div>
    </div>
  );
}
