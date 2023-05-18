import { useState } from "react";
import Items from "./Items";
import ProductDetail from "./ProductDetail";
import axios from "axios";

const scenes = {
  ITEMS: "ITEMS",
  PRODUCT_DETAIL: "PRODUCT_DETAIL",
};

const Scenes = ({ products }) => {
  const [scene, setScene] = useState(scenes.ITEMS);
  const [productDetails, setProductDetails] = useState({});

  const getProductDetails = (id) => {
    const url = `http://localhost:3001/api/items/${id}`;
    axios
      .get(url)
      .then((response) => {
        console.log("response", response);
        setProductDetails(response.data.item);
        setScene(scenes.PRODUCT_DETAIL);
      })
      .catch(function (error) {
        console.error("getProductDetails error => ", error);
      });
  };

  switch (scene) {
    case scenes.ITEMS:
      return <Items products={products} onProductClick={getProductDetails} />;
    case scenes.PRODUCT_DETAIL:
      return <ProductDetail productDetails={productDetails} />;
    default:
      return <></>;
  }
};

export default Scenes;
