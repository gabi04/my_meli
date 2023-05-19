import { useState, useEffect } from "react";
import axios from "axios";

const useGetProducts = (query, pageNumber, setCategories) => {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [hasMore, setHasMore] = useState(false);
  useEffect(() => {
    setLoading(true);
    const url = `http://localhost:3001/api/items?q=${query}&limit=${4}&page=${pageNumber}`;
    axios
      .get(url)
      .then((response) => {
        setProducts((prevProducts) => [
          ...prevProducts,
          ...response.data.items,
        ]);
        setHasMore(response.data.next);
        setCategories(response.data.categories);
        setLoading(false);
      })
      .catch(function (error) {
        console.error("getProducts error => ", error);
        setLoading(false);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query, pageNumber]);

  return { loading, products, hasMore };
};

export default useGetProducts;
