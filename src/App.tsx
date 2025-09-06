import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Comecar from "./pages/Comecar";
import AppLayout from "./layouts/AppLayout";
import Home from "./pages/Home";
import Produtos from "./pages/Produtos";
import Carrinho from "./pages/Carrinho";
import FinalizarPedido from "./pages/FinalizarPedido";
import { CartProvider } from "./context/CardContext";

function App() {
  return (
    <CartProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Comecar />} />
          
          <Route path="/app" element={<AppLayout />}>
            <Route index element={<Home />} />
            <Route path="produtos" element={<Produtos />} />
            <Route path="carrinho" element={<Carrinho />} />
            <Route path="finalizar" element={<FinalizarPedido />} />
          </Route>
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
