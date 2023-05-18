import "./ProductDetail.sass";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  width: "auto",
  gap: "32px 32px",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const ProductDetail = () => {
  return <div>Product Detail</div>;
  //return (
  // <section>
  //   <img
  //     className="produc-detail-image"
  //     src="https://picsum.photos/id/237/200/300"
  //   />
  //   <div>
  //     <h5 className="produc-detail__state">nuevo - 234 vendidos</h5>
  //     <h2 className="product-detail__title">title lorem ipsum</h2>
  //     <h1 className="product-detail__price">$ 1000</h1>
  //     <button className="product-detail__btn">comprar</button>
  //   </div>
  //   <div>
  //     <h3>description del producto</h3>
  //     <p>
  //       Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
  //       eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
  //       minim veniam, quis nostrud exercitation ullamco laboris nisi ut
  //       aliquip ex ea commodo consequat. Duis aute irure dolor in
  //       reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
  //       pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
  //       culpa qui officia deserunt mollit anim id est laborum.
  //     </p>
  //   </div>
  // </section>
  //)
};

export default ProductDetail;
