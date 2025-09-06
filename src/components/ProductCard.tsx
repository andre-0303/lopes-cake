import { ShoppingCart } from "lucide-react";
import { useCart } from "../context/CardContext";

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
}

export default function ProductCard({
  id,
  name,
  price,
  imageUrl,
}: ProductCardProps) {
  const { addToCart } = useCart();

  return (
    <div className="border rounded-lg p-4 w-[300px] flex gap-4 items-center shadow-sm hover:shadow-md transition">
      <img
        src={imageUrl}
        alt={name}
        className="w-24 h-24 object-cover rounded-md"
      />
      <div className="flex flex-col justify-between flex-1 h-24">
        <div>
          <h2 className="text-md font-semibold text-start line-clamp-2 leading-none">
            {name}
          </h2>
          <p className="text-pink-500 font-bold mt-1 text-start">
            R$ {price.toFixed(2)}
          </p>
        </div>

        <button
          className="mt-2 bg-pink-500 text-white text-sm font-semibold py-1 w-[60px] rounded hover:bg-pink-600 transition"
          onClick={() => addToCart({ id, name, price, imageUrl })}
        >
          <span className="flex items-center justify-center">
            <ShoppingCart />
          </span>
        </button>
      </div>
    </div>
  );
}
