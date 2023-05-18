import "./ProductDetail.sass";

const ProductDetail = ({ productDetails }) => {
  console.log("productDetails", productDetails);

  return (
    <section className="produc-detail">
      <img
        className="produc-detail-image"
        src={productDetails.picture}
        alt={`${productDetails.title}-img`}
      />
      <div>
        <h5 className="produc-detail__state">{`${productDetails.condition} - ${productDetails.sold_quantity} vendidos`}</h5>
        <h2 className="product-detail__title">{productDetails.title} </h2>
        <h1 className="product-detail__price">{`$ ${productDetails.price.amount}`}</h1>
        <button className="product-detail__btn">Comprar</button>
      </div>
      <div>
        <h3 className="product-detail__description__title">
          Descripción del producto
        </h3>
        <p className="product-detail__description__text">
          {productDetails.description}
        </p>
      </div>
    </section>
  );
};

export default ProductDetail;
