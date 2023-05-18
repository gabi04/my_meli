import { useParams } from "react-router-dom";
import "./ProductDetail.sass";
import { useCallback, useEffect, useState } from "react";
import axios from "axios";

const ProductDetail = () => {
  const { id } = useParams();
  const [productDetail, setProductDetail] = useState({});

  const getProductDetail = useCallback(() => {
    const url = `http://localhost:3001/api/items/${id}`;
    axios
      .get(url)
      .then((response) => {
        setProductDetail(response.data.item);
      })
      .catch(function (error) {
        console.error("getProductDetail error => ", error);
      });
  }, [id]);

  useEffect(() => {
    getProductDetail();
  }, [getProductDetail]);

  return (
    <>
      {/* <Categories categories={products?.categories} /> */}
      <section className="produc-detail">
        <img
          className="produc-detail-image"
          src={productDetail.picture}
          alt={`${productDetail.title}-img`}
        />
        <div>
          <h5 className="produc-detail__state">{`${productDetail.condition} - ${productDetail.sold_quantity} vendidos`}</h5>
          <h2 className="product-detail__title">{productDetail.title} </h2>
          <h1 className="product-detail__price">{`$ ${productDetail.price?.amount}`}</h1>
          <button className="product-detail__btn">Comprar</button>
        </div>
        <div>
          <h3 className="product-detail__description__title">
            Descripción del producto
          </h3>
          <p className="product-detail__description__text">
            {productDetail.description}
          </p>
        </div>
      </section>
    </>
  );
};

export default ProductDetail;
