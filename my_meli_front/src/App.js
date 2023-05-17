import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Items from "./components/Items";

function App() {
  const [items, setItems] = useState([]);
  return (
    <div>
      <Header setItems={setItems} />
      <Items items={items} />
    </div>
  );
}

export default App;
