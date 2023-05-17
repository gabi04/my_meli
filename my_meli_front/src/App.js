import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Items from "./components/Items";
import Categories from "./components/Categories";

function App() {
  const [items, setItems] = useState([]);
  console.log(items);
  return (
    <>
      <Header setItems={setItems} />
      <Categories categories={items.categories} />
      <Items items={items.items} />
    </>
  );
}

export default App;
