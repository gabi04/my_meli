import "./App.css";
import Header from "./components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductDetail from "./scenes/ProductDetail";
import Products from "./scenes/Products";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/items/:id" element={<ProductDetail />} />
        <Route path="/items/*" element={<Products />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
