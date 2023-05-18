import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Categories from "./components/Categories";
import Scenes, { scenes } from "./scenes";

function App() {
  const [products, setProducts] = useState([]);
  const [scene, setScene] = useState(scenes.PRODUCTS);

  return (
    <>
      <Header setProducts={setProducts} setScene={setScene} />
      <Categories categories={products.categories} />
      <Scenes scene={scene} setScene={setScene} products={products.items} />
    </>
  );
}

export default App;
