import { useState, useEffect } from "react";
import ProductCard from "../components/ProductCard";
import Logo from "../components/Logo";

interface Product {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
  category: string;
}

export default function Produtos() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("all");
  const [visibleCount, setVisibleCount] = useState(3);

  useEffect(() => {
    fetch("http://localhost:3000/api/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((err) => console.error(err));
  }, []);

  if (loading)
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="w-16 h-16 border-4 border-pink-400 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );

  const filteredProducts =
    filter === "all" ? products : products.filter((p) => p.category === filter);

      const visibleProducts = filteredProducts.slice(0, visibleCount)


  const categories = ["all", "doces", "salgados", "combos"];

  return (
    <div className="p-8">
      <Logo />

      <div className="flex gap-4 mt-4 mb-6 overflow-x-auto py-2 whitespace-nowrap scrollbar-hide">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`px-4 py-2 rounded font-semibold ${
              filter === cat ? "bg-pink-500 text-white" : "bg-gray-200"
            }`}
            onClick={() => setFilter(cat)}
          >
            {cat === "all"
              ? "Todos"
              : cat.charAt(0).toUpperCase() + cat.slice(1)}
          </button>
        ))}
      </div>

      <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {visibleProducts.map((product) => (
          <ProductCard
            key={product.id}
            id={String(product.id)}
            name={product.name}
            price={product.price}
            imageUrl={product.imageUrl}         />
        ))}
      </div>
      {visibleCount < filteredProducts.length && (
  <div className="flex justify-center mt-6">
    <button
      className="px-4 py-2 bg-pink-500 text-white rounded hover:bg-pink-600 transition"
      onClick={() => setVisibleCount((prev) => prev + 3)}
    >
      Mostrar mais
    </button>
  </div>
)}

    </div>
  );
}
