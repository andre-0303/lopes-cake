// components/CartNotification.tsx
import { useEffect } from "react";
import { useCart } from "../context/CardContext";
import { ShoppingCart } from "lucide-react";

export default function CartNotification() {
  const { notif, setNotif } = useCart();

  useEffect(() => {
    if (!notif) return;

    const timer = setTimeout(() => {
      setNotif(null);
    }, 2500);

    return () => clearTimeout(timer);
  }, [notif, setNotif]);

  if (!notif) return null;

  return (
    <div className="fixed top-6 right-6 z-50">
      <div className="bg-pink-500 text-white px-6 py-3 rounded-lg shadow-lg flex items-center gap-2 animate-slide-in">
        <span><ShoppingCart/></span>
        <p className="font-medium">{notif}</p>
      </div>
    </div>
  );
}
