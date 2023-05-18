import "./Products.sass";
import Product from "./Product";

const Products = ({ products, onProductClick }) => {
  return (
    <section className="products">
      {products?.map((product, i) => (
        <div
          key={`${product.title}-product-${i}`}
          onClick={() => onProductClick(product.id)}
        >
          <Product product={product} />
          <hr className="products__hr" />
        </div>
      ))}
    </section>
  );
};

export default Products;
