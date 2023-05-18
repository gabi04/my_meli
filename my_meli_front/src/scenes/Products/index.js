import "./Products.sass";
import Product from "./Product";
import { Link, useSearchParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect, useCallback } from "react";
import Categories from "../../components/Categories";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [searchParams] = useSearchParams();
  const query = searchParams.get("search");

  const getProducts = useCallback(() => {
    const url = `http://localhost:3001/api/items?q=${query}`;
    axios
      .get(url)
      .then((response) => {
        setProducts(response.data);
      })
      .catch(function (error) {
        console.error("handleSearchSubmit error => ", error);
      });
  }, [query]);

  useEffect(() => {
    getProducts();
  }, [getProducts]);

  return (
    <>
      <Categories categories={products?.categories} />
      <section className="products">
        {products?.items?.map((product, i) => (
          <Link
            key={`${product.title}-product-${i}`}
            to={`/items/${product.id}`}
          >
            <Product product={product} />
            <hr className="products__hr" />
          </Link>
        ))}
      </section>
    </>
  );
};

export default Products;
