import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Comecar from "./pages/Comecar";
import AppLayout from "./layouts/AppLayout";
import Home from "./pages/Home";
import Produtos from "./pages/Produtos";
import Carrinho from "./pages/Carrinho";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Comecar />} />
        
        <Route path="/app" element={<AppLayout />}>
          <Route index element={<Home />} />
          <Route path="produtos" element={<Produtos />} />
          <Route path="carrinho" element={<Carrinho />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
