import { useState } from "react";
import { scenes } from "../App";
import Items from "./Items";
import ProductDetail from "./ProductDetail";

const Scenes = ({ items }) => {
  const [scene, setScene] = useState(scenes.ITEMS);
  console.log("scene => ", scene);

  switch (scene) {
    case scenes.ITEMS:
      return <Items items={items} setScene={setScene} />;
    case scenes.PRODUCT_DETAIL:
      return <ProductDetail />;
    default:
      return <></>;
  }
};

export default Scenes;
