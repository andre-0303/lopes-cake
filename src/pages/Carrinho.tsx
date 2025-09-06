import { useNavigate } from "react-router-dom";
import Logo from "../components/Logo";
import { useCart } from "../context/CardContext";
import { Plus, Minus, X, ShoppingCartIcon } from "lucide-react";

export default function Carrinho() {

  const {cart, increaseQty, decreaseQty, removeFromCart, total} = useCart();
  const navigate = useNavigate();

  return (
    <div className="p-8">
      <Logo />
      <div className="flex flex-row items-center">
        <h3 className="mt-4 text-xl font-semibold mb-3 mr-2">Carrinho </h3>
        <ShoppingCartIcon/>
      </div>

      {cart.length === 0 ? (
        <p>Seu carrinho está vazio.</p>
      ) : (
        <>
          <div className="flex flex-col gap-4">
            {cart.map((item) => (
              <div key={item.id} className="flex items-center justify-between border p-4 rounded-lg">
                <div className="w-16 h-16 overflow-hidden rounded">
                  <img src={item.imageUrl} className="w-full h-full object-cover" alt={item.name} />
                </div>
                <div className="flex-1 px-4">
                  <h2 className="font-semibold text-lg line-clamp-2 leading-none">{item.name}</h2>
                  <p className="text-pink-500 font-medium">R$ {item.price.toFixed(2)}</p>
                  <div className="flex gap-2 mt-2">
                    <button onClick={() => decreaseQty(item.id)} className="px-1 py-1 bg-gray-300 rounded"><Minus/></button>
                    <span>{item.quantity}</span>
                    <button onClick={() => increaseQty(item.id)} className="px-1 py-1 bg-gray-300 rounded"><Plus/></button>
                  </div>
                </div>
                <button onClick={() => removeFromCart(item.id)} className="text-red-500"><X/></button>
              </div>
            ))}
          </div>

          <div className="mt-6 flex justify-between items-center font-bold text-lg">
            <span>Total:</span>
            <span>R$ {total.toFixed(2)}</span>
          </div>

          <button
            onClick={() => navigate("/app/finalizar")}
            className="mt-6 w-full bg-pink-500 text-white py-2 rounded"
          >
            Finalizar Pedido
          </button>
        </>
      )}

    </div>
  );
}
