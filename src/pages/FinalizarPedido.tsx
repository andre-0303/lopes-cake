import { useState } from "react";
import { useCart } from "../context/CardContext";
import QRCode from "react-qr-code";

export default function FinalizarPedido() {
  const { cart, total, clearCart } = useCart();
  const [endereco, setEndereco] = useState("");
  const [mostrarQR, setMostrarQR] = useState(false);
  const [pedidoPago, setPedidoPago] = useState(false);
  const [botaoTexto, setBotaoTexto] = useState("Copiar código");

  const handleCopiar = () => {
    navigator.clipboard.writeText(`Pedido: ${JSON.stringify(cart)} | Endereço: ${endereco}`);
    setBotaoTexto('Copiado!');
    setTimeout(() => setBotaoTexto('Copiar código'), 2000)
  }

  const handlePagar = () => {
    setPedidoPago(true);
    clearCart();
  };

  return (
    <div className="p-8">
      <h1 className="text-xl font-bold mb-4">Finalizar Pedido</h1>

      <h3 className="mb-1 font-normal text-base">Digite seu endereço</h3>
      <input
        type="text"
        placeholder="Rua X, 123"
        value={endereco}
        onChange={(e) => setEndereco(e.target.value)}
        className="w-full p-2 border rounded mb-4"
      />

      <div className="mb-4">
        {cart.map((item) => (
          <div key={item.id} className="flex justify-between items-center gap-2">
            <span className="max-w-[70%] overflow-hidden whitespace-nowrap text-ellipsis">{item.quantity}x {item.name}</span>
            <span>R$ {(item.price * item.quantity).toFixed(2)}</span>
          </div>
        ))}
      </div>

      <div className="font-bold mb-4">Total: R$ {total.toFixed(2)}</div>

      {!mostrarQR ? (
        <button
          onClick={() => {
            if(!endereco.trim()) {
                alert('Preencha o endereço!');
                return;
            }
            setMostrarQR(true)
          }}
          className="w-full bg-pink-500 text-white py-2 rounded"
        >
          Gerar QR Code
        </button>
      ) : (
        <>
          <QRCode value={`Pedido: ${JSON.stringify(cart)} | Endereço: ${endereco}`} size={180} />
          <button className="w-full bg-slate-400 text-white py-2 rounded mt-4" onClick={handleCopiar}>{botaoTexto}</button>
          <button
            onClick={handlePagar}
            className="w-full bg-green-500 text-white py-2 rounded mt-4"
          >
            Produto Pago
          </button>
        </>
      )}

      {pedidoPago && (
        <div className="mt-6 p-4 bg-green-100 text-green-700 rounded">
          ✅ Pedido realizado com sucesso! Seu pedido será enviado em breve.
        </div>
      )}
    </div>
  );
}
