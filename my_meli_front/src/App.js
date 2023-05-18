import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Categories from "./components/Categories";
import Scenes from "./scenes";

function App() {
  const [products, setProducts] = useState([]);

  return (
    <>
      <Header setProducts={setProducts} />
      <Categories categories={products.categories} />
      <Scenes products={products.items} />
    </>
  );
}

export default App;
