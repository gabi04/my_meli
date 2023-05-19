import "./Products.sass";
import Product from "./Product";
import { Link, useSearchParams } from "react-router-dom";
import { useState, useCallback, useRef } from "react";
import Loader from "../../components/Loader";
import useGetProducts from "./useGetProducts";

const Products = ({ setCategories }) => {
  const [pageNumber, setPageNumber] = useState(1);
  const [searchParams] = useSearchParams();
  const query = searchParams.get("search");

  const { loading, products, hasMore } = useGetProducts(
    query,
    pageNumber,
    setCategories
  );

  const observer = useRef();

  const lastProductRef = useCallback(
    (node) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setPageNumber((prevPageNumber) => prevPageNumber + 1);
        }
      });
      if (node) observer.current.observe(node);
    },
    [loading, hasMore]
  );

  return (
    <>
      <section className="products">
        {products.map((product, i) =>
          products.length === i + 1 ? (
            <Link
              ref={lastProductRef}
              className="product__card"
              key={`${product.title}-product-${i}`}
              to={`/items/${product.id}`}
            >
              <Product product={product} />
              <hr className="products__hr" />
            </Link>
          ) : (
            <Link
              className="product__card"
              key={`${product.title}-product-${i}`}
              to={`/items/${product.id}`}
            >
              <Product product={product} />
              <hr className="products__hr" />
            </Link>
          )
        )}
      </section>
      {loading && <Loader />}
    </>
  );
};

export default Products;
