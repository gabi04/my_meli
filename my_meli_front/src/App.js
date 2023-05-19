import "./App.css";
import Header from "./components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductDetail from "./scenes/ProductDetail";
import Products from "./scenes/Products";
import Categories from "./components/Categories";
import { useState } from "react";

function App() {
  const [categories, setCategories] = useState();
  return (
    <BrowserRouter>
      <Header />
      <Categories categories={categories} />

      <Routes>
        <Route path="/items/:id" element={<ProductDetail />} />
        <Route
          path="/items/*"
          element={<Products setCategories={setCategories} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
