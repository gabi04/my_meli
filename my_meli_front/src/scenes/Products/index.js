import "./Products.sass";
import Product from "./Product";
import { Link, useSearchParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect, useCallback } from "react";
import Loader from "../../components/Loader";

const Products = ({ setCategories }) => {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [searchParams] = useSearchParams();
  const query = searchParams.get("search");

  const getProducts = useCallback(() => {
    setLoading(true);
    const url = `http://localhost:3001/api/items?q=${query}`;
    axios
      .get(url)
      .then((response) => {
        setProducts(response.data.items);
        setCategories(response.data.categories);
        setLoading(false);
      })
      .catch(function (error) {
        console.error("getProducts error => ", error);
        setLoading(false);
      });
  }, [query]);

  useEffect(() => {
    getProducts();
  }, [getProducts]);

  return loading ? (
    <Loader />
  ) : (
    <section className="products">
      {products.map((product, i) => (
        <Link
          className="product__card"
          key={`${product.title}-product-${i}`}
          to={`/items/${product.id}`}
        >
          <Product product={product} />
          <hr className="products__hr" />
        </Link>
      ))}
    </section>
  );
};

export default Products;
