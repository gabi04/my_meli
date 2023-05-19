import "./Products.sass";
import ic_shipping from "../../Assets/ic_shipping.png";

const Product = ({ product }) => (
  <div className="product">
    <img
      className="product__img"
      src={product.picture}
      alt={`${product.title}-img`}
    />
    <div>
      <h2 className="product__price">{`$ ${product.price.amount}`}</h2>
      {product.free_shipping && (
        <img
          className="product__shipping-icon"
          src={ic_shipping}
          alt="shipping_icon"
        />
      )}
      <h1 className="product__title">{product.title}</h1>
    </div>
    <h3 className="product__currency">{product.city} </h3>
  </div>
);

export default Product;
