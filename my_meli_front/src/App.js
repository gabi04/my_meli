import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Categories from "./components/Categories";
import Scenes from "./scenes";

function App() {
  const [items, setItems] = useState([]);

  return (
    <>
      <Header setItems={setItems} />
      <Categories categories={items.categories} />
      <Scenes items={items.items} />
    </>
  );
}

export default App;
