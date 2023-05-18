import "./ProductDetail.sass";

const ProductDetail = ({ productDetail }) => {
  return (
    <section className="produc-detail">
      <img
        className="produc-detail-image"
        src={productDetail.picture}
        alt={`${productDetail.title}-img`}
      />
      <div>
        <h5 className="produc-detail__state">{`${productDetail.condition} - ${productDetail.sold_quantity} vendidos`}</h5>
        <h2 className="product-detail__title">{productDetail.title} </h2>
        <h1 className="product-detail__price">{`$ ${productDetail.price.amount}`}</h1>
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
  );
};

export default ProductDetail;
