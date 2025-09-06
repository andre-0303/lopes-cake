import { Outlet, NavLink } from "react-router-dom";
import { Car, House } from "lucide-react";
import { ShoppingCart } from "lucide-react";
import { Cookie } from "lucide-react";
import CartNotification from "../components/CartNotification";

export default function AppLayout() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      {/* Área principal */}
      <div className="flex-1">
        <Outlet /> 
        <CartNotification/>
      </div>

      {/* Tabs fixas */}
      <nav className="bg-white border-t border-gray-200 shadow-md">
        <ul className="flex justify-around py-2 text-sm">
          <li>
            <NavLink
              to="/app"
              end
              className={({ isActive }) =>
                `flex flex-col items-center ${
                  isActive ? "text-pink-500" : "text-gray-600"
                }`
              }
            >
              <House />
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/app/produtos"
              className={({ isActive }) =>
                `flex flex-col items-center ${
                  isActive ? "text-pink-500" : "text-gray-600"
                }`
              }
            >
              <Cookie />
              Produtos
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/app/carrinho"
              className={({ isActive }) =>
                `flex flex-col items-center ${
                  isActive ? "text-pink-500" : "text-gray-600"
                }`
              }
            >
              <ShoppingCart />
              Carrinho
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}
