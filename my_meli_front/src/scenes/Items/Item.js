import "./Items.sass";
import ic_shipping from "../../Assets/ic_shipping.png";

const Item = ({ item }) => (
  <div className="item">
    <img className="item__img" src={item.picture} alt={`${item.title}-img`} />
    <div>
      <h2 className="item__price">{`$ ${item.price.amount}`}</h2>
      {item.free_shipping && (
        <img
          className="item__shipping-icon"
          src={ic_shipping}
          alt="shipping_icon"
        />
      )}
      <h1 className="item__title">{item.title}</h1>
    </div>
    <h3 className="item__currency">{item.price.currency} </h3>
  </div>
);

export default Item;
