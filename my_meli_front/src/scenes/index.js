import { useState } from "react";
import Products from "./Products";
import ProductDetail from "./ProductDetail";
import axios from "axios";

export const scenes = {
  PRODUCTS: "PRODUCTS",
  PRODUCT_DETAIL: "PRODUCT_DETAIL",
};

const Scenes = ({ scene, setScene, products }) => {
  const [productDetail, setProductDetail] = useState({});

  const getProductDetail = (id) => {
    const url = `http://localhost:3001/api/items/${id}`;
    axios
      .get(url)
      .then((response) => {
        setProductDetail(response.data.item);
        setScene(scenes.PRODUCT_DETAIL);
      })
      .catch(function (error) {
        console.error("getProductDetail error => ", error);
      });
  };

  switch (scene) {
    case scenes.PRODUCTS:
      return <Products products={products} onProductClick={getProductDetail} />;
    case scenes.PRODUCT_DETAIL:
      return <ProductDetail productDetail={productDetail} />;
    default:
      return <></>;
  }
};

export default Scenes;
